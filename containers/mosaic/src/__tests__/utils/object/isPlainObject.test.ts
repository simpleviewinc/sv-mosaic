import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import isPlainObject from "@root/utils/object/isPlainObject";

describe(__dirname, () => {
	interface Test {
		value: any;
		result: boolean;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should consider an empty object literal to a plain object",
			args: {
				value: {},
				result: true,
			},
		},
		{
			name: "should consider an object created with new Object to be a plain object",
			args: {
				value: new Object(),
				result: true,
			},
		},
		{
			name: "should consider a instantiated object to not be a plain object",
			args: {
				value: new Date(),
				result: false,
			},
		},
		{
			name: "should consider a function to not be a plain object",
			args: {
				value: new Date(),
				result: false,
			},
		},
		{
			name: "should consider an array literal to not be a plain object",
			args: {
				value: [],
				result: false,
			},
		},
		{
			name: "should consider number to not be a plain object",
			args: {
				value: 1,
				result: false,
			},
		},
		{
			name: "should consider a string literal to not be a plain object",
			args: {
				value: "Foo",
				result: false,
			},
		},
	];

	testArray<Test>(tests, (test) => expect(isPlainObject(test.value)).toEqual(test.result));
});
