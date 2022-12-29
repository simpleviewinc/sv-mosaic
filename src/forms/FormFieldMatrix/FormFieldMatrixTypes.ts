import { ButtonProps } from "@root/components/Button";
import { DataViewProps } from "@root/components/DataView";

export type MatrixDef = {
	/**
	 * Data view configurations.
	 */
	dataView: DataViewProps;
	/**
	 * List of buttons that will be display above the data view.
	 */
	buttons: ButtonProps[];
};
