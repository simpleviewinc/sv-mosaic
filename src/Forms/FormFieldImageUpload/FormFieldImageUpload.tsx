import * as React from 'react';
import { memo, ReactElement, useRef, useState } from 'react';
import {
  ButtonsContainer,
  Column,
  DragAndDropContainer,
  DragAndDropSpan,
  FileInput,
  ImageCard,
  ImagePropertiesColumn,
  ImgLoaded,
  MenuColumn,
  Row,
} from './FormFieldImageUpload.styled';
import { ImageUploadProps } from './FormFieldImageUploadTypes';

// Components
import Button from '@root/forms/Button';
import MenuFormFieldCard from '@root/forms/MenuFormFieldCard';

const ImageUpload = (props: ImageUploadProps): ReactElement => {
  const { updateFilesCb, disabled, options } = props;

  // State variables
  const [isOver, setIsOver] = useState(false);
  const [isImageShown, setIsImageShown] = useState(false);
  const [files, setFiles] = useState({});
  const [imgDimensions, setImageDimensions] = useState({
    height: null,
    width: null,
  });

  const fileInputField = useRef(null);
  const imgRef = useRef(null);

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

  /**
   * 
   */
  const uploadFiles = () => {
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
      setIsImageShown(true);
    }
  };

  /**
   * 
   */
  const handleBrowse = () => {};

  /**
   *
   */
  const removeFile = () => {
    setFiles({});
    updateFilesCb({});
    setIsImageShown(false);
    //setIsOver(false);
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
    const files = e.dataTransfer.files;
    console.log('File drop: ', files);

    if (files.length) {
      setFiles(files);
      updateFilesCb(files);
      setIsImageShown(true);
    }
  };

  /**
   *
   * @param param0
   */
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
        <DragAndDropContainer
          isOver={isOver}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          {isOver ? (
            <DragAndDropSpan isOver={isOver}>Release and Drop</DragAndDropSpan>
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
            ref={fileInputField}
            onChange={handleNewFileUpload}
            title=''
            type='file'
            value=''
            multiple={false}
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
          {options && (
            <MenuColumn>
              <MenuFormFieldCard options={options} />
            </MenuColumn>
          )}
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
