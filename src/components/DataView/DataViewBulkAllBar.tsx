import * as React from "react";
import { memo, Fragment } from "react";
import styled from "styled-components";
import Button from "../Button";
import theme from "../../utils/theme.js";
import { DataViewBulkAction } from "./DataViewTypes";

const StyledDiv = styled.div`
	text-align: center;
	font-weight: normal;
	color: ${theme.colors.gray600};
	border-bottom: ${theme.borders.lightGray};
	line-height: 1.75;
	display: flex;
	align-items: center;
	justify-content: center;

	& > .bulkText {
		margin-right: 6px;
	}
`;

interface Props {
	count: number
	rowCount: number
	checkedAllPages: boolean
	onCheckAllPagesClick: DataViewBulkAction["onAllClick"]
}

function DataViewBulkAllBar(props: Props) {
	return (
		<StyledDiv>
			<span className="bulkText">
				{
					props.checkedAllPages &&
					<Fragment>All <b>{props.count}</b> records are selected.</Fragment>
				}
				{
					!props.checkedAllPages &&
					<Fragment>All <b>{props.rowCount}</b> records on this page are selected.</Fragment>
				}
			</span>
			<Button color="blue" variant="text" label={!props.checkedAllPages ? `Select All ${props.count} Records` : "Clear Selection"} onClick={props.onCheckAllPagesClick}/>
		</StyledDiv>
	)
}

export default memo(DataViewBulkAllBar);