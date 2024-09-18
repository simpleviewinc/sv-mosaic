import type { TestDef } from "@simpleview/mochalib";

import { testArray } from "@simpleview/mochalib";
import * as assert from "assert";

import type { DataViewColumn, DataViewProps } from "@root/components/DataView";

import {
	transformColumn,
	transformRows,
} from "@root/components/DataView/dataViewTools";

describe(__filename, function() {
	describe("transformColumn", function() {
		interface Test {
			data: DataViewProps["data"][number];
			column: DataViewColumn;
			result: any;
		}

		const tests: TestDef<Test>[] = [
			{
				name : "simple",
				args : {
					data : { id: "1", foo : 2 },
					column : {
						name : "foo",
						transforms : [
							({ data }) => {
								return (data as any) * 2;
							},
						],
					},
					result : 4,
				},
			},
			{
				name : "multiple transforms",
				args : {
					data : { id: "1", foo : 2 },
					column : {
						name : "foo",
						transforms : [
							({ data }) => {
								return (data as any) * 2;
							},
							({ data }) => {
								return (data as any) * 3;
							},
						],
					},
					result : 12,
				},
			},
			{
				name : "transform with no data return undefined",
				args : {
					data : { id: "1" },
					column : {
						name : "foo",
						transforms : [
							() => {
								throw new Error("should not get here");
							},
						],
					},
					result : undefined,
				},
			},
			{
				name : "transform access another column",
				args : {
					data : { id : "2", foo : "fooValue" },
					column : {
						name : "foo",
						transforms : [
							({ data, row }) => {
								return `${data}_${row.id}`;
							},
						],
					},
					result : "fooValue_2",
				},
			},
		];

		testArray(tests, function(test) {
			const result = transformColumn(test.data as any, test.column);
			assert.strictEqual(result, test.result);
		});
	});

	describe("transformRows", function() {
		interface Test {
			data: DataViewProps["data"];
			columns: DataViewColumn[];
			result: any;
		}

		const tests: TestDef<Test>[] = [
			{
				name : "simple",
				args : {
					data : [
						{ id : "1", foo : "fooValue" },
						{ id : "2", foo : "fooValue2" },
					],
					columns : [
						{
							name : "id",
							transforms : [
								({ data }) => {
									return `id_${data}`;
								},
							],
						},
						{
							name : "foo",
							transforms : [
								({ data, row }) => {
									return `${data}_${row.id}`;
								},
							],
						},
					],
					result : [
						{ id : "id_1", foo : "fooValue_1" },
						{ id : "id_2", foo : "fooValue2_2" },
					],
				},
			},
		];

		testArray(tests, async function(test) {
			const result = transformRows(test.data as any, test.columns);
			assert.deepStrictEqual(result, test.result);
		});
	});
});
