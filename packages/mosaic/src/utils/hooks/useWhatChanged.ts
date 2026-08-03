/* eslint-disable no-console */
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

	const keys = Object.keys(differences);
	const rows = keys.reduce((acc, curr) => [
		...acc,
		{ Property: curr, Previous: differences[curr].previous, Current: differences[curr].current },
	], []);

	if (!keys.length) {
		console.log("There were no changes");
	} else {
		console.log("Some things changed:");
		console.table(rows, ["Property", "Previous", "Current"]);
	}
}
