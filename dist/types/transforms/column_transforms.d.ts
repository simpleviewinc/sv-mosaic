/// <reference types="react" />
/// <reference types="styled-jsx" />
export declare function transform_boolean(): ({ data }: {
    data: boolean;
}) => string;
export declare function transform_dateFormat(): ({ data }: {
    data: Date;
}) => string;
export declare function transform_get(path: any): ({ data }: {
    data: any;
}) => any;
export declare function transform_mapGet(path: any): ({ data }: {
    data: object[];
}) => any;
export declare function transform_join(): ({ data }: {
    data: string[];
}) => string;
interface TransformThumbnailProps {
    width: number;
    height: number;
}
export declare function transform_thumbnail({ width, height }: TransformThumbnailProps): ({ data }: {
    data: string;
}) => import("react").FunctionComponentElement<any>;
export {};
