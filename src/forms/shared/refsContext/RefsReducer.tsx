export function refsReducer(refs, action) {
	switch (action.type) {
	case "update": {
		const newRefs = {
			...refs,
			...action.ref
		}
		return newRefs
	}
	default: {
		throw Error("Unknown action: " + action.type);
	}
	}
}
