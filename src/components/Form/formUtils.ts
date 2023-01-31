import { MosaicObject } from "@root/types";
import { useRef, useCallback, useReducer } from "react";
import { SectionDef } from "./FormTypes";

type State = {
	data: MosaicObject;
	errors: any;
	validating: any;
	custom: unknown;
	validForm: boolean;
	disabled: boolean;
	touched: { [key: string]: boolean };
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
	case "FIELD_TOUCHED":
		return {
			...state,
			touched: {
				...state.touched,
				[action.name]: action.value
			}
		};
	case "FIELD_VALIDATE":
		return {
			...state,
			errors: {
				...state.errors,
				[action.name]: action.value
			},
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
			errors: {},
			validating: {},
			custom: {},
			validForm: false,
			disabled: false,
		}
	case "PROPERTY_RESET":
		return {
			...state,
			[action.name]: action.value
		}
	default:
		return state;
	}
}


type UseFormReturn = {
	state: any;
	dispatch: any;
}

export function useForm(): UseFormReturn {
	const extraArgs = useRef({
		fields: [],
		fieldMap: {},
		onSubmit: () => undefined,
	});

	const [state, dispatch] = useThunkReducer(
		coreReducer,
		{
			data: {},
			errors: {},
			validating: {},
			custom: {},
			validForm: false,
			disabled: false,
			touched: {}
		},
		extraArgs.current
	);

	return { state, dispatch };
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
