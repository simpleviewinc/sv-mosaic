import React from "react";

import Button from "../Button.jsx";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// limit 15
// count 150
// skip 15
// page = 2;
// totalPages = 

function GridPager(props) {
	const totalPages = Math.ceil(props.count / props.limit);
	const currentPage = (props.skip + props.limit) / props.limit;
	
	const skipClick = (skip) => () => {
		props.onSkip(skip);
	}
	
	const previousDisabled = currentPage === 1;
	const nextDisabled = currentPage === totalPages;
	
	return (
		<span>
			<Button
				color="blue"
				variant="icon"
				mIcon={ChevronLeftIcon}
				onClick={skipClick(props.skip - props.limit)}
				disabled={previousDisabled}
			/>
			{currentPage} of {totalPages}
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

export default GridPager;