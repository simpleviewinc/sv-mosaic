import type { FormStable, FormState } from "./types";

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
		hasBlurred: {},
		hasSubmitted: false,
		moveToError: false,
		loadingInitial: true,
		hooks: {
			setFieldValueData: [],
		},
	};
}
