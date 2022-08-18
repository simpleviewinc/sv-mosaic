import { DataViewColumn } from "../components/DataView";
import { MosaicObject } from "../types";
export declare function transformColumn(row: MosaicObject, column: DataViewColumn): unknown;
export declare function transformRows(rows: MosaicObject[], columns: DataViewColumn[]): MosaicObject[];
