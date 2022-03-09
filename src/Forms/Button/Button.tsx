import * as React from 'react';
import { memo, ReactElement } from 'react';

// Types and styles
import { FormButtonProps } from './ButtonTypes';
import { StyledButton, StyledIcon } from './ButtonStyled';

const Button = (props: FormButtonProps): ReactElement => {
	const {
		buttonType = 'primary',
		children,
		className,
		disabled = false,
		icon,
		iconPosition = 'left',
		onClick,
		smallerButton,
		type = 'button',
		style
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
			buttonType={buttonType}
			className={className}
			disabled={disabled}
			// form={form}
			iconPosition={iconPosition}
			smallerButton={smallerButton}
			onClick={onClick}
			type={type}
			style={style}
		>
			{buttonContent}
		</StyledButton>
	);
};

export default memo(Button);
