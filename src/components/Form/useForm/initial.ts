import { FormStable, FormState } from "./types";

export const initialState: FormState = {
	internalData: {},
	data: {},
	errors: {},
	disabled: false,
	touched: {},
	submitWarning: { open: false, lead: "", reasons: [] },
	waits: [],
	loadingInitial: true,
};

export const initialStable: FormStable = {
	...initialState,
	initialData: {},
	fields: {},
	mounted: {},
	internalValidators: {},
	hasBlurred: {},
	moveToError: false,
	loadingInitial: true,
};
