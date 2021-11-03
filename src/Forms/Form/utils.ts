import { useMemo, useReducer, useRef, useCallback } from "react";
import { FormState } from "./FormTypes";
import { FieldDefProps } from "@root/components/Field";

// function reducer(state, action) {
// 	if (action.type === "FIELD_ON_CHANGE") {
// 		return {
// 			...state,
// 			data: {
// 				...state.data,
// 				[action.name]: action.value
// 			},
// 			touched: {
// 				...state.touched,
// 				[action.name]: true
// 			}
// 		};
// 	} else {
// 		return state;
// 	}
// }

// export function useForm({ fields }: { fields: FieldDefProps[] }) {
// 	const initialFormState = useMemo(() => {
// 		const data: Record<string, any> = {};
// 		const touched: Record<string, boolean> = {};
// 		const errors: Record<string, string> = {};

// 		for (const field of fields) {
// 			data[field.name] = "";
// 			touched[field.name] = false;
// 			errors[field.name] = "";
// 		}

// 		return {
// 			data,
// 			touched,
// 			errors
// 		} as FormState;
// 	}, [fields]);

// 	const fieldMap = useMemo(() => {
// 		const map = new Map<string, FieldDefProps>();
// 		for (const field of fields) {
// 			map.set(field.name, field);
// 		}
// 		return map;
// 	}, [fields]);

// 	const customReducer = function (state, action) {
// 		if (action.type === "FIELD_ON_CHANGE") {
// 			const newState = reducer(state, action);

// 			const customReducer = fieldMap.get(action.name)?.onChange;
// 			if (!customReducer) {
// 				return newState;
// 			}

// 			return customReducer(newState, action);
// 		}
// 	};

// 	const [formState, dispatch] = useReducer(customReducer, initialFormState);

// 	return {
// 		formState,
// 		dispatch
// 	};
// }

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
		// console.log("state.data", state.data.text2);
		return state;
	}, []);
	const enhancedReducer = useCallback(
		(state, action) => {
			// console.log("ENHANCED", state, action);
			const newState = reducer(state, action);
			// console.log("REDUCER COMPLETE!");
			lastState.current = newState;
			return newState;
		},
		[reducer]
	);
	const [state, dispatch] = useReducer(enhancedReducer, initialState);

	const customDispatch = useCallback(
		(action) => {
			// console.log("CUSTOM DISPATCH", action);
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
