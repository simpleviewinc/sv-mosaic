import * as React from 'react';
import { ReactElement, useEffect, useMemo } from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { useForm, actions } from "./formUtils";
import { validateEmail, validateSlow } from "./validators";

// Components
import Form from './Form';
import { FieldDefProps } from '@root/components/Field';

export default {
	title: 'Forms|Form',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: 'testing'
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "text",
					help: state.data.text2,
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text"
					// onChange: function () {
					//   dispatch(actions.copyFieldToField({ from: "text3", to: "text4" }));
					// }
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text"
				}
			] as FieldDefProps[],
		[state.data.text2]
	);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text2",
				value: "notanemail"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
};
