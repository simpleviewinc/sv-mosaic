import testArray from "../utils/testArray";
import * as assert from "assert";

import {
	transformColumn,
	transformRows,
} from "./dataViewTools";

describe(__filename, function() {
	describe("transformColumn", function() {
		const tests = [
			{
				name : "simple",
				args : {
					data : { foo : 2 },
					column : {
						name : "foo",
						transforms : [
							({ data }) => {
								return data * 2;
							},
						],
					},
					result : 4,
				},
			},
			{
				name : "multiple transforms",
				args : {
					data : { foo : 2 },
					column : {
						name : "foo",
						transforms : [
							({ data }) => {
								return data * 2;
							},
							({ data }) => {
								return data * 3;
							},
						],
					},
					result : 12,
				},
			},
			{
				name : "transform with no data return undefined",
				args : {
					data : {},
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
					data : { id : 2, foo : "fooValue" },
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
			const result = transformColumn(test.data, test.column);
			assert.strictEqual(result, test.result);
		});
	});

	describe("transformRows", function() {
		const tests = [
			{
				name : "simple",
				args : {
					data : [
						{ id : 1, foo : "fooValue" },
						{ id : 2, foo : "fooValue2" },
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
			const result = transformRows(test.data, test.columns);
			assert.deepStrictEqual(result, test.result);
		});
	});
});
