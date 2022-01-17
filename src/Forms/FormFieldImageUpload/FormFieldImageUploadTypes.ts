import { Options } from '@root/forms/ImageVideoDocumentSetUp/ImageVideoDocumentSetUpTypes';
import { ImageUploadCanvasProps } from './ImageUploadCanvas/ImageUploadCanvas';

export type ImageUploadDef = {
	/**
		 * Callback used to pass the mouse coordinates to the parent component
		 * when the user clicks at some (x, y) point of the uploaded image.
		 */
	handleImageCoordinates?: (mouseCoordinates: {
		x: number | null;
		y: number | null;
	}) => void;
	/**
	 * Callback executed when the set focus button is clicked.
	 */
	handleSetFocus?: () => void;
	/**
	 * List of menu options that can be executed by
	 * the component.
	 */
	options?: Options[];
	/**
	 * Callback passed from parent component to
	 * set the uploaded image file.
	 */
	uploadImage?: (files) => void;
} & ImageUploadCanvasProps;
