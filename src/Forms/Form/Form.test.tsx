import testArray from "../../utils/testArray";
import * as assert from "assert";
import { actions, coreReducer, generateLayout } from "./formUtils";
import { FieldDefProps } from "@root/components/Field";
import { required } from './validators';

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

describe('Reducers', () => {
	it('FIELD_ON_CHANGE', () => {
		const state = {};
		const action = {
			name: 'something',
			value: 'foo',
			type: 'FIELD_ON_CHANGE',
		}
		const result = coreReducer(state, action);

		assert.deepStrictEqual(result, {
			data: {
				'something': 'foo',
			}
		});

		assert.notStrictEqual(state, result);
	});

	it('FIELD_START_VALIDATE', () => {
		const state = {};
		const action = {
			name: 'something',
			type: 'FIELD_START_VALIDATE',
		}
		const result = coreReducer(state, action);

		assert.deepStrictEqual(result, {
			errors: {
				'something': null,
			},
			validating: {
				'something': true,
			}
		});

		assert.notStrictEqual(state, result);
	});

	it('FIELD_END_VALIDATE', () => {
		const state = {};
		const action = {
			name: 'something',
			value: 'This field is required, please fill it!',
			type: 'FIELD_END_VALIDATE',
		}
		const result = coreReducer(state, action);

		assert.deepStrictEqual(result, {
			errors: {
				'something': 'This field is required, please fill it!',
			},
			validating: {
				'something': undefined,
			}
		});

		assert.notStrictEqual(state, result);
	});

	it('FORM_START_DISABLE', () => {
		const state = {};
		const action = {
			value: true,
			type: 'FORM_START_DISABLE',
		}
		const result = coreReducer(state, action);

		assert.deepStrictEqual(result, {
			disabled: true,
		});

		assert.notStrictEqual(state, result);
	});

	it('FORM_END_DISABLE', () => {
		const state = {};
		const action = {
			value: false,
			type: 'FORM_END_DISABLE',
		}
		const result = coreReducer(state, action);

		assert.deepStrictEqual(result, {
			disabled: false,
		});

		assert.notStrictEqual(state, result);
	});

	it('FORM_VALIDATE', () => {
		const state = {};
		const action = {
			value: true,
			type: 'FORM_VALIDATE',
		}
		const result = coreReducer(state, action);

		assert.deepStrictEqual(result, {
			validForm: true,
		});

		assert.notStrictEqual(state, result);
	});

	it('FORM_RESET', () => {
		const state = {};
		const action = {
			type: 'FORM_RESET',
		}
		const result = coreReducer(state, action);

		assert.deepStrictEqual(result, {
			data: {},
			touched: {},
			errors: {},
			validating: {},
			custom: {},
			validForm: false,
			disabled: null
		});

		assert.notStrictEqual(state, result);
	});
});

