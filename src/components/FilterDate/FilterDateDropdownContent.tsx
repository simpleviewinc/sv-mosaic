import * as React from "react";
import { useState, ReactElement } from "react";
import styled from "styled-components";
import { TextFieldProps } from "@mui/material/TextField";
import { PropTypes } from "@mui/material";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons.jsx";
import theme from "../../utils/theme.js";
import { FilterDateDropdownContentProps } from "./FilterDateTypes";
import { useMosaicTranslation } from "@root/i18n";

const StyledContents = styled.div`
	& > .inputRow h5 {
		margin-top:0;
		margin-bottom: 0;
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
		color: ${theme.colors.red};
	}
`;

export default function FilterDateDropdownContent(props: FilterDateDropdownContentProps): ReactElement {
	const [state, setState] = useState({
		rangeStart : props.rangeStart,
		rangeEnd : props.rangeEnd
	});

	const { t } = useMosaicTranslation();

	let errorMessage;
	if (state.rangeStart !== undefined && state.rangeEnd !== undefined && state.rangeEnd < state.rangeStart) {
		errorMessage = "End of range cannot be before start of range.";
	}

	const hasError = errorMessage !== undefined;

	const onApply = function() {
		props.onChange({
			rangeStart : state.rangeStart,
			rangeEnd: state.rangeEnd
		});
		
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

	const pickerArgs = {
		placeholder : t("mosaic:FilterDate.choose_a_date___"),
		clearable : true,
		format : "M/d/yyyy",
		inputVariant : "outlined" as TextFieldProps["variant"],
		margin : "dense" as PropTypes.Margin
	};

	return (
		<StyledContents>
			<div className="inputRow">
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<div className="startRange">
						<h5>{t("mosaic:common.date_from")}</h5>
						<DatePicker
							{...pickerArgs}
							value={state.rangeStart || null}
							onChange={getOnChange("rangeStart")}
						/>
					</div>
					<div className="endRange">
						<h5>{t("mosaic:common.date_to")}</h5>
						<DatePicker
							{...pickerArgs}
							value={state.rangeEnd || null}
							onChange={getOnChange("rangeEnd")}
						/>
					</div>
				</MuiPickersUtilsProvider>
			</div>
			{
				hasError &&
				<div className="errorMessage">
					<h5>Error: {errorMessage}</h5>
				</div>
			}
			<DataViewFilterDropdownButtons onApply={onApply} onClear={onClear} onCancel={props.onClose} disableApply={hasError}/>
		</StyledContents>
	)
}