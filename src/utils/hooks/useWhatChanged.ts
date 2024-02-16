import { useRef } from "react";

export function useWhatChanged(props: Record<string, any>) {
	const previous = useRef({});
	const entries = Object.entries(props);

	const differences: Record<string, { previous: any; current: any }> = {};

	for (const [key, value] of entries) {
		if (value === previous.current[key]) {
			continue;
		}

		differences[key] = {
			previous: previous.current[key],
			current: value,
		};
	}

	previous.current = props;

	const count = Object.keys(differences);

	if (!count.length) {
		console.log("There were no changes");
	} else {
		console.log("Some things changed:", differences);
	}
}
