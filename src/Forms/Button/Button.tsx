import * as React from 'react';
import { HTMLAttributes, memo, ReactElement } from 'react';

// Types and styles
import { FormButtonProps } from './ButtonTypes';
import { StyledButton, StyledIcon } from './ButtonStyled';

const Button = (props: FormButtonProps & HTMLAttributes<HTMLButtonElement>): ReactElement => {
	const {
		children,
		className,
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
			className={className}
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

export default memo(Button);
