import testArray from "../../utils/testArray";
import * as assert from "assert";
import { actions, coreReducer, generateLayout } from "./formUtils";
import { FieldDef } from "../../components/Field";
import { mapsValidators, required, validateEmail, validateNumber, validateSlow, validateURL } from "./validators";
import { TextFieldDef } from "../FormFieldText";

const runTests = (tests, type) => {
	switch (type) {
	case "dispatch":
		testArray(tests, async test => {
			const state = test["state"] ? test["state"] : {};
			const extraArgs = test["extraArgs"] ? test["extraArgs"] : {};
			const args = test["args"] ? test["args"] : [];

			const dispatches = [];
			const dispatch = async action => {
				if (action instanceof Function) {
					await action(dispatch, getState, extraArgs);
				} else {
					dispatches.push(action);
				}
			}

			const getState = () => state;
			const fn = actions[test["action"]](...args);
			await fn(dispatch, getState, extraArgs);

			assert.deepStrictEqual(dispatches, test["calls"]);
		});
		break;
	case "reducer":
		testArray(tests, test => {
			const state = test["state"] ? test["state"] : {};
			const result = coreReducer(state, test["action"]);

			assert.deepStrictEqual(result, test["result"]);
			assert.notStrictEqual(state, result);
		});
		break;
	case "validator":
		testArray(tests, async test => {
			const validator = mapsValidators([test["validator"]])[0].fn;
			const data = test["data"] ? test["data"] : {};
			const options = test["validator"].options ? test["validator"].options : {}

			const result = await validator(test["value"], data, options);

			assert.deepStrictEqual(result, test["result"]);
		});
		break;
	default:
		break;
	}
};

describe("Layout logic", () => {
	const fields = [
		{
			name: "text1",
			label: "Simple Text",
			type: "text",
		},
		{
			name: "text2",
			label: "Text with validators and dynamic help",
			type: "text",
		},
		{
			name: "text3",
			label: "Text that copies to the next input",
			type: "text"
		},
		{
			name: "text4",
			label: "Text that receives copy",
			type: "text"
		}
	] as FieldDef<TextFieldDef>[];

	const sections = [
		{
			fields: [
				// row 1
				[["text1"], ["text2"], ["text3"]],
				// row 2
				[["text3"], ["text4"], ["text1"]],
				[[]],
			]
		},
		{
			fields: [
				// row 1
				[[], ["text2"], ["text3"]],
				// row 2
				[[], [], []],
				[[]],
			]
		}
	]

	const tests = [
		{
			name: "Create layout with only fields",
			args: {
				type: "fields",
				data: fields,
				result: [
					{
						fields: [[["text1"]]]
					},
					{
						fields: [[["text2"]]]
					},
					{
						fields: [[["text3"]]]
					},
					{
						fields: [[["text4"]]]
					},
				]
			}
		},
		{
			name: "Ignore empty positions",
			args: {
				type: "sections",
				data: sections,
				result: [
					{
						fields: [
							[["text1"], ["text2"], ["text3"]],
							[["text3"], ["text4"], ["text1"]]
						]
					},
					{
						fields: [
							[["text2"], ["text3"]],
						]
					},
				]
			}
		},
		{
			name: "No sections",
			args: {
				type: "sections",
				data: [
					{
						fields: [
							// row 1
							[[], [], []],
							// row 2
							[[], [], []],
							[[]],
						]
					},
					{
						fields: [
							// row 1
							[[], [], []],
							// row 2
							[[], [], []],
							[[]],
						]
					}
				],
				result: [
					{
						fields: []
					},
					{
						fields: []
					},
				]
			}
		}
	];

	testArray(tests, test => {
		let result: unknown;
		test.type === "fields" ?
			result = generateLayout({ fields })
			:
			result = generateLayout({ fields, sections: test.data })

		assert.deepStrictEqual(result, test.result);
	});
});

describe("REDUCERS: FIELD_ON_CHANGE", () => {
	const tests = [
		{
			name: "Adding text to a field",
			args: {
				action: {
					name: "field1",
					value: "newValue",
					type: "FIELD_ON_CHANGE",
				},
				result: {
					data: {
						"field1": "newValue"
					}
				},
			},
		},
		{
			name: "Passing undefined",
			args: {
				action: {
					name: "field1",
					value: undefined,
					type: "FIELD_ON_CHANGE",
				},
				result: {
					data: {
						"field1": undefined,
					}
				},
			},
		},
		{
			name: "Passing a boolean",
			args: {
				action: {
					name: "field1",
					value: true,
					type: "FIELD_ON_CHANGE",
				},
				result: {
					data: {
						"field1": true,
					}
				},
			},
		},
		{
			name: "Passing an object",
			args: {
				action: {
					name: "field1",
					value: {
						foo: "bar",
					},
					type: "FIELD_ON_CHANGE",
				},
				result: {
					data: {
						"field1": {
							foo: "bar",
						},
					}
				},
			},
		},
	];

	runTests(tests, "reducer");
});

