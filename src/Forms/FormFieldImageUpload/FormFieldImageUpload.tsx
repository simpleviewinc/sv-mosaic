import * as React from 'react';
import { memo, ReactElement, useRef, useState } from 'react';

import { ImageUploadProps } from './FormFieldImageUploadTypes';
import { isEmpty } from 'lodash';

// Components
import Button from '@root/forms/Button';
import ImageUploadCanvas from './ImageUploadCanvas';
import MenuFormFieldCard from '@root/forms/MenuFormFieldCard';

// Styles
import {
	ButtonsContainer,
	DragAndDropContainer,
	DragAndDropSpan,
	FileInput,
	ImageCard,
	ImageColumn,
	ImagePropertiesColumn,
	ImgContainer,
	ImgLoaded,
	MenuColumn,
	Row,
	SizeLabel,
	SizeValue,
	StyledCircularProgress,
	UploadButton,
} from './FormFieldImageUpload.styled';

const ImageUpload = (props: ImageUploadProps): ReactElement => {
	const { disabled, handleSetFocus ,mousePosition, uploadImage, options, setImgHeight, setImgWidth } = props;

	// State variables
	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState({});
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [focusMode, setFocusMode] = useState(false);

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

		if (imgFile.length) {
			const uploadedImage = addNewImage(imgFile);
  
			setFiles(uploadedImage);
			uploadImage(uploadedImage);
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
   *  Executes the set focus callback.
   */
	const setFocus = () => {
		handleSetFocus();
	};

	/**
   * When the remove button is click the files
   * uploaded are empty ahd the isOver flagged is
   * set to false to show the upload view.
   */
	const removeFile = () => {
		setFiles({});
		uploadImage({});
		setIsOver(false);
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
		const droppedFiles = e.dataTransfer.files;

		if (droppedFiles.length) {
			setFiles(droppedFiles);
			uploadImage(droppedFiles);
		}
	};

	/**
   * Sets the image dimensions.
   * @param param0
   */
	const onImgLoad = ({ target: img }) => {
		const imageWidth = img.naturalWidth;
		const imageHeight = img.naturalHeight

		setHeight(imageHeight);
		setWidth(imageWidth);
		setImgWidth(imageWidth);
		setImgHeight(imageHeight);
	};

	return (
		<>
			{!disabled ? (
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
										disabled={disabled}
										buttonType='secondary'
										onClick={uploadFiles}
									>
                    UPLOAD FILES
									</UploadButton>
								</>
							)}

							<FileInput
								accept='image/*'
								data-testid='input-file-test'
								ref={fileInputField}
								onChange={handleNewFileUpload}
								title=''
								type='file'
								value=''
							/>
						</DragAndDropContainer>
					) : (
						<>
							<ImageCard>
								<ImageColumn>
									{Object.keys(files).map((fileName) => {
										const file = files[fileName];

										return (
											<ImgContainer focusMode={focusMode} key={fileName}>		
												<ImgLoaded
													alt={`${fileName} preview`}
													height={172}
													onLoad={onImgLoad}
													src={URL.createObjectURL(file)}
													width={261}
												/>
											</ImgContainer>
										);
									})}
									{focusMode && <ImageUploadCanvas mousePosition={mousePosition}/>}
								</ImageColumn>
								<ImagePropertiesColumn>
									<Row>
										<SizeLabel>Size</SizeLabel>
										<SizeValue>
											{width}x{height}
										</SizeValue>
									</Row>
								</ImagePropertiesColumn>
								{options && (
									<MenuColumn data-testid='menu-container-test'>
										<MenuFormFieldCard options={options} />
									</MenuColumn>
								)}
								<ButtonsContainer>
									{focusMode ? (
										<Button buttonType='blueText' onClick={setFocus}>
                      Set Focus
										</Button>
									) : (
										<Button buttonType='blueText' onClick={handleView}>
                      View
										</Button>
									)}
									<Button buttonType='redText' onClick={removeFile}>
                    Remove
									</Button>
								</ButtonsContainer>
							</ImageCard>
						</>
					)}
				</div>
			) : (
				<DragAndDropContainer>
					<StyledCircularProgress data-testid='circular-progress-test'/>
					<DragAndDropSpan isOver={isOver}>Loading Image</DragAndDropSpan>
				</DragAndDropContainer>
			)}
		</>
	);
};

export default memo(ImageUpload);
