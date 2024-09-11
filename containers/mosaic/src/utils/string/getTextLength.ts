function getTextLength(str: string): number {
	if (!("Segmenter" in Intl)) {
		return Array.from(str).length;
	}

	return [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(str)].length;
}

export default getTextLength;