describe("REDUCERS: FIELD_START_VALIDATE", () => {
	const tests = [
		{
			name: "FIELD_START_VALIDATE",
			args: {
				action: {
					name: "field1",
					type: "FIELD_START_VALIDATE",
				},
				result: {
					errors: {
						"field1": null,
					},
					validating: {
						"field1": true,
					}
				},
			},
		}
	];

	runTests(tests, "reducer");
});

describe("REDUCERS: FIELD_END_VALIDATE", () => {
	const tests = [
		{
			name: "Invalid field",
			args: {
				action: {
					name: "field1",
					value: "This field is required, please fill it!",
					type: "FIELD_END_VALIDATE",
				},
				state: {
					data: {
						"foo": "bar",
					},
					errors: {
						"foo": undefined,
					},
					validating: {
						"foo": undefined,
					}
				},
				result: {
					data: {
						"foo": "bar",
					},
					errors: {
						"field1": "This field is required, please fill it!",
						"foo": undefined,
					},
					validating: {
						"field1": undefined,
						"foo": undefined,
					}
				},
			},
		},
		{
			name: "Valid field",
			args: {
				action: {
					name: "field1",
					value: undefined,
					type: "FIELD_END_VALIDATE",
				},
				state: {
					data: {
						"foo": "bar",
						"field1": "testValue",
					},
					errors: {
						"foo": null,
						"field1": null,
					},
					validating: {
						"foo": null,
						"field1": true,
					}
				},
				result: {
					data: {
						"foo": "bar",
						"field1": "testValue"
					},
					errors: {
						"foo": null,
						"field1": undefined,
					},
					validating: {
						"foo": null,
						"field1": undefined,
					}
				}
			},
		},
	];

	runTests(tests, "reducer");
});

describe("REDUCERS: FORM_START_DISABLE", () => {
	const tests = [
		{
			name: "FORM_START_DISABLE",
			args: {
				action: {
					value: true,
					type: "FORM_START_DISABLE",
				},
				result: {
					disabled: true,
				},
			},
		}
	];

	runTests(tests, "reducer");
});

describe("REDUCERS: FORM_END_DISABLE", () => {
	const tests = [
		{
			name: "FORM_END_DISABLE",
			args: {
				action: {
					value: false,
					type: "FORM_END_DISABLE",
				},
				result: {
					disabled: false,
				},
			},
		}
	];

	runTests(tests, "reducer");
});

describe("REDUCERS: FORM_VALIDATE", () => {
	const tests = [
		{
			name: "Invalid form",
			args: {
				action: {
					value: false,
					type: "FORM_VALIDATE",
				},
				result: {
					validForm: false,
				},
			},
		},
		{
			name: "Valid form",
			args: {
				action: {
					value: true,
					type: "FORM_VALIDATE",
				},
				result: {
					validForm: true,
				},
			},
		}
	];

	runTests(tests, "reducer");
});

describe("REDUCERS: FORM_RESET", () => {
	const tests = [
		{
			name: "FORM_RESET",
			args: {
				action: {
					type: "FORM_RESET",
				},
				result: {
					data: {},
					touched: {},
					errors: {},
					validating: {},
					custom: {},
					validForm: false,
					disabled: null,
					pairedFields: {}
				},
			},
		}
	];

	runTests(tests, "reducer");
});

describe("DISPATCHERS: setFieldValue", () => {
	const tests = [
		{
			name: "Sets value to field",
			args: {
				action: "setFieldValue",
				args: [{ name: "testName", value: "testValue" }],
				calls: [
					{
						type: "FIELD_ON_CHANGE",
						name: "testName",
						value: "testValue",
					}
				]
			}
		},
	];

	runTests(tests, "dispatch");
});

describe("DISPATCHERS: copyFieldToField", () => {
	const tests = [
		{
			name: "Copies value from one field into another",
			args: {
				state: {
					data: {
						"firstField": "testValue"
					}
				},
				action: "copyFieldToField",
				args: [{ from: "firstField", to: "secondField" }],
				calls: [
					{
						type: "FIELD_ON_CHANGE",
						name: "secondField",
						value: "testValue",
					}
				]
			}
		},
	];

	runTests(tests, "dispatch");
});

