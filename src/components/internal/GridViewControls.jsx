import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";
import GridViewDrawer from "./GridViewDrawer.jsx";
import GridViewSaveDrawer from "./GridViewSaveDrawer.jsx";

const ViewSpan = styled.span`
	display: inline-flex;
	align-items: center;
	
	& > .icon {
		margin-right: 3px;
	}
`

function GridViewControls(props) {
	const [state, setState] = useState({
		viewOpen : false,
		saveOpen : false
	});
	
	const toggleViewDrawer = function() {
		setState({
			...state,
			viewOpen : !state.viewOpen
		});
	}
	
	const toggleSaveDrawer = function() {
		setState({
			...state,
			saveOpen : !state.saveOpen
		});
	}
	
	const ViewLabel = (
		<ViewSpan>
			<ViewQuiltIcon className="icon"/> {props.savedView.label}
		</ViewSpan>
	)
	
	const saveMenuItems = [
		{
			label : "Save as New View",
			onClick : function() {
				toggleSaveDrawer();
			}
		},
		{
			label : "Overwrite Current View",
			disabled : props.savedView.type === "default",
			onClick : async function() {
				await props.savedViewCallbacks.onSave({
					...props.savedView,
					state : props.savedViewState
				});
			}
		}
	]
	
	const savedViewData = {
		id : undefined,
		label : props.savedView.type === "default" ? "" : props.savedView.label,
		type : props.savedView.type === "default" ? "mine" : props.savedView.type,
		state : props.savedViewState
	}
	
	return (
		<div>
			<div className="right">
				<ButtonRow>
					<Button
						mIcon={ExpandMoreIcon}
						iconPosition="right"
						label="Save As"
						variant="outlined"
						color="blue"
						menuItems={saveMenuItems}
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
			<GridViewSaveDrawer
				open={state.saveOpen}
				data={savedViewData}
				onClose={toggleSaveDrawer}
				onSave={props.savedViewCallbacks.onSave}
			/>
			<GridViewDrawer
				open={state.viewOpen}
				onClose={toggleViewDrawer}
				onRemove={props.savedViewCallbacks.onRemove}
				onSave={props.savedViewCallbacks.onSave}
				onChange={props.savedViewCallbacks.onChange}
				onGetOptions={props.savedViewCallbacks.onGetOptions}
			/>
		</div>
	)
}

export default GridViewControls;