import { useRef, useCallback, useMemo, useReducer } from "react";
import {
	FieldCanBeValidated,
	FormAction,
	FormDispatch,
	FormStable,
	FormGetState,
	FormMethods,
	FormReducer,
	FormState,
	GetFieldError,
	GetFieldErrors,
	FormHandleSubmit,
	SetFieldBlur,
	SetFieldValue,
	SubmitForm,
	UseFormReturn,
	ValidateField,
	SetFormValues,
	DisableForm,
	AddWait,
	RemoveWait,
	FormWait,
} from "./state/types";
import { runValidators } from "./formActions";
import { getToggle, wrapToggle } from "@root/utils/toggle";
import { mapsValidators, required, validatePhoneNumber } from "./validators";
import { MosaicObject } from "@root/types";

export function coreReducer(state: FormState, action: FormAction): FormState {
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

const cleanValue = (value: unknown) => {
	if (value === "" || (Array.isArray(value) && value.length === 0)) {
		return undefined;
	}

	return value;
};

const initialState: FormState = {
	internalData: {},
	data: {},
	errors: {},
	disabled: false,
	touched: {},
	busyFields: {},
	submitWarning: "",
	waits: [],
};

function stateFromStable({
	internalData,
	data,
	errors,
	disabled,
	touched,
	busyFields,
	submitWarning,
	waits,
}: FormStable): FormState {
	return {
		internalData,
		data,
		errors,
		disabled,
		touched,
		busyFields,
		submitWarning,
		waits,
	};
}

export function useForm(): UseFormReturn {
	const stable = useRef<FormStable>({
		...initialState,
		fields: {},
		mounted: {},
		internalValidators: {},
		hasBlurred: {},
	});

	const [state, dispatch] = useThunkReducer(
		coreReducer,
		initialState,
		stable.current,
	);

	const getFieldFromExtra = useCallback((name: string) => {
		if (!stable.current.fields[name]) {
			throw new Error(`Field \`${name}\` is not registered with this form. Registered fields: ${Object.keys(stable.current.fields).map(name => `\`${name}\``).join(", ")}`);
		}

		return stable.current.fields[name];
	}, []);

	const getFieldError = useCallback<GetFieldError>(async ({
		name,
	}) => {
		const { data, internalValidators } = stable.current;
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

		if (!result) {
			return undefined;
		}

		return result.errorMessage;
	}, [getFieldFromExtra]);

	const getFieldErrors = useCallback<GetFieldErrors>(async ({
		names,
	}) => {
		const list = await Promise.all(names.map(async name => {
			const error = await getFieldError({ name });

			return {
				name,
				error,
			};
		}));

		const errors = list
			.reduce((acc, { name, error }) => ({
				...acc,
				[name]: error,
			}), {});

		const count = Object.values(errors).filter(Boolean).length;

		return { errors, count };
	}, [getFieldError]);

	const fieldCanBeValidated = useCallback<FieldCanBeValidated>(({
		name,
	}) => {
		const { mounted } = stable.current;

		if (!mounted[name]) {
			return false;
		}

		const field = getFieldFromExtra(name);

		const disabledWrapped = wrapToggle(field.disabled, stateFromStable(stable.current), false);
		const disabled = getToggle(disabledWrapped);

		if (disabled) {
			return false;
		}

		return true;
	}, [getFieldFromExtra]);

	const validateField = useCallback<ValidateField>(async ({
		name,
		validateLinkedFields,
	}) => {
		const field = getFieldFromExtra(name);

		const errors: MosaicObject<string | undefined> = {
			[name]: !fieldCanBeValidated({ name }) ? undefined : (await getFieldError({ name })),
		};

		if (validateLinkedFields && field.validates) {
			const linkedFieldNames = field.validates.filter(name => fieldCanBeValidated({ name }));
			const { errors: linkedFieldErrors } = await getFieldErrors({ names: linkedFieldNames });

			Object.assign(errors, linkedFieldErrors);
		}

		stable.current.errors = errors;

		dispatch({
			type: "SET_FIELD_ERRORS",
			errors,
			merge: true,
		});
	}, [dispatch, fieldCanBeValidated, getFieldError, getFieldErrors, getFieldFromExtra]);

	const setFormValues = useCallback<SetFormValues>(({
		values,
	}) => {
		const internalValues = Object.keys(values).reduce((acc, curr) => ({
			...acc,
			[curr]: getFieldFromExtra(curr).getResolvedValue(values[curr]).internalValue,
		}), {});

		stable.current.data = values;

		return dispatch({
			type: "FIELDS_ON_CHANGE",
			value: values,
			internalValue: internalValues,
			clearErrors: true,
		});
	}, [dispatch, getFieldFromExtra]);

	const setFieldValue = useCallback<SetFieldValue>(({
		name,
		value: providedValue,
		touched,
		validate,
	}) => {
		const { errors } = stable.current;
		const field = getFieldFromExtra(name);

		const providedValueResolved = typeof providedValue === "function" ? providedValue(stable.current.data[name]) : providedValue;
		const { internalValue, value } = field.getResolvedValue(providedValueResolved);

		stable.current.data[name] = value;

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
			stable.current.hasBlurred[name]
		) {
			validateField({
				name,
				validateLinkedFields: true,
			});
		}

		if (
			field.validateOn === "onBlurAmend" &&
			stable.current.hasBlurred[name] &&
			errors[name]
		) {
			delete stable.current.hasBlurred[name];
			dispatch({
				type: "FIELD_UNVALIDATE",
				name,
			});
		}
	}, [dispatch, getFieldFromExtra, validateField]);

	const setFieldBlur = useCallback<SetFieldBlur>(({
		name,
	}) => {
		const field = getFieldFromExtra(name);
		stable.current.hasBlurred[name] = true;

		if (
			field.validateOn === "onBlur" ||
			field.validateOn === "onBlurAmend" ||
			field.validateOn === "onBlurChange"
		) {
			validateField({
				name,
				validateLinkedFields: true,
			});
		}
	}, [getFieldFromExtra, validateField]);

	const disableForm = useCallback<DisableForm>(({
		disabled,
	}) => {
		dispatch({
			type: disabled ? "FORM_START_DISABLE" : "FORM_END_DISABLE",
			value: disabled,
		});
	}, [dispatch]);

	const submitForm = useCallback<SubmitForm>(async () => {
		const { data, fields } = stable.current;

		const names = Object.entries(fields)
			.map(([, field]) => field.name)
			.filter(name => fieldCanBeValidated({ name }));

		const { count, errors } = await getFieldErrors({ names });

		if (count) {
			stable.current.errors = errors;

			dispatch({
				type: "SET_FIELD_ERRORS",
				errors,
			});

			// TODO This sucks. Use references instead.

			// if (!validForm && firstInvalidField !== undefined) {
			// 	setTimeout(() => {
			// 		document.getElementById(firstInvalidField)?.scrollIntoView({ behavior: "smooth", block: "start" });
			// 	}, 500);
			// }

			return {
				valid: false,
				data: null,
			};
		}

		if (stable.current.waits.length > 0) {
			dispatch({
				type: "SET_SUBMIT_WARNING",
				value: {
					lead: "The form cannot be submitted at this time:",
					reasons: stable.current.waits.map(({ message }) => message),
				},
			});

			return {
				valid: false,
				data: null,
			};
		}

		const activeFields = Object.keys(fields).filter(name => fieldCanBeValidated({ name }));
		const activeDataList = activeFields.map(name => ({
			name,
			value: data[name],
		}));

		const cleanData = activeDataList.reduce((acc, { name, value }) => ({
			...acc,
			[name]: value,
		}), {});

		stable.current.hasBlurred = Object.keys(fields).reduce((prev, curr) => ({
			...prev,
			[curr]: true,
		}), {});

		return {
			valid: true,
			data: cleanData,
		};
	}, [dispatch, fieldCanBeValidated, getFieldErrors]);

	const removeWait = useCallback<RemoveWait>(({
		names,
	}) => {
		const waits: FormWait[] = stable.current.waits.filter(({ name }) => !names.includes(name));

		stable.current.waits = waits;

		dispatch({
			type: "SET_FORM_WAITS",
			waits,
		});
	}, [dispatch]);

	const addWait = useCallback<AddWait>(({
		name,
		message,
		disableForm = false,
	}) => {
		const waits: FormWait[] = [
			...stable.current.waits,
			{
				name,
				message,
				disableForm,
			},
		];

		stable.current.waits = waits;

		dispatch({
			type: "SET_FORM_WAITS",
			waits,
		});

		return {
			removeWait: (params = {}) => removeWait({
				names: [name],
				...params,
			}),
		};
	}, [dispatch, removeWait]);

	const methods = useMemo<FormMethods>(() => ({
		setFormValues,
		setFieldValue,
		setFieldBlur,
		submitForm,
		disableForm,
		addWait,
		removeWait,
	}), [
		setFieldBlur,
		setFormValues,
		setFieldValue,
		submitForm,
		disableForm,
		addWait,
		removeWait,
	]);

	const handleSubmit = useCallback<FormHandleSubmit>((onSuccess, onError) => async () => {
		const { data, valid } = await submitForm();

		if (!valid) {
			onError && onError(data);
			return;
		}

		onSuccess(data);
	}, [submitForm]);

	return {
		state,
		dispatch,
		methods,
		handleSubmit,
	};
}

export function useThunkReducer(reducer: FormReducer, initialState: FormState, stable: FormStable): [FormState, FormDispatch] {
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
			return action(customDispatch, getState, stable);
		}

		return dispatch(action);
	}, [getState, stable]);

	return [state, customDispatch];
}
