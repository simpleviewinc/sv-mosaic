/// <reference types="react" />
/// <reference types="styled-jsx" />
export declare function transform_dateFormat(): (dateStr: string) => string;
export declare function transform_get(path: any): (data: any) => any;
export declare function transform_mapGet(path: any): (data: object[]) => any;
export declare function transform_join(): (data: string[]) => string;
interface TransformThumbnailProps {
    width: number;
    height: number;
}
export declare function transform_thumbnail({ width, height }: TransformThumbnailProps): (url: string) => import("react").FunctionComponentElement<any>;
export {};
