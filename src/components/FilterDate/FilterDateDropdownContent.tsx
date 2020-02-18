import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { TextFieldProps } from "@material-ui/core/TextField";
import { PropTypes } from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import * as moment from "moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons.jsx";
import theme from "../../utils/theme.js";
import { FilterDateOnChange, FilterDateDropdownContentProps } from "./FilterDateTypes";

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

export default function FilterDateDropdownContent(props: FilterDateDropdownContentProps) {
	const [state, setState] = useState({
		rangeStart : props.rangeStart,
		rangeEnd : props.rangeEnd
	});

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

	const getOnChange = (name: "rangeStart" | "rangeEnd") => (date: moment.Moment) => {
		if (date !== null) {
			if (name === "rangeStart") {
				// date start should be set to 00:00
				date.hours(0);
				date.minutes(0);
				date.seconds(0);
			} else {
				// date end should be set to 23:59
				date.hours(23);
				date.minutes(59);
				date.seconds(59);
			}
		}

		setState({
			...state,
			[name] : date === null ? undefined : date.toDate()
		});
	}

	const pickerArgs = {
		placeholder : "Choose a date...",
		clearable : true,
		format : "MM/DD/YYYY",
		inputVariant : "outlined" as TextFieldProps["variant"],
		margin : "dense" as PropTypes.Margin
	};

	return (
		<StyledContents>
			<div className="inputRow">
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<div className="startRange">
						<h5>From</h5>
						<DatePicker
							{...pickerArgs}
							value={state.rangeStart || null}
							onChange={getOnChange("rangeStart")}
						/>
					</div>
					<div className="endRange">
						<h5>To</h5>
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