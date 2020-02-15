import React from "react";

import Button from "../Button";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
		<span>
			<Button
				color="blue"
				variant="icon"
				mIcon={ChevronLeftIcon}
				onClick={skipClick(props.skip - props.limit)}
				disabled={previousDisabled}
			/>
			{startItem}-{endItem} of {props.count}
			<Button
				color="blue"
				variant="icon"
				mIcon={ChevronRightIcon}
				onClick={skipClick(props.skip + props.limit)}
				disabled={nextDisabled}
			/>
		</span>
	)
}

export default DataViewPager;