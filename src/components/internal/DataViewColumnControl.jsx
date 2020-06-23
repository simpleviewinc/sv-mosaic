import * as React from "react";
import { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";

import Button from "../Button";
import GridColumnDrawer from "./GridColumnDrawer.jsx";
import { useMosaicTranslation } from "@root/i18n";

export function DataViewColumnControl(props) {
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
		<>
			<Button
				color="black"
				label={t("mosaic:DataView.columns")}
				variant="outlined"
				size="small"
				mIcon={SettingsIcon}
				onClick={gearClick}
				iconPosition="left"
			/>
			{
				props.onChange !== undefined &&
				<GridColumnDrawer
					open={state.open}
					columns={props.columns}
					allColumns={props.allColumns}
					onChange={props.onChange}
					onClose={gearClick}
				/>
			}
		</>
	)
}