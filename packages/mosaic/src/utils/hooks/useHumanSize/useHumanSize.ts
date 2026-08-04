import { useMemo } from "react";
import { pretty } from "@root/utils/formatters";

function useHumanSize(size: number | string) {
	const sizeHuman = useMemo(() => {
		// Support legacy string size, i.e. "123 bytes"
		const sanitized = parseInt(String(size), 10);
		return pretty(sanitized);
	}, [size]);

	return sizeHuman;
}

export default useHumanSize;
