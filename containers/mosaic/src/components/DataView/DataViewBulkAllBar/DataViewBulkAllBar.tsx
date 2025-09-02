import * as React from "react";
import { memo, Fragment } from "react";
import styled from "styled-components";
import Button from "../../Button";
import theme from "@root/theme";
import type { DataViewBulkAllBarProps } from "./DataViewBulkAllBarTypes";
import testIds from "@root/utils/testIds";

const StyledDiv = styled.div`
	padding: ${theme.spacing(1)};
	text-align: center;
	color: ${theme.color.gray[800]};
	border-bottom: 1px solid ${theme.color.gray[300]};
	line-height: 1.75;
`;

function DataViewBulkAllBar(props: DataViewBulkAllBarProps) {
	return (
		<StyledDiv data-testid={testIds.DATA_VIEW_BULK_ALL}>
			<span className="bulkText">
				{
					props.checkedAllPages && (
						<Fragment>
							All
							{" "}
							<b>{props.count}</b>
							{" "}
							records are selected.
						</Fragment>
					)
				}
				{
					!props.checkedAllPages && (
						<Fragment>
							All
							{" "}
							<b>{props.rowCount}</b>
							{" "}
							records on this page are selected.
						</Fragment>
					)
				}
			</span>
			{" "}
			<Button
				intent="info"
				variant="text"
				size="inherit"
				label={!props.checkedAllPages ? `Select All ${props.count} Records` : "Clear Selection"}
				onClick={props.onCheckAllPagesClick}
			/>
		</StyledDiv>
	);
}

export default memo(DataViewBulkAllBar);
