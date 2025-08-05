import React, { useEffect } from "react";

import type { DataViewFilterDropdownPopoverProps } from "./DataViewFilterDropdownTypes";
import testIds from "@root/utils/testIds";
import { StyledPopper, StyledPopperPaper } from "../common";
import Grow from "@mui/material/Grow";
import FocusTrap from "@mui/material/Unstable_TrapFocus";
import { StyledBackdrop } from "./DataViewFilterDropdown.styled";

export function DataViewFilterDropdownPopover({
	onClose,
	isOpen,
	inTransit,
	anchorEl,
	growProps,
	children,
}: DataViewFilterDropdownPopoverProps) {
	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.document.addEventListener("keydown", handleKeyPress);
		return () => window.document.removeEventListener("keydown", handleKeyPress);
	}, [onClose]);

	const handleContentClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

	return (
		<div role="presentation">
			<StyledBackdrop
				open={isOpen || inTransit}
				onClick={onClose}
				invisible
			/>
			<StyledPopper
				anchorEl={anchorEl}
				open={isOpen || inTransit}
				$width="auto"
				placement="bottom-start"
				onClick={handleContentClick}
				disablePortal
			>
				<FocusTrap open>
					<Grow
						in={isOpen}
						{...growProps}
					>
						<StyledPopperPaper>
							<div data-testid={testIds.DATA_VIEW_FILTERS_DROPDOWN}>
								{children}
							</div>
						</StyledPopperPaper>
					</Grow>
				</FocusTrap>
			</StyledPopper>
		</div>
	);
}
