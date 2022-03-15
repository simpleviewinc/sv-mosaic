import * as React from "react";
import { ReactElement, memo } from "react";

// Types and styles
import { SnackbarProps } from ".";
import {
	ActionWrapper,
	ContentWrapper,
	MessageWrapper,
	StyledCloseIcon,
	StyledSnackbar,
} from "./Snackbar.styled";

// Material UI
import IconButton from "@material-ui/core/IconButton";
import Button from "@root/components/Button";

const Snackbar = (props: SnackbarProps): ReactElement => {
	const {
		action,
		autoHideDuration = 4000,
		label,
		leadingIcon,
		onClose,
		open = false,
	} = props;

	const MaterialIcon = leadingIcon;

	let milisecondsDuration = autoHideDuration;

	/**
   * If the milliseconds for the autoHideDuration is lower than the minimum,
   * then is set to 4000ms. If exceeds the maximum, then is set to 10000ms.
   */
	if (autoHideDuration < 4000) {
		milisecondsDuration = 4000;
	} else if (autoHideDuration > 10000) {
		milisecondsDuration = 10000;
	}

	return (
		<StyledSnackbar
			autoHideDuration={milisecondsDuration}
			onClose={onClose}
			open={open}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
		>
			<ContentWrapper>
				{leadingIcon && <MaterialIcon data-testid="leading-snackbar-icon" />}
				<MessageWrapper>
					<p>{label}</p>
					{action?.function && action?.label && (
						<ActionWrapper>
							<Button
								color="teal"
								variant="text"
								onClick={action.function}
								label={action.label}
								muiAttrs={{disableRipple: true}}
							></Button>
						</ActionWrapper>
					)}
				</MessageWrapper>
				<IconButton
					aria-label="Close"
					data-testid="close-icon"
					disableRipple
					key="close"
					onClick={onClose}
				>
					<StyledCloseIcon />
				</IconButton>
			</ContentWrapper>
		</StyledSnackbar>
	);
};

export default memo(Snackbar);
