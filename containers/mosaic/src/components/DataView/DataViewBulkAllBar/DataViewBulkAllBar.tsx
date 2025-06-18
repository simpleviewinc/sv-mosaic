import * as React from "react";
import { memo, Fragment } from "react";
import styled from "styled-components";
import Button from "../../Button";
import theme from "@root/theme";
import type { DataViewBulkAllBarProps } from "./DataViewBulkAllBarTypes";
import testIds from "@root/utils/testIds";

const StyledDiv = styled.div`
	text-align: center;
	color: ${theme.newColors.grey3["100"]};
	border-bottom: ${theme.borders.lightGray};
	line-height: 1.75;
	display: flex;
	align-items: center;
	justify-content: center;

	& > .bulkText {
		margin-right: 6px;
	}
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
			<Button color="blue" variant="text" label={!props.checkedAllPages ? `Select All ${props.count} Records` : "Clear Selection"} onClick={props.onCheckAllPagesClick} />
		</StyledDiv>
	);
}

export default memo(DataViewBulkAllBar);
