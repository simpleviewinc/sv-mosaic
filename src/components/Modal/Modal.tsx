import * as React from 'react';
import { memo, ReactElement, useEffect, useState, useMemo } from 'react';

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
		dialogTitle,
		submitDisabled,
		form,
		onClose,
		open,
		primaryAction,
		primaryBtnLabel = 'Save',
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

	const displayMobile = useMemo(
		() => (
			<StyledDialogMobileTitle>
				<div>
					{onClose && (
						<IconButton
							data-testid='arrow-back-icon'
							aria-label='close'
							disableRipple
							onClick={onClose}
						>
							<ArrowBackIosIcon />
						</IconButton>
					)}
					<span>{dialogTitle}</span>
				</div>
				<Button onClick={primaryAction}>{primaryBtnLabel}</Button>
			</StyledDialogMobileTitle>
		),
		[isMobileView, dialogTitle, onClose, primaryBtnLabel, primaryAction]
	);

	const displayDesktop = useMemo(
		() => (
			<StyledDialogDesktopTitle>
				<span>{dialogTitle}</span>
				{onClose && (
					<IconButton
						data-testid='close-icon'
						aria-label='close'
						disableRipple
						onClick={onClose}
					>
						<CloseIcon />
					</IconButton>
				)}
			</StyledDialogDesktopTitle>
		),
		[isMobileView, dialogTitle, onClose]
	);

	return (
		<StyledDialog fullScreen={isMobileView} open={open}>
			{isMobileView ? displayMobile : displayDesktop}
			<DialogContent>{children}</DialogContent>
			{!isMobileView && (
				<DialogActions>
					<Button buttonType='secondary' onClick={secondaryAction}>
						{secondaryBtnLabel}
					</Button>
					<Button disabled={submitDisabled} type='submit' form={form} onClick={primaryAction}>{primaryBtnLabel}</Button>
				</DialogActions>
			)}
		</StyledDialog>
	);
};

export default memo(Modal);
