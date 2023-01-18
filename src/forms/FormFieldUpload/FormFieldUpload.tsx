import Button from "@root/components/Button";
import { MosaicFieldProps } from "@root/components/Field";
import * as React from "react";
import { memo, useRef, useState } from "react";
import { DragAndDropContainer, DragAndDropSpan, FileInput } from "../shared/styledComponents";
import FileCard from "./FileCard";
import { StyledFileGrid } from "./FormFieldUpload.styled";
import { UploadData, UploadDef } from "./FormFieldUploadTypes";

const FormFieldUpload = (props: MosaicFieldProps<UploadDef, UploadData[]>) => {
	const {
		fieldDef,
		// value
	} = props;
	const {
		limit,
		// onFileAdd,  		onFileDelete,
	} = fieldDef.inputSettings;

	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState<UploadData[]>([]);

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
		const files = e.target.files;

		if (limit !== undefined && limit >= 0 && files.length > limit) {
			alert(`Upload limited to only ${limit} files`);
			return;
		}


	};

	return (
		<>
			<DragAndDropContainer
				isOver={isOver}
				onDragOver={dragOver}
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDrop={fileDrop}
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
						></Button>
					</>
				)}

				<FileInput
					data-testid="input-file-test"
					ref={fileInputField}
					onChange={handleNewFileUpload}
					title=""
					type="file"
					value=""
					multiple={limit !== undefined && limit > 1 ? limit : false}
				/>
			</DragAndDropContainer>
			<FileCard id={0} name={"testing"} uploadProgress={20} onFileDelete={(e) => onFileDelete({id: 0, onError: (message) => alert(message)})} size={"20mb"} />
			{files.length > 0 &&
				<StyledFileGrid>
					{files.map(file => (
						<FileCard key={file.id} {...file} onFileDelete={(e) => onFileDelete({id: file.id, onError: (message) => alert(message)})} />
					))}
				</StyledFileGrid>
			}
		</>
	);
}

export default memo(FormFieldUpload);
