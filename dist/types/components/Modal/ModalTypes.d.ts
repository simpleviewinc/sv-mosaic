import { DialogProps } from '@root/components/Dialog';
export interface ModalProps extends DialogProps {
    /**
     * Used to disable the primary button.
     */
    submitDisabled?: boolean;
    /**
     * Function that will be triggered when the
     * close icon is clicked. This function
     * should set the modal open state to false.
     */
    onClose: () => void;
    /**
     * Used by the primary button since it will trigger the onSubmit of the form
     * The form attribute specifies the form the element belongs to.
     * The value of this attribute must be equal to the id attribute of a <form>
     * element in the same document. https://www.w3schools.com/tags/att_form.asp
     */
    form?: string;
}
