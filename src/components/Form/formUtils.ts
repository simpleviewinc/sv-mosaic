import { MosaicObject } from "@root/types";
import { useRef, useCallback, useReducer, Dispatch } from "react";
import { SectionDef } from "./FormTypes";

type State = {
	data: MosaicObject<any>;
	errors: MosaicObject<string>;
	validating: MosaicObject;
	custom: unknown;
	validForm: boolean;
	disabled: boolean;
	touched: MosaicObject<boolean>;
	mounted: MosaicObject<boolean>;
	busyFields: MosaicObject<boolean>;
	submitWarning: string
}

type ActionTypes =
	| "FIELD_ON_CHANGE"
	| "FIELD_TOUCHED"
	| "FIELD_VALIDATE"
	| "FIELD_UNVALIDATE"
	| "FORM_START_DISABLE"
	| "FORM_END_DISABLE"
	| "FORM_VALIDATE"
	| "FORM_START_DISABLE"
	| "FORM_END_DISABLE"
	| "FORM_VALIDATE"
	| "FORM_RESET"
	| "PROPERTY_RESET"
	| "MOUNT_FIELD"
	| "UNMOUNT_FIELD"
	| "FORM_START_BUSY"
	| "FORM_END_BUSY"
	| "SET_SUBMIT_WARNING"

type Action = {
	type: ActionTypes;
	value: any;
	name?: string;
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
		// TODO this is bad there's no support for multiple errors, but will be refactored in
		// https://simpleviewtools.atlassian.net/browse/MOS-1131
		return state.errors[action.name] !== undefined ? state : {
			...state,
			errors: {
				...state.errors,
				[action.name]: action.value
			},
		};
	case "FIELD_UNVALIDATE": {
		return {
			...state,
			errors: {
				...state.errors,
				[action.name]: undefined
			},
		};
	}
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
	case "MOUNT_FIELD":
		return {
			...state,
			mounted: {
				...state.mounted,
				[action.name]: true
			}
		}
	case "UNMOUNT_FIELD":
		return {
			...state,
			errors: {
				...state.errors,
				[action.name]: undefined
			},
			mounted: {
				...state.mounted,
				[action.name]: false
			}
		}
	case "FORM_START_BUSY": {
		return {
			...state,
			busyFields: {
				...state.busyFields,
				[action.name]: action.value
			}
		}
	}
	case "FORM_END_BUSY": {
		return {
			...state,
			busyFields: {
				...state.busyFields,
				[action.name]: undefined
			}
		}
	}
	case "SET_SUBMIT_WARNING": {
		return {
			...state,
			submitWarning: action.value
		}
	}
	default:
		return state;
	}
}

type CustomDispatch = (action: any) => any | Dispatch<Action>;

type UseFormReturn = {
	state: State;
	dispatch:  CustomDispatch;
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
			disabled: true,
			touched: {},
			mounted: {},
			busyFields: {},
			submitWarning: ""
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
		customLayout = sections.map(({fields, ...section}) => ({...section, fields: [...fields]}));

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

	const customDispatch: CustomDispatch = useCallback(
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
