import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";

import DataView from "./DataView";
import { DataViewProps } from "./DataViewTypes";
import DrawerContent from "@root/components/DrawerContent";
import DataViewViewSaveDrawer from "./DataViewViewSaveDrawer";
import { useMosaicTranslation } from "@root/i18n";

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

	const { t } = useMosaicTranslation();
	
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
	
	const DataViewConfig: DataViewProps = {
		primaryActions : [
			{
				name : "select",
				variant : "text",
				label : t("mosaic:common.select"),
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
				label : t("mosaic:common.remove"),
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
		columns : [
			{
				name : "id",
				label : "ID"
			},
			{
				name : "label",
				label : t("mosaic:common.label")
			},
			{
				name : "type",
				label : t("mosaic:common.type"),
				style : {
					textTransform : "capitalize"
				}
			}
		],
		activeColumns : ["label", "type"]
	}
	
	return (
		<DrawerContent
			title={t("mosaic:DataView.saved_views")}
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