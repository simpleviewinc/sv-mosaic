import React, { MouseEvent, createContext, memo, useState, forwardRef } from "react";
import Popover, { PopoverProps } from "@mui/material/Popover";

import { StyledButton, StyledIconButton, StyledWrapper } from "./Button.styled";
import { ButtonPopoverContextProps, ButtonProps } from "./ButtonTypes";
import Menu from "../Menu";
import MenuBase from "../MenuBase";
import { PopoverWrapper } from "./Button.styled";
import { useToggle } from "@root/utils/toggle";
import Tooltip, { useTooltip } from "@root/components/Tooltip";

export const ButtonPopoverContext = createContext<ButtonPopoverContextProps>(null);

const popoverProps: Pick<PopoverProps, "anchorOrigin" | "transformOrigin"> = {
	anchorOrigin: {
		vertical: "bottom",
		horizontal: "left",
	},
	transformOrigin: {
		vertical: "top",
		horizontal: "left",
	},
};

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonBase(props, ref) {
	const Icon = props.mIcon;
	const isIconButton = props.variant === "icon";
	const adornmentIcon = Icon && <Icon className="adornment-icon" style={{ color: props.mIconColor }} />;

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
		ref,
		...props.muiAttrs,
	};

	const iconPosition = props.iconPosition || "left";
	const Component = props.component || (isIconButton ? StyledIconButton : StyledButton) as any;

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
				<Component {...buttonProps}>
					<Icon data-testid="icon-button-test" />
				</Component>
			) : (
				<Component {...buttonProps} $fullWidth={props.fullWidth}>
					{iconPosition === "left" && adornmentIcon}
					{props.label}
					{iconPosition === "right" && adornmentIcon}
				</Component>
			)}
		</StyledWrapper>
	);
});

function ButtonWithState(props: ButtonProps) {
	const { anchorProps, tooltipProps } = useTooltip();
	const [anchorEl, setAnchorEl] = useState(null);

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
		anchorProps.onMouseEnter();
	};

	const onMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
		props.onMouseLeave && props.onMouseLeave(e);
		props.popover && isPopoverOnHover && closeMenu();
		anchorProps.onMouseLeave();
	};

	return (
		<>
			<ButtonBase
				{...props}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				ref={anchorProps.ref}
			/>
			{props.tooltip && (
				<Tooltip {...tooltipProps}>
					{props.tooltip}
				</Tooltip>
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
	const shouldShow = useToggle(props, "show");

	if (!shouldShow) {
		return null;
	}

	return (props.menuItems || props.menuContent || props.popover || props.tooltip) ? (
		<ButtonWithState {...props} />
	) : (
		<ButtonBase {...props} />
	);
}

export default memo(Button);
