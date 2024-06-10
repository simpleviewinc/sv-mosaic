import testArray from "../../utils/testArray";
import calculateAnimationState from "./calculateAnimationState";
import * as assert from "assert";

describe("Calculate animation state", () => {
	const tests = [
		{
			name: "Pass an empty array of booleans",
			args: {
				bools: [],
				animating: true,
				result: [],
			},
		},
		{
			name: "Last drawer animating out",
			args: {
				bools: [false],
				animating: true,
				result: ["closing"],
			},
		},
		{
			name: "First drawer animating in",
			args: {
				bools: [true],
				animating: true,
				result: ["opening"],
			},
		},
		{
			name: "First drawer finished animating in",
			args: {
				bools: [true],
				animating: false,
				result: ["open"],
			},
		},
		{
			name: "Animating second drawer in",
			args: {
				bools: [true, true],
				animating: true,
				result: ["stacking", "opening"],
			},
		},
		{
			name: "Finished animating second drawer in",
			args: {
				bools: [true, true],
				animating: false,
				result: ["stacked", "open"],
			},
		},
		{
			name: "Animating second drawer out",
			args: {
				bools: [true, false],
				animating: true,
				result: ["unstacking", "closing"],
			},
		},
	];

	testArray(tests, test => {
		const result = calculateAnimationState(test.bools, test.animating);

		assert.deepEqual(result, test.result);
	});
});
