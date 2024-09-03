import * as React from "react";
import { testArray, TestDef } from "@simpleview/mochalib";

import * as transforms from "@root/transforms/column_transforms";
import * as assert from "assert";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe(__filename, function() {
	describe("transform_boolean", function() {
		interface Test {
			data: boolean;
			result: "Yes" | "No";
		}

		const tests: TestDef<Test>[] = [
			{
				name: "true",
				args: {
					data: true,
					result: "Yes",
				},
			},
			{
				name: "false",
				args: {
					data: false,
					result: "No",
				},
			},
			{
				name: "undefined",
				args: {
					data: undefined,
					result: "No",
				},
			},
		];

		testArray(tests, async function(test) {
			const result = transforms.transform_boolean()({ data: test.data });

			assert.strictEqual(result, test.result);
		});
	});

	describe("transform_join", function() {
		interface Test {
			data: string[];
			result: string;
		}

		const tests: TestDef<Test>[] = [
			{
				name: "single entry",
				args: {
					data: ["foo"],
					result: "foo",
				},
			},
			{
				name: "two entries",
				args: {
					data: ["foo", "bar"],
					result: "foo, bar",
				},
			},
			{
				name: "empty",
				args: {
					data: [],
					result: "",
				},
			},
		];

		testArray(tests, async function(test) {
			const result = transforms.transform_join()({ data: test.data });

			assert.strictEqual(result, test.result);
		});
	});

	describe("transform_mapGet", function() {
		interface Test {
			data: any;
			path: string;
			result: string[];
		}

		const tests: TestDef<Test>[] = [
			{
				name: "bottom level key",
				args: {
					data: [{ foo: "fooValue" }],
					path: "foo",
					result: ["fooValue"],
				},
			},
			{
				name: "nested key",
				args: {
					data: [{ foo: { nested: "nValue" } }, { foo: { nested: "nValue2" } }],
					path: "foo.nested",
					result: ["nValue", "nValue2"],
				},
			},
			{
				name: "nested key with an undefined",
				args: {
					data: [
						{ foo: { nested: "nValue" } },
						{ bogus: true },
						{ foo: { nested: "nValue2" } },
						{ foo: { bogus: true } },
						{ foo: { nested: null } },
					],
					path: "foo.nested",
					result: ["nValue", "nValue2"],
				},
			},
			{
				name: "no items",
				args: {
					data: [],
					path: "foo",
					result: [],
				},
			},
		];

		testArray(tests, async function(test) {
			const result = transforms.transform_mapGet(test.path)({
				data: test.data,
			});
			assert.deepStrictEqual(result, test.result);
		});
	});

	describe("transform_chips", () => {
		const data = [
			{
				label: "Chip 1",
				value: "chip-1",
			},
			{
				label: "Chip 2",
				value: "chip-2",
			},
			{
				label: "Chip 3",
				value: "chip-3",
			},
			{
				label: "Chip 4",
				value: "chip-4",
			},
		];

		it("should render a list of chips given some data", () => {
			render(<>{transforms.transform_chips()({ data })}</>);

			const chips = screen.getAllByTestId("chip-testid");

			expect(chips).toHaveLength(4);
			expect(screen.getByText("Chip 1")).toBeInTheDocument();
			expect(screen.getByText("Chip 2")).toBeInTheDocument();
			expect(screen.getByText("Chip 3")).toBeInTheDocument();
			expect(screen.getByText("Chip 4")).toBeInTheDocument();
		});
	});
});
