import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import GridViewDrawer from "./GridViewDrawer.jsx";

const ViewSpan = styled.span`
	display: inline-flex;
	align-items: center;
	
	& > .icon {
		margin-right: 3px;
	}
`

function GridViewControls(props) {
	const [state, setState] = useState({
		open : false
	});
	
	const toggleViewDrawer = function() {
		setState({
			...state,
			open : !state.open
		});
	}
	
	const activeView = props.savedViews.find(val => val.name === props.savedView);
	
	const ViewLabel = (
		<ViewSpan>
			<ViewQuiltIcon className="icon"/> {activeView.label}
		</ViewSpan>
	)
	
	return (
		<div>
			<div className="right">
				<ButtonRow>
					<Button
						label="Save as"
						variant="outlined"
						color="blue"
					/>
					<Button
						mIcon={ExpandMoreIcon}
						iconPosition="right"
						label={ViewLabel}
						variant="contained"
						color="lightBlue"
						onClick={toggleViewDrawer}
					/>
				</ButtonRow>
			</div>
			<GridViewDrawer
				open={state.open}
				onClose={toggleViewDrawer}
				savedViews={props.savedViews}
				onSavedViewChange={props.onSavedViewChange}
			/>
		</div>
	)
}

export default GridViewControls;