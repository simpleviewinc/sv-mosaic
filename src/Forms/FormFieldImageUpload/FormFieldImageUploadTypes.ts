import { Options } from '@root/forms/ImageVideoDocumentSetUp/ImageVideoDocumentSetUpTypes';

export interface ImageUploadProps {
  /**
   * 
   */
   updateFilesCb: (files: any) => void;
  /**
   * Disable all the buttons.
   */
  disabled?: boolean;
  /**
   * List of menu options that can be executed by the component.
   */
   options?: Options[];
}
