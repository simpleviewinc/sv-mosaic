import * as React from "react";
import { memo } from "react";

import ButtonRow from "../../ButtonRow";
import { DataViewBulkActionsButtonsRowProps } from "./DataViewBulkActionsButtonsRowTypes";

function DataViewBulkActionsButtonsRow(props: DataViewBulkActionsButtonsRowProps) {
	const buttons = props.bulkActions.map(action => {
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
					const checkedData = props.data.filter((val, i) => props.checked?.[i] === true);
					onClick({ data : checkedData });
				}
			},
		};
	});

	return (
		<ButtonRow buttons={buttons} />
	);
}

export default memo(DataViewBulkActionsButtonsRow);
