import React from "react";

import ButtonRow from "../../ButtonRow";

import type { DataViewViewControlsProps } from "./DataViewViewControlsTypes";
import testIds from "@root/utils/testIds";
import { DataViewViewButton } from "./DataViewViewButton";
import { DataViewViewListWrapper } from "./DataViewViewListWrapper";

function DataViewViewControls({
	currentView,
	onViewList,
}: DataViewViewControlsProps) {
	return (
		<div data-testid={testIds.DATA_VIEW_VIEW_CONTROL}>
			<div className="right">
				<ButtonRow>
					{onViewList ? (
						<DataViewViewButton
							currentView={currentView}
							onViewList={onViewList}
						/>
					) : (
						<DataViewViewListWrapper
							currentView={currentView}
						/>
					)}
				</ButtonRow>
			</div>
		</div>
	);
}

export default DataViewViewControls;