describe("DISPATCHERS: validateField", () => {
	const tests = [
		{
			name: "Validates field with value",
			args: {
				state: {
					data: {
						"testField": "testValue"
					}
				},
				extraArgs: {
					fieldMap: {
						"testField": {
							validators: [required],
						}
					}
				},
				action: "validateField",
				args: [{ name: "testField" }],
				calls: [
					{
						type: "FIELD_START_VALIDATE",
						name: "testField",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "testField",
						value: undefined,
					}
				]
			}
		},
		{
			name: "Validates field without value",
			args: {
				state: {
					data: {}
				},
				extraArgs: {
					fieldMap: {
						"testField": {
							validators: [required],
						}
					}
				},
				action: "validateField",
				args: [{ name: "testField" }],
				calls: [
					{
						type: "FIELD_START_VALIDATE",
						name: "testField",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "testField",
						value: "This field is required, please fill it",
					}
				]
			}
		},
	];

	runTests(tests, "dispatch");
});

describe("DISPATCHERS: validateForm", () => {
	const tests = [
		{
			name: "Validates a form with unfilled fields",
			args: {
				state: {
					data: {
						"field1": "testValue"
					},
					errors: {},
				},
				extraArgs: {
					fieldMap: {
						"field1": {
							required: true,
						},
						"field2": {
							required: true,
						},
						"field3": {
							required: true,
						},
						"field4": {
							required: true,
						}
					}
				},
				action: "validateForm",
				args: [{
					fields: [
						{ name: "field1" },
						{ name: "field2" },
						{ name: "field3" },
						{ name: "field4" },
					]
				}],
				calls: [
					{
						type: "FORM_START_DISABLE",
						value: true,
					},
					{
						type: "FIELD_START_VALIDATE",
						name: "field2",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "field2",
						value: "This field is required, please fill it",
					},
					{
						type: "FIELD_START_VALIDATE",
						name: "field3",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "field3",
						value: "This field is required, please fill it",
					},
					{
						type: "FIELD_START_VALIDATE",
						name: "field4",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "field4",
						value: "This field is required, please fill it",
					},
					{
						type: "FORM_VALIDATE",
						value: true,
					},
					{
						type: "FORM_END_DISABLE",
						value: false,
					},
				]
			}
		},
		{
			name: "Validates a form with filled fields",
			args: {
				state: {
					data: {
						"field1": "testValue",
						"field2": "testValue",
						"field3": "testValue",
						"field4": "testValue",
					},
					errors: {},
				},
				extraArgs: {
					fieldMap: {
						"field1": {
							required: true,
						},
						"field2": {
							required: true,
						},
						"field3": {
							required: true,
						},
						"field4": {
							required: true,
						}
					}
				},
				action: "validateForm",
				args: [{
					fields: [
						{ name: "field1" },
						{ name: "field2" },
						{ name: "field3" },
						{ name: "field4" },
					]
				}],
				calls: [
					{
						type: "FORM_START_DISABLE",
						value: true,
					},
					{
						type: "FORM_VALIDATE",
						value: true,
					},
					{
						type: "FORM_END_DISABLE",
						value: false,
					},
				]
			}
		},
	];

	runTests(tests, "dispatch");
});

describe("DISPATCHERS: submitForm", () => {
	const tests = [
		{
			name: "Submits a form",
			args: {
				state: {
					data: {
						"field1": "testValue"
					},
					errors: {},
				},
				extraArgs: {
					fieldMap: {
						"field1": {
							required: true,
						},
						"field2": {
							required: true,
						},
						"field3": {
							required: true,
						},
						"field4": {
							required: true,
						}
					},
					fields: [
						{ name: "field1" },
						{ name: "field2" },
						{ name: "field3" },
						{ name: "field4" },
					]
				},
				action: "submitForm",
				calls: [
					{
						type: "FORM_START_DISABLE",
						value: true,
					},
					{
						type: "FIELD_START_VALIDATE",
						name: "field2",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "field2",
						value: "This field is required, please fill it",
					},
					{
						type: "FIELD_START_VALIDATE",
						name: "field3",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "field3",
						value: "This field is required, please fill it",
					},
					{
						type: "FIELD_START_VALIDATE",
						name: "field4",
					},
					{
						type: "FIELD_END_VALIDATE",
						name: "field4",
						value: "This field is required, please fill it",
					},
					{
						type: "FORM_VALIDATE",
						value: true,
					},
					{
						type: "FORM_END_DISABLE",
						value: false,
					},
				]
			}
		},
		{
			name: "Submits a disabled form",
			args: {
				state: {
					disabled: true,
				},
				extraArgs: {
					fieldMap: {
						"field1": {
							required: true,
						},
						"field2": {
							required: true,
						},
						"field3": {
							required: true,
						},
						"field4": {
							required: true,
						}
					},
					fields: [
						{ name: "field1" },
						{ name: "field2" },
						{ name: "field3" },
						{ name: "field4" },
					],
					onSubmit: jest.fn(),
				},
				action: "submitForm",
				calls: []
			}
		},
	];

	runTests(tests, "dispatch");
});

