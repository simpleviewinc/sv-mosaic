import { FormStable, FormState } from "./state/types";

export const initialState: FormState = {
	internalData: {},
	data: {},
	errors: {},
	disabled: false,
	touched: {},
	busyFields: {},
	submitWarning: "",
	waits: [],
};

export const initialStable: FormStable = {
	...initialState,
	initialData: {},
	fields: {},
	mounted: {},
	internalValidators: {},
	hasBlurred: {},
};
