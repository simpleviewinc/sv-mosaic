import Button from "@root/components/Button";
import { MosaicFieldProps } from "@root/components/Field";
import { formActions } from "@root/components/Form";
import Snackbar from "@root/components/Snackbar";
import uniqueId from "lodash/uniqueId";
import * as React from "react";
import { memo, SyntheticEvent, useEffect, useRef, useState, useMemo } from "react";
import { DragAndDropContainer, DragAndDropSpan, FileInput } from "../../../forms/shared/styledComponents";
import FileCard from "./FileCard";
import { StyledFileGrid } from "./FormFieldUpload.styled";
import { TransformedFile, UploadData, UploadFieldInputSettings } from "./FormFieldUploadTypes";
import { FileExtensions } from "@root/utils/classes";
import { pretty } from "@root/utils/formatters";
import { MosaicObject } from "@root/types";
import { sum } from "@root/utils/math/sum";

const FormFieldUpload = (props: MosaicFieldProps<"upload", UploadFieldInputSettings, UploadData[]>) => {
	const {
		fieldDef,
		value,
		onChange,
		disabled,
		dispatch,
	} = props;

	const {
		limit = -1,
		onFileAdd,
		onFileDelete,
		accept,
		maxFileSize,
		maxTotalSize,
	} = fieldDef.inputSettings;

	const [isOver, setIsOver] = useState(false);
	const [pendingFiles, setPendingFiles] = useState<MosaicObject<TransformedFile>>({});
	const [snackbar, setSnackbar] = useState<{ open: boolean; text: string }>({
		open: false,
		text: "",
	});
	const fileInputField = useRef(null);
	const prevValueRef = useRef([]);
	const currentLength = Object.keys(pendingFiles).length + (value || []).length;
	const isMaxedOut = limit >= 0 && currentLength >= limit;

	const fileExtensions = useMemo(() => new FileExtensions(accept), [accept]);

	const pendingWithoutError = useMemo(() =>
		Object.values(pendingFiles).filter((pendingFile: { error: string }) => pendingFile.error === undefined).length,
	[pendingFiles],
	);

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
		setPendingFiles((prevState) => (
			{
				...prevState,
				[uuid]: {
					...prevState[uuid],
					percent: percent * 100,
				},
			}
		));
	};

	useEffect(() => {
		if (!dispatch) {
			return;
		}

		if (pendingWithoutError) {
			dispatch(formActions.startBusy({
				name: fieldDef.name,
				value: `${fieldDef.label} is currently uploading ${pendingWithoutError} files(s)`,
			}));
		} else {
			dispatch(formActions.endBusy({
				name: fieldDef.name,
			}));
		}
	}, [pendingWithoutError]);

	const onUploadComplete = async ({ uuid, data }) => {
		onChange(prevValueRef?.current ? [...prevValueRef.current, data] : [data]);

		setPendingFiles((prevState) => {
			const newPendingFiles = { ...prevState };
			delete newPendingFiles[uuid];
			return newPendingFiles;
		});
	};

	const onError = async ({ uuid, message }) => {
		setPendingFiles((prevState) => (
			{
				...prevState,
				[uuid]: {
					...prevState[uuid],
					error: message,
				},
			}
		));
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

		let transformedFiles: { [key: string]: TransformedFile } = {};

		newFiles.forEach(file => {
			const id = uniqueId();

			transformedFiles = {
				...transformedFiles,
				[id]: {
					data: {
						id,
						name: file.name,
						size: file.size,
					},
					percent: 0,
					error: undefined,
					rawData: file,
				},
			};
		});

		const pendingFilesEntries = Object.entries(pendingFiles);
		const transformFilesEntries = Object.entries(transformedFiles);

		if (maxTotalSize) {
			const totalSize = sum([
				...(value || []).map(({ size }) => size),
				...pendingFilesEntries.map(([, item]) => item.rawData.size),
				...transformFilesEntries.map(([, item]) => item.rawData.size),
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
		setPendingFiles({ ...pendingFiles, ...transformedFiles });

		await Promise.all(transformFilesEntries.map(async ([key, file]) => {
			if (!fileExtensions.isValidFileName(file.rawData.name)) {
				onError({ uuid: key, message: `We only allow ${fileExtensions.human} file uploads` });
				return;
			}

			if (maxFileSize && maxFileSize < file.rawData.size) {
				onError({ uuid: key, message: `Individual file upload size should not exceed ${pretty(maxFileSize)}` });
				return;
			}

			try {
				await onFileAdd({
					file: file?.rawData,
					onChunkComplete: ({ percent }) => onChunkComplete({ uuid: key, percent }),
					onUploadComplete: (data) => onUploadComplete({ uuid: key, data }),
					onError: (message) => onError({ uuid: key, message }),
				});
			} catch (err) {
				const message = err instanceof Error ? err.message : String(err);
				onError({ uuid: key, message });
			}
		}));
	};

	const handleFileDelete = async ({ id }) => {
		await onFileDelete({ id });

		const newValues = [...value].filter(file => file.id !== id);
		await onChange(newValues);
	};

	const handleErrorDelete = async ({ id }) => {
		setPendingFiles((prevState) => {
			const newPendingFiles = { ...prevState };
			delete newPendingFiles[id];
			return newPendingFiles;
		});
	};

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
			{/**
			 * We'll have 2 FileGrids, 1 for the successfully
			 * uploaded files, and 1 for the pending / errors.
			 */}
			{value?.length > 0 && (
				<StyledFileGrid>
					{value.map(file => (
						<FileCard
							key={file.id}
							id={file.id}
							name={file.name}
							size={file.size}
							thumbnailUrl={file.thumbnailUrl}
							fileUrl={file.fileUrl}
							downloadUrl={file.downloadUrl}
							onFileDelete={handleFileDelete}
							disabled={disabled}
						/>
					))}
				</StyledFileGrid>
			)}
			{pendingFiles && Object.keys(pendingFiles).length > 0 && !disabled && (
				<StyledFileGrid>
					{Object.entries(pendingFiles).map(([key, file]) => {
						return (
							<FileCard
								key={key}
								id={key}
								name={file.data?.name}
								size={file.data?.size}
								thumbnailUrl={file.data?.thumbnailUrl}
								fileUrl={file.data?.fileUrl}
								downloadUrl={file.data?.downloadUrl}
								error={file.error}
								percent={file.percent}
								onFileDelete={file.error && handleErrorDelete}
							/>
						);
					})}
				</StyledFileGrid>
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