describe("DISPATCHERS: resetForm", () => {
	const tests = [
		{
			name: "resetForm test",
			args: {
				action: "resetForm",
				calls: [
					{
						type: "FORM_RESET",
					}
				]
			}
		},
	];

	runTests(tests, "dispatch");
});

describe("DISPATCHERS: setFormValues", () => {
	const tests = [
		{
			name: "Prepopulates fields with data",
			args: {
				extraArgs: {
					fields: [
						{ name: "field1" },
						{ name: "field2" },
					],
				},
				action: "setFormValues",
				args: [{
					values: {
						"field1": "value1",
						"field2": "value2",
					}
				}],
				calls: [
					{
						type: "FORM_START_DISABLE",
						value: true,
					},
					{
						type: "FIELD_ON_CHANGE",
						name: "field1",
						value: "value1",
					},
					{
						type: "FIELD_ON_CHANGE",
						name: "field2",
						value: "value2",
					},
					{
						type: "FORM_END_DISABLE",
						value: false,
					},
				]
			}
		},
	];

	runTests(tests, "dispatch");
});

describe("VALIDATORS: validateEmail", () => {
	const tests = [
		{
			name: "Empty field",
			args: {
				validator: validateEmail,
				value: undefined,
				result: undefined,
			}
		},
		{
			name: "Correct email",
			args: {
				validator: validateEmail,
				value: "john.smith@simpleviewinc.com",
				result: undefined,
			}
		},
		{
			name: "Incorrect email",
			args: {
				validator: validateEmail,
				value: "john.smith",
				result: "The value is not a valid e-mail",
			}
		},
		{
			name: "Multiple domains",
			args: {
				validator: validateEmail,
				value: "john.smith@simpleviewinc.com.mx.abc",
				result: undefined,
			}
		},
		{
			name: "Incomplete email",
			args: {
				validator: validateEmail,
				value: "john.smith@simpleviewinc",
				result: "The value is not a valid e-mail",
			}
		},
	];

	runTests(tests, "validator");
});

describe("VALIDATORS: validateSlow", () => {
	const tests = [
		{
			name: "Empty field",
			args: {
				validator: validateSlow,
				value: undefined,
				result: undefined,
			}
		},
		{
			name: "Field with a random value",
			args: {
				validator: validateSlow,
				value: "Foo",
				result: undefined,
			}
		},
		{
			name: "Field with correct value",
			args: {
				validator: validateSlow,
				value: "test",
				result: "String cannot include test",
			}
		},
	];

	runTests(tests, "validator");
});

describe("VALIDATORS: required", () => {
	const tests = [
		{
			name: "Empty field",
			args: {
				validator: required,
				value: undefined,
				result: "This field is required, please fill it",
			}
		},
		{
			name: "Field with value",
			args: {
				validator: required,
				value: "Foo",
				result: undefined,
			}
		},
	];

	runTests(tests, "validator");
});

describe("VALIDATORS: validateNumber", () => {
	const tests = [
		{
			name: "Empty field",
			args: {
				validator: validateNumber,
				value: undefined,
				result: undefined,
			}
		},
		{
			name: "Positive integer number",
			args: {
				validator: validateNumber,
				value: 123,
				result: undefined,
			}
		},
		{
			name: "Positive integer number as string",
			args: {
				validator: validateNumber,
				value: "123",
				result: undefined,
			}
		},
		{
			name: "Negative integer number",
			args: {
				validator: validateNumber,
				value: -123,
				result: undefined,
			}
		},
		{
			name: "Negative integer number as string",
			args: {
				validator: validateNumber,
				value: "-123",
				result: undefined,
			}
		},
		{
			name: "Exponential number",
			args: {
				validator: validateNumber,
				value: "10e20",
				result: undefined,
			}
		},
		{
			name: "Decimal number",
			args: {
				validator: validateNumber,
				value: 123.456,
				result: undefined,
			}
		},
		{
			name: "Decimal number as string",
			args: {
				validator: validateNumber,
				value: "123.456",
				result: undefined,
			}
		},
		{
			name: "Letters",
			args: {
				validator: validateNumber,
				value: "abc",
				result: "The value is not a number",
			}
		},
	];

	runTests(tests, "validator");
});

