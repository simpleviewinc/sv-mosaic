function throws(message: string) {
	return function() {
		throw new Error(message);
	};
}

export default throws;
