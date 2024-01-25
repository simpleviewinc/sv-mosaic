import { useRef, useCallback, useReducer } from "react";
import { FormAction, FormDispatch, FormExtraArgs, FormGetState, FormReducer, FormState, UseFormReturn } from "./state/types";

export function coreReducer(state: FormState, action: FormAction): FormState {
	switch (action.type) {
	case "FIELD_ON_CHANGE":
		return {
			...state,
			internalData: {
				...state.internalData,
				[action.name]: "internalValue" in action ? action.internalValue : action.value
			},
			data: {
				...state.data,
				[action.name]: action.value
			},
			touched: action.touched ? {
				...state.touched,
				[action.name]: true
			} : state.touched

		};
	case "FIELDS_ON_CHANGE":
		return {
			...state,
			internalData: {
				...state.internalData,
				...action.internalValue
			},
			data: {
				...state.data,
				...action.value
			},
			errors: action.clearErrors ? {} : state.errors
		}
	case "FIELD_TOUCHED": {
		// Don't return new state if the field touched value is already the incoming one
		if (Boolean(state.touched[action.name]) === action.value) {
			return state;
		}

		return {
			...state,
			touched: {
				...state.touched,
				[action.name]: action.value
			}
		};
	}
	case "FIELD_VALIDATE":
		return {
			...state,
			errors: {
				...state.errors,
				[action.name]: action.value
			},
		};
	case "FIELD_UNVALIDATE": {
		return {
			...state,
			errors: {
				...state.errors,
				[action.name]: undefined
			},
		};
	}
	case "FORM_START_DISABLE":
		return {
			...state,
			disabled: action.value
		};
	case "FORM_END_DISABLE":
		return {
			...state,
			disabled: action.value
		};
	case "FORM_VALIDATE":
		return {
			...state,
			validForm: action.value
		};
	case "FORM_RESET":
		return {
			...state,
			data: {},
			errors: {},
			validating: {},
			custom: {},
			validForm: false,
			disabled: false,
		}
	case "PROPERTY_RESET":
		return {
			...state,
			[action.name]: action.value
		}
	case "FORM_START_BUSY": {
		return {
			...state,
			busyFields: {
				...state.busyFields,
				[action.name]: action.value
			}
		}
	}
	case "FORM_END_BUSY": {
		return {
			...state,
			busyFields: {
				...state.busyFields,
				[action.name]: undefined
			}
		}
	}
	case "SET_SUBMIT_WARNING": {
		return {
			...state,
			submitWarning: action.value
		}
	}
	default:
		return state;
	}
}

export function useForm(): UseFormReturn {
	const extraArgs = useRef<FormExtraArgs>({
		fields: [],
		fieldMap: {},
		onSubmit: () => undefined,
		mounted: {},
		internalValidators: {},
		hasBlurred: {},
		data: {}
	});

	const [state, dispatch] = useThunkReducer(
		coreReducer,
		{
			internalData: {},
			data: {},
			errors: {},
			validating: {},
			custom: {},
			validForm: false,
			disabled: true,
			touched: {},
			mounted: {},
			busyFields: {},
			submitWarning: ""
		},
		extraArgs.current
	);

	return { state, dispatch };
}

export function useThunkReducer(reducer: FormReducer, initialState: FormState, extraArgs: FormExtraArgs): [FormState, FormDispatch] {
	const lastState = useRef(initialState);

	const getState: FormGetState = useCallback(() => {
		const state = lastState.current;
		return state;
	}, []);

	const enhancedReducer: FormReducer = useCallback(
		(state, action) => {
			const newState = reducer(state, action);
			lastState.current = newState;
			return newState;
		},
		[reducer]
	);

	const [state, dispatch] = useReducer(enhancedReducer, initialState);

	const customDispatch: FormDispatch = useCallback(
		(action) => {
			if (typeof action === "function") {
				return action(customDispatch, getState, extraArgs);
			} else {
				return dispatch(action);
			}
		},
		[getState, extraArgs]
	);

	return [state, customDispatch];
}
