import { FormProps } from "@root/forms/Form/FormTypes";
export interface ModalProps extends FormProps {
    /**
   * If true, the dialog is shown
   */
    open: boolean;
}
