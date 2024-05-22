export const url = (page_path: string): string => {
	return `?id=${page_path}`;
};

export const urlWithKnobs = (page_path: string, knobs: string[]): string => {
	let addedKnobs = "";
	for (const knob in knobs) {
		addedKnobs += "&" + knobs[knob];
	}
	return `?id=${page_path}${addedKnobs}`;
};
