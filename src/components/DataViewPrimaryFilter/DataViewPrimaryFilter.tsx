import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@root/components/Button";
import { BodyText } from "@root/components/Typography";
import Tooltip from "../Tooltip";
import { MosaicLabelValue } from "@root/types";
import { Count, LabelWrapper, MultiselectCounter, Value } from "./DataViewPrimaryFilter.styled";
import { DataViewFilterProps } from "../DataView/DataViewTypes";

interface DataViewPrimaryFilterProps {
	label?: DataViewFilterProps["label"];
	value?: string;
	onClick?: (evt: any) => void;
	multiselect?: MosaicLabelValue[];
}
// interface DataViewPrimaryFilterProps {
// 	label?: string;
// 	value?: string;
// 	color?: ButtonProps["color"];
// 	type?: "primary" | "optional";
// 	onRemove?: () => void;
// 	onClick?: ButtonProps["onClick"];
// }
//TODO PROPS
function DataViewPrimaryFilter(props: DataViewPrimaryFilterProps) {
	// jsvalidator.validate(props, {
	// 	type : "object",
	// 	schema : [
	// 		{ name : "label", type : "string", required : true },
	// 		{ name : "value", type : "string" },
	// 		{ name : "color", type : "string", required : false },
	// 		{ name : "type", type : "string", enum : ["primary", "optional"], required : true },
	// 		{ name : "onRemove", type : "function", required : true },
	// 		{ name : "onClick", type : "function", required : true }
	// 	],
	// 	allowExtraKeys : false,
	// 	throwOnInvalid : true
	// });

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
			color="black"
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
