import React, { ReactNode } from "react";
import { useMemo } from "react";

import Checkbox from "../../Checkbox";
import DataViewActionsButtonRow from "../DataViewActionsButtonRow/DataViewActionsButtonRow";
import { transformRows } from "../../../utils/dataViewTools";

import DataViewBulkAllBar from "../DataViewBulkAllBar";
import { DataViewDisplayGridProps } from "./DataViewDisplayGridTypes";
import { StyledDiv } from "./DataViewDisplayGrid.styled";
import Typography from "@root/components/Typography";


function DataViewDisplayGrid(props: DataViewDisplayGridProps) {
	if (!props.gridColumnsMap) {
		throw new Error("You must specify gridColumnsMap in order to use the grid view.");
	}

	// execute the transforms in the rows
	const transformedData = useMemo(() => {
		return transformRows(props.data, props.columns);
	}, [props.data, props.columns]);

	const checkboxClick = (i) => () => {
		props.onCheckboxClick(i);
	}

	return (
		<StyledDiv>
			{
				props.showBulkAll &&
				<div className="topRowBulkAll">
					<DataViewBulkAllBar
						rowCount={props.rowCount}
						count={props.count}
						checkedAllPages={props.checkedAllPages}
						onCheckAllPagesClick={props.onCheckAllPagesClick}
					/>
				</div>
			}
			<div className="grid">
				{
					transformedData.map((row, i) => {
						const image = row[props.gridColumnsMap.image as string | number] as ReactNode;
						const primary = row[props.gridColumnsMap.primary as string | number] as ReactNode;
						const secondary = row[props.gridColumnsMap.secondary as string | number] as ReactNode;

						return (
							<div
								className={`
									cell
									${props.checked?.[i] ? "checked" : ""}
								`}
								key={i}
							>
								{
									image &&
									<div className="image">
										{
											props.onCheckboxClick &&
											<div className={`checkboxContainer ${props.anyChecked && !props.checked?.[i] ? "anyChecked" : ""}`}>
												<Checkbox
													className="checkbox"
													checked={props.checked[i]}
													onClick={checkboxClick(i)}
												/>
											</div>
										}
										<div className="imageContainer">
											<div className="overlay"/>
											{image}
										</div>
									</div>
								}
								<div className="info">
									<div className="left">
										{primary && (
											<Typography tag="h2">{primary}</Typography>
										)}
										{secondary && (
											<Typography tag="h3">{secondary}</Typography>
										)}
									</div>
									<div className="right">
										<DataViewActionsButtonRow
											primaryActions={props.primaryActions}
											additionalActions={props.additionalActions}
											originalRowData={ row }
											activeDisplay="grid"
											disabled={props.disabled}
										/>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</StyledDiv>
	)
}

export default DataViewDisplayGrid;
