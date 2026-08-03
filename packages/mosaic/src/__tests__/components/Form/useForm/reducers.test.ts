import { getInitialState } from "@root/components/Form/useForm/initial";
import { reducer } from "@root/components/Form/useForm/reducers";

describe(__dirname, () => {
	it("should preserve inputRevision when set field values without a revision update", () => {
		const state = {
			...getInitialState(),
			inputRevision: 2,
			data: { date: new Date("2024-01-01") },
			internalData: { date: { date: new Date("2024-01-01") } },
		};

		const nextState = reducer(state, {
			type: "SET_FIELD_VALUES",
			values: state.data,
			internalValues: { date: { date: null } },
		});

		expect(nextState.inputRevision).toBe(2);
	});

	it("should update inputRevision when set field values includes a revision update", () => {
		const state = getInitialState();

		const nextState = reducer(state, {
			type: "SET_FIELD_VALUES",
			values: {},
			internalValues: {},
			inputRevision: 1,
		});

		expect(nextState.inputRevision).toBe(1);
	});

	it("should set inputRevision on reset", () => {
		const state = {
			...getInitialState(),
			inputRevision: 4,
		};

		const nextState = reducer(state, {
			type: "RESET",
			data: {},
			internalData: {},
			inputRevision: 5,
		});

		expect(nextState.inputRevision).toBe(5);
	});
});
