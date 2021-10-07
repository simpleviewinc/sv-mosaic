import * as React from 'react';
import { memo, ReactElement, useEffect, useState } from 'react';

// Components
import Button from '@root/forms/Button';

// Material UI
import { DialogActions, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// Types and styles
import { ModalProps } from '.';
import {
	StyledDialog,
	StyledDialogDesktopTitle,
	StyledDialogMobileTitle,
} from './Modal.styled';

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

	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 480
				? setIsMobileView(true)
				: setIsMobileView(false);
		};

		setResponsiveness();
		window.addEventListener('resize', setResponsiveness);

		return () => {
			window.removeEventListener('resize', setResponsiveness);
		};
	}, []);

	const displayMobile = () => (
		<StyledDialogMobileTitle>
			<div>
				{onClose && (
					<IconButton aria-label='close' disableRipple onClick={onClose}>
						<ArrowBackIosIcon />
					</IconButton>
				)}
				<span>{modalTitle}</span>
			</div>
			<Button onClick={primaryAction}>{primaryBtnLabel}</Button>
		</StyledDialogMobileTitle>
	);

	const displayDesktop = () => (
		<StyledDialogDesktopTitle>
			<span>{modalTitle}</span>
			{onClose && (
				<IconButton aria-label='close' disableRipple onClick={onClose}>
					<CloseIcon />
				</IconButton>
			)}
		</StyledDialogDesktopTitle>
	);

	return (
		<StyledDialog open={open}>
			{isMobileView ? displayMobile() : displayDesktop()}
			<DialogContent>{children}</DialogContent>
			{!isMobileView && (
				<DialogActions>
					<Button buttonType='secondary' onClick={secondaryAction}>
						{secondaryBtnLabel}
					</Button>
					<Button onClick={primaryAction}>{primaryBtnLabel}</Button>
				</DialogActions>
			)}
		</StyledDialog>
	);
};

export default memo(Modal);
