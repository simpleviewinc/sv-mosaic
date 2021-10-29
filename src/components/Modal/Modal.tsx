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
		// children,
		// dialogTitle,
		// onCancel,
		// open,
		// primaryAction,
		// primaryBtnLabel = 'Save',
		// secondaryAction,
		// secondaryBtnLabel = 'Cancel',
		fields,
		open,
		title,
		onSubmit,
		onCancel,
		submitButtonAttrs,
		cancelButtonAttrs,
		state,
		dispatch,
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

	const PrimaryButton = useMemo(() => (
		<Button onClick={onSubmit}>{submitButtonAttrs?.children ? submitButtonAttrs?.children : 'Apply'}</Button>
	), [submitButtonAttrs?.children, onSubmit]);

	const displayMobile = useMemo(
		() => (
			<StyledDialogMobileTitle>
				<div>
					{onCancel && (
						<IconButton
							data-testid='arrow-back-icon'
							aria-label='close'
							disableRipple
							onClick={onCancel}
						>
							<ArrowBackIosIcon />
						</IconButton>
					)}
					<span>{title}</span>
				</div>
				{PrimaryButton}
			</StyledDialogMobileTitle>
		),
		[isMobileView, title, onCancel, submitButtonAttrs?.children, onSubmit]
	);

	const displayDesktop = useMemo(
		() => (
			<StyledDialogDesktopTitle>
				<span>{title}</span>
				{onCancel && (
					<IconButton
						data-testid='close-icon'
						aria-label='close'
						disableRipple
						onClick={onCancel}
					>
						<CloseIcon />
					</IconButton>
				)}
			</StyledDialogDesktopTitle>
		),
		[isMobileView, title, onCancel]
	);

	return (
		<StyledDialog fullScreen={isMobileView} open={open} onClose={onCancel}>
			{isMobileView ? displayMobile : displayDesktop}
			<DialogContent>{JSON.stringify(fields)}</DialogContent>
			{!isMobileView && (
				<DialogActions>
					<Button buttonType='secondary' onClick={onCancel}>
						{cancelButtonAttrs?.children ? cancelButtonAttrs?.children : 'Cancel'}
					</Button>
					{PrimaryButton}
				</DialogActions>
			)}
		</StyledDialog>
	);
};

export default memo(Modal);
