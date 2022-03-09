import { useReducer, useRef, useCallback } from 'react';

export function joinReducers(...reducers) {
	return function(state, action) {
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
			if (typeof action === 'function') {
				return action(customDispatch, getState, extraArgs);
			} else {
				return dispatch(action);
			}
		},
		[getState, extraArgs]
	);

	return [state, customDispatch];
}
