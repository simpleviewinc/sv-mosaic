import * as React from "react";
import { ReactElement, useMemo } from "react";
import styled from "styled-components";
import MUIMenuItem from "@mui/material/MenuItem";

import { MenuItemProps } from "./MenuItemTypes";
import theme from "@root/theme";

const StyledMenuItem = styled(MUIMenuItem)<{ $truncateText?: boolean }>`
	&.MuiMenuItem-root {
		min-height: 42px;
		background-color: ${theme.colors.white} !important;
	}

	&.menu-item.Mui-selected {
		.menuLabel {
			font-weight: ${theme.fontWeight.bold};
		}
	}

	&.menu-item {
		padding: 8px 16px;
		&:hover {
			background-color: ${theme.newColors.grey2["100"]} !important;
		}
		&:active span {
			color: ${theme.newColors.almostBlack["100"]};
		}
		& .MuiTouchRipple-child {
			background-color: ${theme.newColors.grey2["100"]};
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${theme.iconFontSize};
	}

	& > .menuLabel {
		font-family: ${theme.fontFamily};
		font-size: 14px;
		color: ${theme.newColors.grey4["100"]};
		${({ $truncateText }) => $truncateText && `
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	}
`;

const StyledIcon = styled.div`
	display: inline-flex;
`;

const iconTypes = {
	blue : styled(StyledIcon)`
		& svg {
			color: ${theme.colors.blue};
		}
	`,
	red : styled(StyledIcon)`
		& svg {
			color: ${theme.newColors.darkRed["100"]};
		}
	`,
};

export default function MenuItem({
	mIcon,
	color,
	attrs: providedAttrs,
	title,
	label,
	onClick,
	disabled,
	selected,
	truncateText,
}: MenuItemProps): ReactElement {
	const Icon = mIcon;
	const MyIcon = color !== undefined ? iconTypes[color] : StyledIcon;

	const attrs = useMemo(() => ({
		title: title === true && typeof label === "string" ?
			label : typeof title === "string" ?
				title : undefined,
		...providedAttrs,
	}), [providedAttrs, title, label]);

	return (
		<StyledMenuItem
			{ ...attrs }
			onClick={onClick}
			disabled={disabled}
			selected={selected}
			className="menu-item"
			disableRipple={true}
			$truncateText={truncateText}
		>
			{mIcon && (
				<MyIcon className="icon">
					<Icon/>
				</MyIcon>
			)}
			<div className="menuLabel">
				<span>{label}</span>
			</div>
		</StyledMenuItem>
	);
}
