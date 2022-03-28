import { useMemo, useRef, useCallback, useReducer } from "react";
import { EventEmitter } from "eventemitter3";
import { SectionDef } from "./FormTypes";
import { MosaicObject } from "@root/types";
import { mapsValidators, required, Validator } from "./validators";

type State = {
	data: any;
	touched: unknown;
	errors: any;
	validating: any;
	custom: unknown;
	validForm: boolean;
	disabled: unknown;
	pairedFields: { [key: string]: string[] };
}

type Action = {
	type: string;
	value: any;
	name: string;
}

export function coreReducer(state: State, action: Action): State {
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
			disabled: null,
			pairedFields: {},
		}
	case "PAIR_FIELDS":
		return {
			...state,
			pairedFields: action.value
		}
	default:
		return state;
	}
}

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

export const actions = {
	setFieldValue({ name, value, validate = false }: { name: string; value: unknown; validate?: boolean }) {
		return async function (dispatch): Promise<void> {
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
				actions.setFieldValue({
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
					await dispatch(
						actions.validateField({ name: currFieldName })
					);
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
		}
	},
	submitForm() {
		return async function (dispatch, getState, extraArgs): Promise<void> {
			if (getState().disabled)
				return;

			const isValid = await dispatch(
				actions.validateForm({ fields: extraArgs.fields })
			);

			if (isValid)
				extraArgs.onSubmit(getState().data);

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
					actions.setFieldValue({
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
	setPairedFields({ pairedFields }) {
		return async function (dispatch): Promise<void> {
			await dispatch({
				type: "FORM_START_DISABLE",
				value: true,
			});

			await dispatch({
				type: "PAIR_FIELDS",
				value: pairedFields
			});

			await dispatch({
				type: "FORM_END_DISABLE",
				value: false,
			});
		}
	}
};

type UseFormReturn = {
	events: any;
	state: any;
	dispatch: any;
	registerFields: (fields: any[]) => void;
	registerOnSubmit: (fn: any) => void;
}

export function useForm({ customReducer }: { customReducer?: ((state: State, action: Action) => any)[] } = {}): UseFormReturn {
	const extraArgs = useRef({
		fields: [],
		fieldMap: {},
		onSubmit: () => undefined,
		onLoad: () => [{ name: "", value: "" }],
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
			pairedFields: {},
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

export const generateLayout = ({ sections, fields }: { sections?: any, fields: any }): SectionDef[] => {
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
					customLayout[section]?.fields[row][col]?.push(field.name);
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

export function joinReducers(...reducers) {
	return function (state, action) {
		let newState = state;
		for (const reducer of reducers) {
			newState = reducer(newState, action);
		}
		return newState;
	};
}

export function useThunkReducer(reducer, initialState, extraArgs) {
	const lastState = useRef(initialState);
	const getState = useCallback(() => {
		const state = lastState.current;
		return state;
	}, []);
	const enhancedReducer = useCallback(
		(state, action) => {
			const newState = reducer(state, action);
			lastState.current = newState;
			return newState;
		},
		[reducer]
	);
	const [state, dispatch] = useReducer(enhancedReducer, initialState);

	const customDispatch = useCallback(
		(action) => {
			if (typeof action === "function") {
				return action(customDispatch, getState, extraArgs);
			} else {
				return dispatch(action);
			}
		},
		[getState, extraArgs]
	);

	return [state, customDispatch];
}
