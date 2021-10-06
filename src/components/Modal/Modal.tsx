import * as React from 'react';
import { ReactElement } from 'react';

// Components
import Button from '@root/forms/Button';

// Material UI
import { DialogActions, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// Types and styles
import { ModalProps } from '.';
import { StyledDialog, StyledDialogTitle } from './Modal.styled';

const Modal = (props: ModalProps): ReactElement => {
	const {
		children,
		modalTitle,
		onClose,
		open,
		primaryAction,
		primaryBtnLabel = 'Apply',
		secondaryAction,
		secondaryBtnLabel = 'Cancel',
	} = props;

	return (
		<StyledDialog open={open}>
			<StyledDialogTitle>
				<span>{modalTitle}</span>
				{onClose && (
					<IconButton aria-label='close' disableRipple onClick={onClose}>
						<CloseIcon />
					</IconButton>
				)}
			</StyledDialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button buttonType='secondary' onClick={secondaryAction}>
					{secondaryBtnLabel}
				</Button>
				<Button onClick={primaryAction}>{primaryBtnLabel}</Button>
			</DialogActions>
		</StyledDialog>
	);
};

export default Modal;
