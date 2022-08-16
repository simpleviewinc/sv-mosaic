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
	setFieldValue({ name, value, validate = false }: { name: string; value: unknown; validate?: boolean }) {
		return async function (dispatch): Promise<void> {
			await dispatch({
				type: "FIELD_ON_CHANGE",
				name,
				value
			});

			if (validate) {
				dispatch(formActions.validateField({ name }));
			}
		};
	},
	validateField({ name }: { name: string }) {
		return async function (dispatch, getState, extraArgs): Promise<void> {
			const requiredFlag = extraArgs?.fieldMap[name]?.required;
			const validators = extraArgs?.fieldMap[name]?.validators ? extraArgs?.fieldMap[name]?.validators : [];

			if ((!validators || validators.length === 0) && !requiredFlag) {
				return;
			}

			if ((!validators || validators.length === 0) && requiredFlag) {
				validators.unshift(required);
			}

			if ((validators || validators.length !== 0) && requiredFlag) {
				validators.unshift(required);
			}

			const validatorsMap = mapsValidators(validators);

			await dispatch({
				type: "FIELD_START_VALIDATE",
				name,
			});

			const data = getState().data;
			const startValue = getState().data[name];
			const result = await runValidators(validatorsMap, startValue, data);
			const currentValue = getState().data[name];

			if (startValue === currentValue) {
				await dispatch({
					type: "FIELD_END_VALIDATE",
					name,
					value: result?.errorMessage ? result?.errorMessage : undefined
				});
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

			// await new Promise((res) => setTimeout(res, 2000));

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

			const errors = getState().errors;
			Object.entries(errors).forEach(([key, value]) => {
				if (value !== undefined)
					validForm = false;
			});

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
			if (getState().disabled)
				return;

			const valid = await dispatch(
				formActions.validateForm({ fields: extraArgs.fields })
			);

			return {
				valid,
				data: getState().data
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
			await dispatch({
				type: "FORM_START_DISABLE",
				value: true,
			});

			for (const [key, value] of Object.entries(values)) {
				await dispatch(
					formActions.setFieldValue({
						name: key,
						value: value,
					})
				);
			}

			await dispatch({
				type: "FORM_END_DISABLE",
				value: false,
			});
		}
	},
};

export default formActions;
