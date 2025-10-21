import React from "react";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import { isReactElement } from "@root/types";

class ClassComponent extends React.Component {}

describe(__filename, function () {
	interface Test {
		input: unknown;
		result: boolean;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should return true for a string",
			args: {
				input: "Foo",
				result: false,
			},
		},
		{
			name: "should return true for a number",
			args: {
				input: 123,
				result: false,
			},
		},
		{
			name: "should return true for a boolean",
			args: {
				input: true,
				result: false,
			},
		},
		{
			name: "should return true for null",
			args: {
				input: null,
				result: false,
			},
		},
		{
			name: "should return true for undefined",
			args: {
				input: undefined,
				result: false,
			},
		},
		{
			name: "should return true for an array",
			args: {
				input: ["foo", "bar"],
				result: false,
			},
		},
		{
			name: "should return true for a instantiated functional component",
			args: {
				input: <div>foo</div>,
				result: true,
			},
		},
		{
			name: "should return true for a instantiated class component",
			args: {
				input: <ClassComponent />,
				result: true,
			},
		},
		{
			name: "should return false for a plain object",
			args: {
				input: { foo: "bar" },
				result: false,
			},
		},
		{
			name: "should return false for a function",
			args: {
				input: () => null,
				result: false,
			},
		},
		{
			name: "should return false for a symbol",
			args: {
				input: Symbol("Foo"),
				result: false,
			},
		},
	];

	testArray(tests, ({ input, result }) => {
		expect(isReactElement(input)).toBe(result);
	});
});
