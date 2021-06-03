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
`;

interface Props {
	count: number
	limit: number
	checkedAllPages: boolean
	onCheckAllPagesClick: DataViewBulkAction["onAllClick"]
}

function DataViewBulkAllBar(props: Props) {
	return (
		<StyledDiv>
			{
				props.checkedAllPages &&
				<Fragment>All <b>{props.count}</b> records are selected.</Fragment>
			}
			{
				!props.checkedAllPages &&
				<Fragment>All <b>{props.limit}</b> records on this page are selected.</Fragment>
			}
			<Button color="blue" variant="text" label={!props.checkedAllPages ? `Select all ${props.count} records` : "Clear selection"} onClick={props.onCheckAllPagesClick}/>
		</StyledDiv>
	)
}

export default memo(DataViewBulkAllBar);