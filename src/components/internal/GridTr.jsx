import React, { useMemo } from "react";

import Checkbox from "../Checkbox.jsx";
import GridTd from "./GridTd.jsx";
import DataViewActionsButtonRow from "../DataView/DataViewActionsButtonRow";

function GridTr(props) {
	return (
		<tr>
			{
				props.bulkActions &&
				<GridTd key="_bulk">
					<Checkbox
						checked={props.checked === true}
						onClick={props.onCheckboxClick}
					/>
				</GridTd>
			}
			<GridTd paddingRight={true} paddingLeft={!props.bulkActions}>
				<DataViewActionsButtonRow
					primaryActions={props.primaryActions}
					additionalActions={props.additionalActions}
					row={props.row}
				/>
			</GridTd>
			{
				props.columns.map(column => {
					return (
						<GridTd
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
						</GridTd>
					);
				})
			}
		</tr>
	);
}

export default GridTr;