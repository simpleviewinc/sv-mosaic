import { FieldDefBase } from "@root/components/Field";

export type DateFieldInputSettings = {
	/**
	 * Value to trigger time field
	 */
	showTime?: boolean;
	/**
	 * The minimum date to allow,
	 * defaults to 1st January 1900
	 */
	minDate?: Date
};

export type DateData = Date;

export type FieldDefDate = FieldDefBase<"date", DateFieldInputSettings, DateData>
