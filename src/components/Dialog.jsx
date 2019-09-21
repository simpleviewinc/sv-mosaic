import React from "react";
import styled from "styled-components";

import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
	position: absolute;
	top: 0px;
	bottom: 0px;
	right: 0px;
	left: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${theme.fontFamily};
	
	& > .mask {
		background: black;
		position: absolute;
		top: 0px;
		bottom: 0px;
		right: 0px;
		left: 0px;
		opacity: .8;
	}
	
	& > .container {
		position: relative;
		background: white;
		border-radius: 4px;
		padding: 20px;
	}
	
	& > .container > h2 {
		margin-top: 0px;
	}
	
	& > .container > .buttonBar {
		text-align: right;
	}
`

function Dialog(props) {
	return (
		<StyledWrapper>
			<div className="mask"></div>
			<div className="container">
				<h2>{props.title}</h2>
				<p>{props.text}</p>
				<div className="buttonBar">
					<GridButtonBar buttons={props.buttons}></GridButtonBar>
				</div>
			</div>
		</StyledWrapper>
	)
}

export default Dialog;