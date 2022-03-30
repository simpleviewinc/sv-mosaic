import * as React from "react";
import { ReactElement } from "react";

// Components
import Tooltip from "@root/components/Tooltip";

// Types and styles
import { IconButtonProps } from "./IconButtonTypes";
import { StyledIconButton } from "./IconButton.styled";

const IconButton = (props: IconButtonProps): ReactElement => {
	const { className, disabled = false, icon, tooltipText, onClick } = props;

	const MaterialIcon = icon;

	return tooltipText && !disabled ? (
		<Tooltip text={tooltipText}>
			<StyledIconButton className={className} disabled={disabled} disableRipple onClick={onClick}>
				<MaterialIcon data-testid='icon-button-test' />
			</StyledIconButton>
		</Tooltip>
	) : (
		<StyledIconButton className={className} disabled={disabled} disableRipple onClick={onClick}>
			<MaterialIcon data-testid='icon-button-test'/>
		</StyledIconButton>
	);
};

export default IconButton;
