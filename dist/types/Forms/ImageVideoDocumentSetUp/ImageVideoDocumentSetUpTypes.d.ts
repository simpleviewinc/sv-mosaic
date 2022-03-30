export declare type AssetProperties = {
    /**
     * Name of the asset property.
     */
    label: string;
    /**
     * Value of the asset property.
     */
    value: string;
};
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
export interface ImageVideoDocumentSetUpProps {
    /**
    * Meaningful name related to the field.
    */
    label?: string;
    /**
         * Array of properties that an asset like an image,
         * document or video may contain.
         */
    value: AssetProperties[];
    inputSettings?: {
        /**
         * Callback executed when the remove button is clicked.
         * This function should empty the assetProperties array
         * to go the set up stage.
         */
        handleRemove?: () => void;
        /**
         * Callback executed when the set document button is clicked.
         * It should fill the assetProperties array with the document
         * properties.
         */
        handleSetDocument?: () => void;
        /**
         * Callback executed when the set document button is clicked.
         * It should fill the assetProperties array with the document
         * properties.
         */
        handleSetImage: () => void;
        /**
         * Callback executed when the set document button is clicked.
         * It should fill the assetProperties array with the document
         * properties.
         */
        handleSetVideo?: () => void;
        /**
         * List of menu options that can be executed by the component.
         */
        options?: Options[];
        /**
         * If the asset contains an image, its source should be passed
         * via this src prop.
         */
        src?: string;
    };
}
