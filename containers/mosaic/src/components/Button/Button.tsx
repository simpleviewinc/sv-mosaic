import type { MouseEvent } from "react";
import type { PopoverProps } from "@mui/material/Popover";

import React, { createContext, memo, useState, forwardRef } from "react";
import Popover from "@mui/material/Popover";

import type { ButtonPopoverContextProps, ButtonProps } from "./ButtonTypes";

import { StyledButton, StyledIconButton, StyledWrapper } from "./Button.styled";
import Menu from "../Menu";
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

	const shouldDisable = useToggle(props, "disabled", false);

	const buttonProps = {
		$variant: props.variant,
		$color: props.color || "gray",
		disabled: props.invisible || shouldDisable,
		size: props.size,
		$size: props.size,
		onClick: props.onClick,
		onBlur: props.onBlur,
		href: props.href,
		name: props.name,
		id: props.id,
		type: props.type || "button",
		as: props.as,
		ref,
		...props.muiAttrs,
	};

	const iconPosition = props.iconPosition || "left";
	const Component = props.component || (isIconButton ? StyledIconButton : StyledButton) as any;

	const cn = [
		"button",
		props.className,
		props.variant === "icon" ? "iconButton" : "normalButton",
		props.fullWidth && "fullWidth",
		props.invisible && "invisible",
		`size_${props.size}`,
		`variant_${props.variant}`,
	].filter(Boolean).join(" ");

	return (
		<StyledWrapper
			{...props.attrs}
			$fullWidth={props.fullWidth}
			className={cn}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
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

	const shownMenuItems = useToggle(props.menuItems || [], "show", true);

	// If this is a button with menu items
	// but there are no menu items to show
	// then no need to render the button.
	if (props.menuItems && !shownMenuItems.length) {
		return null;
	}

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
					style={isPopoverOnHover ? { pointerEvents: "none" } : null}
					{...popoverProps}
				>
					<PopoverWrapper>
						<ButtonPopoverContext.Provider value={{ onClose: closeMenu }}>
							{props.popover}
						</ButtonPopoverContext.Provider>
					</PopoverWrapper>
				</Popover>
			) : props.menuItems ? (
				<Menu
					items={shownMenuItems}
					onChange={props.menuOnChange}
					value={props.menuValue}
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={closeMenu}
				/>
			) : null}
		</>
	);
}

function Button(props: ButtonProps) {
	const shouldShow = useToggle(props, "show");

	if (!shouldShow) {
		return null;
	}

	return (props.menuItems || props.popover || props.tooltip) ? (
		<ButtonWithState {...props} />
	) : (
		<ButtonBase {...props} />
	);
}

export default memo(Button);
