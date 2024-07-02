import * as assert from "assert";
import { testArray, TestDef } from "@simpleview/mochalib";

import calculateAnimationState from "@root/components/Drawers/calculateAnimationState";

describe("Calculate animation state", () => {
	interface Test {
		bools: boolean[];
		animating: boolean;
		result: ("closing" | "opening" | "open" | "stacking" | "stacked" | "unstacking")[];
	}

	const tests: TestDef<Test>[] = [
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
