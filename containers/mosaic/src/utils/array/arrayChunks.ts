function arrayChunks<T>(input: T[], chunks: number): T[][] {
	if (chunks < 1) {
		throw new Error(`Chunk size should be more than 0, provided ${chunks}`);
	}

	const result: T[][] = [];
	const itemsPerChunk = Math.ceil(input.length / chunks);

	for (let i = 0; i < chunks; i++) {
		const chunkItems = input.slice(i * itemsPerChunk, (i + 1) * itemsPerChunk);

		if (!chunkItems.length) {
			return result;
		}

		result.push(chunkItems);
	}

	return result;
}

export default arrayChunks;
