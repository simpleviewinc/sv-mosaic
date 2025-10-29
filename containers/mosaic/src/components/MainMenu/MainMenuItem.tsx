import type { MouseEventHandler } from "react";
import React, { useCallback } from "react";
import type { MainMenuItemDef } from "./MainMenuTypes";
import { StyledExpand, StyledIcon, StyledLabel, StyledListItem, StyledListItemButton } from "./MainMenu.styled";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "@root/constants/stable";
import { useMainMenu } from "./MainMenuContext";
import Circle from "@mui/icons-material/Circle";
import Tooltip, { useTooltip } from "../Tooltip";

interface MainMenuItemProps extends MainMenuItemDef {
	depth?: number;
}

function getItemIcon({ mIcon = null, depth }: Pick<MainMenuItemProps, "depth" | "mIcon">) {
	if (depth > 0) {
		return {
			Icon: mIcon,
			isPlaceholderIcon: false,
		};
	}

	if (!mIcon) {
		return {
			Icon: Circle,
			isPlaceholderIcon: true,
		};
	}

	return {
		Icon: mIcon,
		isPlaceholderIcon: false,
	};
}

export function MainMenuItem({
	depth = 0,
	...item
}: MainMenuItemProps) {
	const { anchorProps, tooltipProps } = useTooltip();
	const { push, clearStack, active, onNav: mainMenuOnNav, collapsed } = useMainMenu();
	const {
		label,
		mIcon,
		items = EMPTY_ARRAY,
		attrs = EMPTY_OBJECT,
		onNav,
	} = item;
	const href = "href" in attrs && attrs.href !== undefined ? attrs.href : undefined;
	const { Icon, isPlaceholderIcon } = getItemIcon({ mIcon, depth });

	const onButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event) => {
		if (items.length) {
			// This item has children, expand the panel for it
			push({
				index: depth,
				items,
				parent: item,
			});

			return;
		}

		if (onNav === false) {
			// Allow explicitly preventing custom behaviour for this item
			return;
		}

		const { metaKey, ctrlKey } = event;

		if (href !== undefined && (ctrlKey || metaKey)) {
			// This is a link and the user is using a modifier key, let the browser take care of it
			return;
		}

		// we have determined we will handle it, so preventDefault to prevent the browser from taking over
		event.preventDefault();

		if (typeof onNav === "function") {
			// if the nav item has it's own onNav function
			onNav({ item, event });
		} else {
			// else we all onNav for the main app to navigate
			mainMenuOnNav({ item, event });
		}

		clearStack();

	}, [depth, item, items, push, onNav, mainMenuOnNav, href, clearStack]);

	const isActive = item.isActive || (active && (active === item.name || active.startsWith(`${item.name}.`)));

	return (
		<>
			<StyledListItem>
				<StyledListItemButton
					onClick={onButtonClick}
					$rootPanel={!depth}
					$isActive={isActive}
					$collapsed={collapsed}
					{...attrs}
					{...(href !== undefined ? {
						href,
						as: "a",
					} : {})}
				>
					{Icon && (
						<StyledIcon
							$isActive={isActive}
							$isPlaceholder={isPlaceholderIcon}
							$collapsed={collapsed}
							{...(collapsed ? anchorProps : {})}
						>
							<Icon />
						</StyledIcon>
					)}
					<StyledLabel $invisible={!depth && collapsed}>
						{label}
					</StyledLabel>
					{items.length > 0 && (
						<StyledExpand />
					)}
				</StyledListItemButton>
			</StyledListItem>
			{collapsed && (
				<Tooltip {...tooltipProps} placement="right">{label}</Tooltip>
			)}
		</>
	);
}
