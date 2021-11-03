import { FormNavProps } from '@root/forms/FormNav';
import { ReactNode } from 'react';

export interface TopComponentProps extends FormNavProps {
  /**
   * It should contains the sections
   */
  children?: ReactNode;
  /**
   * Optional description for the current form.
   */
  description?: string;
  /**
   * Mandatory title related with the form.
   */
  formTitle: string;
  /**
   * Callback that will be triggered when clicking
   * on the cancel button.
   */
  handleCancelButton: () => void;
  /**
   * Callback that will be triggered when clicking
   * on the save button.
   */
  handleSaveButton: () => void;
  /**
   * If present, the active checkbox is displayed.
   */
  showActive?: boolean;
  /**
   * If present, the help icon is display with the
   * string defined with this prop.
   */
  tooltipInfo?: string;
}
