import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Dialog content, usually the included sub-components.
   */
  children: ReactNode;
  /**
   * Required modal title
   */
  modalTitle: string;
  /**
   * If true, the dialog is shown
   */
  open: boolean;
  /**
   * Function that will be triggered the close icons
   * is clicked. If this function is not pass as props
   * the icon will not be displayed
   */
  onClose: () => void;
  /**
   * Label that describes the primary button
   */
  primaryBtnLabel?: string;
  /**
   * Function that will be executed when the primary
   * button is clicked
   */
  primaryAction: () => void;
  /**
   * Label that describes the secondary button
   */
  secondaryBtnLabel?: string;
  /**
   * Function that will be executed when the secondary
   * button is clicked
   */
  secondaryAction: () => void;
}
