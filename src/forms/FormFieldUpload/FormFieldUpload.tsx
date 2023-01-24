import Button from "@root/components/Button";
import { MosaicFieldProps } from "@root/components/Field";
import _ from "lodash";
import * as React from "react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { DragAndDropContainer, DragAndDropSpan, FileInput } from "../shared/styledComponents";
import FileCard from "./FileCard";
import { StyledFileGrid } from "./FormFieldUpload.styled";
import { UploadData, UploadDef } from "./FormFieldUploadTypes";

const FormFieldUpload = (props: MosaicFieldProps<UploadDef, UploadData[]>) => {
	const {
		fieldDef,
		value,
		// onChange,
	} = props;

	const {
		limit,
		onFileAdd,
		onFileDelete,
	} = fieldDef.inputSettings;

	const [isOver, setIsOver] = useState(false);
	const [pendingFiles, setPendingFiles] = useState({});
	const [uploadedFiles, setUploadedFiles] = useState({});
	const [chunkPercent, setChunkPercent] = useState({});

	const fileInputField = useRef(null);

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
	};

	/**
	 *  Triggers a click on the input of type file
	 *  to prompt the file selection.
	 */
	const uploadFiles = () => {
		fileInputField.current.click();
	};

	useEffect(() => {
		const newPendingFiles = {...pendingFiles};

		for (const [key, value] of Object.entries(chunkPercent)) {
			newPendingFiles[key] = {
				...newPendingFiles[key],
				percent: value
			}
		}

		console.log(newPendingFiles);

		setPendingFiles(newPendingFiles);
	}, [chunkPercent]);

	const onChunkComplete = ({uuid, percent}) => {
		// const newPendingFiles = {...pendingFiles};
		// newPendingFiles[uuid] = {
		// 	...newPendingFiles[uuid],
		// 	percent: percent * 100,
		// };

		// console.log("chunkComplete", uuid, newPendingFiles);

		// setPendingFiles(newPendingFiles);
		const newChunkPercent = {...chunkPercent};
		newChunkPercent[uuid] = percent;
		setChunkPercent(newChunkPercent);
	};

	const onUploadComplete = ({uuid, data}) => {
		// const newFiles = value !== undefined ? [...value] : [];
		// newFiles.push(data);
		// onChange(newFiles);

		// const newPendingFiles = {...pendingFiles};
		// delete newPendingFiles[uuid];
		// setPendingFiles(newPendingFiles);
	};

	const onError = ({uuid, message}) => {
		// const newPendingFiles = {...pendingFiles};
		// newPendingFiles[uuid] = {
		// 	...newPendingFiles[uuid],
		// 	error: message,
		// };

		// setPendingFiles(newPendingFiles);
	};

	useEffect(() => {
		const testing = async () => {
			// await Object.entries(pendingFiles).forEach(async ([key, file]: [key: string, file: UploadData & { rawData: File }]) => {
			// 	await onFileAdd({
			// 		blob: file?.rawData,
			// 		onChunkComplete: ({percent}) => onChunkComplete({uuid: key, percent}),
			// 		onUploadComplete: (data) => onUploadComplete({uuid: key, data}),
			// 		onError: (message) => onError({uuid: key, message}),
			// 	})
			// });
			for (const [key, file] of Object.entries(pendingFiles)) {
				await onFileAdd({
					blob: file?.rawData,
					onChunkComplete: async ({percent}) => await onChunkComplete({uuid: key, percent}),
					onUploadComplete: async (data) => await onUploadComplete({uuid: key, data}),
					onError: async (message) => await onError({uuid: key, message}),
				})
			}
		}

		testing();
	}, [pendingFiles]);

	/**
	 * Executed when a new file is uploaded.
	 * @param e
	 */
	const handleNewFileUpload = async (e) => {
		const newFiles: File[] = Array.from(e.target.files);

		if (limit !== undefined && limit >= 0 && newFiles.length > limit) {
			alert(`Upload limited to only ${limit} files`);
			return;
		}

		/**
		 * NOTES FROM CONVERSATION WITH OWEN:
		 * We'll have 2 FileGrids, 1 for the successfully
		 * uploaded files, and 1 for the pending / errors.
		 *
		 * We need to update the "files" state to
		 * match the same format as value with a uuid.
		*/
		// const transformedFiles = newFiles.map(file => (
		// 	{
		// 		[_.uniqueId()]: {
		// 			data: {
		// 				name: file.name,
		// 				size: file.size + "bytes",
		// 			},
		// 			percent: 0,
		// 			error: undefined,
		// 			rawData: file,
		// 		}
		// 	}
		// ));

		let transformedFiles = {};

		newFiles.forEach(file => {
			transformedFiles = {
				...transformedFiles,
				[_.uniqueId()]: {
					data: {
						name: file.name,
						size: file.size + " bytes",
					},
					percent: 0,
					error: undefined,
					rawData: file,
				}
			}
		});

		/**
		 * After transforming the files we need to do 2 things:
		 * 1. Push them into the pending files (filesState)
		 * 2. Call onFileAdd with each one of them, the arguments
		 * it receives will also need to receive the uuid,
		 * that way we know if we update the percentage, error message,
		 * or we move them from the pending to the uploaded files
		 * (via onChange)
		 */
		setUploadedFiles({...uploadedFiles, ...transformedFiles});
		setPendingFiles({...pendingFiles, ...transformedFiles});

		// for (const [key, file] of Object.entries(transformedFiles)) {
		// 	await onFileAdd({
		// 		blob: file?.rawData,
		// 		onChunkComplete: async ({percent}) => await onChunkComplete({uuid: key, percent}),
		// 		onUploadComplete: async (data) => await onUploadComplete({uuid: key, data}),
		// 		onError: async (message) => await onError({uuid: key, message}),
		// 	})
		// }

		// Object.entries(pendingFiles).forEach(async ([key, file]: [key: string, file: UploadData & { rawData: File }]) => {
		// 	await onFileAdd({
		// 		blob: file?.rawData,
		// 		onChunkComplete: (percent) => onChunkComplete({uuid: key, percent}),
		// 		onUploadComplete: (data) => onUploadComplete({uuid: key, data}),
		// 		onError: (message) => onError({uuid: key, message}),
		// 	})
		// });
	};

	/**
	 * Attempt to store only successfully loaded
	 * files in value.
	 */
	// const handleFileAdded = useCallback((data) => {
	// 	let newValues = [data];
	// 	console.log("file added ", value, newValues);
	// 	if (value) {
	// 		newValues = [...value, data];
	// 	}
	// 	onChange(newValues);

	// }, [value]);

	/**
	 * Having value and files there's a mismatch in ids,
	 * since we're using files to render, but value to delete
	 * ids could be totally different because they might be
	 * processed in a DB before returing to us.
	 */
	// const handleFileDelete = async ({id}) => {
	// 	await onFileDelete(id);

	// 	const newValues = [...value].filter(file => file.id !== id);
	// 	setFiles(newValues);
	// 	await onChange(newValues);
	// }

	return (
		<>
			<DragAndDropContainer
				isOver={isOver}
				onDragOver={dragOver}
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDrop={fileDrop}
				width={"620px"}
				data-testid="drag-and-drop-container"
			>
				{isOver ? (
					<DragAndDropSpan isOver={isOver}>
						Release and Drop
					</DragAndDropSpan>
				) : (
					<>
						<DragAndDropSpan isOver={isOver}>
							Drag & Drop files here or
						</DragAndDropSpan>
						<Button
							color="gray"
							variant="outlined"
							disabled={fieldDef?.disabled}
							label="UPLOAD FILES"
							onClick={uploadFiles}
							muiAttrs={{disableRipple: true}}
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
					multiple={limit === undefined || limit > 1 ? true : false}
				/>
			</DragAndDropContainer>
			{/**
			 * NOTES FROM CONVERSATION WITH OWEN:
			 * We'll have 2 FileGrids, 1 for the successfully
			 * uploaded files, and 1 for the pending / errors.
			 *
			 * We'll also need to update the "files" state to
			 * match the same format as value with a uuid.
			 */}
			{value?.length > 0 &&
				<StyledFileGrid>
					{value.map(file => (
						<FileCard
							key={file.id}
							id={file.id}
							name={file.name}
							size={file.size}
							url={file.url}
							onFileDelete={onFileDelete}
						/>
					))}
				</StyledFileGrid>
			}
			{pendingFiles && Object.keys(pendingFiles).length > 0 &&
				<StyledFileGrid>
					{Object.entries(pendingFiles).map(([key, file]: [key: string, file: {data: UploadData, error: string, percent: number}]) => {
						// console.log(file);
						return (
							<FileCard
								key={key}
								id={key}
								name={file.data?.name}
								size={file.data?.size}
								url={file.data?.url}
								onFileDelete={onFileDelete}
								error={file.error}
								percent={file.percent}
							/>
						)
					})}
				</StyledFileGrid>
			}
		</>
	);
}

export default memo(FormFieldUpload);
