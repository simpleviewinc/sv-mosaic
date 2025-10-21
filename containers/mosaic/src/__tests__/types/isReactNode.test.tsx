import React from "react";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import { isReactNode } from "@root/types";

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
				result: true,
			},
		},
		{
			name: "should return true for a number",
			args: {
				input: 123,
				result: true,
			},
		},
		{
			name: "should return true for a boolean",
			args: {
				input: true,
				result: true,
			},
		},
		{
			name: "should return true for null",
			args: {
				input: null,
				result: true,
			},
		},
		{
			name: "should return true for undefined",
			args: {
				input: undefined,
				result: true,
			},
		},
		{
			name: "should return true for an array",
			args: {
				input: ["foo", "bar"],
				result: true,
			},
		},
		{
			name: "should return true for a React element",
			args: {
				input: <div>foo</div>,
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
		expect(isReactNode(input)).toBe(result);
	});
});
