import Button from "@root/components/Button";
import { MosaicFieldProps } from "@root/components/Field";
import * as React from "react";
import { memo, /*useCallback,*/ useRef, useState } from "react";
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
		// onFileDelete,
	} = fieldDef.inputSettings;

	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState([]);

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

	/**
	 * Executed when a new file is uploaded.
	 * @param e
	 */
	const handleNewFileUpload = (e) => {
		const newFiles = Array.from(e.target.files);

		if (limit !== undefined && limit >= 0 && newFiles.length > limit) {
			alert(`Upload limited to only ${limit} files`);
			return;
		}

		/**
		 * Attempt to temporarily store files' metadata
		 * in value.
		 * NOTES FROM CONVERSATION WITH OWEN:
		 * We'll have 2 FileGrids, 1 for the successfully
		 * uploaded files, and 1 for the pending / errors.
		 *
		 * We need to update the "files" state to
		 * match the same format as value with a uuid.
		*/
		// const transformedFiles = files.map(file => (
		// 	{
		// 		[crypto.randomUUID()]:
		// 		{
		// 			data: {
		// 				name: file.name,
		// 				size: file.size + "bytes",
		// 			},
		// 			percent: 0,
		// 			error: undefined,
		// 		}
		// 	}
		// ));

		// const files = {
		// 	"uploadId0": {
		// 		data,
		// 		percent,
		// 		erorr,
		// 	},
		// 	"uploadId2": {
		// 		data,
		// 		percent,
		// 		erorr,
		// 	},
		// }

		/**
		 * After transforming the files we need to do 2 things:
		 * 1. Push them into the pending files (filesState)
		 * 2. Call onFileAdd with each one of them, the arguments
		 * it receives will also need to receive the uuid,
		 * that way we know if we update the percentage, error message,
		 * or we move them from the pending to the uploaded files
		 * (via onChange)
		 */
		// onChange(transformedFiles);

		//We need to add, not just assign,
		// setFiles([...files, newFiles])
		setFiles(newFiles);
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
			{value.length > 0 &&
				<StyledFileGrid>
					{files.map(file => (
						<FileCard
							key={file.name}
							file={file}
							// onFileDelete={handleFileDelete}
							onFileAdd={onFileAdd}
							// handleFileAdded={handleFileAdded}
						/>
					))}
				</StyledFileGrid>
			}
			{files.length > 0 &&
				<StyledFileGrid>
					{files.map(file => (
						<FileCard
							key={file.name}
							file={file}
							// onFileDelete={handleFileDelete}
							onFileAdd={onFileAdd}
							// handleFileAdded={handleFileAdded}
						/>
					))}
				</StyledFileGrid>
			}
		</>
	);
}

export default memo(FormFieldUpload);
