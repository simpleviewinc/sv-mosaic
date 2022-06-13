import * as React from "react";
import { ReactElement, useState } from "react";
import { PopoverProps } from "./PopoverTypes";
import {
	ContentWrapper,
	StyledPaper,
	PopperSx,
	Arrow,
	StyledHr,
} from "./Popover.styled";

// Components
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";

const Popover = (props: PopoverProps): ReactElement => {
	const {
		anchorEl,
		className,
		topContent,
		bottomContent,
		open,
		onClose,
	} = props;

	const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);

	return (
		<Popper
			className={className}
			sx={PopperSx}
			placement="bottom"
			modifiers={[
				{
					name: "flip",
					enabled: true,
					options: {
						altBoundary: true,
						rootBoundary: "viewport",
						padding: 8,
					},
				},
				{
					name: "preventOverflow",
					enabled: true,
					options: {
						altAxis: true,
						altBoundary: true,
						tether: false,
						rootBoundary: "viewport",
						padding: 8,
					},
				},
				{
					name: "arrow",
					enabled: true,
					options: {
						element: arrowRef,
					},
				},
			]}
			open={open}
			anchorEl={anchorEl}
			transition
		>
			{({ TransitionProps }) => (
				<Grow {...TransitionProps} timeout={350}>
					<Paper
						sx={{
							boxShadow: "none",
						}}
					>
						<ClickAwayListener onClickAway={onClose}>
							<StyledPaper>
								<Arrow ref={setArrowRef} className="MuiPopper-arrow" />
								<ContentWrapper>
									<div>{topContent}</div>
									{bottomContent && <StyledHr data-testid="bottom-content-split" />}
									<div>{bottomContent}</div>
								</ContentWrapper>
							</StyledPaper>
						</ClickAwayListener>
					</Paper>
				</Grow>
			)}
		</Popper>
	);
};

export default Popover;
