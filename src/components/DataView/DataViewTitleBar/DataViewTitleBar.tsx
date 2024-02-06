import React, { useMemo } from "react";
import ButtonRow from "../../ButtonRow";
import DataViewViewControls from "../DataViewViewControls";
import DataViewFilters from "../DataViewFilters";
import { DataViewTitleBarProps } from "./DataViewTitleBarTypes";
import { TitleBarWrapper, StyledWrapper } from "./DataViewTitleBar.styled";
import TitleWrapper from "@root/components/Title";
import { ButtonProps } from "@root/components/Button";

function DataViewTitleBar(props: DataViewTitleBarProps) {
	const buttons: ButtonProps[] = useMemo(() => {
		if (props.buttons === undefined) {
			return [];
		}

		return props.buttons.map((button) => {
			const { name, ...buttonArgs } = button;
			buttonArgs.attrs = { "data-mosaic-id": `button_${name}` };
			buttonArgs.disabled = buttonArgs.disabled === undefined ? props.disabled : buttonArgs.disabled;
			return buttonArgs;
		});
	}, [props.buttons, props.disabled]);

	return (
		<TitleBarWrapper>
			<StyledWrapper>
				<div className="left">
					{props.title &&
						<TitleWrapper
							title={props.title}
							onBack={props.onBack}
							backLabel={props.backLabel}
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
				{buttons.length > 0 && <ButtonRow buttons={buttons} />}
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
