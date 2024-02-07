import * as React from "react";
import { memo } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Button from "../../Button";
import DataViewPagerPopover from "../DataViewPagerPopover";
import { useMosaicTranslation } from "@root/i18n";
import { DataViewPagerProps } from "./DataViewPagerTypes";
import { StyledSpan, StyledLabel, StyledButton } from "./DataViewPager.styled";


function DataViewPager(props: DataViewPagerProps) {
	const { t } = useMosaicTranslation();

	const totalPages = Math.ceil(props.count / props.limit);
	const currentPage = (props.skip + props.limit) / props.limit;
	const startItem = (props.skip + 1);
	const endItem = Math.min(props.skip + props.limit, props.count);

	const skipClick = (skip) => () => {
		props.onSkipChange({ skip });
	};

	const previousDisabled = currentPage === 1;
	const nextDisabled = currentPage === totalPages;

	if (totalPages === 0) {
		return null;
	}

	return (
		<StyledSpan>
			<Button
				color="black"
				variant="text"
				size="small"
				tooltip={t("mosaic:DataView.jump_to_page")}
				label={<span>{startItem}-{endItem} <StyledLabel>of</StyledLabel> {props.count}</span>}
				popover={
					<DataViewPagerPopover
						currentPage={currentPage}
						totalPages={totalPages}
						limit={props.limit}
						onSkipChange={props.onSkipChange}
					/>
				}
			/>
			<StyledButton
				color="gray"
				variant="icon"
				size="small"
				mIcon={ChevronLeftIcon}
				onClick={skipClick(props.skip - props.limit)}
				disabled={previousDisabled}
			/>
			<StyledButton
				color="gray"
				variant="icon"
				size="small"
				mIcon={ChevronRightIcon}
				onClick={skipClick(props.skip + props.limit)}
				disabled={nextDisabled}
			/>
		</StyledSpan>
	);
}

export default memo(DataViewPager);
