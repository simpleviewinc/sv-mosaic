import React, { useState, useEffect } from "react";
import { StyledPopover, StyledWrapper } from "./DataViewFilterDropdown.styled";
import { DataViewFilterDropdownProps } from "./DataViewFilterDropdownTypes";

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
			<StyledWrapper>
				{props.children}
			</StyledWrapper>
		</StyledPopover>
	);
}

export default DataViewFilterDropdown;
