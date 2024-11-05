import { DATE_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import type { FieldError } from "./FormTypes";

export const INVALID_DATE: FieldError = {
	message: `Please enter a valid ${DATE_FORMAT_FULL_PLACEHOLDER} date`,
};

export const INVALID_TIME: FieldError = {
	message: "Please enter a valid 12hr time. Example: 12:00 PM.",
};

export const TIME_REQUIRED: FieldError = {
	message: "Please also provide a time",
};
