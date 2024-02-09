import { useRef, useCallback, useMemo, useReducer } from "react";
import { FormAction, FormDispatch, FormExtraArgs, FormGetState, FormMethods, FormReducer, FormState, GetFieldError, SubmitForm, UseFormReturn, ValidateField, ValidateForm } from "./state/types";
import { runValidators } from "./formActions";
import { getToggle, wrapToggle } from "@root/utils/toggle";
import { mapsValidators, required, validatePhoneNumber } from "./validators";

export function coreReducer(state: FormState, action: FormAction): FormState {
	switch (action.type) {
	// NEW
	case "SET_FIELD_ERRORS": {
		return {
			...state,
			errors: action.merge ?
				{
					...state.errors,
					...action.errors,
				} :
				action.errors
			,
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
			validating: {},
			custom: {},
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
			disabled: false,
			touched: {},
			mounted: {},
			busyFields: {},
			submitWarning: "",
		},
		extraArgs.current,
	);

	const getFieldFromExtra = useCallback((name: string) => {
		if (!extraArgs.current.fields[name]) {
			throw new Error(`Field \`${name}\` is not registered with this form. Registered fields: ${Object.keys(extraArgs.current.fields).map(name => `\`${name}\``).join(", ")}`);
		}

		return extraArgs.current.fields[name];
	}, []);

	const getFieldError = useCallback<GetFieldError>(async ({
		name,
	}) => {
		const { data, internalValidators } = extraArgs.current;
		const field = getFieldFromExtra(name);

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

		if (!result){
			return;
		}

		return result.errorMessage;
	}, [getFieldFromExtra]);

	const validateField = useCallback<ValidateField>(async ({
		name,
		validateLinkedFields,
	}) => {
		const { mounted } = extraArgs.current;
		const field = getFieldFromExtra(name);

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

		if (!mounted[name]) {
			dispatch({
				type: "SET_FIELD_ERRORS",
				errors: { [name]: undefined },
				merge: true,
			});

			return;
		}

		const disabledWrapped = wrapToggle(field.disabled, state, false);
		const disabled = getToggle(disabledWrapped);

		const error = disabled ? undefined : (await getFieldError({ name }));

		dispatch({
			type: "SET_FIELD_ERRORS",
			errors: { [name]: error },
			merge: true,
		});
	}, [dispatch, getFieldError, getFieldFromExtra, state]);

	const validateForm = useCallback<ValidateForm>(async () => {
		const { fields } = extraArgs.current;

		await dispatch({
			type: "FORM_START_DISABLE",
			value: true,
		});

		const fieldNames = Object.entries(fields).map(([, field]) => field.name);
		const fieldErrorList = await Promise.all(fieldNames.map(async name => {
			const error = await getFieldError({ name });

			return {
				name,
				error,
			};
		}));

		const errors = fieldErrorList
			.filter(({ error }) => error)
			.reduce((acc, { name, error }) => ({
				...acc,
				[name]: error,
			}), {});
		const errorCount = Object.keys(errors).length;

		if (!errorCount) {
			await dispatch({
				type: "FORM_END_DISABLE",
				value: false,
			});

			return true;
		}

		dispatch({
			type: "SET_FIELD_ERRORS",
			errors,
		});

		await dispatch({
			type: "FORM_END_DISABLE",
			value: false,
		});

		return false;

		// const touchedFields = data;

		// for (const [, field] of Object.entries(fields)) {
		// 	const currFieldName = field.name;
		// 	(!!touchedFields[currFieldName] === false ||
		// 		Array.isArray(touchedFields[currFieldName]) || typeof touchedFields[currFieldName] === "object") &&
		// 		(await validateField({ name: currFieldName }));
		// }

		// let validForm = true;
		// let firstInvalidField: string | undefined = undefined;

		// const entries = Object.entries(errors);

		// for (const [key, value] of entries) {
		// 	if (value !== undefined) {
		// 		validForm = false;
		// 		firstInvalidField = key;
		// 		break;
		// 	}
		// }

		// if (!validForm && firstInvalidField !== undefined) {
		// 	setTimeout(() => {
		// 		document.getElementById(firstInvalidField)?.scrollIntoView({ behavior: "smooth", block: "start" });
		// 	}, 500);
		// }

		// await dispatch({
		// 	type: "FORM_END_DISABLE",
		// 	value: false,
		// });

		// return validForm;
	}, [dispatch, getFieldError]);

	const submitForm = useCallback<SubmitForm>(async () => {
		const { data, mounted, fields } = extraArgs.current;
		const { disabled, busyFields } = state;

		if (disabled) {
			// The user should never hit this since they shouldn't
			// be able to physically submit whilst the form is disabled,
			// but we'll keep it here for consistency
			dispatch({
				type: "SET_SUBMIT_WARNING",
				value: "The form cannot be submitted whilst it is disabled",
			});

			return {
				valid: false,
				data: null,
			};
		}

		const busyMessages = Object.values(busyFields).filter(Boolean);
		if (busyMessages.length > 0) {
			dispatch({
				type: "SET_SUBMIT_WARNING",
				value: {
					lead: "The form cannot be submitted at this time:",
					reasons: busyMessages,
				},
			});

			return {
				valid: false,
				data: null,
			};
		}

		const valid = await validateForm();

		const cleanData = Object.keys(data).reduce((acc, curr) => {
			const disabledWrapped = wrapToggle(fields[curr]?.disabled, state, false);
			const disabled = getToggle(disabledWrapped);

			if (!mounted[curr] || disabled) {
				return {
					...acc,
					[curr]: undefined,
				};
			}

			return {
				...acc,
				[curr]: data[curr],
			};
		}, {});

		extraArgs.current.hasBlurred = Object.keys(fields).reduce((prev, curr) => ({
			...prev,
			[curr]: true,
		}), {});

		return {
			valid,
			data: cleanData,
		};
	}, [dispatch, state, validateForm]);

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
		submitForm,
	}), [dispatch, getFieldFromExtra, state, submitForm, validateField]);

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
