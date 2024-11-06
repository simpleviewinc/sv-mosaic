import type {
	FormAction,
	FormState,
} from "./types";
import { getInitialState } from "./initial";

export function reducer(state: FormState, action: FormAction): FormState {
	switch (action.type) {
	// NEW
	case "SET_FIELD_ERRORS": {
		return {
			...state,
			errors: (action.merge ? {
				...state.errors,
				...action.errors,
			} : action.errors),
		};
	}
	case "SET_FIELD_VALUES": {
		return {
			...state,
			data: action.values,
			internalData: action.internalValues,
			touched: action.touched || state.touched,
			loadingInitial: action.loadingInitial !== undefined ? action.loadingInitial : state.loadingInitial,
			disabled: action.disabled !== undefined ? action.disabled : state.disabled,
		};
	}
	case "SET_FORM_WAITS": {
		return {
			...state,
			waits: action.waits,
		};
	}
	case "RESET": {
		return {
			...getInitialState(),
			data: action.data,
			internalData: action.internalData,
			disabled: false,
			loadingInitial: false,
		};
	}
	case "FORM_DISABLE": {
		return {
			...state,
			disabled: action.disabled,
			loadingInitial: action.loadingInitial !== undefined ? action.loadingInitial : state.loadingInitial,
		};
	}
	// LEGACY
	case "FIELD_TOUCHED": {
		// Don't return new state if the field touched value is already the incoming one
		if (Boolean(state.touched[action.name]) === action.value) {
			return state;
		}

		return {
			...state,
			touched: {
				...state.touched,
				[action.name]: action.value,
			},
		};
	}
	case "FIELD_VALIDATE":
		return {
			...state,
			errors: {
				...state.errors,
				[action.name]: action.value,
			},
		};
	case "FIELD_UNVALIDATE": {
		return {
			...state,
			errors: {
				...state.errors,
				[action.name]: undefined,
			},
		};
	}
	case "FORM_START_DISABLE":
		return {
			...state,
			disabled: action.value,
		};
	case "FORM_END_DISABLE":
		return {
			...state,
			disabled: action.value,
		};
	case "FORM_RESET":
		return {
			...state,
			data: {},
			errors: {},
			disabled: false,
		};
	case "SET_SUBMIT_WARNING": {
		return {
			...state,
			submitWarning: {
				...action,
			},
		};
	}
	default:
		return state;
	}
}
