import * as React from "react";
import { memo } from "react";

import type { DataViewBulkActionsButtonsRowProps } from "./DataViewBulkActionsButtonsRowTypes";

import ButtonRow from "../../ButtonRow";

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
					onAllClick && onAllClick();
				} else {
					const checkedData = props.data.filter((_, i) => props.checked?.[i] === true);
					onClick && onClick({ data : checkedData });
				}
			},
		};
	});

	return (
		<ButtonRow buttons={buttons} />
	);
}

export default memo(DataViewBulkActionsButtonsRow);
