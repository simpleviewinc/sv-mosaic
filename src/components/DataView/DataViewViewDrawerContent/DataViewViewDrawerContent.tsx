import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";

import DataView from "../DataView";
import { DataViewProps, SavedViewDef } from "../DataViewTypes";
import DrawerContent from "@root/components/DrawerContent";
import DataViewViewSaveDrawer from "../DataViewViewSaveDrawer";
import { useMosaicTranslation } from "@root/i18n";
import { DataViewViewDrawerContentProps } from "./DataViewViewDrawerContentTypes";

const startingState = {
	options : undefined,
	loading : true,
	formOpen : false,
	formData : {
		id: "",
		label: "",
		type: "",
		state: {},
	},
};

function DataViewViewDrawerContent(props: DataViewViewDrawerContentProps) {
	const [state, setState] = useState({
		...startingState,
	});

	const { t } = useMosaicTranslation();

	useEffect(() => {
		async function getOptions() {
			const results = await props.onGetOptions();
			setState({
				...state,
				loading : false,
				options : results,
			});
		}

		getOptions();
	}, [state.loading]);

	const closeForm = function() {
		setState({
			...startingState,
		});
	};

	const canAct = function(row) {
		if (row.type === "default") {
			return false;
		} else if (!props.allowSharedViewSave) {
			return row.type === "mine";
		} else {
			return true;
		}
	};

	const DataViewConfig: DataViewProps = {
		primaryActions : [
			{
				name : "select",
				variant : "text",
				label : t("mosaic:common.select"),
				color : "teal",
				onClick : async function({ data }) {
					await props.onChange(data);
					props.onClose();
				},
			},
			{
				name : "edit",
				show : function({ row }) {
					return canAct(row);
				},
				variant : "icon",
				color : "black",
				mIcon : CreateIcon,
				onClick : function({ data }: { data: Required<SavedViewDef> }) {
					setState({
						...state,
						formOpen : true,
						formData : data,
					});
				},
			},
		],
		additionalActions : [
			{
				name : "remove",
				show : function({ row }) {
					return canAct(row);
				},
				label : t("mosaic:common.remove"),
				onClick : async function({ data }: { data: Required<SavedViewDef> }) {
					await props.onRemove(data);
					setState({
						...state,
						options : undefined,
						loading : true,
					});
				},
			},
		],
		data : state.options,
		loading : state.loading,
		columns : [
			{
				name : "id",
				label : "ID",
			},
			{
				name : "label",
				label : t("mosaic:common.label"),
			},
			{
				name : "type",
				label : t("mosaic:common.type"),
				style : {
					textTransform : "capitalize",
				},
			},
		],
		activeColumns : ["label", "type"],
	};

	return (
		<DrawerContent
			title={t("mosaic:DataView.saved_views")}
			onBack={props.onClose}
			backLabel={t("mosaic:DataView.cancel_saved_views")}
		>
			{
				state.options && (
					<DataView
						{...DataViewConfig}
					/>
				)
			}
			<DataViewViewSaveDrawer
				open={state.formOpen}
				data={state.formData}
				onClose={closeForm}
				onSave={props.onSave}
				allowSharedViewSave={props.allowSharedViewSave}
			/>
		</DrawerContent>
	);
}

export default DataViewViewDrawerContent;
