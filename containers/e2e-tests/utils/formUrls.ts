export const url = (page_path: string): string => {
	return `?id=${page_path}`;
};

export const urlWithKnobs = (page_path: string, knobs: string[]): string => {
	return `?id=${page_path}&args=${knobs.join(";")}`;
};
