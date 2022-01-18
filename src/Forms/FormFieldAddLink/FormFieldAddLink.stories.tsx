// import * as React from "react";
// import { useState, ReactElement, useMemo, useCallback } from "react";
// import {
// 	boolean,
// 	withKnobs,
// 	text,
// 	select
// } from '@storybook/addon-knobs';
// import { Meta } from '@storybook/addon-docs/blocks';
// import { Sizes } from '@root/theme/sizes';
// import { useForm } from '../Form/formUtils';

// // Components
// import FormFieldAddLink from '.';
// import Field, { FieldDefProps } from '@root/components/Field';
// import Form from '../Form/Form';

// export default {
// 	title: "Forms|FormFieldAddLink",
// 	decorators: [withKnobs],
// } as Meta;

// export const Default = (): ReactElement => {
// 	const [linkValue, setLinkValue] = useState('');

// 	const onChange = (val) => {
// 		setLinkValue(val);
// 	};

// 	return (
// 		<Field
// 			label={text('Label', 'Label')}
// 			required={boolean('Required', false)}
// 			disabled={boolean('Disabled', false)}
// 			helperText={text('Helper text', '')}
// 			instructionText={text('Instructional text', '')}
// 			error={text('Error text', '')}
// 			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
// 			value={linkValue}
// 		>
// 			<FormFieldAddLink
// 				disabled={boolean('Disabled', false)}
// 				label={text('Label', 'Label')}
// 				inputSettings={{
// 					size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
// 					placeholder: text('Placeholder', 'www.hello.com'),
// 					value: linkValue
// 				}}
// 				error={text('Error text', '')}
// 				onChange={onChange}
// 				size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
// 			/>
// 		</Field>
// 	)
// };

// export const FormExample = (): ReactElement => {
// 	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

// 	const size = select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);
// 	const placeholder = text('Placeholder', 'placeholder');
// 	const disabled = boolean('Disabled', false);
// 	const required = boolean('Required', false);

// 	const fields = useMemo(
// 		() =>
// 			[
// 				{
// 					name: "addLink",
// 					label: "Add link example",
// 					type: "addLink",
// 					required,
// 					disabled,
// 					size,
// 					inputSettings: {
// 						size,
// 						placeholder,
// 					},
// 					helperText: 'Helper text',
// 					instructionText: 'Instruction text',
// 				},
// 			] as FieldDefProps[],
// 		[required, disabled, size, placeholder]
// 	);

// 	useMemo(() => {
// 		registerFields(fields);
// 	}, [fields, registerFields]);

// 	const onSubmit = useCallback((data) => {
// 		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
// 	}, [state.validForm]);

// 	useMemo(() => {
// 		registerOnSubmit(onSubmit);
// 	}, [onSubmit, registerOnSubmit]);

// 	const onCancel = () => {
// 		alert('Cancelling form, going back to previous site');
// 	};

// 	return (
// 		<>
// 			<pre>{JSON.stringify(state, null, "  ")}</pre>
// 			<Form
// 				title={text('Title', 'Form Title')}
// 				description={text('Description', 'This is a description example')}
// 				state={state}
// 				fields={fields}
// 				dispatch={dispatch}
// 				events={events}
// 				onCancel={onCancel}
// 				onSubmit={onSubmit}
// 			/>
// 		</>
// 	);
// };
