import * as React from "react";
import { memo, SyntheticEvent, useCallback, useEffect, useState, useMemo, useRef, useId } from "react";
import Button from "@root/components/Button";
import { MosaicFieldProps } from "@root/components/Field";
import Snackbar from "@root/components/Snackbar";
import uniqueId from "lodash/uniqueId";
import { DragAndDropContainer, DragAndDropSpan, FileInput } from "../../../forms/shared/styledComponents";
import FileCard from "./FileCard";
import { StyledFileList } from "./FormFieldUpload.styled";
import { UploadDataPending, UploadData, UploadFieldInputSettings, isPendingUploadData } from "./FormFieldUploadTypes";
import { FileExtensions } from "@root/utils/classes";
import { pretty } from "@root/utils/formatters";
import { sum } from "@root/utils/math/sum";
import FileCardPending from "./FileCard/FileCardPending";
import { FormFieldUploadSkeleton } from "./FormFieldUploadSkeleton";

const FormFieldUpload = (props: MosaicFieldProps<"upload", UploadFieldInputSettings, (UploadData | UploadDataPending)[]>) => {
	const {
		fieldDef,
		value: providedValue,
		onChange,
		disabled,
		methods,
		id: providedId,
		skeleton,
	} = props;

	const { addWait } = methods || {};
	const generatedId = useId();
	const id = providedId || generatedId;
	const inputRef = useRef<HTMLInputElement | undefined>();

	const {
		limit = -1,
		onFileAdd,
		onFileDelete,
		accept,
		maxFileSize,
		maxTotalSize,
	} = fieldDef.inputSettings;

	/**
	 * Because dragEnter and dragLeave does not work the way you'd
	 * expect (unlike like mouseEnter and mouseLeave, it seems to
	 * fire for children as well as the target), we keep a count of
	 * elements that are dragged over. More than 0 means the target
	 * is dragged over.
	 */
	const [isOver, setIsOver] = useState<number>(0);

	const [snackbar, setSnackbar] = useState<{ open: boolean; text: string }>({
		open: false,
		text: "",
	});

	const value = useMemo(() => providedValue || [], [providedValue]);
	const currentLength = value.length;
	const isMaxedOut = limit >= 0 && currentLength >= limit;

	const fileExtensions = useMemo(() => new FileExtensions(accept), [accept]);

	const pendingWithoutError = useMemo(() => {
		return value.filter(item => isPendingUploadData(item) && item.error === undefined).length;
	}, [value]);

	/**
	 * Executed when a file that's being
	 * dragged is over the drop zone.
	 * @param e
	 */
	const dragOver = (e) => {
		e.preventDefault();
	};

	/**
	 * When a file that's being dragged enters into
	 * the drop zone the isOver state is changed
	 * to apply styles conditionally.
	 * @param e
	 */
	const dragEnter = (e) => {
		e.preventDefault();
		setIsOver((over) => over + 1);
	};

	/**
	 * When the drop zone is leaved the isOver state
	 * is changed to apply styles conditionally.
	 * @param e
	 */
	const dragLeave = (e) => {
		e.preventDefault();
		setIsOver((over) => over - 1);
	};

	/**
	 * When a file is dropped, the file state is set with the
	 * file dropped and the uploadImage callback is triggered.
	 * @param e
	 */
	const fileDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOver(0);
		const droppedFiles = { target: { files: e.dataTransfer.files } };
		handleNewFileUpload(droppedFiles);
	};

	const onChunkComplete = async ({ uuid, percent }) => {
		onChange((items = []) => items.map(item => uuid === item.id ? ({
			...item,
			percent: percent * 100,
		}) : item));
	};

	useEffect(() => {
		if (!addWait) {
			return;
		}

		if (!pendingWithoutError) {
			return;
		}

		const { remove } = addWait({
			name: `${fieldDef.name}/uploading`,
			message: `${fieldDef.label} is currently uploading ${pendingWithoutError} files(s)`,
		});

		return remove;
	}, [
		fieldDef.label,
		fieldDef.name,
		addWait,
		pendingWithoutError,
	]);

	const onUploadComplete = async ({ uuid, data }) => {
		onChange((items = []) => items.map(item => uuid === item.id ? ({
			...data,
		}) : item));
	};

	const onError = async ({ uuid, message }) => {
		onChange((items = []) => items.map(item => uuid === item.id ? ({
			...item,
			error: message,
		}) : item));
	};

	/**
	 * Executed when a new file is uploaded.
	 * @param e
	 */
	const handleNewFileUpload = async (e) => {
		const newFiles: File[] = Array.from(e.target.files);

		if (limit >= 0 && currentLength + newFiles.length > limit) {
			setSnackbar({
				open: true,
				text: `Upload limited to only ${limit} files.`,
			});
			return;
		}

		const uploadQueueItems = newFiles.map<UploadDataPending>(file => ({
			id: uniqueId(),
			name: file.name,
			size: file.size,
			percent: 0,
			error: undefined,
			rawData: file,
			isPending: true,
		}));

		if (maxTotalSize) {
			const totalSize = sum([
				...value.map(({ size }) => size),
				...uploadQueueItems.map((item) => item.rawData.size),
			]);

			if (maxTotalSize < totalSize) {
				setSnackbar({
					open: true,
					text: `Maximum cumulative file size is ${pretty(maxTotalSize)}`,
				});

				return;
			}
		}

		/**
		 * After transforming the files we need to do 2 things:
		 * 1. Push them into the pending files
		 * 2. Call onFileAdd with each one of them. The arguments
		 * it receives will also need to receive the uuid,
		 * that way we know to which file should we update
		 * the percentage and error message, and which file to
		 * remove from the pending when its upload is complete.
		 */
		onChange((items = []) => ([...items, ...uploadQueueItems]));

		await Promise.all(uploadQueueItems.map(async (item) => {
			if (!fileExtensions.isValidFileName(item.rawData.name)) {
				onError({ uuid: item.id, message: `We only allow ${fileExtensions.human} file uploads` });
				return;
			}

			if (maxFileSize && maxFileSize < item.rawData.size) {
				onError({ uuid: item.id, message: `Individual file upload size should not exceed ${pretty(maxFileSize)}` });
				return;
			}

			try {
				await onFileAdd({
					file: item?.rawData,
					onChunkComplete: ({ percent }) => onChunkComplete({ uuid: item.id, percent }),
					onUploadComplete: (data) => onUploadComplete({ uuid: item.id, data }),
				});
			} catch (err) {
				const message = err instanceof Error ? err.message : String(err);
				onError({ uuid: item.id, message });
			}
		}));
	};

	const handleFileDelete = async (id: UploadData["id"], isPending = false) => {
		onChange((items = []) => items.map(item => item.id === id ? ({
			...item,
			isDeleting: true,
		}) : item));

		if (!isPending) {
			await onFileDelete({ id });
		}

		onChange((items = []) => items.filter(item => item.id !== id));
	};

	const handleUploadButtonClick = useCallback(() => {
		if (!inputRef.current) {
			return;
		}

		inputRef.current.click();
	}, []);

	const closeSnackbar = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbar(snackbar => ({ ...snackbar, open: false }));
	};

	if (skeleton) {
		return (
			<FormFieldUploadSkeleton />
		);
	}

	return (
		<>
			{!isMaxedOut && (
				<DragAndDropContainer
					$isOver={Boolean(isOver)}
					onDragOver={dragOver}
					onDragEnter={dragEnter}
					onDragLeave={dragLeave}
					onDrop={fileDrop}
					data-testid="drag-and-drop-container"
					htmlFor={`${id}-input`}
				>
					{isOver ? (
						<DragAndDropSpan $isOver={Boolean(isOver)}>
							Release and Drop
						</DragAndDropSpan>
					) : (
						<>
							{!disabled && (
								<DragAndDropSpan $isOver={Boolean(isOver)}>
									Drag & Drop files here or
								</DragAndDropSpan>
							)}
							<Button
								color="gray"
								variant="outlined"
								label="UPLOAD FILES"
								disabled={disabled}
								onClick={handleUploadButtonClick}
							/>
						</>
					)}
					<FileInput
						data-testid="input-file-test"
						onChange={handleNewFileUpload}
						title=""
						type="file"
						value=""
						disabled={disabled}
						multiple={limit < 0 || (limit > 1 && limit - currentLength > 1)}
						accept={fileExtensions.acceptAttr}
						id={`${id}-input`}
						ref={inputRef}
					/>
				</DragAndDropContainer>
			)}
			{value.length > 0 && (
				<StyledFileList>
					{value.map(file => isPendingUploadData(file) ? (
						<FileCardPending
							key={file.id}
							{...file}
							onFileDelete={({ id }) => handleFileDelete(id, true)}
							disabled={disabled}
							percent={file.percent}
							error={file.error}
						/>
					) : (
						<FileCard
							key={file.id}
							{...file}
							onFileDelete={({ id }) => handleFileDelete(id)}
							disabled={disabled}
						/>
					))}
				</StyledFileList>
			)}
			<Snackbar
				autoHideDuration={6000}
				label={snackbar.text}
				open={snackbar.open}
				onClose={closeSnackbar}
			/>
		</>
	);
};

export default memo(FormFieldUpload);
