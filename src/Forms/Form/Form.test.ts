import testArray from "../../utils/testArray";
import * as assert from "assert";
import { useForm, actions } from "./formUtilsTest";

describe('Reducer logic', () => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = [
		{
			name: "text1",
			label: "Simple Text",
			type: "text",
			inputSettings: {
				maxCharacters: 20,
			},
			instructionText: 'testing',
		},
	];

	registerFields(fields);

	const tests = [
		{
			name: 'Set field value',
			args: {
				data: state?.data?.text1,
				result: 'abc'
			}
		},
	];

	testArray(tests, async (test) => {
		await dispatch(
			actions.setFieldValue({
				name: 'text1',
				value: 'abc'
			})
		);
		const result = state.data.text1;
		assert.strictEqual(result, test.result);
	});

});