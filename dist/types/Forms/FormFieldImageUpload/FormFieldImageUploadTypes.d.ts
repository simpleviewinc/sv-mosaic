import { Options } from '@root/forms/MenuFormFieldCard/MenuFormFieldCardTypes';
import { ImageUploadCanvasProps } from './ImageUploadCanvas/ImageUploadCanvas';
export declare type ImageUploadDef = {
    /**
     * Callback executed when the set focus button is clicked.
     */
    handleSetFocus?: () => void;
    /**
     * List of menu options that can be executed by
     * the component.
     */
    options?: Options[];
} & ImageUploadCanvasProps;
/**
 * Describes the structure of the value argument received by
 * the onChange function used by the form.
 */
export declare type ImageUploadValue = {
    imgName?: string;
    size?: number;
    type?: string;
    height?: number;
    width?: number;
    imgCoords?: {
        x: number;
        y: number;
    };
};
