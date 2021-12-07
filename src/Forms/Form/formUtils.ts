import { useMemo, useRef, useCallback } from "react";
import { EventEmitter } from "eventemitter3";

import { joinReducers, useThunkReducer } from "./utils";
import { SectionDef } from "./FormTypes";
import { required } from "./validators";

export function coreReducer(state, action) {
	switch (action.type) {
		case "FIELD_ON_CHANGE":
			return {
				...state,
				data: {
					...state.data,
					[action.name]: action.value
				}
			};
		case "FIELD_START_VALIDATE":
			return {
				...state,
				errors: {
					...state.errors,
					// [action.name]: undefined
					[action.name]: null
				},
				validating: {
					...state.validating,
					[action.name]: true
				}
			};
		case "FIELD_END_VALIDATE":
			return {
				...state,
				errors: {
					...state.errors,
					[action.name]: action.value
				},
				validating: {
					...state.validating,
					[action.name]: undefined
				}
			};
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
				touched: {},
				errors: {},
				validating: {},
				custom: {},
				validForm: false,
				disabled: null
			}
		default:
			return state;
	}
}

async function runValidators(validators, value) {
	for (const validator of validators) {
		const result = await validator(value);
		if (result) {
			return result;
		}
	}

	return;
}

export const actions = {
	setFieldValue({ name, value, validate = false }) {
		return async function (dispatch) {
			await dispatch({
				type: "FIELD_ON_CHANGE",
				name,
				value
			});

			if (validate === true) {
				dispatch(actions.validateField({ name }));
			}
		};
	},
	validateField({ name }) {
		return async function (dispatch, getState, extraArgs) {
			console.log('validate field');
			const requiredFlag = extraArgs?.fieldMap[name]?.required;
			let validators = extraArgs?.fieldMap[name]?.validators;

			if (!validators && !requiredFlag) {
				return;
			}

			if (!validators && requiredFlag) {
				validators = [];
				validators.unshift(required);
			}

			dispatch({
				type: "FIELD_START_VALIDATE",
				name
			});
			const startValue = getState().data[name];
			const result = await runValidators(validators, startValue);
			const currentValue = getState().data[name];

			if (startValue === currentValue) {
				dispatch({
					type: "FIELD_END_VALIDATE",
					name,
					value: result
				});
			}
		};
	},
	copyFieldToField({ from, to }) {
		return async function (dispatch, getState) {
			const fromValue = getState().data[from];
			dispatch(
				actions.setFieldValue({
					name: to,
					value: fromValue
				})
			);
		};
	},
	validateForm({ fields }) {
		return async (dispatch, getState) => {
			await dispatch({
				type: "FORM_START_DISABLE",
				value: true,
			});

			const touchedFields = getState().data;

			for (let i = 0; i < fields.length; i++) {
				let currFieldName = fields[i].name;
				!!touchedFields[currFieldName] === false &&
					await dispatch(
						actions.validateField({ name: currFieldName })
					);
			}

			let validForm = true;

			let errors = getState().errors;
			Object.entries(errors).forEach(([key, value]) => {
				if (value !== undefined)
					validForm = false;
			});

			await dispatch({
				type: "FORM_VALIDATE",
				value: validForm,
			});

			await new Promise((res) => setTimeout(res, 2000));

			await dispatch({
				type: "FORM_END_DISABLE",
				value: false,
			});

			console.log('right');

			return validForm;

			// if(validForm)
			// 	extraArgs.onSubmit(touchedFields);
		}
	},
	submitForm() {
		return async (dispatch, getState, extraArgs) => {
			if (getState().disabled)
				return;

			let isValid = await dispatch(
				actions.validateForm({ fields: extraArgs.fields })
			);

			if (isValid)
				extraArgs.onSubmit(getState().data);

		}
	},
	resetForm() {
		return async (dispatch) => {
			dispatch({
				type: "FORM_RESET",
			});
		}
	}
};

export function useForm({ customReducer }: { customReducer?: ((state: any, action: any) => any)[] } = {}) {
	const extraArgs = useRef({
		fields: [],
		fieldMap: {},
		onSubmit: () => { }
	});
	const reducer = useMemo(() => {
		return customReducer
			? joinReducers(coreReducer, customReducer)
			: coreReducer;
	}, [customReducer]);

	const events = useMemo(() => new EventEmitter(), []);
	const [state, dispatch] = useThunkReducer(
		reducer,
		{
			data: {},
			touched: {},
			errors: {},
			validating: {},
			custom: {},
			validForm: false,
			disabled: null,
		},
		extraArgs.current
	);

	const registerFields = useCallback((fields) => {
		extraArgs.current.fields = fields;

		const fieldMap = fields.reduce((prev, curr) => {
			prev[curr.name] = curr;
			return prev;
		}, {});

		extraArgs.current.fieldMap = fieldMap;
	}, []);

	const registerOnSubmit = useCallback((fn) => {
		extraArgs.current.onSubmit = fn;
	}, []);

	return {
		events,
		state,
		dispatch,
		registerFields,
		registerOnSubmit,
	};
}

const isEmpty = (arr) => {
	return Array.isArray(arr) && (arr.length === 0 || arr.every(isEmpty));
};

export const generateLayout = ({ sections, fields }: { sections?: any, fields: any }) => {
	let customLayout: SectionDef[] = [];

	if (sections) {
		customLayout = JSON.parse(JSON.stringify(sections));
		customLayout.forEach((section, idx) => {
			const nonEmptyRows = section.fields.map(row => {
				const nonEmptyCols = row.filter(col => !isEmpty(col));
				if (nonEmptyCols.length > 0) {
					return nonEmptyCols;
				}
			}).filter(row => row !== undefined);

			customLayout[idx].fields = nonEmptyRows;
		});
	}

	if (fields) {
		for (const field of fields) {
			if (field.layout) {
				let section = customLayout.length;
				if (field.layout.section !== undefined && field.layout.section >= 0) {
					section = field.layout.section;
				}

				let row = customLayout[section]?.fields?.length;
				if (field.layout.row !== undefined && field.layout.row >= 0) {
					row = field.layout.row;
				}

				let col = customLayout[section]?.fields[row]?.length;
				if (field.layout.col !== undefined && field.layout.col >= 0) {
					col = field.layout.col;
				}

				if (customLayout[section]) {
					customLayout[section].fields[row][col].push(field.name);
				} else {
					customLayout = [
						...customLayout,
						{
							fields: [[[field.name]]],
						},
					];
				}
			} else if (!sections) {
				customLayout = [
					...customLayout,
					{
						fields: [[[field.name]]],
					},
				];
			}
		}

		return customLayout;
	}
};
