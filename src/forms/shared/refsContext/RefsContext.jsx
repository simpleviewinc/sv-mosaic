import * as React from "react";
import { createContext, useContext, useReducer } from "react";
import { refsReducer } from "./RefsReducer";
import PropTypes from "prop-types";

export const RefsContext = createContext(null);
export const RefsDispatchContext = createContext(null);

const initialRefs = [
	{
		id: "topComponentDrawerRef",
		current: null,
	},
	{
		id: "formLayoutRef",
		current: null
	}
];

export function RefsProvider({ children }) {
	const [refs, dispatch] = useReducer(
		refsReducer,
		initialRefs
	);

	return (
		<RefsContext.Provider value={refs}>
			<RefsDispatchContext.Provider value={dispatch}>
				{children}
			</RefsDispatchContext.Provider>
		</RefsContext.Provider>
	);
}

RefsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export function useRefs() {
	return useContext(RefsContext);
}

export function useRefsDispatch() {
	return useContext(RefsDispatchContext);
}
