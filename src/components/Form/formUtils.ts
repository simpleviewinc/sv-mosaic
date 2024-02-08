import { useRef, useCallback, useMemo, useReducer } from "react";
import { FormAction, FormDispatch, FormExtraArgs, FormGetState, FormMethods, FormReducer, FormState, UseFormReturn, ValidateField } from "./state/types";
import { runValidators } from "./formActions";
import { getToggle, wrapToggle } from "@root/utils/toggle";
import { mapsValidators, required, validatePhoneNumber } from "./validators";

export function coreReducer(state: FormState, action: FormAction): FormState {
	console.log(`DISPATCH ${action.type}`);
	switch (action.type) {
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
	case "FORM_VALIDATE":
		return {
			...state,
			validForm: action.value,
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
		};
	case "PROPERTY_RESET":
		return {
			...state,
			[action.name]: action.value,
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

const cleanValue = (value: unknown) => {
	if (value === "" || (Array.isArray(value) && value.length === 0)){
		return undefined;
	}

	return value;
};

export function useForm(): UseFormReturn {
	const extraArgs = useRef<FormExtraArgs>({
		fields: {},
		onSubmit: () => undefined,
		mounted: {},
		internalValidators: {},
		hasBlurred: {},
		data: {},
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
			disabled: false,
			touched: {},
			mounted: {},
			busyFields: {},
			submitWarning: "",
		},
		extraArgs.current,
	);

	const getFieldFromExtra = (name: string) => {
		if (!extraArgs.current.fields[name]) {
			throw new Error(`Field \`${name}\` is not registered with this form. Registered fields: ${Object.keys(extraArgs.current.fields).map(name => `\`${name}\``).join(", ")}`);
		}

		return extraArgs.current.fields[name];
	};

	const validateField = useCallback<ValidateField>(async ({
		name,
		validateLinkedFields,
	}) => {
		const { data, mounted, internalValidators } = extraArgs.current;
		const field = getFieldFromExtra(name);

		if (!mounted[name]) {
			return;
		}

		/**
		 * @TODO This is not pretty, but it'll do for now. Ideally we would
		 * only commit one dispatch after validating all fields, instead of
		 * a dispatch for each field
		 */
		if (validateLinkedFields && field.validates) {
			field.validates.forEach(linkedFieldName => {
				validateField({
					name: linkedFieldName,
				});
			});
		}

		const disabledWrapped = wrapToggle(field.disabled, state, false);
		const disabled = getToggle(disabledWrapped);

		/**
		 * We dispatch an undefined so that way, if by any reason
		 * the field had an error message and then became disabled,
		 * the error would get removed from the state.
		 */
		if (disabled) {
			dispatch({
				type: "FIELD_UNVALIDATE",
				name,
			});

			return;
		}

		const requiredFlag = field.required;
		const validators = field.validators || [];

		if (requiredFlag) {
			validators.unshift(required);
		}

		if (field.type === "phone") {
			validators.push(validatePhoneNumber);
		}

		if (field.inputSettings?.maxCharacters > 0) {
			validators.push({
				fn: "validateCharacterCount",
				options: { max: field.inputSettings.maxCharacters },
			});
		}

		if (field.inputSettings?.minDate || field.inputSettings?.maxDate) {
			validators.push({
				fn: "validateMinDate",
				options: {
					min: field.inputSettings?.minDate,
					max: field.inputSettings?.maxDate,
				},
			});
		}

		const validatorsMap = mapsValidators([
			...(internalValidators[name] || []),
			...validators,
		]);

		const result = await runValidators(validatorsMap, data[name], data);

		if (result?.errorMessage) {
			dispatch({
				type: "FIELD_VALIDATE",
				name,
				value: result?.errorMessage,
			});
		} else {
			dispatch({
				type: "FIELD_UNVALIDATE",
				name,
			});
		}
	}, [dispatch, state]);

	const methods = useMemo<FormMethods>(() => ({
		setFieldValue: ({
			name,
			value: providedValue,
			touched,
			validate,
		}) => {
			const { errors } = state;
			const field = getFieldFromExtra(name);

			const providedValueResolved = typeof providedValue === "function" ? providedValue(extraArgs.current.data[name]) : providedValue;
			const { internalValue, value } = field.getResolvedValue(providedValueResolved);

			extraArgs.current.data[name] = value;

			dispatch({
				type: "FIELD_ON_CHANGE",
				name,
				internalValue,
				value: cleanValue(value),
				touched,
			});

			if (validate || field.validateOn === "onChange") {
				validateField({
					name,
					validateLinkedFields: true,
				});
			}

			if (
				field.validateOn === "onBlurChange" &&
				extraArgs.current.hasBlurred[name]
			) {
				validateField({
					name,
					validateLinkedFields: true,
				});
			}

			if (
				field.validateOn === "onBlurAmend" &&
				extraArgs.current.hasBlurred[name] &&
				errors[name]
			) {
				delete extraArgs.current.hasBlurred[name];
				dispatch({
					type: "FIELD_UNVALIDATE",
					name,
				});
			}
		},
	}), [dispatch, state, validateField]);

	return {
		state,
		dispatch,
		methods,
	};
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
		[reducer],
	);

	const [state, dispatch] = useReducer(enhancedReducer, initialState);

	const customDispatch: FormDispatch = useCallback((action) => {


		if (typeof action === "function") {
			return action(customDispatch, getState, extraArgs);
		}

		return dispatch(action);
	}, [getState, extraArgs]);

	return [state, customDispatch];
}
