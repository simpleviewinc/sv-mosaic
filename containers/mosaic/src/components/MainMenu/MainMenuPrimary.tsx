import React, { useCallback, useEffect, useMemo, useState } from "react";
import Settings from "@mui/icons-material/Settings";
import Apps from "@mui/icons-material/Apps";
import ExitToApp from "@mui/icons-material/ExitToApp";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import type { MainMenuItemRootDef, MainMenuPop, MainMenuContextState } from "./MainMenuTypes";
import { type MainMenuProps, type MainMenuPush, type MainMenuStackPanel } from "./MainMenuTypes";
import { StyledBackdrop, StyledMainMenu, StyledMainMenuBottom, StyledMainMenuPanel, StyledMenuFloat } from "./MainMenu.styled";
import { MainMenuItems } from "./MainMenuItems";
import { MainMenuContext } from "./MainMenuContext";
import { MainMenuFlyout } from "./MainMenuFlyout";

export function MainMenuPrimary({
	items,
	active,
	onNav,
	variant,
	onVariantChange,
	zIndex,
}: MainMenuProps) {
	const [stack, setStack] = useState<MainMenuStackPanel[]>([]);
	const currentPanel = stack[stack.length - 1];
	const collapsed = variant === "icons_only";
	const hidden = variant === "hidden" || variant === "mobile";

	const [topItems, bottomItems] = useMemo<MainMenuItemRootDef[][]>(() => {
		const topItems: MainMenuItemRootDef[] = [];
		const bottomItems: MainMenuItemRootDef[] = [];

		for (const item of items) {
			if (item.pinned === "bottom") {
				bottomItems.push(item);
			} else {
				topItems.push(item);
			}
		}

		if (variant !== "mobile") {
			bottomItems.push({
				name: "__mos_menu_display",
				label: "Menu Display",
				mIcon: Settings,
				items: [
					{
						name: "__mos_menu_display.full",
						label: "Full",
						onNav: () => onVariantChange("full"),
						mIcon: ExitToApp,
						isActive: variant === "full",
					},
					{
						name: "__mos_menu_display.icons_only",
						label: "Icons Only",
						onNav: () => onVariantChange("icons_only"),
						mIcon: Apps,
						isActive: variant === "icons_only",
					},
					{
						name: "__mos_menu_display.hidden",
						label: "Hidden",
						onNav: () => onVariantChange("hidden"),
						mIcon: VisibilityOff,
						isActive: variant === "hidden",
					},
				],
			});
		}

		return [topItems, bottomItems];
	}, [items, onVariantChange, variant]);

	const push = useCallback<MainMenuPush>(({ index, items, parent }) => {
		setStack((current) => [
			...current.slice(0, index),
			{ items, parent },
		]);
	}, []);

	const pop = useCallback<MainMenuPop>(() => {
		setStack((current) => current.slice(0, current.length - 1));
	}, []);

	const close = useCallback(() => setStack([]), []);

	useEffect(() => {
		const closeOnEscape = ({ key, repeat }: KeyboardEvent) => {
			if ( key !== "Escape" || repeat ) {
				return;
			}

			close();
		};

		window.document.addEventListener("keydown", closeOnEscape);
		return () => window.document.removeEventListener("keydown", closeOnEscape);
	}, [close]);

	const mainMenuContextState = useMemo<MainMenuContextState>(() => ({
		push,
		close,
		active,
		onNav,
		collapsed,
		hidden,
	}), [push, close, active, onNav, collapsed, hidden]);

	return (
		<MainMenuContext.Provider value={mainMenuContextState}>
			<StyledMainMenu
				$collapsed={collapsed}
				$hidden={hidden}
				$zIndex={zIndex}
			>
				{currentPanel && !hidden && (
					<StyledBackdrop onClick={close} />
				)}
				<StyledMenuFloat $hidden={hidden}>
					<StyledMainMenuPanel
						$rootPanel
						$collapsed={collapsed}
					>
						<MainMenuItems items={topItems} />
						<StyledMainMenuBottom>
							<MainMenuItems items={bottomItems} />
						</StyledMainMenuBottom>
					</StyledMainMenuPanel>
					{currentPanel && (
						<MainMenuFlyout
							items={currentPanel.items}
							title={currentPanel.parent.label}
							depth={stack.length}
							showBack={stack.length > 1}
							pop={pop}
						/>
					)}
				</StyledMenuFloat>
			</StyledMainMenu>
		</MainMenuContext.Provider>
	);
}
