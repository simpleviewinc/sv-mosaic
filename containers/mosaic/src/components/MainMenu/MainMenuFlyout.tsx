import React, { useRef } from "react";
import { StyledGroupHeader, StyledLabel, StyledMainMenuFlyout, StyledMainMenuPanel, StyledPanelBack, StyledPanelClose } from "./MainMenu.styled";
import { MainMenuItems } from "./MainMenuItems";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Close from "@mui/icons-material/Close";
import FocusTrap from "@mui/material/Unstable_TrapFocus";
import Slide from "@mui/material/Slide";
import type { MainMenuItemDef, MainMenuPop } from "./MainMenuTypes";
import { useMainMenu } from "./MainMenuContext";

interface MainMenuFlyoutProps {
	showBack: boolean;
	title: string;
	items: MainMenuItemDef[];
	pop: MainMenuPop;
	depth: number;
}

export function MainMenuFlyout({
	showBack,
	title,
	items,
	pop,
	depth,
}: MainMenuFlyoutProps) {
	const container = useRef();
	const { close } = useMainMenu();

	return (
		<FocusTrap open>
			<StyledMainMenuFlyout ref={container} tabIndex={-1}>
				<Slide in direction="right" container={container.current}>
					<StyledMainMenuPanel>
						<StyledGroupHeader>
							{showBack && (
								<StyledPanelBack
									variant="text"
									mIcon={ChevronLeft}
									size="small"
									onClick={pop}
								/>
							)}
							<StyledLabel>
								{title}
							</StyledLabel>
							<StyledPanelClose
								variant="text"
								mIcon={Close}
								size="small"
								onClick={close}
							/>
						</StyledGroupHeader>
						<MainMenuItems
							items={items}
							depth={depth}
						/>
					</StyledMainMenuPanel>
				</Slide>
			</StyledMainMenuFlyout>
		</FocusTrap>
	);
}
