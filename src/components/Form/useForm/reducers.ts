import {
	FormAction,
	FormState,
} from "./types";
import { initialState } from "./initial";

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
	case "SET_FORM_WAITS": {
		return {
			...state,
			waits: action.waits,
		};
	}
	case "RESET": {
		return {
			...initialState,
			data: action.data,
			internalData: action.internalData,
		};
	}
	// LEGACY
	case "FIELD_ON_CHANGE":
		return {
			...state,
			internalData: {
				...state.internalData,
				[action.name]: "internalValue" in action ? action.internalValue : action.value,
			},
			data: {
				...state.data,
				[action.name]: action.value,
			},
			touched: action.touched ? {
				...state.touched,
				[action.name]: true,
			} : state.touched,

		};
	case "FIELDS_ON_CHANGE":
		return {
			...state,
			internalData: {
				...state.internalData,
				...action.internalValue,
			},
			data: {
				...state.data,
				...action.value,
			},
			errors: action.clearErrors ? {} : state.errors,
		};
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
	case "FORM_START_BUSY": {
		return {
			...state,
			busyFields: {
				...state.busyFields,
				[action.name]: action.value,
			},
		};
	}
	case "FORM_END_BUSY": {
		return {
			...state,
			busyFields: {
				...state.busyFields,
				[action.name]: undefined,
			},
		};
	}
	case "SET_SUBMIT_WARNING": {
		return {
			...state,
			submitWarning: action.value,
		};
	}
	default:
		return state;
	}
}
