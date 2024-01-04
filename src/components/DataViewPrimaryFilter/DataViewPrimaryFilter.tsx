import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@root/components/Button";
import Tooltip from "../Tooltip";
import { Count, LabelWrapper, MultiselectCounter, Value } from "./DataViewPrimaryFilter.styled";
import { DataViewPrimaryFilterProps } from "./DataViewPrimaryFilterTypes";

function DataViewPrimaryFilter(props: DataViewPrimaryFilterProps) {
	const label = (
		<LabelWrapper>
			<div className="filter-label">{props.label}</div>
			{props.value &&
				<div className="filter-value" color={ props.color ? props.color : "black"}>
					<b>|</b>
					<Value>{props.value}</Value>
					{
						props.multiselect?.length > 1 && (
							<Tooltip text={props.multiselect.slice(1).map(val => val.label).join(", ")}>
								<MultiselectCounter>
									<Count>+{props.multiselect.length - 1}</Count>
								</MultiselectCounter>
							</Tooltip>
						)
					}
				</div>
			}
		</LabelWrapper>
	)

	return (
		<Button
			color={props.color ?? "gray"}
			variant="contained"
			size="small"
			onClick={props.onClick}
			label={label}
			iconPosition="right"
			mIcon={ExpandMoreIcon}
		/>
	)
}

export default DataViewPrimaryFilter;
