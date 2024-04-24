import * as React from "react";
import { memo, ReactElement, useEffect, useRef, useState } from "react";

import { ImageUploadValue, ImageUploadInputSettings } from "./FormFieldImageUploadTypes";
import { MosaicFieldProps } from "@root/components/Field";
import isEmpty from "lodash/isEmpty";

// Styles
import {
	DragAndDropContainer,
	DragAndDropSpan,
	FileInput,
	UploadButton,
} from "./FormFieldImageUpload.styled";

const FormFieldImageUpload = (
	props: MosaicFieldProps<"imageUpload", ImageUploadInputSettings, ImageUploadValue>,
): ReactElement => {
	const { onChange, value, disabled } = props;

	// State variables
	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState({});
	const [height] = useState(null);
	const [width] = useState(null);

	const fileInputField = useRef(null);

	/**
	 * @param newFiles
	 * @returns the added files
	 */
	const addNewImage = (newFiles) => {
		for (const file of newFiles) {
			return { file };
		}
		return { ...files };
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
		const { files: imgFile } = e.target;
		const isImageFile = imgFile[0].type.split("/")[0] === "image";

		if (!isImageFile) {
			return;
		}

		if (imgFile.length) {
			const uploadedImage = addNewImage(imgFile);
			const file = uploadedImage.file;

			setFiles(uploadedImage);

			onChange &&
				onChange({
					...value,
					imgName: file.name,
					size: file.size,
					type: file.type,
				});
		}
	};

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
		const droppedFiles = e.dataTransfer.files;

		const isImageFile = droppedFiles[0]?.type.split("/")[0] === "image";

		if (droppedFiles.length > 1) {
			setIsOver(false);
			return;
		}

		if (!isImageFile) {
			setIsOver(false);
			return;
		}

		if (droppedFiles.length) {
			const uploadedImage = addNewImage(droppedFiles);
			const file = uploadedImage.file;

			setFiles(droppedFiles);

			onChange &&
				onChange({
					...value,
					imgName: file.name,
					size: file.size,
					type: file.type,
					...file,
				});
		}
	};

	/**
	 * Call onChange function once the component is mounted
	 * to update the form state with the image height and width
	 */
	useEffect(() => {
		if (!isEmpty(files) && onChange) {
			onChange({ ...value, height, width });
		}
	}, [files, height, width]);

	return (
		<div>
			{isEmpty(files) ? (
				<DragAndDropContainer
					$isOver={isOver}
					onDragOver={dragOver}
					onDragEnter={dragEnter}
					onDragLeave={dragLeave}
					onDrop={fileDrop}
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
							<UploadButton
								color="gray"
								variant="outlined"
								disabled={disabled}
								label="UPLOAD FILES"
								onClick={uploadFiles}
							/>
						</>
					)}
					<FileInput
						accept="image/*"
						data-testid="input-file-test"
						ref={fileInputField}
						onChange={handleNewFileUpload}
						title=""
						type="file"
						value=""
						disabled={disabled}
					/>
				</DragAndDropContainer>
			) : (
				<>
					<div />
				</>
			)}
		</div>
	);
};

export default memo(FormFieldImageUpload);
