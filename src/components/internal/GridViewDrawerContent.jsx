import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CreateIcon from '@material-ui/icons/Create';

import Grid from "../Grid.jsx";
import DrawerContent from "../DrawerContent.jsx";
import GridViewSaveDrawer from "./GridViewSaveDrawer.jsx";

function GridViewDrawerContent(props) {
	const [state, setState] = useState({
		options : undefined,
		loading : true,
		formOpen : false,
		formData : undefined
	});
	
	useEffect(() => {
		async function getOptions() {
			const results = await props.onGetOptions();
			setState({
				...state,
				loading : false,
				options : results
			});
		}
		
		getOptions();
	}, [state.loading]);
	
	const closeForm = function() {
		setState({
			...state,
			options : undefined,
			loading : true,
			formOpen : false,
			formData : undefined
		});
	}
	
	const GridConfig = {
		primaryActions : [
			{
				variant : "text",
				label : "Select",
				color : "blue",
				onClick : async function({ data }) {
					await props.onChange(data);
					props.onClose();
				}
			},
			{
				variant : "icon",
				color : "blue",
				mIcon : CreateIcon,
				onClick : function({ data }) {
					setState({
						formOpen : true,
						formData : data
					});
				}
			}
		],
		additionalActions : [
			{
				label : "Remove",
				onClick : async function({ data }) {
					await props.onRemove(data);
					setState({
						...state,
						options : undefined,
						loading : true
					});
				}
			}
		],
		data : state.options,
		loading : state.loading,
		view : "list",
		columns : [
			{
				name : "label",
				label : "Label"
			},
			{
				name : "type",
				label : "Type"
			}
		],
		activeColumns : ["label", "type"]
	}
	
	return (
		<DrawerContent
			title="Saved Views"
			onClose={props.onClose}
		>
			{
				state.options &&
				<Grid
					{...GridConfig}
				/>
			}
			<GridViewSaveDrawer
				open={state.formOpen}
				data={state.formData}
				onClose={closeForm}
				onSave={props.onSave}
			/>
		</DrawerContent>
	)
}

export default GridViewDrawerContent;