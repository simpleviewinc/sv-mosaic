import * as React from "react";
import { useState, ReactElement } from "react";
import styled from "styled-components";

import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons";
import theme from "@root/theme";
import { DataViewFilterDateDropdownContentProps } from "./DataViewFilterDateTypes";
import { useMosaicTranslation } from "@root/i18n";
import DatePickerCustom from "@root/forms/FormFieldDate/DatePicker";
import MenuSelect from "../MenuSelect";

const StyledContents = styled.div`
	& > .inputRow h5 {
		margin-top:0;
		margin-bottom: 8px;
	}

	& > .inputRow {
		display: flex;
		align-items: center;
	}

	& > .inputRow div.startRange {
		margin-right: 10px;
	}

	& .errorMessage h5 {
		margin-top: 0;
		margin-bottom: 0;
		color: ${theme.newColors.darkRed["100"]};
	}
`;

export default function DataViewFilterDateDropdownContent(props: DataViewFilterDateDropdownContentProps): ReactElement {
	const [state, setState] = useState({
		rangeStart : props.rangeStart,
		rangeEnd : props.rangeEnd,
	});

	const { t } = useMosaicTranslation();

	let errorMessage;
	if (state.rangeStart !== undefined && state.rangeEnd !== undefined && state.rangeEnd < state.rangeStart) {
		errorMessage = "End of range cannot be before start of range.";
	}

	const hasError = errorMessage !== undefined;

	const onApply = function(val?: string) {
		if (state.rangeStart || state.rangeEnd)
			props.onChange({
				rangeStart : state.rangeStart,
				rangeEnd: state.rangeEnd
			});

		if (val)
			props.onChange({option: val});

		props.onClose();
	}


	const onClear = function() {
		setState({
			...state,
			rangeStart : undefined,
			rangeEnd : undefined
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
		<StyledContents>
			{
				props.options &&
				<MenuSelect options={props.options} onChange={onApply} value={props.options[0].value} />
			}
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
				<div className="errorMessage">
					<h5>Error: {errorMessage}</h5>
				</div>
			}
			<DataViewFilterDropdownButtons onApply={onApply} onClear={onClear} disableApply={hasError}/>
		</StyledContents>
	)
}
