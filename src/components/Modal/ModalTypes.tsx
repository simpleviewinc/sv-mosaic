import { FormProps } from "@root/forms/Form/FormTypes";

export interface ModalProps extends FormProps {
	/**
   * If true, the dialog is shown
   */
	open: boolean;
	/**
	 * Function that will be triggered when the 
	 * close icon is clicked. This function 
	 * should set the modal open state to false
	 */
	// onClose: () => void;
}
