import React, { useMemo } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { DataViewTitleBarProps } from "./DataViewTitleBarTypes";
import type { ButtonProps } from "@root/components/Button";
import type { MenuItemProps } from "@root/components/MenuItem";

import { useMosaicTranslation } from "@root/i18n";
import testIds from "@root/utils/testIds";
import TitleWrapper from "@root/components/Title";
import ButtonRow from "../../ButtonRow";
import DataViewFilters from "../DataViewFilters";
import { TitleBarWrapper, StyledWrapper } from "./DataViewTitleBar.styled";
import DataViewViewControls from "../DataViewViewControls";

function DataViewTitleBar({
	activeFilters,
	backLabel,
	buttons: providedButtons,
	currentView,
	disabled,
	filter,
	filters,
	onActiveFiltersChange,
	onBack,
	onViewSave,
	onViewSaveAs,
	onViewList,
	title,
}: DataViewTitleBarProps) {
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

	const buttons: ButtonProps[] = useMemo(() => {
		const result: ButtonProps[] = [];

		if (viewMenuItems) {
			result.push({
				variant: "contained",
				intent: "secondary",
				menuItems: viewMenuItems,
				mIcon: ExpandMoreIcon,
				iconPosition: "right",
				label: t("mosaic:DataView.save_view"),
			});
		}

		if (providedButtons === undefined) {
			return result;
		}

		result.push(...providedButtons.map((button) => {
			const { name, ...buttonArgs } = button;
			buttonArgs.attrs = { "data-mosaic-id": `button_${name}` };
			buttonArgs.disabled = buttonArgs.disabled === undefined ? disabled : buttonArgs.disabled;
			return buttonArgs;
		}));

		return result;
	}, [viewMenuItems, providedButtons, t, disabled]);

	const hasViewControls = currentView || onViewSave || onViewSaveAs || onViewList;

	return (
		<TitleBarWrapper data-testid={testIds.DATA_VIEW_TITLE_BAR}>
			<StyledWrapper>
				<div className="left">
					{title && (
						<TitleWrapper
							title={title}
							onBack={onBack}
							backLabel={backLabel}
						/>
					)}
					{hasViewControls && (
						<DataViewViewControls
							currentView={currentView}
							onViewList={onViewList}
						/>
					)}
				</div>
				{buttons.length > 0 && <ButtonRow buttons={buttons} />}
			</StyledWrapper>
			{filters?.length > 0 && (
				<DataViewFilters
					filter={filter}
					filters={filters}
					activeFilters={activeFilters}
					onActiveFiltersChange={onActiveFiltersChange}
				/>
			)}
		</TitleBarWrapper>
	);
}

export default DataViewTitleBar;
