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
	Column,
	DragAndDropContainer,
	DragAndDropSpan,
	FileInput,
	ImageCard,
	ImagePropertiesColumn,
	ImgContainer,
	ImgLoaded,
	MenuColumn,
	Row,
	SizeLabel,
	SizeValue,
	StyledCircularProgress,
} from './FormFieldImageUpload.styled';

const ImageUpload = (props: ImageUploadProps): ReactElement => {
	const { updateFilesCb, disabled, options } = props;

	// State variables
	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState({});
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [focusMode, setFocusMode] = useState(false);

	const fileInputField = useRef(null);

	const addNewFiles = (newFiles) => {
		//return newFiles[0];
		for (const file of newFiles) {
			//if (file.size <= maxFileSizeInBytes) {
			//if (!otherProps.multiple) {
			return { file };
			//}
			//files[file.name] = file;
			//}
		}
		return { ...files };
	};

	/**
   *
   */
	const uploadFiles = () => {
		console.log('INPUT: ', fileInputField.current.files);
		fileInputField.current.click();
	};

	/**
   *
   * @param e
   */
	const handleNewFileUpload = (e) => {
		const { files: newFiles } = e.target;

		if (newFiles.length) {
			const updatedFiles = addNewFiles(newFiles);
			setFiles(updatedFiles);
			updateFilesCb(updatedFiles);
		}
	};

	/**
   *
   */
	const handleView = () => {
		setFocusMode(true);
	};

	/**
   *
   */
	const handleSetFocus = () => {
		console.log('Call set focus callback');
	};

	/**
   *
   */
	const removeFile = () => {
		setFiles({});
		updateFilesCb({});
		setIsOver(false);
	};

	/**
   *
   * @param e
   */
	const dragOver = (e) => {
		e.preventDefault();
	};

	/**
   *
   * @param e
   */
	const dragEnter = (e) => {
		e.preventDefault();
		setIsOver(true);
	};

	/**
   *
   * @param e
   */
	const dragLeave = (e) => {
		e.preventDefault();
		setIsOver(false);
	};

	/**
   *
   * @param e
   */
	const fileDrop = (e) => {
		e.preventDefault();
		const droppedFiles = e.dataTransfer.files;

		if (droppedFiles.length) {
			setFiles(droppedFiles);
			updateFilesCb(droppedFiles);
		}
	};

	/**
   *
   * @param param0
   */
	const onImgLoad = ({ target: img }) => {
		setHeight(img.naturalHeight);
		setWidth(img.naturalWidth);
	};

	console.log('RE-RENDER');

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
									<Button
										disabled={disabled}
										buttonType='secondary'
										onClick={uploadFiles}
									>
                    UPLOAD FILES
									</Button>
								</>
							)}

							<FileInput
								accept='image/*'
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
								<Column>
									{Object.keys(files).map((fileName, indx) => {
										const file = files[fileName];
										const isImageFile = file.type.split('/')[0] === 'image';

										return (
											<ImgContainer focusMode={focusMode} key={fileName}>
												{isImageFile && (
													<ImgLoaded
														alt={`${fileName} preview`}
														height={172}
														onLoad={onImgLoad}
														src={URL.createObjectURL(file)}
														width={261}
													/>
												)}
											</ImgContainer>
										);
									})}
								</Column>
								<ImagePropertiesColumn>
									<Row>
										<SizeLabel>Size</SizeLabel>
										<SizeValue>
											{width}x{height}
										</SizeValue>
									</Row>
								</ImagePropertiesColumn>
								{options && (
									<MenuColumn>
										<MenuFormFieldCard options={options} />
									</MenuColumn>
								)}
								<ButtonsContainer>
									{focusMode ? (
										<Button buttonType='blueText' onClick={handleSetFocus}>
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
							<ImageUploadCanvas />
						</>
					)}
				</div>
			) : (
				<DragAndDropContainer>
					<StyledCircularProgress />
					<DragAndDropSpan isOver={isOver}>Loading Image</DragAndDropSpan>
				</DragAndDropContainer>
			)}
		</>
	);
};

export default memo(ImageUpload);
