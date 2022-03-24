export declare type Options = {
    /**
     * Name of the menu option.
     */
    label: string;
    /**
     * Callback function that will be triggered
     * when the option is clicked.
     */
    action: () => void;
};
export interface MenuFormFieldCardProps {
    /**
     * Used for adding or overriding styles.
     */
    className?: string;
    /**
     * List of menu options that can be executed by the component.
     */
    options?: Options[];
    /**
     * Disables the options icon
     */
    disabled?: boolean;
}
