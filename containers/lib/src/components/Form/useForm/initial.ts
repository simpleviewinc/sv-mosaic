import { FormStable, FormState } from "./types";

export function getInitialState(): FormState {
	return {
		internalData: {},
		data: {},
		errors: {},
		disabled: true,
		touched: {},
		submitWarning: { open: false, lead: "", reasons: [] },
		waits: [],
		loadingInitial: true,
	};
}

export function getInitialStable(): FormStable {
	return {
		...getInitialState(),
		initialData: {},
		fields: {},
		mounted: {},
		internalValidators: {},
		hasBlurred: {},
		moveToError: false,
		loadingInitial: true,
	};
}
