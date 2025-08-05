import React from "react";
import type { ReactElement } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { StyledDataViewViewButton } from "./DataViewViewControlsStyled";
import type { DataViewViewButtonProps } from "./DataViewViewControlsTypes";
import { DataViewViewListWrapper } from "./DataViewViewListWrapper";

export function DataViewViewButton({
	currentView,
	onViewList,
}: DataViewViewButtonProps): ReactElement {
	return (
		<StyledDataViewViewButton
			mIcon={ExpandMoreIcon}
			iconPosition="right"
			label={(
				<DataViewViewListWrapper
					currentView={currentView}
					onViewList={onViewList}
				/>
			)}
			intent="secondary"
			variant="text"
			onClick={onViewList}
		/>
	);
}
