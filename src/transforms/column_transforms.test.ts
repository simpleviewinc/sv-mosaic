import * as transforms from "./column_transforms";
import testArray from "../utils/testArray";
import * as assert from "assert";

describe(__filename, function() {
	describe("transform_boolean", function() {
		const tests = [
			{
				name : "true",
				args : {
					data : true,
					result : "Yes"
				}
			},
			{
				name : "false",
				args : {
					data : false,
					result : "No"
				}
			},
			{
				name : "undefined",
				args : {
					data : undefined,
					result : "No"
				}
			}
		];

		testArray(tests, async function(test) {
			const result = transforms.transform_boolean()(test.data);

			assert.strictEqual(result, test.result);
		})
	})

	describe("transform_join", function() {
		const tests = [
			{
				name : "single entry",
				args : {
					data : ["foo"],
					result : "foo"
				}
			},
			{
				name : "two entries",
				args : {
					data : ["foo", "bar"],
					result : "foo, bar"
				}
			},
			{
				name : "empty",
				args : {
					data : [],
					result : ""
				}
			}
		]
	
		testArray(tests, async function(test) {
			const result = transforms.transform_join()(test.data);

			assert.strictEqual(result, test.result);
		});
	});

	describe("transform_mapGet", function() {
		const tests = [
			{
				name : "bottom level key",
				args : {
					data : [{ foo : "fooValue" }],
					path : "foo",
					result : ["fooValue"]
				}
			},
			{
				name : "nested key",
				args : {
					data : [{ foo : { nested : "nValue" } }, { foo : { nested : "nValue2" } }],
					path : "foo.nested",
					result : ["nValue", "nValue2"]
				}
			},
			{
				name : "nested key with an undefined",
				args : {
					data : [
						{ foo : { nested : "nValue" } },
						{ bogus : true },
						{ foo : { nested : "nValue2" } },
						{ foo : { bogus : true } },
						{ foo : { nested : null } }
					],
					path : "foo.nested",
					result : ["nValue", "nValue2"]
				}
			},
			{
				name : "no items",
				args : {
					data : [],
					path : "foo",
					result : []
				}
			}
		]

		testArray(tests, async function(test) {
			const result = transforms.transform_mapGet(test.path)(test.data);
			assert.deepStrictEqual(result, test.result);
		})
	})
});