import React, { useMemo } from "react";
import ButtonRow from "../../ButtonRow";
import DataViewViewControls from "../DataViewViewControls";
import DataViewFilters from "../DataViewFilters";
import { DataViewTitleBarProps } from "./DataViewTitleBarTypes";
import { TitleBarWrapper, StyledWrapper } from "./DataViewTitleBar.styled";
import TitleWrapper from "@root/forms/TopComponent/Utils/TitleWrapper";

function DataViewTitleBar(props: DataViewTitleBarProps) {
	const buttons = useMemo(() => {
		if (props.buttons === undefined) {
			return;
		}

		return props.buttons.map((button) => {
			const { name, ...buttonArgs } = button;
			buttonArgs.attrs = { "data-mosaic-id": `button_${name}` };
			return buttonArgs;
		});
	}, [props.buttons]);

	return (
		<TitleBarWrapper>
			<StyledWrapper>
				<div className="left">
					{props.title &&
						<TitleWrapper
							title={props.title}
							onBack={props.onBack}
						/>
					}
					{props.savedViewEnabled && (
						<DataViewViewControls
							savedView={props.savedView}
							savedViewState={props.savedViewState}
							savedViewCallbacks={props.savedViewCallbacks}
							savedViewAllowSharedViewSave={props.savedViewAllowSharedViewSave}
						/>
					)}
				</div>
				{props.buttons && <ButtonRow buttons={buttons} />}
			</StyledWrapper>
			{
				props?.filters &&
					<DataViewFilters
						filter={props.filter}
						filters={props.filters}
						activeFilters={props.activeFilters}
						onActiveFiltersChange={props.onActiveFiltersChange}
					/>
			}
		</TitleBarWrapper>
	);
}

export default DataViewTitleBar;
