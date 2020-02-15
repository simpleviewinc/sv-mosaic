import * as React from "react";
import { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";

import Button from "../Button";
import GridColumnDrawer from "./GridColumnDrawer.jsx";

export function DataViewColumnControl(props) {
	const [state, setState] = useState({
		open : false
	});

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
				label="Columns"
				variant="outlined"
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