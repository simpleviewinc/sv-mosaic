import React, { useState, useMemo } from "react";

import type { DataViewFilterDropdownProps } from "./DataViewFilterDropdownTypes";

import { createPortal } from "react-dom";
import type { GrowProps } from "@mui/material/Grow";
import { DataViewFilterDropdownPopover } from "./DataViewFilterDropdownPopover";

function DataViewFilterDropdown(props: DataViewFilterDropdownProps) {
	const isOpen = Boolean(props.anchorEl);
	const [inTransit, setInTransit] = useState(false);

	const growProps = useMemo<Omit<GrowProps, "children">>(() => ({
		style: { transformOrigin: "0 0 0" },
		timeout: {
			enter: 300,
			exit: 200,
		},
		onEnter: () => setInTransit(true),
		onExited: () => setInTransit(false),
	}), []);

	if (!isOpen && !inTransit) {
		return null;
	}

	return (
		createPortal(
			<DataViewFilterDropdownPopover
				onClose={props.onClose}
				isOpen={isOpen}
				inTransit={inTransit}
				anchorEl={props.anchorEl}
				growProps={growProps}
				children={props.children}
			/>,
			document.body,
		)
	);
}

export default DataViewFilterDropdown;
