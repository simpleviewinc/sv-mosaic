
import { useCallback, useRef, useEffect } from "react";

function useDebounce<T extends () => void>(fn: T, ms = 500) {
	const debounceTimer = useRef<NodeJS.Timeout | undefined>();

	const cancel = useCallback(() => {
		if (debounceTimer.current) {
			clearInterval(debounceTimer.current);
		}
	}, []);

	const bounce = useCallback(() => {
		cancel();
		debounceTimer.current = setTimeout(fn, ms);
	}, [cancel]);

	useEffect(() => {
		return cancel;
	}, [cancel])

	return { cancel, bounce };
}

export default useDebounce
