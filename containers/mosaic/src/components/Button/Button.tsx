import type { MouseEvent } from "react";
import type { PopoverProps } from "@mui/material/Popover";

import React, { createContext, memo, useState, forwardRef } from "react";
import Popover from "@mui/material/Popover";

import type { ButtonIntent, ButtonPopoverContextProps, ButtonProps, ColorTypes } from "./ButtonTypes";

import { StyledButton, StyledButtonContent, StyledButtonHover, StyledButtonIcon, StyledButtonLabel, StyledWrapper } from "./Button.styled";
import Menu from "../Menu";
import { useToggle } from "@root/utils/toggle";
import Tooltip, { useTooltip } from "@root/components/Tooltip";
import useMountWarning from "@root/utils/hooks/useMountWarning/useMountWarning";

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

const colorToIntent: Record<ColorTypes, ButtonIntent> = {
	black: "specialized",
	blue: "info",
	gray: "secondary",
	lightBlue: "secondary",
	red: "danger",
	teal: "info",
	white: "secondary",
	yellow: "primary",
};

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonBase({
	size = "medium",
	...props
}, ref) {
	const Icon = props.mIcon;
	const isIconButton = !props.label && Icon;
	const iconPosition = props.iconPosition || "left";
	const adornmentIcon = Icon && (
		<StyledButtonIcon
			as={Icon}
			style={{ color: props.mIconColor }}
			$isAdornment={!isIconButton}
			$inherit={size === "inherit"}
		/>
	);

	const shouldDisable = useToggle(props, "disabled", false);
	useMountWarning(
		"[MOS Button] The `color` prop is deprecated and should no longer be used, it will be removed in a future version. Use the `intent` prop instead.",
		props.color !== undefined,
	);

	useMountWarning(
		"[MOS Button] The `icon` variant is deprecated. Mosaic now infers an icon variant from the use of the `mIcon` prop and the lack of a `label` prop.",
		props.variant === "icon",
	);

	useMountWarning(
		"[MOS Button] The `outlined` variant is deprecated and should no longer be used, it will be removed in a future version. Use either `contained` or `text`",
		props.variant === "outlined",
	);

	// TODO Remove when the color prop is dropped.
	const intent = props.intent ?? colorToIntent[props.color] ?? "secondary";

	const buttonProps = {
		$variant: props.variant,
		$intent: intent,
		disabled: props.invisible || shouldDisable,
		size: size,
		$size: size,
		onClick: props.onClick,
		onBlur: props.onBlur,
		href: props.href,
		name: props.name,
		id: props.id,
		type: props.type || "button",
		as: props.as,
		ref,
		disableRipple: true,
		"aria-label": typeof props.label === "string" ? props.label : typeof props.tooltip === "string" ? props.tooltip : undefined,
		...props.muiAttrs,
	};

	const cn = [
		"button",
		props.className,
		props.variant === "icon" ? "iconButton" : "normalButton",
		props.fullWidth && "fullWidth",
		props.invisible && "invisible",
		`size_${size}`,
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
			<StyledButton
				{...buttonProps}
				$fullWidth={props.fullWidth}
				$isIconButton={isIconButton}
			>
				<StyledButtonHover />
				<StyledButtonContent $size={size}>
					{iconPosition === "left" && adornmentIcon}
					{props.label && <StyledButtonLabel>{props.label}</StyledButtonLabel>}
					{iconPosition === "right" && adornmentIcon}
				</StyledButtonContent>
			</StyledButton>
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
					<ButtonPopoverContext.Provider value={{ onClose: closeMenu }}>
						{props.popover}
					</ButtonPopoverContext.Provider>
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
