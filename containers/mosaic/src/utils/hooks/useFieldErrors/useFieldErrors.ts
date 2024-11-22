import { useReducer, useEffect, useCallback } from "react";
import { FieldError } from "@root/components/Form";
import { arrayIntersect, arrayDifference } from "@root/utils/array";
import { FormMethods } from "@root/components/Form/useForm/types";

interface AddError {
	type: "ADD_ERROR";
	error: FieldError | FieldError[];
}

interface RemoveError {
	type: "REMOVE_ERROR";
	error: FieldError | FieldError[];
}

type Action = AddError | RemoveError;

function reducer(state: FieldError[], action: Action) {
	switch (action.type) {

	case "ADD_ERROR": {
		const incomingErrors: FieldError[] = Array.isArray(action.error) ? action.error : [action.error];
		const errorsToAdd = arrayDifference(incomingErrors, state);

		/**
		 * Don't needlessly return new state if there are no new
		 * errors to add
		 */
		if (!errorsToAdd.length) {
			return state;
		}

		return [
			...state,
			...errorsToAdd,
		];
	}
	case "REMOVE_ERROR": {
		const incomingErrors: FieldError[] = Array.isArray(action.error) ? action.error : [action.error];
		const errorsToRemove = arrayIntersect(incomingErrors, state);

		/**
		 * Don't needlessly return new state if there are
		 * no errors to remove
		 */
		if (!errorsToRemove.length) {
			return state;
		}

		return state.filter(error => !errorsToRemove.includes(error));
	}
	default: {
		throw new Error("useFieldErrors action is not valid");
	}

	}
}

type UseFieldErrorState = FieldError[];

interface UseFieldErrorParams {
	methods: FormMethods;
	name: string;
}

interface UseFieldErrorsResult {
	addError: (error: FieldError | FieldError[]) => void;
	removeError: (error: FieldError | FieldError[]) => void;
}

function useFieldErrors({ methods, name }: UseFieldErrorParams): UseFieldErrorsResult {
	const { addValidator } = methods || {};
	const [state, dispatch] = useReducer<(prevState: UseFieldErrorState, action: Action) => UseFieldErrorState>(reducer, []);
	const error = state[0];

	const addError = useCallback((error: FieldError | FieldError[]) => {
		dispatch({
			type: "ADD_ERROR",
			error,
		});
	}, [dispatch]);

	const removeError = useCallback((error: FieldError | FieldError[]) => {
		dispatch({
			type: "REMOVE_ERROR",
			error,
		});
	}, [dispatch]);

	useEffect(() => {
		if (!addValidator) {
			return;
		}

		const { remove } = addValidator({
			name,
			validator: () => {
				return error && error.message;
			},
		});

		return remove;
	}, [addValidator, error, name]);

	return {
		addError,
		removeError,
	};
}

export default useFieldErrors;
