import { DialogProps } from '@root/components/Dialog';

export interface ModalProps extends DialogProps {
  /**
   * Function that will be triggered when the 
   * close icon is clicked. This function 
   * should set the modal open state to false
   */
  onClose: () => void;
}
