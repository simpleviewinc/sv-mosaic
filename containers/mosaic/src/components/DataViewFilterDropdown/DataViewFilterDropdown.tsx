import React, { useState, useEffect } from "react";

import type { DataViewFilterDropdownProps } from "./DataViewFilterDropdownTypes";

import { StyledPopover, StyledWrapper } from "./DataViewFilterDropdown.styled";
import testIds from "@root/utils/testIds";

function DataViewFilterDropdown(props: DataViewFilterDropdownProps) {
	// track whether the content of the dropdown should be visible
	const [exists, setExists] = useState(false);

	// if the anchorEl exists, we phase in
	useEffect(() => {
		if (Boolean(props.anchorEl) === true) {
			setExists(true);
		}
	}, [props.anchorEl]);

	// wait for the animation to complete before hiding
	const onExited = function() {
		setExists(false);

		if (props.onExited) {
			props.onExited();
		}
	};

	// avoid processing the content of the dropdown until we have been invoked
	if (exists === false) {
		return null;
	}

	return (
		<StyledPopover
			anchorEl={props.anchorEl}
			onClose={props.onClose}
			open={Boolean(props.anchorEl)}
			TransitionProps={{
				onExited,
				onEntered : props.onEntered,
			}}
		>
			<StyledWrapper data-testid={testIds.DATA_VIEW_FILTERS_DROPDOWN}>
				{props.children}
			</StyledWrapper>
		</StyledPopover>
	);
}

export default DataViewFilterDropdown;
