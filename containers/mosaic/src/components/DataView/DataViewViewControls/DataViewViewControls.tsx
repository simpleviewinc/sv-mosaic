import React, { useMemo } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ButtonRow from "../../ButtonRow";
import Button from "../../Button";

import { useMosaicTranslation } from "@root/i18n";
import type { DataViewViewControlsProps } from "./DataViewViewControlsTypes";
import type { MenuItemProps } from "@root/components/MenuItem";
import testIds from "@root/utils/testIds";
import { DataViewViewButton } from "./DataViewViewButton";
import { DataViewViewListWrapper } from "./DataViewViewListWrapper";

function DataViewViewControls({
	currentView,
	onViewSave,
	onViewSaveAs,
	onViewList,
}: DataViewViewControlsProps) {
	const { t } = useMosaicTranslation();

	const viewMenuItems = useMemo<MenuItemProps[]>(() => {
		const listItems: MenuItemProps[] = [];

		if (onViewSave) {
			listItems.push({
				label: t("mosaic:DataView.overwrite_current_view"),
				onClick: onViewSave,
			});
		}

		if (onViewSaveAs) {
			listItems.push({
				label: t("mosaic:DataView.save_as_new_view"),
				onClick: onViewSaveAs,
			});
		}

		return listItems;
	}, [onViewSave, onViewSaveAs, t]);

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
					<Button
						mIcon={ExpandMoreIcon}
						iconPosition="right"
						label={t("mosaic:DataView.save_view")}
						variant="text"
						intent="info"
						menuItems={viewMenuItems}
					/>
				</ButtonRow>
			</div>
		</div>
	);
}

export default DataViewViewControls;
