import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import testIds from "@root/utils/testIds";

import Tooltip, { useTooltip } from "../Tooltip";
import { FilterButton, FilterExpand, FilterValue } from "./DataViewPrimaryFilter.styled";
import type { DataViewPrimaryFilterProps } from "./DataViewPrimaryFilterTypes";
import { Row } from "../common";
import Badge from "../Badge";

function DataViewPrimaryFilter({
	label,
	onClick,
	multiselect,
	value,
}: DataViewPrimaryFilterProps) {
	const { anchorProps, tooltipProps } = useTooltip();
	const hasValue = Boolean(value);

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
							{hasValue && ":"}
						</span>
						{hasValue && <FilterValue>{value}</FilterValue>}
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
