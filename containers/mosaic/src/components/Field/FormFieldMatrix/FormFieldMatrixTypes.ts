import type { ButtonProps } from "@root/components/Button";
import type { DataViewProps } from "@root/components/DataView";
import type { FieldDefBase } from "@root/components/Field";

export interface MatrixInputSettings {
	/**
	 * Data view configurations.
	 */
	dataView: DataViewProps;
	/**
	 * List of buttons that will be display above the data view.
	 */
	buttons: ButtonProps[];
}

export type MatrixData = DataViewProps["data"];

export type FieldDefMatrix = FieldDefBase<"matrix", MatrixInputSettings>;
