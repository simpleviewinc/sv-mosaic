import { ReactElement } from "react";
export interface ImageUploadCanvasProps {
    /**
     * Callback used for passing mouse coordinates to the parent component.
     */
    mousePosition?: (mouseCoordinates: {
        x: number | null;
        y: number | null;
    }) => void;
}
declare const ImageUploadCanvas: (props: ImageUploadCanvasProps) => ReactElement;
export default ImageUploadCanvas;
