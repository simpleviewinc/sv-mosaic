import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import Popover from "@mui/material/Popover";

import theme from "@root/theme";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	padding: 10px;
	border-radius: 8px;
	background: white;
`

function DataViewFilterDropdown(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "anchorEl", type : "object" },
			{ name : "children", type : "object" },
			{ name : "onClose", type : "function" },
			{ name : "onEntered", type : "function" },
			{ name : "onExited", type : "function" }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
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
	}
	
	// avoid processing the content of the dropdown until we have been invoked
	if (exists === false) {
		return null;
	}
	
	return (
		<Popover
			anchorEl={props.anchorEl}
			onClose={props.onClose}
			open={Boolean(props.anchorEl)}
			TransitionProps={
				{
					onExited,
					onEntered : props.onEntered
				}
			}
		>
			<StyledWrapper>
				{props.children}
			</StyledWrapper>
		</Popover>
	)
}

export default DataViewFilterDropdown;