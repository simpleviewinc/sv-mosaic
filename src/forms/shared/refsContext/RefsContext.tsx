import { MosaicObject } from "@root/types";
import * as React from "react";
import { createContext, useContext, useReducer } from "react";
import { refsReducer } from "./RefsReducer";

export const RefsContext = createContext(null);
export const RefsDispatchContext = createContext(null);

export function RefsProvider({ children, initialRefs }: {children: JSX.Element, initialRefs: MosaicObject}) {
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

export function useRefs() {
	return useContext(RefsContext);
}

export function useRefsDispatch() {
	return useContext(RefsDispatchContext);
}