describe("VALIDATORS: validateURL", () => {
	const tests = [
		{
			name: "Empty field",
			args: {
				validator: validateURL,
				value: undefined,
				result: undefined,
			}
		},
		{
			name: "Website without protocol",
			args: {
				validator: validateURL,
				value: "www.simpleviewinc.com",
				result: undefined,
			}
		},
		{
			name: "Website without www",
			args: {
				validator: validateURL,
				value: "simpleviewinc.com",
				result: undefined,
			}
		},
		{
			name: "Website with https protocol",
			args: {
				validator: validateURL,
				value: "https://www.simpleviewinc.com",
				result: undefined,
			}
		},
		{
			name: "Website with http protocol",
			args: {
				validator: validateURL,
				value: "http://www.simpleviewinc.com",
				result: undefined,
			}
		},
		{
			name: "Website with multiple domains",
			args: {
				validator: validateURL,
				value: "www.simpleviewinc.com.mx",
				result: undefined,
			}
		},
		{
			name: "Website with subdomain",
			args: {
				validator: validateURL,
				value: "kube.simpleviewinc.com",
				result: undefined,
			}
		},
		{
			name: "Website with port",
			args: {
				validator: validateURL,
				value: "www.simpleviewinc.com:1000",
				result: undefined,
			}
		},
		{
			name: "Website with path",
			args: {
				validator: validateURL,
				value: "www.simpleviewinc.com/new/dms",
				result: undefined,
			}
		},
		{
			name: "Website with port and path",
			args: {
				validator: validateURL,
				value: "www.simpleviewinc.com:1000/new/dms",
				result: undefined,
			}
		},
		{
			name: "Website with query",
			args: {
				validator: validateURL,
				value: "www.simpleviewinc.com/?q=newdms",
				result: undefined,
			}
		},
		{
			name: "Invalid website",
			args: {
				validator: validateURL,
				value: "abc",
				result: "The value is not a valid URL",
			}
		},
	];

	runTests(tests, "validator");
});

describe("VALIDATORS: validateDateRange", () => {
	const tests = [
		{
			name: "Empty fields",
			args: {
				validator: { fn: "validateDateRange", options: { endDateName: "endDate" } },
				value: undefined,
				data: {
					"endDate": undefined,
				},
				result: undefined,
			}
		},
		{
			name: "startDate with value and endDate without",
			args: {
				validator: { fn: "validateDateRange", options: { endDateName: "endDate" } },
				value: "2022-03-25T00:00:00.0000Z",
				data: {
					"endDate": undefined,
				},
				result: undefined,
			}
		},
		{
			name: "endDate with value and startDate without",
			args: {
				validator: { fn: "validateDateRange", options: { endDateName: "endDate" } },
				value: undefined,
				data: {
					"endDate": "2022-03-25T00:00:00.0000Z",
				},
				result: undefined,
			}
		},
		{
			name: "startDate happenning before endDate",
			args: {
				validator: { fn: "validateDateRange", options: { endDateName: "endDate" } },
				value: "2022-03-25T00:00:00.0000Z",
				data: {
					"endDate": "2022-03-26T00:00:00.0000Z",
				},
				result: undefined,
			}
		},
		{
			name: "startDate happenning at the same time as endDate",
			args: {
				validator: { fn: "validateDateRange", options: { endDateName: "endDate" } },
				value: "2022-03-25T00:00:00.0000Z",
				data: {
					"endDate": "2022-03-25T00:00:00.0000Z",
				},
				result: undefined,
			}
		},
		{
			name: "startDate happenning after endDate",
			args: {
				validator: { fn: "validateDateRange", options: { endDateName: "endDate" } },
				value: "2022-03-27T00:00:00.0000Z",
				data: {
					"endDate": "2022-03-26T00:00:00.0000Z",
				},
				result: "Start date should happen before the end date",
			}
		},
	];

	runTests(tests, "validator");
});