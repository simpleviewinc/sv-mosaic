import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";

import type { MenuItemProps } from "./MenuItemTypes";
import { colors, StyledIcon, StyledMenuItem } from "./MenuItem.styled";

export default function MenuItem({
	mIcon: Icon,
	color = "black",
	attrs: providedAttrs,
	title,
	label,
	onClick,
	disabled,
	selected = false,
	truncateText,
	autoFocus,
	tabIndex,
}: MenuItemProps): ReactElement {
	if (!colors.includes(color)) {
		throw new Error(
			"The menu item component only accepts the following colors: " +
			colors.join(", ") + ". " +
			`The color provided was "${color}"`,
		);
	}

	const attrs = useMemo(() => ({
		title: title === true && typeof label === "string" ?
			label : typeof title === "string" ?
				title : undefined,
		...providedAttrs,
	}), [providedAttrs, title, label]);

	return (
		<StyledMenuItem
			{...attrs}
			onClick={onClick}
			disabled={disabled}
			selected={selected}
			className="menu-item"
			disableRipple={true}
			$truncateText={truncateText}
			autoFocus={autoFocus}
			tabIndex={tabIndex}
			aria-selected={selected}
		>
			{Icon && (
				<StyledIcon
					className="icon"
					$color={color}
				>
					<Icon />
				</StyledIcon>
			)}
			<div className="menuLabel">
				<span>{label}</span>
			</div>
		</StyledMenuItem>
	);
}
