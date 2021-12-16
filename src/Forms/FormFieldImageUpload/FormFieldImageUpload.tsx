import * as React from 'react';
import {
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ImageUploadProps } from './FormFieldImageUploadTypes';
import { isEmpty } from 'lodash';

// Components
import Button from '@root/forms/Button';
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
  ImgLoaded,
  MenuColumn,
  Row,
  StyledCircularProgress,
} from './FormFieldImageUpload.styled';

const ImageUpload = (props: ImageUploadProps): ReactElement => {
  const { updateFilesCb, disabled, options } = props;

  // State variables
  const [isOver, setIsOver] = useState(false);
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

  const renderImageDimensions = () => (
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
  );

  /**
   *
   */
  const uploadFiles = () => {
    fileInputField.current.click();
  };

  /* useEffect(() => {
    

    if(!isEmpty(files)) {
      console.log('height ', imgRef?.current?.naturalHeight);
      setImageDimensions({
        height: imgRef.current.naturalHeight,
        width:  imgRef.current.naturalWidth
      })
    }
  }, [files]) */

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
  const handleBrowse = () => {};

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
  const onImgLoad = useCallback(({ target: img }) => {
    console.log('IMAGE LOAD: ', img.offsetHeight, img.offsetWidth);
    /* setImageDimensions({
      height: imgRef.current.naturalHeight,
      width:  imgRef.current.naturalHeight
    }) */
    /* setImageDimensions({
      height: img.offsetHeight,
      width: img.offsetWidth,
    }); */
  }, []);

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
                          {/* <span>{JSON.stringify(imgDimensions)}</span> */}
                          <div>{imgRef.current && renderImageDimensions()}</div>
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
                  <div>{imgRef.current && renderImageDimensions()}</div>
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
