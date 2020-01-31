import React from "react";

import Button from "../Button.jsx";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styled from "styled-components";
import theme from "../../utils/theme.js";

const PagerInfo = styled.div`
	display: inline-flex;
	padding: 0 12px;
	color: ${theme.colors.gray700};
	font-weight: 500;
	// Align-items baseline not working with these components, would be good to find out why
	position: relative;
	top: 1px;
`;

function GridPager(props) {
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
		<span>
			<PagerInfo>{startItem}-{endItem} of {props.count}</PagerInfo>
			<Button
				color="black"
				variant="icon"
				mIcon={ChevronLeftIcon}
				onClick={skipClick(props.skip - props.limit)}
				disabled={previousDisabled}
			/>
			<Button
				color="black"
				variant="icon"
				mIcon={ChevronRightIcon}
				onClick={skipClick(props.skip + props.limit)}
				disabled={nextDisabled}
			/>
		</span>
	)
}

export default GridPager;