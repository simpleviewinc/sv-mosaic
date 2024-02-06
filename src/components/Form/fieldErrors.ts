import { DATE_FORMAT_FULL_PLACEHOLDER, TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import { FieldError } from "./FormTypes";

export const INVALID_DATE: FieldError = {
	message: `Please enter a valid ${DATE_FORMAT_FULL_PLACEHOLDER} date`,
};

export const INVALID_TIME: FieldError = {
	message: `Please enter a valid ${TIME_FORMAT_FULL_PLACEHOLDER} time`,
};

export const TIME_REQUIRED: FieldError = {
	message: "Please also provide a time",
};
