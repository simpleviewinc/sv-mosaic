import React, { useMemo } from "react";
import ButtonRow from "../../ButtonRow";
import DataViewViewControls from "../DataViewViewControls";
import { H1 } from "../../Typography";
import DataViewFilters from "../DataViewFilters";
import { DataViewTitleBarProps } from "./DataViewTitleBarTypes";
import { TitleBarWrapper, StyledWrapper } from "./DataViewTitleBar.styled";


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
					{props.title && <H1>{props.title}</H1>}
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
			<div>
				{
					//loading isn't being used in DataViewFilters, should it be propped down?
					props?.filters &&
						<DataViewFilters
							loading={props.loading}
							filter={props.filter}
							filters={props.filters}
							activeFilters={props.activeFilters}
							onActiveFiltersChange={props.onActiveFiltersChange}
						/>
				}
			</div>
		</TitleBarWrapper>
	);
}

export default DataViewTitleBar;
