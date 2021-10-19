import { useMemo, useRef, useCallback } from "react";
import { EventEmitter } from "eventemitter3";

import { joinReducers, useThunkReducer } from "./utils";

function coreReducer(state, action) {
	// console.log("reducer", action);

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
			const validators = extraArgs.fieldMap[name].validators;
			if (!validators) {
				return;
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
		return async function (dispatch, getState, extraArgs) {
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
		return async (dispatch, getState, extraArgs) => {
			dispatch({
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
				if(value !== undefined)
					validForm = false;
			});

			dispatch({
				type: "FORM_VALIDATE",
				value: validForm,
			});

			await new Promise((res) => setTimeout(res, 5000));

			dispatch({
				type: "FORM_END_DISABLE",
				value: false,
			});

			return validForm;

			// if(validForm)
			// 	extraArgs.onSubmit(touchedFields);
		}
	},
	submitForm() {
		return async (dispatch, getState, extraArgs) => {
			if(getState().disabled)
				return;

			let isValid = await dispatch(
				actions.validateForm({ fields: extraArgs.fields })
			);
	
			if(isValid)
				extraArgs.onSubmit(getState().data);

		}
	}
};

export function useForm({ customReducer }: { customReducer?: ((state: any, action: any) => any)[] } = {}) {
	const extraArgs = useRef({
		fields: [],
		fieldMap: {},
		onSubmit: () => {}
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
