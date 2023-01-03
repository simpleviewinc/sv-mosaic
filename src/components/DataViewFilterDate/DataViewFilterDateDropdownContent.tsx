import * as React from "react";
import { useState, ReactElement } from "react";
import styled from "styled-components";

import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons";
import theme from "@root/theme";
import { DataViewFilterDateDropdownContentProps } from "./DataViewFilterDateTypes";
import { useMosaicTranslation } from "@root/i18n";
import DatePickerCustom from "@root/forms/FormFieldDate/DatePicker";
import { StyledHr, StyledVerticalHr } from "../DataViewFilterMultiselect/DataViewFilterMultiselect.styled";
import MenuItem from "../MenuItem";

const StyledMainContent = styled.div`
	padding: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > div > .inputRow h5 {
		margin-top:0;
		margin-bottom: 8px;
	}

	& > div > .inputRow {
		display: flex;
		align-items: center;
	}

	& > div > .inputRow div.startRange {
		margin-right: 10px;
	}

	& .errorMessage h5 {
		margin-top: 0;
		margin-bottom: 0;
		color: ${theme.newColors.darkRed["100"]};
	}
`;

const StyledFilterDate = styled.div`
	display: flex;
	flex-direction: row;
	& .options {
		padding: 0px;
    	margin: -10px;
	}
`;

export default function DataViewFilterDateDropdownContent(props: DataViewFilterDateDropdownContentProps): ReactElement {
	const [state, setState] = useState({
		rangeStart : "rangeStart" in props ? props.rangeStart : undefined,
		rangeEnd : "rangeStart" in props ? props.rangeEnd : undefined,
		selectedOption: "selectedOption" in props ? props.selectedOption : undefined,
	});

	const { t } = useMosaicTranslation();

	let errorMessage;
	if (state.rangeStart !== undefined && state.rangeEnd !== undefined && state.rangeEnd < state.rangeStart) {
		errorMessage = "End of range cannot be before start of range.";
	}

	const hasError = errorMessage !== undefined;

	const onApply = function() {
		if (!state.rangeStart || !state.rangeEnd) {
			props.onChange(undefined);
		} else {
			props.onChange({
				rangeStart : state.rangeStart,
				rangeEnd: state.rangeEnd
			});
		}

		props.onClose();
	};

	const onOptionSelect = (optionValue: string) => {
		props.onChange({option: optionValue});

		props.onClose();
	}


	const onClear = function() {
		setState({
			...state,
			rangeStart : undefined,
			rangeEnd : undefined,
			selectedOption: undefined,
		});
	}

	const getOnChange = (name: "rangeStart" | "rangeEnd") => (date: Date) => {
		if (date !== null) {
			if (name === "rangeStart") {
				// date start should be set to 00:00
				date.setHours(0);
				date.setMinutes(0);
				date.setSeconds(0);
			} else {
				// date end should be set to 23:59
				date.setHours(23);
				date.setMinutes(59);
				date.setSeconds(59);
			}
		}

		setState({
			...state,
			[name] : date === null ? undefined : date
		});
	}

	return (
		<StyledFilterDate data-testid="dataview-filter-date-dropdown-content">
			{
				"options" in props && props.options &&
				<>
					<ul className="options" data-testid="dataview-filter-date-options-list">
						{
							props.options.map(option =>
								<MenuItem
									key={`${option.label}-${option.value}`}
									label={option.label}
									selected={state.selectedOption === option.value}
									color="blue"
									onClick={() => onOptionSelect(option.value)}
								/>
							)
						}
					</ul>
					<StyledVerticalHr margin={"-10px 10px"}/>
				</>
			}
			<StyledMainContent>
				<div data-testid="dataview-filter-date-inputs">
					<div className="inputRow">
						<div className="startRange">
							<h5>{`${t("mosaic:common.date_from")}`}</h5>
							<DatePickerCustom
								onChange={getOnChange("rangeStart")}
								value={state.rangeStart || null}
								fieldDef={{
									name: "",
									label: "",
									type: "",
									inputSettings: {
										placeholder: t("mosaic:DataViewFilterDate.choose_a_date___")
									},
								}}
							/>
						</div>
						<div className="endRange">
							<h5>{`${t("mosaic:common.date_to")}`}</h5>
							<DatePickerCustom
								onChange={getOnChange("rangeEnd")}
								value={state.rangeEnd || null}
								fieldDef={{
									name: "",
									label: "",
									type: "",
									inputSettings: {
										placeholder: t("mosaic:DataViewFilterDate.choose_a_date___")
									},
								}}
							/>
						</div>
					</div>
					{
						hasError &&
						<div className="errorMessage" data-testid="dataview-filter-date-error">
							<h5>Error: {errorMessage}</h5>
						</div>
					}
				</div>
				<div>
					<StyledHr margin={"16px -16px"} />
					<DataViewFilterDropdownButtons onApply={onApply} onClear={onClear} disableApply={hasError}/>
				</div>
			</StyledMainContent>
		</StyledFilterDate>
	)
}
