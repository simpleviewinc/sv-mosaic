import { arrayChunks } from "@root/utils/array";
import type { TestDef } from "@simpleview/mochalib";

import { testArray } from "@simpleview/mochalib";

describe(__filename, () => {
	type Test = {
		input: string[];
		chunks: number;
		spread?: boolean;
	} & ({
		result: string[][];
	} | {
		error: string;
	})

	const tests: TestDef<Test>[] = [
		{
			name: "should evenly split array of items into specified chunks of divisible items",
			args: {
				input: ["Cat", "Dog", "Beaver", "Duck", "Cow", "Rabbit", "Giraffe", "Rhino", "Pig", "Zebra", "Lion", "Spider"],
				chunks: 3,
				result: [["Cat", "Dog", "Beaver", "Duck"], ["Cow", "Rabbit", "Giraffe", "Rhino"], ["Pig", "Zebra", "Lion", "Spider"]],
			},
		},
		{
			name: "should evenly split array of items into specified chunks of non divisible items",
			args: {
				input: ["Cat", "Dog", "Beaver", "Duck", "Cow", "Rabbit", "Giraffe", "Rhino", "Pig", "Zebra"],
				chunks: 3,
				result: [["Cat", "Dog", "Beaver", "Duck"], ["Cow", "Rabbit", "Giraffe", "Rhino"], ["Pig", "Zebra"]],
			},
		},
		{
			name: "should leave items in a single chunk if chunk is 1",
			args: {
				input: ["Cat", "Dog", "Beaver", "Duck", "Cow", "Rabbit", "Giraffe", "Rhino", "Pig", "Zebra"],
				chunks: 1,
				result: [["Cat", "Dog", "Beaver", "Duck", "Cow", "Rabbit", "Giraffe", "Rhino", "Pig", "Zebra"]],
			},
		},
		{
			name: "should not produce empty chunks",
			args: {
				input: ["Cat", "Dog", "Beaver", "Duck"],
				chunks: 5,
				result: [["Cat"], ["Dog"], ["Beaver"], ["Duck"]],
			},
		},
		{
			name: "should throw an error if chunks number provided is less than 1",
			args: {
				input: ["Cat", "Dog", "Beaver", "Duck", "Cow", "Rabbit"],
				chunks: 0,
				error: "Chunk size should be more than 0, provided 0",
			},
		},
	];

	testArray(tests, ({ input, chunks, result, error }) => {
		if (error) {
			expect(() => arrayChunks(input, chunks)).toThrowError(error);
		} else {
			expect(arrayChunks(input, chunks)).toStrictEqual(result);
		}
	});
});
