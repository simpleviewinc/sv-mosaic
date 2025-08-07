import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import testIds from "@root/utils/testIds";

import Tooltip, { useTooltip } from "../Tooltip";
import { FilterButton, FilterExpand, FilterValue, FilterValueBadge } from "./DataViewPrimaryFilter.styled";
import type { DataViewPrimaryFilterProps } from "./DataViewPrimaryFilterTypes";
import { Row } from "../common";
import Badge from "../Badge";

function DataViewPrimaryFilter({
	label,
	onClick,
	multiselect,
	parts,
}: DataViewPrimaryFilterProps) {
	const { anchorProps, tooltipProps } = useTooltip();

	return (
		<FilterButton
			intent="secondary"
			variant="contained"
			size="small"
			onClick={onClick}
			label={(
				<Row
					$align="center"
					$gap={[3]}
				>
					<Row
						$align="center"
						$gap={[1]}
					>
						<span>
							{label}
							{parts !== undefined && ":"}
						</span>
						{parts !== undefined && (
							<FilterValue>
								{parts.map(({ type, label }, index) => type === "operator" ? (
									<span key={index} data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>{label}</span>
								) : (
									<FilterValueBadge
										key={index}
										attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}
										maxLines={1}
									>
										{label}
									</FilterValueBadge>
								))}
							</FilterValue>
						)}
						{multiselect?.length > 1 && (
							<>
								<Badge
									attrs={{
										...anchorProps,
										"data-testid": testIds.DATA_VIEW_FILTER_MULTI_COUNTER,
									}}
								>
									+
									{multiselect.length - 1}
								</Badge>
								<Tooltip {...tooltipProps}>
									{multiselect.slice(1).map(val => val.label).join(", ")}
								</Tooltip>
							</>
						)}
					</Row>
					<FilterExpand>
						<KeyboardArrowDownIcon />
					</FilterExpand>
				</Row>
			)}
			muiAttrs={{ "aria-label": `Filter: ${label}` }}
		/>
	);
}

export default DataViewPrimaryFilter;
