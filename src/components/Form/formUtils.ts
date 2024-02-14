import { useRef, useCallback, useMemo, useReducer } from "react";
import { FieldCanBeValidated, FormAction, FormDispatch, FormExtraArgs, FormGetState, FormMethods, FormReducer, FormState, GetFieldError, GetFieldErrors, FormHandleSubmit, SetFieldBlur, SetFieldValue, SubmitForm, UseFormReturn, ValidateField, SetFormValues, DisableForm } from "./state/types";
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
		const { mounted } = extraArgs.current;

		if (!mounted[name]) {
			return false;
		}

		const field = getFieldFromExtra(name);

		const disabledWrapped = wrapToggle(field.disabled, state, false);
		const disabled = getToggle(disabledWrapped);

		if (disabled) {
			return false;
		}

		return true;
	}, [getFieldFromExtra, state]);

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

		extraArgs.current.data = values;

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
	}, [dispatch, getFieldFromExtra, state, validateField]);

	const setFieldBlur = useCallback<SetFieldBlur>(({
		name,
	}) => {
		const field = getFieldFromExtra(name);
		extraArgs.current.hasBlurred[name] = true;

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
		const { data, fields } = extraArgs.current;
		const { busyFields } = state;

		const names = Object.entries(fields)
			.map(([, field]) => field.name)
			.filter(name => fieldCanBeValidated({ name }));

		const { count, errors } = await getFieldErrors({ names });

		if (count) {
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

		const activeFields = Object.keys(fields).filter(name => fieldCanBeValidated({ name }));
		const activeDataList = activeFields.map(name => ({
			name,
			value: data[name],
		}));

		const cleanData = activeDataList.reduce((acc, { name, value }) => ({
			...acc,
			[name]: value,
		}), {});

		extraArgs.current.hasBlurred = Object.keys(fields).reduce((prev, curr) => ({
			...prev,
			[curr]: true,
		}), {});

		return {
			valid: true,
			data: cleanData,
		};
	}, [dispatch, fieldCanBeValidated, getFieldErrors, state]);

	const methods = useMemo<FormMethods>(() => ({
		setFormValues,
		setFieldValue,
		setFieldBlur,
		submitForm,
		disableForm,
	}), [
		setFieldBlur,
		setFormValues,
		setFieldValue,
		submitForm,
		disableForm,
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
