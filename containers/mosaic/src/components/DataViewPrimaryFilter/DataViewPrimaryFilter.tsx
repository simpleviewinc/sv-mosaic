import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "@root/components/Button";
import testIds from "@root/utils/testIds";

import Tooltip, { useTooltip } from "../Tooltip";
import { Count, LabelWrapper, MultiselectCounter, Value } from "./DataViewPrimaryFilter.styled";
import type { DataViewPrimaryFilterProps } from "./DataViewPrimaryFilterTypes";

function DataViewPrimaryFilter(props: DataViewPrimaryFilterProps) {
	const { anchorProps, tooltipProps } = useTooltip();

	const label = (
		<LabelWrapper>
			<div className="filter-label">{props.label}</div>
			{props.value && (
				<div className="filter-value">
					<b>|</b>
					<Value title={props.value}>{props.value}</Value>
					{props.multiselect?.length > 1 && (
						<>
							<MultiselectCounter
								{...anchorProps}
								data-testid={testIds.DATA_VIEW_FILTER_MULTI_COUNTER}
							>
								<Count>
									+
									{props.multiselect.length - 1}
								</Count>
							</MultiselectCounter>
							<Tooltip {...tooltipProps}>
								{props.multiselect.slice(1).map(val => val.label).join(", ")}
							</Tooltip>
						</>
					)}
				</div>
			)}
		</LabelWrapper>
	);

	return (
		<Button
			intent="secondary"
			variant="contained"
			size="small"
			onClick={props.onClick}
			label={label}
			iconPosition="right"
			mIcon={ExpandMoreIcon}
			muiAttrs={{ "aria-label": `Filter: ${props.label}` }}
		/>
	);
}

export default DataViewPrimaryFilter;
