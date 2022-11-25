import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@root/components/Button";
import { BodyText } from "@root/components/Typography";
import Tooltip from "../Tooltip";
import { Count, LabelWrapper, MultiselectCounter, Value } from "./DataViewPrimaryFilter.styled";
import { DataViewPrimaryFilterProps } from "./DataViewPrimaryFilterTypes";

function DataViewPrimaryFilter(props: DataViewPrimaryFilterProps) {
	const label = (
		<LabelWrapper>
			<BodyText className="filter-label">{props.label}</BodyText>
			<BodyText	className="filter-value">
				<Value>| {props.value || "Any"}</Value>
				{
					props?.multiselect?.length > 1 && (
						<Tooltip text={props?.multiselect.slice(1).map(val => val.label).join(", ")} type='advanced'>
							<MultiselectCounter>
								<Count>+{props?.multiselect.length - 1}</Count>
							</MultiselectCounter>
						</Tooltip>
					)
				}
			</BodyText>
		</LabelWrapper>
	)

	return (
		<Button
			color={props.color ?? "black"}
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
