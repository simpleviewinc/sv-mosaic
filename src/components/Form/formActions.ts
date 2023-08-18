import { MosaicObject } from "@root/types";
import { mapsValidators, required, Validator } from "./validators";

async function runValidators(
	validators: Validator[],
	value: unknown,
	data: unknown
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
		return false
	}

	return true;
}

export const formActions = {
	init({ fields }) {
		return async function (_dispatch, _getState, extraArgs): Promise<void> {
			extraArgs.fields = fields;
			const fieldMap = fields.reduce((prev, curr) => {
				prev[curr.name] = curr;
				return prev;
			}, {});
			extraArgs.fieldMap = fieldMap;
		};
	},
	setFieldValue({
		name,
		value,
		validate = false,
		touched = false,
	}: {
		name: string;
		value: unknown;
		validate?: boolean;
		touched?: boolean;
	}) {
		return async function(dispatch): Promise<void> {
			await dispatch({
				type: "FIELD_ON_CHANGE",
				name,
				value: isValidValue(value) ? value : undefined,
			});

			if (touched) {
				await dispatch({
					type: "FIELD_TOUCHED",
					name,
					value: touched,
				});
			}

			if (validate) {
				await dispatch(formActions.validateField({ name }));
			}
		};
	},
	/**
	 * Internal use only
	 */
	_setFieldValues({ values }: { values: MosaicObject }) {
		return async function(dispatch): Promise<void> {
			return dispatch({
				type: "FIELDS_ON_CHANGE",
				value: values
			});
		}
	},
	validateField({ name }: { name: string }) {
		return async function (dispatch, getState, extraArgs): Promise<void> {
			const {data, mounted} = getState();

			if (!mounted[name]) {
				return;
			}

			/**
			 * We dispatch an undefined so that way, if by any reason
			 * the field had an error message and then became disabled,
			 * the error would get removed from the state.
			 */
			if (extraArgs?.fieldMap[name]?.disabled) {
				await dispatch({
					type: "FIELD_UNVALIDATE",
					name
				});

				return;
			}
			const requiredFlag = extraArgs?.fieldMap[name]?.required;
			const validators = extraArgs?.fieldMap[name]?.validators ? extraArgs?.fieldMap[name]?.validators : [];

			if (validators.length === 0 && !requiredFlag) {
				return;
			}

			if (requiredFlag) {
				validators.unshift(required);
			}

			const validatorsMap = mapsValidators(validators);

			const startValue = getState().data[name];
			const result = await runValidators(validatorsMap, startValue, data);
			const currentValue = getState().data[name];

			if (startValue === currentValue) {
				if (result?.errorMessage) {
					await dispatch({
						type: "FIELD_VALIDATE",
						name,
						value: result?.errorMessage
					});
				} else {
					await dispatch({
						type: "FIELD_UNVALIDATE",
						name
					});
				}
			}
		};
	},
	copyFieldToField({ from, to }: { from: any; to: string }) {
		return async function (dispatch, getState): Promise<void> {
			const fromValue = getState().data[from];
			await dispatch(
				formActions.setFieldValue({
					name: to,
					value: fromValue
				})
			);
		};
	},
	validateForm({ fields }) {
		return async function (dispatch, getState): Promise<boolean> {
			await dispatch({
				type: "FORM_START_DISABLE",
				value: true,
			});

			const touchedFields = getState().data;

			for (let i = 0; i < fields.length; i++) {
				const currFieldName = fields[i].name;
				(!!touchedFields[currFieldName] === false ||
					Array.isArray(touchedFields[currFieldName]) || typeof touchedFields[currFieldName] === "object") &&
					(await dispatch(
						formActions.validateField({ name: currFieldName })
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
		return async function (dispatch, getState, extraArgs): Promise<{ valid: boolean; data: any; }> {
			const { disabled, data, mounted } = getState();

			if (disabled)
				return;

			const valid = await dispatch(
				formActions.validateForm({ fields: extraArgs.fields })
			);

			if (valid) {
				await dispatch({
					type: "PROPERTY_RESET",
					name: "touched",
					value: {},
				});
			}

			const cleanData = Object.keys(data).reduce((acc, curr) => ({
				...acc,
				[curr]: mounted[curr] ? data[curr] : undefined
			}), {});

			return {
				valid,
				data: cleanData
			}
		}
	},
	resetForm() {
		return async function (dispatch): Promise<void> {
			await dispatch({
				type: "FORM_RESET",
			});
		}
	},
	setFormValues({ values }: { values: MosaicObject }) {
		return async function (dispatch): Promise<void> {
			for (const [key, value] of Object.entries(values)) {
				await dispatch(
					formActions.setFieldValue({
						name: key,
						value: value,
						touched: false
					})
				);
			}
		}
	},
	disableForm({ disabled = false }: { disabled: boolean }) {
		return async function (dispatch): Promise<void> {
			await dispatch({
				type: disabled ? "FORM_START_DISABLE" : "FORM_END_DISABLE",
				value: disabled,
			});
		}
	},
	mountField({ name }: { name: string }) {
		return async function (dispatch): Promise<void> {
			await dispatch({
				type: "MOUNT_FIELD",
				name
			})
		}
	},
	unmountField({ name }: { name: string }) {
		return async function (dispatch): Promise<void> {
			await dispatch({
				type: "UNMOUNT_FIELD",
				name
			})
		}
	},
};

export default formActions;
