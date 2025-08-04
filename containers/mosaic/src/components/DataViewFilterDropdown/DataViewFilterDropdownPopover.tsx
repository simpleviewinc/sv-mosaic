import React, { useEffect } from "react";

import type { DataViewFilterDropdownPopoverProps } from "./DataViewFilterDropdownTypes";
import testIds from "@root/utils/testIds";
import { StyledPopper, StyledPopperPaper } from "../common";
import Backdrop from "@mui/material/Backdrop";
import Grow from "@mui/material/Grow";
import FocusTrap from "@mui/material/Unstable_TrapFocus";

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
		<Backdrop
			open={isOpen || inTransit}
			onClick={onClose}
			invisible
		>
			<StyledPopper
				anchorEl={anchorEl}
				open={isOpen || inTransit}
				$width="auto"
				placement="bottom-start"
				onClick={handleContentClick}
			>
				<Grow
					in={isOpen}
					{...growProps}
				>
					<StyledPopperPaper>
						<FocusTrap open>
							<div data-testid={testIds.DATA_VIEW_FILTERS_DROPDOWN}>
								{children}
							</div>
						</FocusTrap>
					</StyledPopperPaper>
				</Grow>
			</StyledPopper>
		</Backdrop>
	);
}
