export function refsReducer(refs, action) {
	switch (action.type) {
	case "update": {
		return refs.map(ref => {
			if (ref.id === action.ref.id) {
				return {
					...ref,
					current: action.ref.current
				};
			} else {
				return ref;
			}
		});
	}
	default: {
		throw Error("Unknown action: " + action.type);
	}
	}
}
