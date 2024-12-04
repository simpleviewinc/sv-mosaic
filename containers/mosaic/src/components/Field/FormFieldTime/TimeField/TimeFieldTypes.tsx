import type { DateFieldInputSettings, FieldDefBase } from "@root/components/Field";

export interface TimeFieldInputSettings {
	/**
	 * The time to default to if the value for
	 * this field is undefined. Can be a tuple like
	 * `[hr, min, sec?, ms?]` or a 24hr string like `"HH:MM"`
	 *
	 * Only applicable if `showTime` is true.
	 */
	defaultTime?: DateFieldInputSettings["defaultTime"];
}

export interface TimeData {
	time: null | Date;
	keyboardInputValue?: string;
}

export type FieldDefTime = FieldDefBase<"time", TimeFieldInputSettings>;

export type TimeTuple = [number, number, number, number];
