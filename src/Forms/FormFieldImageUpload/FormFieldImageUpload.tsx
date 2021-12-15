import * as React from 'react';
import { memo, ReactElement, useRef, useState } from 'react';
import {
	ButtonsContainer,
	DragAndDropContainer,
	DragAndDropSpan,
	FileInput,
	ImageCard,
	ImagePropertiesColumn,
	ImgLoaded,
	Row,
} from './FormFieldImageUpload.styled';
import { ImageUploadProps } from './FormFieldImageUploadTypes';

// Components
import Button from '@root/forms/Button';
import { Column } from '../TopComponent/TopComponent.styled';

const ImageUpload = (props: ImageUploadProps): ReactElement => {
	const { updateFilesCb, disabled, options } = props;

	// State variables
	const [files, setFiles] = useState({});
	const [imgDimensions, setImageDimensions] = useState({
		height: null,
		width: null,
	});
	const [isImageShown, setIsImageShown] = useState(false);

	const fileInputField = useRef(null);
	const imgRef = useRef(null);

	const uploadFiles = () => {
		fileInputField.current.click();
	};

	const addNewFiles = (newFiles) => {
		//return newFiles[0];
		for (const file of newFiles) {
			//if (file.size <= maxFileSizeInBytes) {
			//if (!otherProps.multiple) {
			return { file };
			//}
			files[file.name] = file;
			//}
		}
		return { ...files };
	};

	/* const renderImageDimensions = () => {
    return isImageShown ? (
      <div>
        <p>
          <strong>Height : </strong>
          {imgRef.current.clientHeight}px
        </p>

        <p>
          <strong>Width : </strong>
          {imgRef.current.clientWidth}px
        </p>
      </div>
    ) : null;
  }; */

	const handleNewFileUpload = (e) => {
		const { files: newFiles } = e.target;

		if (newFiles.length) {
			const updatedFiles = addNewFiles(newFiles);
			setFiles(updatedFiles);
			updateFilesCb(updatedFiles);
		}
		setIsImageShown(true);
	};

	const handleBrowse = () => {};

	const removeFile = () => {
		setFiles({});
		updateFilesCb({});
		setIsImageShown(false);
	};

	const onImgLoad = ({ target: img }) => {
		console.log('IMAGE LOAD');

		/* setImageDimensions({
      height: imgRef.current.naturalHeight,
      width:  imgRef.current.naturalHeight
    }) */
		/*  setImageDimensions({
      dimensions: { height: img.offsetHeight, width: img.offsetWidth },
    }); */
	};

	return (
		<>
			{!isImageShown ? (
				<DragAndDropContainer>
					<DragAndDropSpan>Drag & Drop files here or</DragAndDropSpan>
					<Button
						disabled={disabled}
						buttonType='secondary'
						onClick={uploadFiles}
					>
            UPLOAD FILES
					</Button>
					<FileInput
						ref={fileInputField}
						onChange={handleNewFileUpload}
						title=''
						type='file'
						value=''
					/>
				</DragAndDropContainer>
			) : (
				<ImageCard>
					<Column>
						{Object.keys(files).map((fileName, index) => {
							const file = files[fileName];
							const isImageFile = file.type.split('/')[0] === 'image';

							return (
								<div key={fileName}>
									<div>
										{isImageFile && (
											<ImgLoaded
												alt={`${fileName} preview`}
												height={172}
												onLoad={onImgLoad}
												ref={imgRef}
												src={URL.createObjectURL(file)}
												width={261}
											/>
										)}
										<div>
											<span>{file.name}</span>
											<span>{JSON.stringify(imgDimensions)}</span>
										</div>
									</div>
								</div>
							);
						})}
					</Column>
					<ImagePropertiesColumn>
						<Row>
							<span>Size</span>
							<span>{JSON.stringify(files)}</span>
						</Row>
					</ImagePropertiesColumn>
					<ButtonsContainer>
						<Button buttonType='blueText' onClick={handleBrowse}>
              View
						</Button>
						<Button buttonType='redText' onClick={removeFile}>
              Remove
						</Button>
					</ButtonsContainer>
				</ImageCard>
			)}
		</>
	);
};

export default memo(ImageUpload);
