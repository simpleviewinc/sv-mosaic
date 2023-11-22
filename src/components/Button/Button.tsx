import React, { MouseEvent, createContext, memo, useState } from "react";
import Popover, { PopoverProps } from "@mui/material/Popover";
import Popper from "@mui/material/Popper";

import { StyledButton, StyledIconButton, StyledWrapper } from "./Button.styled";
import { ButtonPopoverContextProps, ButtonProps } from "./ButtonTypes";
import Menu from "../Menu";
import MenuBase from "../MenuBase";
import { PopoverWrapper, TooltipContent } from "./Button.styled";

export const ButtonPopoverContext = createContext<ButtonPopoverContextProps>(null);

const popoverProps: Pick<PopoverProps, "anchorOrigin" | "transformOrigin"> = {
	anchorOrigin: {
		vertical: "bottom",
		horizontal: "left",
	},
	transformOrigin: {
		vertical: "top",
		horizontal: "left",
	}
};

function ButtonBase(props: ButtonProps) {
	const Icon = props.mIcon;
	const isIconButton = props.variant === "icon";
	const adornmentIcon = Icon && <Icon className="adornment-icon" style={{color: props.mIconColor}} />;

	const buttonProps = {
		$variant: props.variant,
		$color: props.color || "gray",
		disabled: props.disabled,
		size: props.size,
		$size: props.size,
		onClick: props.onClick,
		onBlur: props.onBlur,
		onMouseEnter: props.onMouseEnter,
		onMouseLeave: props.onMouseLeave,
		href: props.href,
		name: props.name,
		...props.muiAttrs
	}

	const iconPosition = props.iconPosition || "left";

	return (
		<StyledWrapper
			{...props.attrs}
			$fullWidth={props.fullWidth}
			className={`
				${props.className ? props.className : ""}
				button
				${props.variant === "icon" ? "iconButton" : "normalButton"}
				${props.fullWidth ? "fullWidth" : ""}
				size_${props.size}
				variant_${props.variant}
			`}
		>
			{isIconButton ? (
				<StyledIconButton {...buttonProps}>
					<Icon data-testid="icon-button-test" />
				</StyledIconButton>
			) : (
				<StyledButton {...buttonProps} $fullWidth={props.fullWidth}>
					{iconPosition === "left" && adornmentIcon}
					{props.label}
					{iconPosition === "right" && adornmentIcon}
				</StyledButton>
			)}
		</StyledWrapper>
	);
}

function ButtonWithState(props: ButtonProps) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [tooltipEl, setTooltipEl] = useState(null);

	function openMenu(e: MouseEvent<HTMLButtonElement>) {
		setAnchorEl(e.currentTarget);
	}

	function closeMenu() {
		setAnchorEl(null);
	}

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		openMenu(e);
		props.onClick && props.onClick(e);
	};

	const isPopoverOnHover = props.popoverEvent === "onHover";

	const onMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
		props.onMouseEnter && props.onMouseEnter(e);
		props.popover && isPopoverOnHover && openMenu(e);
		setTooltipEl(e.currentTarget);
	};

	const onMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
		props.onMouseLeave && props.onMouseLeave(e);
		props.popover && isPopoverOnHover && closeMenu();
		setTooltipEl(null);
	};

	return (
		<>
			<ButtonBase
				{...props}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			/>
			{props.tooltip && (
				<Popper
					open={Boolean(tooltipEl)}
					anchorEl={tooltipEl}
					style={{ zIndex: 1500, pointerEvents: "none" }}
				>
					<TooltipContent>{props.tooltip}</TooltipContent>
				</Popper>
			)}
			{props.popover ? (
				<Popover
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					onClose={closeMenu}
					disableRestoreFocus
					style={ isPopoverOnHover ? { pointerEvents: "none" } : null}
					{...popoverProps}
				>
					<PopoverWrapper>
						<ButtonPopoverContext.Provider value={{ onClose: closeMenu }}>
							{props.popover}
						</ButtonPopoverContext.Provider>
					</PopoverWrapper>
				</Popover>
			) : props.menuItems ? (
				<Menu items={props.menuItems} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu} />
			) : props.menuContent && (
				<MenuBase anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
					{props.menuContent}
				</MenuBase>
			)}
		</>
	);
}

function Button(props: ButtonProps) {
	return (props.menuItems || props.menuContent || props.popover || props.tooltip) ? (
		<ButtonWithState {...props} />
	) : (
		<ButtonBase {...props} />
	);
}

export default memo(Button);
