import * as React from 'react';
import { memo, ReactElement } from 'react';
import {
  DragAndDropContainer,
  DragAndDropSpan,
} from './FormFieldImageUpload.styled';
import { ImageUploadProps } from './FormFieldImageUploadTypes';

// Components
import Button from '@root/forms/Button';

const ImageUpload = (props: ImageUploadProps): ReactElement => {
  const { disabled } = props;

  const uploadFiles = () => {};

  return (
    <DragAndDropContainer>
      <DragAndDropSpan>Drag & Drop files here or</DragAndDropSpan>
      <Button disabled={disabled} buttonType='secondary' onClick={uploadFiles}>
        UPLOAD FILES
      </Button>
    </DragAndDropContainer>
  );
};

export default memo(ImageUpload);
