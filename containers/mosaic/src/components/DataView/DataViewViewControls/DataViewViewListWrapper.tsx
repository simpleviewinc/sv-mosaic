import React from "react";
import type { ReactElement } from "react";

import { useMosaicTranslation } from "@root/i18n";
import { CurrenViewName, ViewListLabel, ViewListWrapper } from "./DataViewViewControlsStyled";
import type { DataViewViewListWrapperProps } from "./DataViewViewControlsTypes";

export function DataViewViewListWrapper({
	currentView,
	onViewList,
}: DataViewViewListWrapperProps): ReactElement {
	const { t } = useMosaicTranslation();

	return (
		<ViewListWrapper $hasOnViewList={Boolean(onViewList)}>
			<ViewListLabel>
				{t("mosaic:DataView.view")}
				:
			</ViewListLabel>
			<CurrenViewName $viewSelected={Boolean(currentView)}>
				{currentView ? currentView.label : t("mosaic:DataView.no_view_selected")}
			</CurrenViewName>
		</ViewListWrapper>
	);
}
