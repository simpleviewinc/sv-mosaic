import testArray, { Test } from "../../utils/testArray";
import * as assert from "assert";
import { actions, coreReducer, generateLayout } from "./formUtils";
import { FieldDefProps } from "../../components/Field";
import { required } from './validators';

const runTests = (tests, type) => {
	switch (type) {
		case 'dispatch':
			testArray(tests, async test => {
				const state = test['state'] ? test['state'] : {};
				const extraArgs = test['extraArgs'] ? test['extraArgs'] : {};

				const dispatches = [];
				const dispatch = async action => {
					if (action instanceof Function) {
						await action(dispatch, getState, extraArgs);
					} else {
						dispatches.push(action);
					}
				}
				const getState = () => state;
				const fn = actions[test['action']](...test['args']);
				await fn(dispatch, getState, extraArgs);

				assert.deepStrictEqual(dispatches, test['calls']);
			});
			break;
		case 'reducer':
			testArray(tests, test => {
				const state = test['state'] ? test['state'] : {};
				const result = coreReducer(state, test['action']);
		
				assert.deepStrictEqual(result, test['result']);
				assert.notStrictEqual(state, result);
			});
			break;
		default:
			break;
	}
};

describe('Layout logic', () => {
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
	] as FieldDefProps[];

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
			name: 'Create layout with only fields',
			args: {
				type: 'fields',
				data: fields,
				result: [
					{
						fields: [[['text1']]]
					},
					{
						fields: [[['text2']]]
					},
					{
						fields: [[['text3']]]
					},
					{
						fields: [[['text4']]]
					},
				]
			}
		},
		{
			name: 'Ignore empty positions',
			args: {
				type: 'sections',
				data: sections,
				result: [
					{
						fields: [
							[['text1'], ['text2'], ['text3']],
							[['text3'], ['text4'], ['text1']]
						]
					},
					{
						fields: [
							[['text2'], ['text3']],
						]
					},
				]
			}
		},
		{
			name: 'No sections',
			args: {
				type: 'sections',
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
		test.type === 'fields' ?
			result = generateLayout({ fields })
			:
			result = generateLayout({ fields, sections: test.data })

		assert.deepStrictEqual(result, test.result);
	});
});

describe('REDUCERS: FIELD_ON_CHANGE', () => {
	const tests = [
		{
			name: 'Adding text to a field',
			args: {
				action: {
					name: 'field1',
					value: 'newValue',
					type: 'FIELD_ON_CHANGE',
				},
				result: {
					data: {
						'field1': 'newValue'
					}
				},
			},
		},
		{
			name: 'Passing undefined',
			args: {
				action: {
					name: 'field1',
					value: undefined,
					type: 'FIELD_ON_CHANGE',
				},
				result: {
					data: {
						'field1': undefined,
					}
				},
			},
		},
		{
			name: 'Passing a boolean',
			args: {
				action: {
					name: 'field1',
					value: true,
					type: 'FIELD_ON_CHANGE',
				},
				result: {
					data: {
						'field1': true,
					}
				},
			},
		},
		{
			name: 'Passing an object',
			args: {
				action: {
					name: 'field1',
					value: {
						foo: 'bar',
					},
					type: 'FIELD_ON_CHANGE',
				},
				result: {
					data: {
						'field1': {
							foo: 'bar',
						},
					}
				},
			},
		},
	];

	runTests(tests, 'reducer');
});

describe('REDUCERS: FIELD_START_VALIDATE', () => {
	const tests = [
		{
			name: 'FIELD_START_VALIDATE',
			args: {
				action: {
					name: 'field1',
					type: 'FIELD_START_VALIDATE',
				},
				result: {
					errors: {
						'field1': null,
					},
					validating: {
						'field1': true,
					}
				},
			},
		}
	];

	runTests(tests, 'reducer');
});

