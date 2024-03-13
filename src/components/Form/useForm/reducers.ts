import {
	FormAction,
	FormState,
} from "./types";
import { getInitialState } from "./initial";
import { MosaicObject } from "@root/types";

function touchedFromValues(values: MosaicObject<any>) {
	const keys = Object.keys(values);

	return keys.reduce((acc, curr) => ({
		...acc,
		[curr]: true,
	}), {});
}

function shallowEqual<T extends MosaicObject>(obj1: T, obj2: T) {
	if (obj1 === obj2) {
		return true;
	}

	const entries = Object.entries(obj1);

	for (const [key, value] of entries) {
		if (obj2[key] !== value) {
			return false;
		}
	}

	return true;
}

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
		const touched = touchedFromValues(action.values);

		const updates = {
			data: (action.merge ? {
				...state.data,
				...action.values,
			} : action.values),
			internalData: (action.merge ? {
				...state.internalData,
				...action.internalValues,
			} : action.internalValues),
			touched: action.touched ? (action.merge ? {
				...state.touched,
				...touched,
			} : touched) : state.touched,
		};

		const updatedState: FormState = {
			...state,
			data: shallowEqual(updates.data, state.data) ? state.data : updates.data,
			internalData: shallowEqual(updates.internalData, state.internalData) ? state.internalData : updates.internalData,
			touched: shallowEqual(updates.touched, state.touched) ? state.touched : updates.touched,
			loadingInitial: action.loadingInitial !== undefined ? action.loadingInitial : state.loadingInitial,
			disabled: action.disabled !== undefined ? action.disabled : state.disabled,
		};

		if (shallowEqual(updatedState, state)) {
			return state;
		}

		return updatedState;
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