describe('Dispatcher logic', () => {
	it('Field on change', async () => {
		const dispatch = jest.fn();
		const thunk = actions.setFieldValue({
			name: 'testName',
			value: 'testValue',
			validate: false,
		});

		await thunk(dispatch);

		expect(dispatch).toHaveBeenCalledWith({
			type: "FIELD_ON_CHANGE",
			name: 'testName',
			value: 'testValue'
		});
	});

	it('Copy the value from one field into another', async () => {
		const state = {
			data: {
				'firstField': 'testValue'
			}
		};

		const dispatch = jest.fn();
		const getState = () => state;

		const copyValue = actions.copyFieldToField({
			from: 'firstField',
			to: 'secondField',
		});

		await copyValue(dispatch, getState);

		/**
		 * This type of dispatch cannot be directly tested since the dispatcher
		 * dispatches an anonymous function (setFieldValue), which then dispatches,
		 * but since the only thing that gets called is the setField action and that
		 * has already been tested we could assume this works too.
		 */

		expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
		await dispatch.mock.calls[0][0](dispatch);
		assert.deepStrictEqual(dispatch.mock.calls[1][0], {
			type: "FIELD_ON_CHANGE",
			name: 'secondField',
			value: 'testValue'
		});
	});

	it('Validates a field with value', async () => {
		const state = {
			data: {
				'testField': 'testValue'
			}
		};

		const dispatch = jest.fn();
		const getState = () => state;
		const extraArgs = {
			fieldMap: {
				'testField': {
					validators: [required]
				}
			}
		};

		const validateField = actions.validateField({
			name: 'testField'
		});

		await validateField(dispatch, getState, extraArgs);

		expect(dispatch).toHaveBeenCalledWith({
			type: "FIELD_START_VALIDATE",
			name: 'testField',
		});

		expect(dispatch).toHaveBeenCalledWith({
			type: "FIELD_END_VALIDATE",
			name: 'testField',
			value: undefined,
		});
	});

	it('Validates an empty field', async () => {
		const state = {
			data: {}
		};

		const dispatch = jest.fn();
		const getState = () => state;
		const extraArgs = {
			fieldMap: {
				'testField': {
					validators: [required]
				}
			}
		};

		const validateField = actions.validateField({
			name: 'testField'
		});

		await validateField(dispatch, getState, extraArgs);

		expect(dispatch).toHaveBeenCalledWith({
			type: "FIELD_START_VALIDATE",
			name: 'testField',
		});

		expect(dispatch).toHaveBeenCalledWith({
			type: "FIELD_END_VALIDATE",
			name: 'testField',
			value: 'This field is required, please fill it',
		});
	});

	it('Validates a valid form', async () => {
		const state = {
			data: {
				'field1': 'text'
			},
			errors: {}
		};

		const dispatch = jest.fn();
		const getState = () => state;
		const fields = [
			{ name: 'field1' },
			{ name: 'field2' },
			{ name: 'field3' },
			{ name: 'field4' },
		];

		const validateForm = actions.validateForm({ fields });

		await validateForm(dispatch, getState);

		expect(dispatch).toHaveBeenCalledWith({
			type: "FORM_START_DISABLE",
			value: true,
		});

		expect(dispatch).toHaveBeenCalledWith(expect.any(Function));

		expect(dispatch).toHaveBeenCalledWith({
			type: "FORM_VALIDATE",
			value: true,
		});

		expect(dispatch).toHaveBeenCalledWith({
			type: "FORM_END_DISABLE",
			value: false,
		});
	});

	it('Validates an invalid form', async () => {
		const state = {
			data: {
				'field1': 'text'
			},
			errors: {
				'field2': 'This field is required, please fill it'
			}
		};

		const dispatch = jest.fn();
		const getState = () => state;
		const fields = [
			{ name: 'field1' },
			{ name: 'field2' },
			{ name: 'field3' },
			{ name: 'field4' },
		];

		const validateForm = actions.validateForm({ fields });

		await validateForm(dispatch, getState);

		expect(dispatch).toHaveBeenCalledWith({
			type: "FORM_START_DISABLE",
			value: true,
		});

		expect(dispatch).toHaveBeenCalledWith(expect.any(Function));

		expect(dispatch).toHaveBeenCalledWith({
			type: "FORM_VALIDATE",
			value: false,
		});

		expect(dispatch).toHaveBeenCalledWith({
			type: "FORM_END_DISABLE",
			value: false,
		});
	});

	it('Submits a disabled form', async () => {
		const state = {
			disabled: true,
		};
		const dispatch = jest.fn();
		const getState = () => state;
		const extraArgs = {
			fields: [
				{ name: 'field1' },
				{ name: 'field2' },
				{ name: 'field3' },
				{ name: 'field4' },
			],
			onSubmit: jest.fn(),
		};

		const submitForm = actions.submitForm();

		await submitForm(dispatch, getState, extraArgs);

		expect(dispatch).toHaveBeenCalledTimes(0);
	});

	it('Submits a form', async () => {
		const state = {
			data: {
				'field1': 'testValue'
			},
			errors: {}
		};
		const dispatch = jest.fn();
		const getState = () => state;
		const extraArgs = {
			fields: [
				{ name: 'field1' },
				{ name: 'field2' },
				{ name: 'field3' },
				{ name: 'field4' },
			],
		};

		const submitForm = actions.submitForm();

		await submitForm(dispatch, getState, extraArgs);

		expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
	});
});

describe('Dispatcher test arrays', () => {
	const tests = [
		{
			name: 'setFieldValue test',
			args: {
				name: 'setFieldValue',
				args: [{ name: 'x', value: 'y' }],
				calls: [
					{
						type: 'FIELD_ON_CHANGE',
						name: 'x',
						value: 'y',
					}
				]
			}
		}
	];

	testArray(tests, async test => {
		const state = {};
		const dispatch = jest.fn();
		const getState = () => state;
		const fn = actions[test.name](...test.args);
		await fn(dispatch);

		for(let call of dispatch.mock.calls) {
			if(call instanceof Function) {
				await call(dispatch, getState);
			}
		}

		const nonFunctionCalls = dispatch.mock.calls.filter(val => !(val[0] instanceof Function));

		assert.deepStrictEqual(nonFunctionCalls, test.calls);
	});
});