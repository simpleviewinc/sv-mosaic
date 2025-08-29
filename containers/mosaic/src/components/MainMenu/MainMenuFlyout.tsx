import React, { useRef } from "react";
import { StyledGroupHeader, StyledLabel, StyledMainMenuFlyout, StyledMainMenuPanel, StyledPanelBack, StyledPanelClose } from "./MainMenu.styled";
import { MainMenuItems } from "./MainMenuItems";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Close from "@mui/icons-material/Close";
import FocusTrap from "@mui/material/Unstable_TrapFocus";
import Slide from "@mui/material/Slide";
import type { MainMenuItemDef, MainMenuPop } from "./MainMenuTypes";
import { useMainMenu } from "./MainMenuContext";
import testIds from "@root/utils/testIds";

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
			<StyledMainMenuFlyout
				ref={container}
				tabIndex={-1}
				data-testid={testIds.MAIN_MENU_FLYOUT}
			>
				<Slide in direction="right" container={container.current}>
					<StyledMainMenuPanel>
						<StyledGroupHeader>
							{showBack && (
								<StyledPanelBack
									variant="text"
									mIcon={ChevronLeft}
									size="small"
									onClick={pop}
									tooltip="Back"
								/>
							)}
							<StyledLabel data-testid={testIds.MAIN_MENU_FLYOUT_TITLE}>
								{title}
							</StyledLabel>
							<StyledPanelClose
								variant="text"
								mIcon={Close}
								size="small"
								onClick={close}
								tooltip="Close"
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
