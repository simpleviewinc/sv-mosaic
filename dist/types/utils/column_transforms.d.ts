/// <reference types="react" />
export declare function transform_dateFormat(): (dateStr: string) => string;
export declare function transform_get(path: any): (data: any) => any;
interface TransformThumbnailProps {
    width: number;
    height: number;
}
export declare function transform_thumbnail({ width, height }: TransformThumbnailProps): (url: string) => import("react").CElement<{
    src: string;
    className: string;
}, import("react").Component<{
    src: string;
    className: string;
}, any, any>>;
export {};
