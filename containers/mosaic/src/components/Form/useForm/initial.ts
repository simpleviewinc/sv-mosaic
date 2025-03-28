import type { FormStable, FormState } from "./types";

export function getInitialState(): FormState {
	return {
		internalData: {},
		data: {},
		errors: {},
		disabled: false,
		touched: {},
		submitWarning: { open: false, lead: "", reasons: [] },
		waits: [],
		skeleton: false,
	};
}

export function getInitialStable(): FormStable {
	return {
		...getInitialState(),
		initialData: {},
		fields: {},
		mounted: {},
		hasBlurred: {},
		hasSubmitted: false,
		moveToError: false,
		hooks: {
			setFieldValueData: [],
		},
		skeleton: false,
	};
}
