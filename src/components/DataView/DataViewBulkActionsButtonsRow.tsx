import * as React from "react";
import { memo } from "react";
import { pick } from "lodash";

import ButtonRow from "../ButtonRow.jsx";
import { DataViewBulkActionsButtonsRowProps } from "./DataViewTypes";

function DataViewBulkActionsButtonsRow(props: DataViewBulkActionsButtonsRowProps) {
	const buttons = props.bulkActions.map(action => {
		const buttonArgs = pick(action, ["label", "color", "variant", "mIcon"]);
		
		return {
			...buttonArgs,
			attrs : { "data-mosaic-id" : `action_bulk_${action.name}` },
			onClick : function() {
				const checkedData = props.data.filter((val, i) => props.checked[i] === true);
				action.onClick({ data : checkedData });
			}
		}
	});

	return (
		<ButtonRow buttons={buttons}/>
	)
}

export default memo(DataViewBulkActionsButtonsRow);