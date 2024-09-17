import type { FieldDefBase } from "@root/components/Field";

export type DateFieldInputSettings = {
	/**
	 * Value to trigger time field
	 */
	showTime?: boolean;
	/**
	 * The minimum date to allow,
	 * defaults to 1st January 1900
	 */
	minDate?: Date;
	/**
	 * The maximum date to allow
	 */
	maxDate?: Date;
	/**
	 * The placeholder
	 */
	placeholder?: string;
	/**
	 * The time to assign to the date if a
	 * time field is not shown. Defaults to
	 * midnight
	 */
	fixedTime?: TimeTuple;
	/**
	 * The time to default to if the value for
	 * this field is undefined. Can be a tuple like
	 * `[hr, min, sec?, ms?]` or a 24hr string like `"HH:MM"`
	 *
	 * Only applicable if `showTime` is true.
	 */
	defaultTime?: TimeString | TimeTuple;
};

export type DateData = {
	date?: Date;
	validDate: boolean;
	time?: Date;
	validTime: boolean;
};

export type FieldDefDate = FieldDefBase<"date", DateFieldInputSettings>;

export type TimeTuple = [number, number, number?, number?];

export type TimeString = `${number}${number}:${number}${number}`;

export type FormFieldDateSkeletonProps = Pick<DateFieldInputSettings, "showTime">;
