import { mapsValidators, required, validatePhoneNumber, Validator } from "./validators";
import { FormActionThunks, FormExtraArgs } from "./state/types";
import { getFieldConfig } from "./Col/fieldConfigMap";
import { FieldDefSanitized } from "../Field";
import { getToggle, wrapToggle } from "@root/utils/toggle";

async function runValidators(
	validators: Validator[],
	value: unknown,
	data: unknown,
): Promise<{
		errorMessage?: string | undefined;
		validator: Validator;
	}> {
	for (const validator of validators) {
		const result = await validator.fn(value, data, validator.options);
		if (result) {
			return {
				errorMessage: result,
				validator,
			};
		}
	}

	return;
}

const isValidValue = (value: any) => {
	if (value === "" || value?.length === 0) {
		return false;
	}

	return true;
};

function getFieldFromExtra(extraArgs: FormExtraArgs, name: string) {
	if (!extraArgs.fieldMap[name]) {
		throw new Error(`Field \`${name}\` is not registered with this form. Registered fields: ${Object.keys(extraArgs.fieldMap).map(name => `\`${name}\``).join(", ")}`);
	}

	return extraArgs.fieldMap[name];
}

export const formActions: FormActionThunks = {
	init({ fields }) {
		return async function (_dispatch, _getState, extraArgs) {
			extraArgs.fields = fields.map(field => {
				const fieldConfig = getFieldConfig(field.type);
				const valueResolver = field.getResolvedValue || fieldConfig.getResolvedValue;

				const result: FieldDefSanitized = {
					...field,
					validateOn: field.validateOn || fieldConfig.validate,
					getResolvedValue: (value) => valueResolver(value, field),
				};

				return result;
			});

			const fieldMap = extraArgs.fields.reduce((prev, curr) => {
				prev[curr.name] = curr;
				return prev;
			}, {});

			extraArgs.fieldMap = fieldMap;
		};
	},
	setSubmitWarning({ value }) {
		return async function (dispatch) {
			return dispatch({
				type: "SET_SUBMIT_WARNING",
				value,
			});
		};
	},
	setFormValues({ values }) {
		return async function (dispatch, _getState, extraArgs) {
			const internalValues = Object.keys(values).reduce((acc, curr) => ({
				...acc,
				[curr]: getFieldFromExtra(extraArgs, curr).getResolvedValue(values[curr]).internalValue,
			}), {});

			extraArgs.data = values;

			return dispatch({
				type: "FIELDS_ON_CHANGE",
				value: values,
				internalValue: internalValues,
				clearErrors: true,
			});
		};
	},
	setFieldValue({
		name,
		value: providedValue,
		validate = false,
		touched = false,
	}) {
		return async function (dispatch, getState, extraArgs) {
			const { errors } = getState();
			const field = getFieldFromExtra(extraArgs, name);
			const { internalValue, value } = field.getResolvedValue(providedValue);

			extraArgs.data[name] = value;

			await dispatch({
				type: "FIELD_ON_CHANGE",
				name,
				internalValue,
				value: isValidValue(value) ? value : undefined,
				touched,
			});

			if (validate || field.validateOn === "onChange") {
				await dispatch(formActions.validateField({
					name,
					validateLinkedFields: true,
				}));
			}

			if (
				field.validateOn === "onBlurChange" &&
				extraArgs.hasBlurred[name]
			) {
				await dispatch(formActions.validateField({
					name,
					validateLinkedFields: true,
				}));
			}

			if (
				field.validateOn === "onBlurAmend" &&
				extraArgs.hasBlurred[name] &&
				errors[name]
			) {
				delete extraArgs.hasBlurred[name];
				await dispatch({
					type: "FIELD_UNVALIDATE",
					name,
				});
			}
		};
	},
	setFieldBlur({
		name,
	}) {
		return async function(dispatch, _getState, extraArgs) {
			const field = getFieldFromExtra(extraArgs, name);
			extraArgs.hasBlurred[name] = true;

			if (
				field.validateOn === "onBlur" ||
				field.validateOn === "onBlurAmend" ||
				field.validateOn === "onBlurChange"
			) {
				await dispatch(formActions.validateField({
					name,
					validateLinkedFields: true,
				}));
			}

		};
	},
	validateField({ name, validateLinkedFields }) {
		return async function (dispatch, getState, extraArgs) {
			const state = getState();
			const { data, mounted, internalValidators } = extraArgs;
			const field = getFieldFromExtra(extraArgs, name);

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
					dispatch(formActions.validateField({
						name: linkedFieldName,
					}));
				});
			}

			const disabledWrapped = wrapToggle(extraArgs?.fieldMap[name]?.disabled, state, false);
			const disabled = getToggle(disabledWrapped);

			/**
			 * We dispatch an undefined so that way, if by any reason
			 * the field had an error message and then became disabled,
			 * the error would get removed from the state.
			 */
			if (disabled) {
				await dispatch({
					type: "FIELD_UNVALIDATE",
					name,
				});

				return;
			}

			const requiredFlag = extraArgs?.fieldMap[name]?.required;
			const validators = extraArgs?.fieldMap[name]?.validators ? extraArgs?.fieldMap[name]?.validators : [];

			if (requiredFlag) {
				validators.unshift(required);
			}

			if (extraArgs?.fieldMap[name].type === "phone") {
				validators.push(validatePhoneNumber);
			}

			if (extraArgs?.fieldMap[name]?.inputSettings?.maxCharacters > 0) {
				validators.push({
					fn: "validateCharacterCount",
					options: { max: extraArgs?.fieldMap[name]?.inputSettings?.maxCharacters },
				});
			}

			if (extraArgs?.fieldMap[name]?.inputSettings?.minDate || extraArgs?.fieldMap[name]?.inputSettings?.maxDate) {
				validators.push({
					fn: "validateMinDate",
					options: {
						min: extraArgs?.fieldMap[name]?.inputSettings?.minDate,
						max: extraArgs?.fieldMap[name]?.inputSettings?.maxDate,
					},
				});
			}

			const validatorsMap = mapsValidators([
				...(internalValidators[name] || []),
				...validators,
			]);

			const result = await runValidators(validatorsMap, data[name], data);

			if (result?.errorMessage) {
				await dispatch({
					type: "FIELD_VALIDATE",
					name,
					value: result?.errorMessage,
				});
			} else {
				await dispatch({
					type: "FIELD_UNVALIDATE",
					name,
				});
			}
		};
	},
	validateForm() {
		return async function (dispatch, getState, { data, fields }) {
			await dispatch({
				type: "FORM_START_DISABLE",
				value: true,
			});

			const touchedFields = data;

			for (let i = 0; i < fields.length; i++) {
				const currFieldName = fields[i].name;
				(!!touchedFields[currFieldName] === false ||
					Array.isArray(touchedFields[currFieldName]) || typeof touchedFields[currFieldName] === "object") &&
					(await dispatch(
						formActions.validateField({ name: currFieldName }),
					));
			}

			let validForm = true;
			let firstInvalidField: string | undefined = undefined;

			const errors = getState().errors;

			const entries = Object.entries(errors);

			for (const [key, value] of entries) {
				if (value !== undefined) {
					validForm = false;
					firstInvalidField = key;
					break;
				}
			}

			if (!validForm && firstInvalidField !== undefined) {
				setTimeout(() => {
					document.getElementById(firstInvalidField)?.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 500);
			}

			await dispatch({
				type: "FORM_VALIDATE",
				value: validForm,
			});

			await dispatch({
				type: "FORM_END_DISABLE",
				value: false,
			});

			return validForm;
		};
	},
	submitForm() {
		return async function (dispatch, getState, extraArgs) {
			const state = getState();
			const { data, mounted } = extraArgs;

			if (!dispatch(formActions.isSubmittable())) {
				return {
					valid: false,
					data: null,
				};
			}

			const valid = await dispatch(
				formActions.validateForm(),
			);

			const cleanData = Object.keys(data).reduce((acc, curr) => {
				const disabledWrapped = wrapToggle(extraArgs?.fieldMap[curr]?.disabled, state, false);
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

			extraArgs.hasBlurred = Object.keys(extraArgs.fieldMap).reduce((prev, curr) => ({
				...prev,
				[curr]: true,
			}), {});

			return {
				valid,
				data: cleanData,
			};
		};
	},
	resetForm() {
		return async function (dispatch) {
			await dispatch({
				type: "FORM_RESET",
			});
		};
	},
	disableForm({ disabled = false }) {
		return async function (dispatch) {
			await dispatch({
				type: disabled ? "FORM_START_DISABLE" : "FORM_END_DISABLE",
				value: disabled,
			});
		};
	},
	startBusy({ name, value }) {
		return async function (dispatch) {
			await dispatch({
				type: "FORM_START_BUSY",
				name,
				value,
			});
		};
	},
	endBusy({ name }) {
		return async function (dispatch) {
			await dispatch({
				type: "FORM_END_BUSY",
				name,
			});
		};
	},
	mountField({ name }) {
		return async function (dispatch, _, extraArgs) {
			extraArgs.mounted[name] = true;
		};
	},
	unmountField({ name }) {
		return async function (dispatch, _, extraArgs) {
			extraArgs.mounted[name] = false;

			dispatch({
				type: "FIELD_UNVALIDATE",
				name,
			});
		};
	},
	isSubmittable() {
		return async function (dispatch, getState) {
			const { disabled, busyFields } = getState();

			if (disabled) {
				// The user should never hit this since they shouldn't
				// be able to physically submit whilst the form is disabled,
				// but we'll keep it here for consistency
				dispatch({
					type: "SET_SUBMIT_WARNING",
					value: "The form cannot be submitted whilst it is disabled",
				});

				return false;
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

				return false;
			}

			return true;
		};
	},
	addValidator({ name, validator }) {
		return async function (_dispatch, _getState, extraArgs) {
			const current = extraArgs.internalValidators[name] || [];

			/**
			 * Just bail if this validator is already registered
			 */
			if (current.includes(validator)) {
				return;
			}

			extraArgs.internalValidators[name] = [
				...current,
				validator,
			];
		};
	},
	removeValidator({ name, validator }) {
		return async function (_dispatch, _getState, extraArgs) {
			const current = extraArgs.internalValidators[name] || [];

			/**
			 * Just bail if this validator isn't registered
			 */
			if (!current.includes(validator)) {
				return;
			}

			extraArgs.internalValidators[name] = current.filter(item => item !== validator);
		};
	},
};

export default formActions;
