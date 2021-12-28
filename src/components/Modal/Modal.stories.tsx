import * as React from 'react';
import { ReactElement, useState, useMemo } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import Modal from './Modal';
import Button from '@root/forms/Button';
import TextField from '@root/forms/FormFieldText';
import FormFieldDropdownSingleSelection from '@root/forms/FormFieldDropdownSingleSelection';
import { Sizes } from '@root/theme/sizes';
import { FieldDefProps } from '../Field';
import { useForm } from '../../forms/Form/formUtils';

export default {
	title: 'Components/Modal',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const dialogTitle = text('Dialog title', 'Dialog title');
	const primaryBtnLabel = text('Primary button label', 'Apply');
	const secondaryBtnLabel = text('Secondary button label', 'Cancel');

	const [open, setOpen] = useState(false);

	const topFilms = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
	];

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const primaryAction = () => {
		alert('The primary button was clicked');
		setOpen(false);
	};

	// <FormFieldDropdownSingleSelection
	// 				options={topFilms}
	// 				label='Country'
	// 				placeholder='Select'
	// 				size={Sizes.sm}
	// 			/>
	// 			<TextField
	// 				label='Address'
	// 				htmlFor='text-input'
	// 				size={Sizes.lg}
	// 				onChange={undefined}
	// 			/>
	// 			<TextField
	// 				label=''
	// 				htmlFor='text-input'
	// 				size={Sizes.lg}
	// 				onChange={undefined}
	// 			/>
	// 		</Modal>

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					inputSettings: {
						maxCharacters: 20,
					},
					instructionText: 'testing',
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "textArea",
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1"
							},
							{
								label: "Label 2",
								value: "label_2"
							},
							{
								label: "Label 3",
								value: "label_3"
							}
						],
					},
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text"
				},
			] as FieldDefProps[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const submitButtonAttrs = {
		children: primaryBtnLabel,
	}

	const cancelButtonAttrs = {
		children: secondaryBtnLabel,
	}

	return (
		<>
			<Button onClick={handleClickOpen}>Open modal</Button>
			<Modal
				state={state}
				dispatch={dispatch}
				fields={fields}
				title={dialogTitle}
				open={open}
				onCancel={handleClose}
				onSubmit={primaryAction}
				submitButtonAttrs={submitButtonAttrs}
				cancelButtonAttrs={cancelButtonAttrs}
			/>

		</>
	);
};
