import * as React from 'react';
import { ReactElement, SyntheticEvent, useState } from 'react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

// Components
import Snackbar from './Snackbar';
import Button from '@root/forms/Button';

// Material UI
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

// Types
import { SnackbarAction } from './SnackbarTypes';

export default {
	title: 'Components/Snackbar',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const label = text('Label', 'Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.');
	const autoHideDuration = number(
		'Autohide duration, value should be in a range of 4000 - 10000 milliseconds, if is not within this range is set to 4000ms',
		4000
	);
	const withAction = boolean('Show snackbar with action', false);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const action: SnackbarAction = {
		label: 'Create new account',
		function: () => { alert('Created account') }
	};

	return (
		<>
			<Button onClick={handleClickOpen}>Open snackbar</Button>
			<Snackbar
				action={withAction && action}
				autoHideDuration={autoHideDuration}
				label={label}
				leadingIcon={CheckCircleOutlineIcon}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
};
