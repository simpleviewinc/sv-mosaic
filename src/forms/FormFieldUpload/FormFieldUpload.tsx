import Button from "@root/components/Button";
import { MosaicFieldProps } from "@root/components/Field";
import { MosaicObject } from "@root/types";
import _ from "lodash";
import * as React from "react";
import { memo, useEffect, useRef, useState } from "react";
import { DragAndDropContainer, DragAndDropSpan, FileInput } from "../shared/styledComponents";
import FileCard from "./FileCard";
import { StyledFileGrid } from "./FormFieldUpload.styled";
import { UploadData, UploadDef } from "./FormFieldUploadTypes";

const FormFieldUpload = (props: MosaicFieldProps<UploadDef, UploadData[]>) => {
	const {
		fieldDef,
		value,
		onChange,
	} = props;

	const {
		limit,
		onFileAdd,
		onFileDelete,
	} = fieldDef.inputSettings;

	const [isOver, setIsOver] = useState(false);
	const [pendingFiles, setPendingFiles] = useState({});
	const prevValueRef = useRef([]);

	useEffect(() => {
		prevValueRef.current = value;
	}, [value]);

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

	const onChunkComplete = ({uuid, percent}) => {
		setPendingFiles((prevState) => (
			{
				...prevState,
				[uuid]: {
					...prevState[uuid],
					percent: percent * 100
				}
			}
		));
	};


	const onUploadComplete = async ({uuid, data}) => {
		onChange([...prevValueRef.current, data]);

		setPendingFiles((prevState) => {
			const newPendingFiles = {...prevState};
			delete newPendingFiles[uuid];
			return newPendingFiles;
		});
	};

	const onError = ({uuid, message}) => {
		setPendingFiles((prevState) => (
			{
				...prevState,
				[uuid]: {
					...prevState[uuid],
					error: message
				}
			}
		));
	};

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
		 * 1. Push them into the pending files
		 * 2. Call onFileAdd with each one of them. The arguments
		 * it receives will also need to receive the uuid,
		 * that way we know to which file should we update
		 * the percentage and error message, and which file to
		 * remove from the pending when its upload is complete.
		 */
		setPendingFiles({...pendingFiles, ...transformedFiles});

		for (const [key, file] of Object.entries(transformedFiles) as [string, MosaicObject][]) {
			onFileAdd({
				blob: file?.rawData,
				onChunkComplete: ({percent}) => onChunkComplete({uuid: key, percent}),
				onUploadComplete: (data) => onUploadComplete({uuid: key, data}),
				onError: (message) => onError({uuid: key, message}),
			})
		}
	};

	const handleFileDelete = async ({id}) => {
		await onFileDelete({id});

		const newValues = [...value].filter(file => file.id !== id);
		await onChange(newValues);
	}

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
			 * We'll have 2 FileGrids, 1 for the successfully
			 * uploaded files, and 1 for the pending / errors.
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
							onFileDelete={handleFileDelete}
						/>
					))}
				</StyledFileGrid>
			}
			{pendingFiles && Object.keys(pendingFiles).length > 0 &&
				<StyledFileGrid>
					{Object.entries(pendingFiles).map(([key, file]: [key: string, file: {data: UploadData, error: string, percent: number}]) => {
						return (
							<FileCard
								key={key}
								id={key}
								name={file.data?.name}
								size={file.data?.size}
								url={file.data?.url}
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