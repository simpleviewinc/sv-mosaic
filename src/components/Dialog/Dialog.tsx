import * as React from 'react';
import { ReactElement } from 'react';

// Components
import Button from '@root/forms/Button';

// Material UI
import { DialogActions, DialogContent } from '@material-ui/core';

// Types and styles
import { DialogProps } from '.';
import { StyledDialog, StyledDialogTitle } from './Dialog.styled';

const Dialog = (props: DialogProps): ReactElement => {
	const {
		children,
		dialogTitle,
		open,
		primaryAction,
		primaryBtnLabel = 'Apply',
		secondaryAction,
		secondaryBtnLabel = 'Cancel',
	} = props;

	return (
		<StyledDialog open={open}>
			<StyledDialogTitle>
				<span>{dialogTitle}</span>
			</StyledDialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button onClick={primaryAction}>{primaryBtnLabel}</Button>
				<Button buttonType='secondary' onClick={secondaryAction}>
					{secondaryBtnLabel}
				</Button>
			</DialogActions>
		</StyledDialog>
	);
};

export default Dialog;
