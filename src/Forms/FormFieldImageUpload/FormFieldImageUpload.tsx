import * as React from "react";
import { memo, ReactElement, useEffect, useRef, useState } from "react";

import { ImageUploadDef, ImageUploadValue } from "./FormFieldImageUploadTypes";
import { MosaicFieldProps } from "@root/components/Field";
import { isEmpty } from "lodash";

// Components
import Button from "@root/components/Button";
import ImageUploadCanvas from "./ImageUploadCanvas";
import MenuFormFieldCard from "@root/forms/MenuFormFieldCard";

// Styles
import {
	ButtonsContainer,
	DragAndDropContainer,
	DragAndDropSpan,
	FileInput,
	ImageCard,
	ImageColumn,
	ImagePropertiesColumn,
	ImgLoaded,
	MenuColumn,
	Row,
	SetFocusSpan,
	SizeLabel,
	SizeValue,
	StyledCircularProgress,
	UploadButton,
} from "./FormFieldImageUpload.styled";

const FormFieldImageUpload = (
	props: MosaicFieldProps<ImageUploadDef, ImageUploadValue>
): ReactElement => {
	const { fieldDef, onChange, value } = props;

	// State variables
	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState({});
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [focusMode, setFocusMode] = useState(false);
	const [imageCoordinates, setImageCoordinates] = useState({
		x: null,
		y: null,
	});

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
	 *  Sets focus mode to true to display the canvas
	 *  element and the set focus button.
	 */
	const handleView = () => {
		setFocusMode(true);
	};

	/**
	 *  Executes the set focus callback and passes
	 *  the image coordinates to the parent component.
	 */
	const setFocus = () => {
		onChange && onChange({ ...value, imgCoords: imageCoordinates });
		fieldDef?.inputSettings?.handleSetFocus &&
      fieldDef?.inputSettings?.handleSetFocus();
		setFocusMode(false);
	};

	/**
	 * Sets the image coordinates when the user
	 * clicks on the canvas component.
	 * @param mouseCoordinates
	 */
	const mousePosition = (mouseCoordinates) => {
		setImageCoordinates(mouseCoordinates);
	};

	/**
	 * When the remove button is click the files
	 * uploaded are empty ahd the isOver flagged is
	 * set to false to show the upload view.
	 */
	const removeFile = () => {
		setFiles({});
		onChange(undefined);
		setIsOver(false);
		setFocusMode(false);
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
	 * Sets the image dimensions.
	 * @param param0
	 */
	const onImgLoad = ({ target: img }) => {
		const imageWidth = img.naturalWidth;
		const imageHeight = img.naturalHeight;

		setHeight(imageHeight);
		setWidth(imageWidth);
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
		<>
			{!fieldDef?.disabled ? (
				<div>
					{isEmpty(files) ? (
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
									<UploadButton
										color="gray"
										variant="outlined"
										disabled={fieldDef?.disabled}
										label="UPLOAD FILES"
										buttonType="secondary"
										onClick={uploadFiles}
										muiAttrs={{disableRipple: true}}
									></UploadButton>
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
							/>
						</DragAndDropContainer>
					) : (
						<>
							<ImageCard>
								<ImageColumn>
									{Object.keys(files).map((fileName) => {
										const file = files[fileName];

										return (
											<ImgLoaded
												key={fileName}
												alt={`${fileName} preview`}
												height={168}
												onLoad={onImgLoad}
												src={URL.createObjectURL(file)}
												width={257}
											/>
										);
									})}
									{focusMode && (
										<ImageUploadCanvas mousePosition={mousePosition} />
									)}
								</ImageColumn>
								{focusMode ? (
									<SetFocusSpan>
										Click on the image to set the focus point
									</SetFocusSpan>
								) : (
									<ImagePropertiesColumn>
										<Row>
											<SizeLabel>Size</SizeLabel>
											<SizeValue>
												{width}x{height}
											</SizeValue>
										</Row>
									</ImagePropertiesColumn>
								)}
								{fieldDef?.inputSettings?.options && !focusMode && (
									<MenuColumn data-testid="menu-container-test">
										<MenuFormFieldCard
											options={fieldDef?.inputSettings?.options}
										/>
									</MenuColumn>
								)}
								<ButtonsContainer>
									{focusMode ? (
										<Button
											color="teal"
											variant="text"
											label="Set Focus"
											onClick={setFocus}
											muiAttrs={{ disableRipple: true }}
										></Button>
									) : (
										<Button
											color="teal"
											variant="text"
											label="View"
											onClick={handleView}
											muiAttrs={{ disableRipple: true }}
										></Button>
									)}
									<Button
										color="red"
										variant="text"
										label="Remove"
										onClick={removeFile}
										muiAttrs={{ disableRipple: true }}
									></Button>
								</ButtonsContainer>
							</ImageCard>
						</>
					)}
				</div>
			) : (
				<DragAndDropContainer>
					<StyledCircularProgress data-testid="circular-progress-test" />
					<DragAndDropSpan isOver={isOver}>Loading Image</DragAndDropSpan>
				</DragAndDropContainer>
			)}
		</>
	);
};

export default memo(FormFieldImageUpload);
