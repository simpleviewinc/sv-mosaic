/// <reference types="react" />
import { MosaicObject } from "../../types";
export interface TypographyGenericProps {
    /** The html element to use. Can be used when you want the style of h1 but the html element h3. */
    as?: string;
    style?: MosaicObject;
    children?: React.ReactNode;
    /** Pass custom classes to the component */
    className?: string;
    title?: string;
    /** Additional passed options are automatically added to the html element. */
    attrs?: MosaicObject;
}
