import * as React from "react";
import styled from "styled-components";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Button from "../Button";
import { BodyText } from "../Typography";

const StyledSpan = styled.span`
	display: inline-flex;
	align-items: center;

	& > .pagerText { line-height: 36px; }
`;

function DataViewPager(props) {
	const totalPages = Math.ceil(props.count / props.limit);
	const currentPage = (props.skip + props.limit) / props.limit;
	const startItem = (props.skip + 1);
	const endItem = Math.min(props.skip + props.limit, props.count);
	
	const skipClick = (skip) => () => {
		props.onSkipChange({ skip });
	}
	
	const previousDisabled = currentPage === 1;
	const nextDisabled = currentPage === totalPages;
	
	if (totalPages === 0) {
		return null;
	}
	
	return (
		<StyledSpan>
			<Button
				color="black"
				variant="icon"
				mIcon={ChevronLeftIcon}
				onClick={skipClick(props.skip - props.limit)}
				disabled={previousDisabled}
			/>
			<BodyText className="pagerText">{startItem}-{endItem} of {props.count}</BodyText>
			<Button
				color="black"
				variant="icon"
				mIcon={ChevronRightIcon}
				onClick={skipClick(props.skip + props.limit)}
				disabled={nextDisabled}
			/>
		</StyledSpan>
	)
}

export default DataViewPager;