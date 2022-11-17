import * as React from "react";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import Button from "../Button";
import DataViewColumnDrawer from "./DataViewColumnDrawer";
import { useMosaicTranslation } from "@root/i18n";
import { DataViewProps } from "./DataViewTypes";

interface DataViewColumnControlProps {
	onChange?: DataViewProps["onColumnsChange"];
	columns?:  DataViewProps["columns"];
	allColumns?: DataViewProps["columns"];
}

export default function DataViewColumnControl(props: DataViewColumnControlProps) {
	const [state, setState] = useState({
		open : false
	});

	const { t } = useMosaicTranslation();

	const gearClick = function() {
		setState({
			...state,
			open : !state.open
		});
	}

	return (
		<div>
			<Button
				color="black"
				label={t("mosaic:DataView.columns")}
				variant="text"
				mIcon={SettingsIcon}
				onClick={gearClick}
				iconPosition="left"
				tooltip="Update columns and their order."
			/>
			{
				props.onChange !== undefined &&
				<DataViewColumnDrawer
					open={state.open}
					columns={props.columns}
					allColumns={props.allColumns}
					onChange={props.onChange}
					onClose={gearClick}
				/>
			}
		</div>
	)
}
