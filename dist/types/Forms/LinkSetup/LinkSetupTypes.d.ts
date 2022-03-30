export declare type Link = {
    title: string;
    type: string;
    url: string;
};
export interface LinkSetupProps {
    /**
     * Disables set link, browse and remove button
     */
    disabled?: boolean;
    /**
     * Link object that cointains the information
     * that fills the card.
     */
    value: Link | Record<string, never>;
    inputSettings?: {
        /**
         * Callback executed when the set link button is clicked.
         * It should set the link details.
         */
        handleSetLink: () => void;
        /**
         * Callback executed when the remove button is clicked.
         * This function should empty the link object.
         */
        handleRemove: () => void;
    };
}
