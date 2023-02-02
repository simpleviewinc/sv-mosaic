import { FieldDefBase } from "@root/components/Field";

export type DateFieldInputSettings = {
	/**
	 * Value to trigger time field
	 */
	showTime?: boolean;
};

export type DateData = Date;

export type FieldDefDate = FieldDefBase<"date", DateFieldInputSettings, DateData>
