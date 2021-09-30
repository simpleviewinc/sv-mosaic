import { useMemo, useReducer, useRef, useCallback } from "react";
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
					[action.name]: undefined
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
		default:
			return state;
	}
}

async function runValidators(validators, value) {
	for (let validator of validators) {
		const result = await validator(value);
		if (result) {
			return result;
		}
	}

	return;
}

export const actions = {
	setFieldValue({ name, value, validate = true }) {
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
	}
};

export function useForm({ customReducer }: { customReducer?: ((state: any, action: any) => any)[] } = {}) {
	const extraArgs = useRef({
		fields: [],
		fieldMap: {}
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
			custom: {}
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

	return {
		events,
		state,
		dispatch,
		registerFields
	};
}
