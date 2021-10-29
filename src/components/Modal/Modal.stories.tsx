import * as React from 'react';
import { ReactElement, useState } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import Modal from './Modal';
import Button from '@root/forms/Button';
import TextField from '@root/forms/FormFieldText';
import FormFieldDropdownSingleSelection from '@root/forms/FormFieldDropdownSingleSelection';
import { Sizes } from '@root/theme/sizes';

export default {
	title: 'Components/Modal',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
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

	return (
		<>
			<Button onClick={handleClickOpen}>Open modal</Button>
			<Modal
				dialogTitle={dialogTitle}
				open={open}
				onClose={handleClose}
				primaryAction={primaryAction}
				primaryBtnLabel={primaryBtnLabel}
				secondaryAction={handleClose}
				secondaryBtnLabel={secondaryBtnLabel}
			>
				<FormFieldDropdownSingleSelection
					options={topFilms}
					label='Country'
					placeholder='Select'
					size={Sizes.sm}
				/>
				<TextField
					label='Address'
					htmlFor='text-input'
					size={Sizes.lg}
					onChange={undefined}
				/>
				<TextField
					label=''
					htmlFor='text-input'
					size={Sizes.lg}
					onChange={undefined}
				/>
			</Modal>
		</>
	);
};
