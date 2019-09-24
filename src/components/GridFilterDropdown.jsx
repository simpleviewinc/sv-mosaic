import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import Popover from "@material-ui/core/Popover";
import ButtonRow from "./ButtonRow.jsx";
import Button from "./Button.jsx";

import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	padding: 10px;
	border-radius: 8px;
	background: white;
	
	& > .contents {
		margin-bottom: 1rem;
	}
	
	& > .buttonRow {
		text-align: right;
	}
`

function GridFilterDropdown(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "anchorEl", type : "object" },
			{ name : "children", type : "object" },
			{ name : "onClose", type : "function" },
			{ name : "onApply", type : "function" }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	return (
		<Popover
			anchorEl={props.anchorEl}
			onClose={props.onClose}
			open={Boolean(props.anchorEl)}
		>
			<StyledWrapper>
				<div className="contents">
					{props.children}
				</div>
				<div className="buttonRow">
					<ButtonRow>
						<Button label="Cancel" color="gray" variant="text" onClick={props.onClose}/>
						<Button label="Apply" color="blue" variant="contained" onClick={props.onApply}/>
					</ButtonRow>
				</div>
			</StyledWrapper>
		</Popover>
	)
}

export default GridFilterDropdown;