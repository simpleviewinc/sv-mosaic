import * as React from "react";
import { memo } from "react";

import ButtonRow from "../ButtonRow";
import { DataViewBulkActionsButtonsRowProps } from "./DataViewTypes";
import { filterAction } from "./utils/bulkActionsUtils";

function DataViewBulkActionsButtonsRow(props: DataViewBulkActionsButtonsRowProps) {
	const validActions = props.bulkActions.filter(action => {
		if (props.checkedAllPages)
			return filterAction(action, { checkedAllPages: true })
		else
			return filterAction(action, { checkedAllPages: false, data: props.data.filter((val, i) => props.checked[i] === true)})
		// return (
		// 	(props.checkedAllPages === false && action.onClick) ||
		// 	(props.checkedAllPages === true && action.onAllClick)
		// );
	});

	const buttons = validActions.map(action => {
		const {
			name,
			show,
			onClick,
			onAllClick,
			...buttonArgs
		} = action;
		
		return {
			...buttonArgs,
			attrs : { "data-mosaic-id" : `action_bulk_${name}` },
			onClick : function() {
				if (props.checkedAllPages === true) {
					onAllClick();
				} else {
					const checkedData = props.data.filter((val, i) => props.checked[i] === true);
					onClick({ data : checkedData });
				}
			}
		}
	});

	return (
		<ButtonRow buttons={buttons}/>
	)
}

export default memo(DataViewBulkActionsButtonsRow);