describe('REDUCERS: FIELD_END_VALIDATE', () => {
	const tests = [
		{
			name: 'Invalid field',
			args: {
				action: {
					name: 'field1',
					value: 'This field is required, please fill it!',
					type: 'FIELD_END_VALIDATE',
				},
				state: {
					data: {
						'foo': 'bar',
					},
					errors: {
						'foo': undefined,
					},
					validating: {
						'foo': undefined,
					}
				},
				result: {
					data: {
						'foo': 'bar',
					},
					errors: {
						'field1': 'This field is required, please fill it!',
						'foo': undefined,
					},
					validating: {
						'field1': undefined,
						'foo': undefined,
					}
				},
			},
		},
		{
			name: 'Valid field',
			args: {
				action: {
					name: 'field1',
					value: undefined,
					type: 'FIELD_END_VALIDATE',
				},
				state: {
					data: {
						'foo': 'bar',
						'field1': 'testValue',
					},
					errors: {
						'foo': null,
						'field1': null,
					},
					validating: {
						'foo': null,
						'field1': true,
					}
				},
				result: {
					data: {
						'foo': 'bar',
						'field1': 'testValue'
					},
					errors: {
						'foo': null,
						'field1': undefined,
					},
					validating: {
						'foo': null,
						'field1': undefined,
					}
				},
			},
		},
	];

	runTests(tests, 'reducer');
});

describe('REDUCERS: FORM_START_DISABLE', () => {
	const tests = [
		{
			name: 'FORM_START_DISABLE',
			args: {
				action: {
					value: true,
					type: 'FORM_START_DISABLE',
				},
				result: {
					disabled: true,
				},
			},
		}
	];

	runTests(tests, 'reducer');
});

describe('REDUCERS: FORM_END_DISABLE', () => {
	const tests = [
		{
			name: 'FORM_END_DISABLE',
			args: {
				action: {
					value: false,
					type: 'FORM_END_DISABLE',
				},
				result: {
					disabled: false,
				},
			},
		}
	];

	runTests(tests, 'reducer');
});

describe('REDUCERS: FORM_VALIDATE', () => {
	const tests = [
		{
			name: 'Invalid form',
			args: {
				action: {
					value: false,
					type: 'FORM_VALIDATE',
				},
				result: {
					validForm: false,
				},
			},
		},
		{
			name: 'Valid form',
			args: {
				action: {
					value: true,
					type: 'FORM_VALIDATE',
				},
				result: {
					validForm: true,
				},
			},
		}
	];

	runTests(tests, 'reducer');
});

describe('REDUCERS: FORM_RESET', () => {
	const tests = [
		{
			name: 'FORM_RESET',
			args: {
				action: {
					type: 'FORM_RESET',
				},
				result: {
					data: {},
					touched: {},
					errors: {},
					validating: {},
					custom: {},
					validForm: false,
					disabled: null,
				},
			},
		}
	];

	runTests(tests, 'reducer');
});

describe('DISPATCHERS: setFieldValue', () => {
	const tests = [
		{
			name: 'Sets value to field',
			args: {
				action: 'setFieldValue',
				args: [{ name: 'testName', value: 'testValue' }],
				calls: [
					{
						type: 'FIELD_ON_CHANGE',
						name: 'testName',
						value: 'testValue',
					}
				]
			}
		},
	];

	runTests(tests, 'dispatch');
});

describe('DISPATCHERS: copyFieldToField', () => {
	const tests = [
		{
			name: 'Copies value from one field into another',
			args: {
				state: {
					data: {
						'firstField': 'testValue'
					}
				},
				action: 'copyFieldToField',
				args: [{ from: 'firstField', to: 'secondField' }],
				calls: [
					{
						type: 'FIELD_ON_CHANGE',
						name: 'secondField',
						value: 'testValue',
					}
				]
			}
		},
	];

	runTests(tests, 'dispatch');
});

describe('DISPATCHERS: validateField', () => {
	const tests = [
		{
			name: 'Validates field with value',
			args: {
				state: {
					data: {
						'testField': 'testValue'
					}
				},
				extraArgs: {
					fieldMap: {
						'testField': {
							validators: [required],
						}
					}
				},
				action: 'validateField',
				args: [{ name: 'testField' }],
				calls: [
					{
						type: 'FIELD_START_VALIDATE',
						name: 'testField',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'testField',
						value: undefined,
					}
				]
			}
		},
		{
			name: 'Validates field without value',
			args: {
				state: {
					data: {}
				},
				extraArgs: {
					fieldMap: {
						'testField': {
							validators: [required],
						}
					}
				},
				action: 'validateField',
				args: [{ name: 'testField' }],
				calls: [
					{
						type: 'FIELD_START_VALIDATE',
						name: 'testField',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'testField',
						value: 'This field is required, please fill it',
					}
				]
			}
		},
	];

	runTests(tests, 'dispatch');
});

