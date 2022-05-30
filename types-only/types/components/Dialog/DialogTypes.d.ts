import { ReactNode } from "react";
export interface DialogProps {
    /**
     * Dialog content, usually the included sub-components.
     */
    children: ReactNode;
    /**
     * Required modal title
     */
    dialogTitle: string;
    /**
     * If true, the dialog is shown
     */
    open: boolean;
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
     * button is clicked. This function should set
     * the open dialog state to false
     */
    secondaryAction: () => void;
}
