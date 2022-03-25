import { MosaicMIcon } from '@root/types';
export declare type SnackbarAction = {
    label: string;
    function: () => void;
};
export interface SnackbarProps {
    /**
     * The number of seconds to wait before automatically calling the
     * onClose function. onClose should then set the state of the open prop
     * to hide the Snackbar.
     */
    autoHideDuration?: number;
    /**
     * Message to display
     */
    label: string;
    /**
     * Material UI icon
     */
    leadingIcon?: MosaicMIcon;
    /**
     * Function that will be triggered when the
     * close icon is clicked. This function
     * should set the snackbar open state to false
     */
    onClose: () => void;
    /**
     * If true, the snackbar is shown.
     */
    open: boolean;
    /**
     * Additional action that the snackbar could execute
     */
    action?: SnackbarAction;
}
