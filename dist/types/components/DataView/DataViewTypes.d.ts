export interface DataViewColumnTransform {
    (data: any): any;
}
export interface DataViewColumn {
    /** The name of the column */
    name: string;
    /** The column from the passed RowData it will display in this column. Defaults to `column.name`. */
    column?: string;
    transforms: DataViewColumnTransform[];
}
export declare type DataViewFilterTypes = "optional" | "primary";
export interface DataViewFilterOnChange {
    (value: any): void;
}
export interface DataViewFilterDef {
    name: string;
    label: string;
    type: DataViewFilterTypes;
    args: object;
    component: any;
    column: string;
    onChange: DataViewFilterOnChange;
}
export interface DataViewFilterProps {
    label: string;
    type: DataViewFilterTypes;
    args: object;
    data: object;
    onRemove: () => void;
}
