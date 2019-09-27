import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import Button from "./Button.jsx";
import ButtonRow from "./ButtonRow.jsx";

const StyledWrapper = styled.div`
	& {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
	}
`

function GridFilterDropdownButtons(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "onClear",
				type : "function"
			},
			{
				name : "onCancel",
				type : "function"
			},
			{
				name : "onApply",
				type : "function"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	return (
		<StyledWrapper>
			<ButtonRow>
				<Button label="Clear" color="gray" variant="text" onClick={props.onClear}/>
			</ButtonRow>
			<ButtonRow>
				<Button label="Cancel" color="gray" variant="text" onClick={props.onCancel}/>
				<Button label="Apply" color="blue" variant="contained" onClick={props.onApply}/>
			</ButtonRow>
		</StyledWrapper>
	)
}

export default GridFilterDropdownButtons;