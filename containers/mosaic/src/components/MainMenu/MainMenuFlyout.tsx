import React, { useRef } from "react";
import { FlyoutList, StyledGroupHeader, StyledLabel, StyledMainMenuFlyout, StyledMainMenuPanel, StyledPanelBack, StyledPanelClose } from "./MainMenu.styled";
import { MainMenuItems } from "./MainMenuItems";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Close from "@mui/icons-material/Close";
import FocusTrap from "@mui/material/Unstable_TrapFocus";
import Slide from "@mui/material/Slide";
import type { MainMenuItemDef } from "./MainMenuTypes";
import { useMainMenu } from "./MainMenuContext";
import testIds from "@root/utils/testIds";

interface MainMenuFlyoutProps {
	title: string;
	items: MainMenuItemDef[];
	depth: number;
	onBack?: () => void;
}

export function MainMenuFlyout({
	onBack,
	title,
	items,
	depth,
}: MainMenuFlyoutProps) {
	const container = useRef();
	const { clearStack, onClose, isMobileVariant } = useMainMenu();

	return (
		<FocusTrap open>
			<StyledMainMenuFlyout
				ref={container}
				tabIndex={-1}
				data-testid={testIds.MAIN_MENU_FLYOUT}
			>
				<Slide timeout={isMobileVariant ? 0 : undefined} in direction="right" container={container.current}>
					<StyledMainMenuPanel>
						<StyledGroupHeader>
							{onBack && (
								<StyledPanelBack
									variant="text"
									mIcon={ChevronLeft}
									size="small"
									onClick={onBack}
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
								onClick={isMobileVariant ? onClose : clearStack}
								tooltip="Close"
							/>
						</StyledGroupHeader>
						<FlyoutList>
							<MainMenuItems
								items={items}
								depth={depth}
							/>
						</FlyoutList>
					</StyledMainMenuPanel>
				</Slide>
			</StyledMainMenuFlyout>
		</FocusTrap>
	);
}
