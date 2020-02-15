import React, { useState, useMemo } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import { pick } from "lodash";

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button";
import DataViewViewControls from "./DataViewViewControls.jsx";
import theme from "../../utils/theme.js";

const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	
	& > .left {
		display: flex;
		align-items: center;
	}
	
	& > .left > *:last-child {
		display: flex;
		margin-right: 0px;
	}
	
	& > .left > h1 {
		${theme.h1}
		margin-right: 20px;
	}
`;

function TitleBar(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "title", type : "string" },
			{ name : "buttons", type : "array" },
			{ name : "savedViewEnabled", type : "boolean" },
			{ name : "savedView", type : "object" },
			{ name : "savedViewState", type : "object" },
			{ name : "savedViewCallbacks", type : "object" }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const buttons = useMemo(() => {
		if (props.buttons === undefined) { return; }
		
		return props.buttons.map(button => {
			const { name, ...buttonArgs } = button;
			return buttonArgs;
		});
	}, [props.buttons]);
	
	return (
		<StyledWrapper>
			<div className="left">
				{
					props.title &&
					<h1>{props.title}</h1>
				}
				{
					props.buttons &&
					<ButtonRow buttons={buttons}/>
				}
			</div>
			{
				props.savedViewEnabled &&
				<DataViewViewControls
					savedView={props.savedView}
					savedViewState={props.savedViewState}
					savedViewCallbacks={props.savedViewCallbacks}
				/>
			}
		</StyledWrapper>
	)
}

export default TitleBar;