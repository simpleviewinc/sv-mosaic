import { FormStable, FormState } from "./types";

export const initialState: FormState = {
	internalData: {},
	data: {},
	errors: {},
	disabled: false,
	touched: {},
	busyFields: {},
	submitWarning: undefined,
	waits: [],
};

export const initialStable: FormStable = {
	...initialState,
	initialData: {},
	fields: {},
	mounted: {},
	internalValidators: {},
	hasBlurred: {},
	moveToError: false,
};
