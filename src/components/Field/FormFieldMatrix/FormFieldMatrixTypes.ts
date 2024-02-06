import { ButtonProps } from "@root/components/Button";
import { DataViewProps } from "@root/components/DataView";
import { FieldDefBase } from "@root/components/Field";

export type MatrixInputSettings = {
	/**
	 * Data view configurations.
	 */
	dataView: DataViewProps;
	/**
	 * List of buttons that will be display above the data view.
	 */
	buttons: ButtonProps[];
};

export type MatrixData = DataViewProps["data"];

export type FieldDefMatrix = FieldDefBase<"matrix", MatrixInputSettings, MatrixData>;
