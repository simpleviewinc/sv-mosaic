import React, { useMemo } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ButtonRow from "../../ButtonRow";
import Button from "../../Button";

import { useMosaicTranslation } from "@root/i18n";
import type { DataViewViewControlsProps } from "./DataViewViewControlsTypes";
import type { MenuItemProps } from "@root/components/MenuItem";
import theme from "@root/theme";
import testIds from "@root/utils/testIds";

const TitleButton = styled(Button)`
	&& {
		button {
			max-width: 300px;
			margin-right: 2px;
			text-transform: none;
			font-weight: ${theme.weight.regular};
		}

		&.no-view-selected button {
			color: ${theme.newColors.grey3["100"]};
			font-style: italic;
		}
	}
`;

const CurrentViewReadOnly = styled.div`
	padding: 3px 0;
	letter-spacing: 1px;
`;

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
						<TitleButton
							mIcon={ExpandMoreIcon}
							iconPosition="right"
							label={currentView ? `${t("mosaic:DataView.view")}: ${currentView.label}` : t("mosaic:DataView.no_view_selected")}
							intent="secondary"
							variant="contained"
							onClick={onViewList}
							className={!currentView && "no-view-selected"}
						/>
					) : currentView && (
						<CurrentViewReadOnly>
							{`${t("mosaic:DataView.view")}: ${currentView.label}`}
						</CurrentViewReadOnly>
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
