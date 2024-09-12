const segmenter = "Segmenter" in Intl && new Intl.Segmenter("en", { granularity: "grapheme" });

function getTextLength(str: string): number {
	if (!segmenter) {
		return Array.from(str).length;
	}

	return [...segmenter.segment(str)].length;
}

export default getTextLength;
