import Button from "@root/components/Button";
import { MosaicFieldProps } from "@root/components/Field";
import Snackbar from "@root/components/Snackbar";
import uniqueId from "lodash/uniqueId";
import * as React from "react";
import { memo, SyntheticEvent, useEffect, useRef, useState, useMemo } from "react";
import { DragAndDropContainer, DragAndDropSpan, FileInput } from "../../../forms/shared/styledComponents";
import FileCard from "./FileCard";
import { StyledFileList } from "./FormFieldUpload.styled";
import { UploadDataPending, UploadData, UploadFieldInputSettings, isPendingUploadData } from "./FormFieldUploadTypes";
import { FileExtensions } from "@root/utils/classes";
import { pretty } from "@root/utils/formatters";
import { sum } from "@root/utils/math/sum";
import FileCardPending from "./FileCard/FileCardPending";

const FormFieldUpload = (props: MosaicFieldProps<"upload", UploadFieldInputSettings, (UploadData | UploadDataPending)[]>) => {
	const {
		fieldDef,
		value: providedValue,
		onChange,
		disabled,
		methods,
	} = props;

	const { addWait } = methods || {};

	const {
		limit = -1,
		onFileAdd,
		onFileDelete,
		accept,
		maxFileSize,
		maxTotalSize,
	} = fieldDef.inputSettings;

	const [isOver, setIsOver] = useState(false);
	const [snackbar, setSnackbar] = useState<{ open: boolean; text: string }>({
		open: false,
		text: "",
	});

	const fileInputField = useRef(null);
	const prevValueRef = useRef([]);

	const value = useMemo(() => providedValue || [], [providedValue]);
	const currentLength = value.length;
	const isMaxedOut = limit >= 0 && currentLength >= limit;

	const fileExtensions = useMemo(() => new FileExtensions(accept), [accept]);

	const pendingWithoutError = useMemo(() => {
		return value.filter(item => isPendingUploadData(item) && item.error === undefined).length;
	}, [value]);

	useEffect(() => {
		prevValueRef.current = value;
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
		setIsOver(true);
	};

	/**
	 * When the drop zone is leaved the isOver state
	 * is changed to apply styles conditionally.
	 * @param e
	 */
	const dragLeave = (e) => {
		e.preventDefault();
		setIsOver(false);
	};

	/**
	 * When a file is dropped, the file state is set with the
	 * file dropped and the uploadImage callback is triggered.
	 * @param e
	 */
	const fileDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOver(false);
		const droppedFiles = { target: { files: e.dataTransfer.files } };
		handleNewFileUpload(droppedFiles);
	};

	/**
	 *  Triggers a click on the input of type file
	 *  to prompt the file selection.
	 */
	const uploadFiles = () => {
		fileInputField.current.click();
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
					onError: (message) => onError({ uuid: item.id, message }),
				});
			} catch (err) {
				const message = err instanceof Error ? err.message : String(err);
				onError({ uuid: item.id, message });
			}
		}));
	};

	const handleFileDelete = async ({ id }) => {
		await onFileDelete({ id });
		const newValues = value.filter(file => file.id !== id);
		await onChange(newValues);
	};

	// const handleErrorDelete = async ({ id }) => {
	// 	onChange((items) => items.filter(item => item.id !== id));
	// };

	const closeSnackbar = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbar(snackbar => ({ ...snackbar, open: false }));
	};

	return (
		<>
			{!isMaxedOut && (
				<DragAndDropContainer
					$isOver={isOver}
					onDragOver={dragOver}
					onDragEnter={dragEnter}
					onDragLeave={dragLeave}
					onDrop={fileDrop}
					data-testid="drag-and-drop-container"
				>
					{isOver ? (
						<DragAndDropSpan $isOver={isOver}>
							Release and Drop
						</DragAndDropSpan>
					) : (
						<>
							{!disabled && (
								<DragAndDropSpan $isOver={isOver}>
									Drag & Drop files here or
								</DragAndDropSpan>
							)}
							<Button
								color="gray"
								variant="outlined"
								label="UPLOAD FILES"
								onClick={uploadFiles}
								disabled={disabled}
							/>
						</>
					)}
					<FileInput
						data-testid="input-file-test"
						ref={fileInputField}
						onChange={handleNewFileUpload}
						title=""
						type="file"
						value=""
						disabled={disabled}
						multiple={limit < 0 || (limit > 1 && limit - currentLength > 1)}
						accept={fileExtensions.acceptAttr}
					/>
				</DragAndDropContainer>
			)}
			{value.length > 0 && (
				<StyledFileList>
					{value.map(file => isPendingUploadData(file) ? (
						<FileCardPending
							key={file.id}
							{...file}
							onFileDelete={handleFileDelete}
							disabled={disabled}
							percent={file.percent}
							error={file.error}
						/>
					) : (
						<FileCard
							key={file.id}
							{...file}
							onFileDelete={handleFileDelete}
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
