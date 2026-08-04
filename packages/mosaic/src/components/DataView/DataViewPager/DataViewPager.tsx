import React, { memo } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import type { DataViewPagerProps } from "./DataViewPagerTypes";

import { useMosaicTranslation } from "@root/i18n";
import Button from "../../Button";
import DataViewPagerPopover from "../DataViewPagerPopover";
import { StyledLabel } from "./DataViewPager.styled";
import testIds from "@root/utils/testIds";
import ButtonRow from "@root/components/ButtonRow";

const prevPageAttrs = { "aria-label": "Previous Page" };
const nextPageAttrs = { "aria-label": "Next Page" };

function DataViewPager(props: DataViewPagerProps) {
	const { t } = useMosaicTranslation();

	const totalPages = Math.ceil(props.count / props.limit);
	const currentPage = (props.skip + props.limit) / props.limit;
	const startItem = (props.skip + 1);
	const endItem = Math.min(props.skip + props.limit, props.count);

	const skipClick = (skip) => () => {
		props.onSkipChange({ skip });
	};

	const previousDisabled = currentPage <= 1;
	const nextDisabled = currentPage >= totalPages;

	if (totalPages === 0) {
		return null;
	}

	return (
		<ButtonRow data-testid={testIds.DATA_VIEW_PAGER}>
			<Button
				intent="secondary"
				variant="contained"
				size="medium"
				tooltip={t("mosaic:DataView.jump_to_page")}
				label={(
					<span>
						{startItem}
						-
						{endItem}
						{" "}
						<StyledLabel>of</StyledLabel>
						{" "}
						{props.count}
					</span>
				)}
				popover={(
					<DataViewPagerPopover
						currentPage={currentPage}
						totalPages={totalPages}
						limit={props.limit}
						onSkipChange={props.onSkipChange}
					/>
				)}
			/>
			<Button
				intent="secondary"
				variant="text"
				mIcon={ChevronLeftIcon}
				onClick={skipClick(props.skip - props.limit)}
				disabled={previousDisabled}
				muiAttrs={prevPageAttrs}
			/>
			<Button
				intent="secondary"
				variant="text"
				mIcon={ChevronRightIcon}
				onClick={skipClick(props.skip + props.limit)}
				disabled={nextDisabled}
				muiAttrs={nextPageAttrs}
			/>
		</ButtonRow>
	);
}

export default memo(DataViewPager);
