import React from "react";

import Checkbox from "@root/components/Checkbox";
import DataViewTd from "./DataViewTd";
import DataViewActionsButtonRow from "../DataView/DataViewActionsButtonRow";

function DataViewTr(props) {
	return (
		<tr>
			{
				props?.bulkActions?.length > 0 &&
				<DataViewTd key="_bulk">
					<Checkbox
						checked={props.checked === true}
						onClick={props.onCheckboxClick}
					/>
				</DataViewTd>
			}
			<DataViewTd paddingRight={true} paddingLeft={!props?.bulkActions?.length}>
				<DataViewActionsButtonRow
					primaryActions={props.primaryActions}
					additionalActions={props.additionalActions}
					originalRowData={props.originalRowData}
				/>
			</DataViewTd>
			{
				props.columns.map(column => {
					return (
						<DataViewTd
							key={column.name}
							className={column.style === "bold" ? "bold" : undefined}
							paddingRight={true}
							expandCell={true}
							bold={column.style && column.style.bold}
							italic={column.style && column.style.italic}
							strikeThrough={column.style && column.style.strikeThrough}
							noWrap={column.style && column.style.noWrap}
							ellipsis={column.style && column.style.ellipsis}
							maxWidth={column.style && column.style.maxWidth}
							textTransform={column.style && column.style.textTransform}
						>
							{props.row[column.name]}
						</DataViewTd>
					);
				})
			}
		</tr>
	);
}

export default DataViewTr;
