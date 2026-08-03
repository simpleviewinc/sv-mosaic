import { useEffect, useRef } from "react";

function useMountWarning(msg: string, condition = true) {
	const warned = useRef(false);

	useEffect(() => {
		if (warned.current || !condition) {
			return;
		}

		console.warn(msg);
		warned.current = true;
	});
}

export default useMountWarning;
