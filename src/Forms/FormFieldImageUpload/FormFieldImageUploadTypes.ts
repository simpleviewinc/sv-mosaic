import { Options } from '@root/forms/ImageVideoDocumentSetUp/ImageVideoDocumentSetUpTypes';

export interface ImageUploadProps {
  /**
   * Disable all the buttons.
   */
  disabled?: boolean;
  /**
   * Callback executed when the set focus button is clicked.
   */
  handleSetFocus?: () => void;
  /**
   * Callback used for passing mouse coordinates to the parent component.
   */
  mousePosition?: (mouseCoordinates: {
    x: number | null;
    y: number | null;
  }) => void;
  /**
   * List of menu options that can be executed by
   * the component.
   */
  options?: Options[];
  /**
   * Callback passed from parent component to
   * set the uploaded image height.
   */
  setImgHeight?: (imageHeight: number) => void;
  /**
   * Callback passed from parent component to
   * set the uploaded image width.
   */
  setImgWidth?: (imageWidth: number) => void;
  /**
   * Callback passed from parent component to
   * set the uploaded image file.
   */
  uploadImage?: (files) => void;
}

export interface ImageUploadCanvasProps {
  /**
   * Callback used for passing mouse coordinates to the parent component.
   */
  mousePosition?: (mouseCoordinates: {
    x: number | null;
    y: number | null;
  }) => void;
}