describe('DISPATCHERS: validateForm', () => {
	const tests = [
		{
			name: 'Validates a form with unfilled fields',
			args: {
				state: {
					data: {
						'field1': 'testValue'
					},
					errors: {},
				},
				extraArgs: {
					fieldMap: {
						'field1': {
							required: true,
						},
						'field2': {
							required: true,
						},
						'field3': {
							required: true,
						},
						'field4': {
							required: true,
						}
					}
				},
				action: 'validateForm',
				args: [{
					fields: [
						{ name: 'field1' },
						{ name: 'field2' },
						{ name: 'field3' },
						{ name: 'field4' },
					]
				}],
				calls: [
					{
						type: 'FORM_START_DISABLE',
						value: true,
					},
					{
						type: 'FIELD_START_VALIDATE',
						name: 'field2',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'field2',
						value: 'This field is required, please fill it',
					},
					{
						type: 'FIELD_START_VALIDATE',
						name: 'field3',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'field3',
						value: 'This field is required, please fill it',
					},
					{
						type: 'FIELD_START_VALIDATE',
						name: 'field4',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'field4',
						value: 'This field is required, please fill it',
					},
					{
						type: 'FORM_VALIDATE',
						value: true,
					},
					{
						type: 'FORM_END_DISABLE',
						value: false,
					},
				]
			}
		},
		{
			name: 'Validates a form with filled fields',
			args: {
				state: {
					data: {
						'field1': 'testValue',
						'field2': 'testValue',
						'field3': 'testValue',
						'field4': 'testValue',
					},
					errors: {},
				},
				extraArgs: {
					fieldMap: {
						'field1': {
							required: true,
						},
						'field2': {
							required: true,
						},
						'field3': {
							required: true,
						},
						'field4': {
							required: true,
						}
					}
				},
				action: 'validateForm',
				args: [{
					fields: [
						{ name: 'field1' },
						{ name: 'field2' },
						{ name: 'field3' },
						{ name: 'field4' },
					]
				}],
				calls: [
					{
						type: 'FORM_START_DISABLE',
						value: true,
					},
					{
						type: 'FORM_VALIDATE',
						value: true,
					},
					{
						type: 'FORM_END_DISABLE',
						value: false,
					},
				]
			}
		},
	];

	runTests(tests, 'dispatch');
});

describe('DISPATCHERS: submitForm', () => {
	const tests = [
		{
			name: 'Submits a form',
			args: {
				state: {
					data: {
						'field1': 'testValue'
					},
					errors: {},
				},
				extraArgs: {
					fieldMap: {
						'field1': {
							required: true,
						},
						'field2': {
							required: true,
						},
						'field3': {
							required: true,
						},
						'field4': {
							required: true,
						}
					},
					fields: [
						{ name: 'field1' },
						{ name: 'field2' },
						{ name: 'field3' },
						{ name: 'field4' },
					]
				},
				action: 'submitForm',
				calls: [
					{
						type: 'FORM_START_DISABLE',
						value: true,
					},
					{
						type: 'FIELD_START_VALIDATE',
						name: 'field2',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'field2',
						value: 'This field is required, please fill it',
					},
					{
						type: 'FIELD_START_VALIDATE',
						name: 'field3',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'field3',
						value: 'This field is required, please fill it',
					},
					{
						type: 'FIELD_START_VALIDATE',
						name: 'field4',
					},
					{
						type: 'FIELD_END_VALIDATE',
						name: 'field4',
						value: 'This field is required, please fill it',
					},
					{
						type: 'FORM_VALIDATE',
						value: true,
					},
					{
						type: 'FORM_END_DISABLE',
						value: false,
					},
				]
			}
		},
		{
			name: 'Submits a disabled form',
			args: {
				state: {
					disabled: true,
				},
				extraArgs: {
					fieldMap: {
						'field1': {
							required: true,
						},
						'field2': {
							required: true,
						},
						'field3': {
							required: true,
						},
						'field4': {
							required: true,
						}
					},
					fields: [
						{ name: 'field1' },
						{ name: 'field2' },
						{ name: 'field3' },
						{ name: 'field4' },
					],
					onSubmit: jest.fn(),
				},
				action: 'submitForm',
				calls: []
			}
		},
	];

	runTests(tests, 'dispatch');
});

describe('DISPATCHERS: resetForm', () => {
	const tests = [
		{
			name: 'resetForm test',
			args: {
				action: 'resetForm',
				calls: [
					{
						type: 'FORM_RESET',
					}
				]
			}
		},
	];

	runTests(tests, 'dispatch');
});