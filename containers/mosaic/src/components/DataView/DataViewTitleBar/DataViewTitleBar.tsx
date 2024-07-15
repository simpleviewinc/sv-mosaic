import React, { useMemo } from "react";
import ButtonRow from "../../ButtonRow";
// import DataViewViewControls from "../DataViewViewControls";
import DataViewFilters from "../DataViewFilters";
import { DataViewTitleBarProps } from "./DataViewTitleBarTypes";
import { TitleBarWrapper, StyledWrapper } from "./DataViewTitleBar.styled";
import TitleWrapper from "@root/components/Title";
import { ButtonProps } from "@root/components/Button";
import DataViewViewControls from "../DataViewViewControls";
import testIds from "@root/utils/testIds";

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
	const buttons: ButtonProps[] = useMemo(() => {
		if (providedButtons === undefined) {
			return [];
		}

		return providedButtons.map((button) => {
			const { name, ...buttonArgs } = button;
			buttonArgs.attrs = { "data-mosaic-id": `button_${name}` };
			buttonArgs.disabled = buttonArgs.disabled === undefined ? disabled : buttonArgs.disabled;
			return buttonArgs;
		});
	}, [providedButtons, disabled]);

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
							onViewSave={onViewSave}
							onViewSaveAs={onViewSaveAs}
							onViewList={onViewList}
						/>
					)}
				</div>
				{buttons.length > 0 && <ButtonRow buttons={buttons} />}
			</StyledWrapper>
			{filters && (
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
