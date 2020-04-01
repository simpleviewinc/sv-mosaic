import * as React from "react";
import { memo } from "react";

import ButtonRow from "../ButtonRow";
import { DataViewBulkActionsButtonsRowProps } from "./DataViewTypes";

function DataViewBulkActionsButtonsRow(props: DataViewBulkActionsButtonsRowProps) {
	const buttons = props.bulkActions.map(action => {
		const {
			name,
			show,
			onClick,
			...buttonArgs
		} = action;
		
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