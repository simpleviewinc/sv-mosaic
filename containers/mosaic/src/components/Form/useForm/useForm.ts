import { useRef, useCallback, useMemo, useReducer } from "react";
import set from "lodash/fp/set";
import unset from "lodash/fp/unset";
import get from "lodash/get";

import type {
	FormStable,
	FormMethods,
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
	MountField,
	AddValidator,
	FormInit,
	FormReset,
	SetSubmitWarning,
} from "./types";

import { getInitialState, getInitialStable } from "./initial";
import { reducer } from "./reducers";
import getField from "./utils/getField";
import fieldIsActive from "./utils/fieldIsActive";
import getFieldError from "./utils/getFieldError";
import getFieldErrors from "./utils/getFieldErrors";
import getFieldInternalValues from "./utils/getFieldInternalValues";
import createFieldStore from "./utils/createFieldStore";
import getFields from "./utils/getFields";
import getFieldValue from "./utils/getFieldValue";
import merge from "@root/utils/object/merge";

export function useForm(): UseFormReturn {
	const stable = useRef<FormStable>(getInitialStable());

	const [state, dispatch] = useReducer(reducer, getInitialState());

	const validateField = useCallback<ValidateField>(async ({
		name,
		validateLinkedFields,
		path = [],
	}) => {
		const field = getField({ name, path, stable: stable.current });

		if (fieldIsActive({ name, path, stable: stable.current })) {
			const error = await getFieldError({
				name,
				path,
				deep: true,
				stable: stable.current,
			});

			stable.current.errors = set([...path, name], error, stable.current.errors);
		}

		if (validateLinkedFields && field.validates) {
			const linkedFields = field.validates.map(item => (typeof item === "object" ? item : {
				name: item,
				include: undefined,
			})).filter(({ name }) => fieldIsActive({ name, path, stable: stable.current }));

			const { errors: linkedFieldErrors } = await getFieldErrors({
				names: linkedFields,
				path,
				stable: stable.current,
			});

			const newErrors = path.length ? set(path, linkedFieldErrors, {}) : linkedFieldErrors;
			stable.current.errors = merge(stable.current.errors, newErrors);
		}

		dispatch({
			type: "SET_FIELD_ERRORS",
			errors: stable.current.errors,
		});
	}, []);

	const setFormValues = useCallback<SetFormValues>(async ({
		values = {},
		path = [],
		initial,
		validate,
	}) => {
		const internalValues = getFieldInternalValues(values, getFields({ stable: stable.current, path }));

		/**
		 * It's kinda wierd, but lodash doesn't do anything if path is empty,
		 * so if path is empty, we'll just assign the values instead of "setting"
		 * them.
		 */
		stable.current.data = path.length ? set(path, values, stable.current.data) : values;
		stable.current.internalData = path.length ? set(path, internalValues, stable.current.internalData) : internalValues;

		if (initial) {
			stable.current.initialData = path.length ? set(path, values, stable.current.initialData) : values;
			stable.current.disabled = false;
		}

		if (validate) {
			const names = Object.keys(getFields({ stable: stable.current, path }));
			const { errors } = await getFieldErrors({ names, path, stable: stable.current });

			stable.current.errors = path.length ? set(path, errors, stable.current.errors) : errors;

			dispatch({
				type: "SET_FIELD_ERRORS",
				errors: stable.current.errors,
			});
		}

		return dispatch({
			type: "SET_FIELD_VALUES",
			values: stable.current.data,
			internalValues: stable.current.internalData,
			...(initial ? {
				disabled: false,
				loadingInitial: false,
			} : {}),
		});
	}, []);

	const init = useCallback<FormInit>(({
		fields,
		sections,
	}) => {
		stable.current.fields = createFieldStore({ fields, sections, stable: stable.current });
	}, []);

	const reset = useCallback<FormReset>(() => {
		const { initialData, fields } = stable.current;
		const values = { ...initialData };
		const internalValues = getFieldInternalValues(initialData, fields);

		stable.current = {
			...getInitialState(),
			...stable.current,
			hasBlurred: {},
			data: values,
			internalData: internalValues,
			disabled: false,
			loadingInitial: false,
		};

		dispatch({
			type: "RESET",
			data: values,
			internalData: internalValues,
		});
	}, []);

	const setFieldValue = useCallback<SetFieldValue>(({
		name,
		value: providedValue,
		touched,
		validate,
		path = [],
	}) => {
		const fullPath = [...path, name];
		const field = getField({ name, path, stable: stable.current });
		const { errors, hasBlurred, hasSubmitted } = stable.current;

		const { value, internalValue } = getFieldValue({
			fields: fullPath,
			value: providedValue,
			stable: stable.current,
			current: {
				values: stable.current.data,
				internalValues: stable.current.internalData,
			},
		});

		stable.current.data = set(fullPath[0], value, stable.current.data);
		stable.current.internalData = set(fullPath[0], internalValue, stable.current.internalData);

		if (touched) {
			stable.current.touched = set(fullPath, true, stable.current.touched);
		}

		dispatch({
			type: "SET_FIELD_VALUES",
			values: stable.current.data,
			internalValues: stable.current.internalData,
			touched: stable.current.touched,
		});

		if (validate || field.validateOn === "onChange") {
			validateField({
				name,
				validateLinkedFields: true,
				path,
			});
		}

		if (
			field.validateOn === "onBlurChange" &&
			(hasSubmitted || get(hasBlurred, fullPath))
		) {
			validateField({
				name,
				validateLinkedFields: true,
				path,
			});
		}

		if (
			field.validateOn === "onBlurAmend" &&
			(hasSubmitted || get(hasBlurred, fullPath)) &&
			get(errors, fullPath)
		) {
			stable.current.hasBlurred = unset(fullPath, stable.current.hasBlurred);
			stable.current.errors = unset(fullPath, stable.current.errors);

			dispatch({
				type: "SET_FIELD_ERRORS",
				errors: stable.current.errors,
			});
		}
	}, [validateField]);

	const setFieldBlur = useCallback<SetFieldBlur>(({
		name,
		path = [],
	}) => {
		const field = getField({ name, path, stable: stable.current });
		stable.current.hasBlurred = set([...path, name], true, stable.current.hasBlurred);

		if (
			field.validateOn === "onBlur" ||
			field.validateOn === "onBlurAmend" ||
			field.validateOn === "onBlurChange"
		) {
			validateField({
				name,
				path,
				validateLinkedFields: true,
			});
		}
	}, [validateField]);

	const disableForm = useCallback<DisableForm>(({
		disabled = false,
		initial,
	}) => {
		dispatch({
			type: "FORM_DISABLE",
			disabled,
			loadingInitial: initial,
		});
	}, []);

	const setSubmitWarning = useCallback<SetSubmitWarning>((params) => {
		dispatch({
			type: "SET_SUBMIT_WARNING",
			...params,
		});
	}, []);

	const submitForm = useCallback<SubmitForm>(async () => {
		const { data, fields, waits } = stable.current;

		const names = Object.keys(fields)
			.filter(name => fieldIsActive({ name, stable: stable.current }));

		stable.current.hasSubmitted = true;

		const { count, errors } = await getFieldErrors({
			names,
			deep: true,
			stable: stable.current,
		});

		if (count) {
			stable.current.errors = errors;
			stable.current.moveToError = true;

			dispatch({
				type: "SET_FIELD_ERRORS",
				errors,
			});

			return {
				valid: false,
				data: null,
			};
		}

		if (waits.length > 0) {
			setSubmitWarning({
				open: true,
				lead: "The form cannot be submitted at this time:",
				reasons: waits.map(({ message }) => message),
			});

			return {
				valid: false,
				data: null,
			};
		}

		const activeFields = Object.keys(fields).filter(name => fieldIsActive({ name, stable: stable.current }));

		return {
			valid: true,
			data,
			activeFields,
		};
	}, [setSubmitWarning]);

	const removeWait = useCallback<RemoveWait>(({
		names,
	}) => {
		const { waits } = stable.current;
		const newWaits: FormWait[] = waits.filter(({ name }) => !names.includes(name));

		stable.current.waits = newWaits;

		dispatch({
			type: "SET_FORM_WAITS",
			waits: newWaits,
		});
	}, []);

	const addWait = useCallback<AddWait>(({
		name,
		message,
		disableForm = false,
	}) => {
		const { waits } = stable.current;
		const newWaits: FormWait[] = [
			...waits,
			{
				name,
				message,
				disableForm,
			},
		];

		stable.current.waits = newWaits;

		dispatch({
			type: "SET_FORM_WAITS",
			waits: newWaits,
		});

		return {
			remove: (params = {}) => removeWait({
				names: [name],
				...params,
			}),
		};
	}, [removeWait]);

	const mountField = useCallback<MountField>(({ name, fieldRef, inputRef }) => {
		stable.current.mounted[name] = {
			fieldRef,
			inputRef,
		};

		return {
			unmount: () => {
				stable.current.mounted[name] = false;

				dispatch({
					type: "SET_FIELD_ERRORS",
					errors: { [name]: undefined },
					merge: true,
				});
			},
		};
	}, []);

	const addValidator = useCallback<AddValidator>(({
		name,
		validator,
	}) => {
		const current = stable.current.internalValidators[name] || [];

		/**
		 * Just bail if this validator is already registered
		 */
		if (current.includes(validator)) {
			return;
		}

		stable.current.internalValidators[name] = [
			...current,
			validator,
		];

		return {
			remove: () => {
				const current = stable.current.internalValidators[name] || [];

				/**
				 * Just bail if this validator isn't registered
				 */
				if (!current.includes(validator)) {
					return;
				}

				stable.current.internalValidators[name] = current.filter(item => item !== validator);
			},
		};
	}, []);

	const methods = useMemo<FormMethods>(() => ({
		setFormValues,
		setFieldValue,
		setFieldBlur,
		submitForm,
		disableForm,
		addWait,
		removeWait,
		mountField,
		addValidator,
		init,
		reset,
		setSubmitWarning,
	}), [
		setFieldBlur,
		setFormValues,
		setFieldValue,
		submitForm,
		disableForm,
		addWait,
		removeWait,
		mountField,
		addValidator,
		init,
		reset,
		setSubmitWarning,
	]);

	const handleSubmit = useCallback<FormHandleSubmit>((onSuccess, onError) => async () => {
		const { data, activeFields, valid } = await submitForm();

		if (!valid) {
			onError && onError({ data });
			return;
		}

		onSuccess({ data, activeFields });
	}, [submitForm]);

	return {
		state,
		stable: stable.current,
		methods,
		handleSubmit,
	};
}
