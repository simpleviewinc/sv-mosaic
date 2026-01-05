import React, { memo } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import type { DataViewThProps } from "./DataViewThTypes";
import { StyledTh } from "./DataViewTh.styled";
import testIds from "@root/utils/testIds";
import Tooltip, { useTooltip } from "@root/components/Tooltip";
import { TooltipIcon } from "@root/components/common";

function flipDir(sort: "asc" | "desc") {
	return sort === "asc" ? "desc" : "asc";
}

export function DataViewTh({
	name,
	label,
	description,
	sortable,
	sorted,
	onSortChange,
}: DataViewThProps) {
	const { anchorProps, tooltipProps } = useTooltip();
	const SortIcon = sortable ? (sorted && sorted === "desc" ? ArrowDownwardIcon : ArrowUpwardIcon) : undefined;

	return (
		<StyledTh
			className={`
				${sortable ? "sortable" : ""}
				${sorted ? "active" : ""}
			`}
		>
			<span
				className="columnHeader"
				onClick={sortable ? (() => onSortChange({
					name,
					dir: sorted ? flipDir(sorted) : "asc",
				})) : undefined}
				data-testid={testIds.DATA_VIEW_TH_INNER}
			>
				{label}
				{description && (
					<>
						<TooltipIcon {...anchorProps} />
						<Tooltip {...tooltipProps}>
							{description}
						</Tooltip>
					</>
				)}
				{SortIcon && (
					<SortIcon className="icon" />
				)}
			</span>
		</StyledTh>
	);
}

export default memo(DataViewTh);
