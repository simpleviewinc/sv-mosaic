import type { ForwardedRef } from "react";
import { useCallback } from "react";

function useSpreadRefs<T extends HTMLElement>(refs: (ForwardedRef<T> | React.MutableRefObject<T>)[]) {
	return useCallback((elem: T) => {
		for (const ref of refs) {
			if (typeof ref === "function") {
				ref(elem);
			} else if (ref && "current" in ref) {
				ref.current = elem;
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, refs);
}

export default useSpreadRefs;
