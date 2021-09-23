import * as React from 'react';
import { ReactElement } from 'react';

// Types and styles
import { FormButtonProps } from './ButtonTypes';
import { StyledButton, StyledIcon } from './ButtonStyled';

const Button = (props: FormButtonProps): ReactElement => {
	const {
		children,
		disabled = false,
		icon,
		iconPosition = 'left',
		buttonType = 'primary',
		onClick,
		smallerButton,
	} = props;

	const buttonContent = !icon ? (
		children
	) : iconPosition === 'left' ? (
		<>
			<StyledIcon as={icon} data-testid='icon-test' />
			{children}
		</>
	) : (
		<>
			{children}
			<StyledIcon as={icon} />
		</>
	);

	return (
		<StyledButton
			disabled={disabled}
			onClick={onClick}
			buttonType={buttonType}
			iconPosition={iconPosition}
			smallerButton={smallerButton}
		>
			{buttonContent}
		</StyledButton>
	);
};

export default Button;
