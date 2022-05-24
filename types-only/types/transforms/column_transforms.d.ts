import { MosaicObject } from "../types";
import { DataViewColumnTransform } from "../components/DataView";
export declare function transform_boolean(): DataViewColumnTransform<boolean>;
export declare function transform_dateFormat(): DataViewColumnTransform<Date>;
export declare function transform_get(path: string | string[]): DataViewColumnTransform<MosaicObject>;
export declare function transform_mapGet(path: string | string[]): DataViewColumnTransform<MosaicObject[]>;
export declare function transform_join(): DataViewColumnTransform<string[]>;
interface TransformThumbnailProps {
    width: number;
    height: number;
}
export declare function transform_thumbnail({ width, height }: TransformThumbnailProps): DataViewColumnTransform<string>;
export {};
