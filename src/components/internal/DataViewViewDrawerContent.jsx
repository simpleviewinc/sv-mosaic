import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CreateIcon from '@material-ui/icons/Create';

import DataView from "../DataView";
import DrawerContent from "../DrawerContent.jsx";
import DataViewViewSaveDrawer from "./DataViewViewSaveDrawer.jsx";

const startingState = {
	options : undefined,
	loading : true,
	formOpen : false,
	formData : {}
}

function DataViewViewDrawerContent(props) {
	const [state, setState] = useState({
		...startingState
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
			...startingState
		});
	}

	const canAct = function(row) {
		if (row.type === "default") {
			return false;
		} else if (!props.allowSharedViewSave) {
			return row.type === "mine";
		} else {
			return true;
		}
	}
	
	const DataViewConfig = {
		primaryActions : [
			{
				name : "select",
				variant : "text",
				label : "Select",
				color : "blue",
				onClick : async function({ data }) {
					await props.onChange(data);
					props.onClose();
				}
			},
			{
				name : "edit",
				show : function({ row }) {
					return canAct(row);
				},
				variant : "icon",
				color : "blue",
				mIcon : CreateIcon,
				onClick : function({ data }) {
					setState({
						...state,
						formOpen : true,
						formData : data
					});
				}
			}
		],
		additionalActions : [
			{
				name : "remove",
				show : function({ row }) {
					return canAct(row);
				},
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
				label : "Type",
				style : {
					textTransform : "capitalize"
				}
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
				<DataView
					{...DataViewConfig}
				/>
			}
			<DataViewViewSaveDrawer
				open={state.formOpen}
				data={state.formData}
				onClose={closeForm}
				onSave={props.onSave}
				allowSharedViewSave={props.allowSharedViewSave}
			/>
		</DrawerContent>
	)
}

export default DataViewViewDrawerContent;