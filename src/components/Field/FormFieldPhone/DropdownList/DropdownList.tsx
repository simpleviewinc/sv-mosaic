import React from "react";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { DropdownListBox } from "./DropdownList.styled";

const DropdownList = React.forwardRef<HTMLUListElement, React.PropsWithChildren<{ anchorEl: HTMLElement }>>(function DropdownList({ children, anchorEl }, ref) {
	return (
		<Popper open anchorEl={anchorEl} style={{ width: anchorEl.clientWidth }}>
			<Paper>
				<DropdownListBox ref={ref}>
					{children}
				</DropdownListBox>
			</Paper>
		</Popper>
	);
});

export default DropdownList;
