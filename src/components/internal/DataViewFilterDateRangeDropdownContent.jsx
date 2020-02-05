import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import jsvalidator from "jsvalidator";
import moment from "moment";

import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons.jsx";
import theme from "../../utils/theme.js";

const StyledContents = styled.div`
	& > .inputRow div h5:first-child {
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

	& .errorMessage h5{
		margin-top: 0;
		margin-bottom: 0;
		color: ${theme.colors.red};
	}
`;

function DataViewFilterDateRangeDropdownContent(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "rangeStart",
				type : "string",
				required : true
			},
			{
				name : "rangeEnd",
				type : "string",
				required : true
			},
			{
				name : "onChange",
				type : "function",
				required : true
			},
			{
				name : "onClose",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});

	const [state, setState] = useState({
		rangeStart : props.rangeStart,
		rangeEnd : props.rangeEnd,
		rangeError : false,
		errorMessage: ""
	});
	
	const onApply = function() {
		props.onChange({
			rangeStart : (moment(state.rangeStart).isValid()) ? state.rangeStart : undefined,
			rangeEnd: (moment(state.rangeEnd).isValid()) ? state.rangeEnd : undefined
		});
		
		props.onClose();
	}
	
	
	const onClear = function() {
		setState({
			...state,
			rangeStart : "",
			rangeEnd : "",
			rangeError: false,
			rangeStartError: false,
			rangeEndError: false,
			errorMessage: ""
		});
	}

	const onInputChange = function(evt) {
		//handle valid dates and clears
		if(moment(evt.target.value).isValid() === true || evt.target.value === ""){
			let rangeError = false;
			let errorMessage = '';

			const start = (evt.target.name === 'rangeStart') ? evt.target.value : state.rangeStart;
			const end = (evt.target.name === 'rangeEnd') ? evt.target.value : state.rangeEnd;

			if(moment(start).isValid() === true && moment(end).isValid() === true && start > end){
				rangeError = true;
				errorMessage = "End of range cannot be before start of range."
			}

			setState({
				...state,
				[evt.target.name] : evt.target.value,
				[`${evt.target.name}Error`] : false,
				rangeError,
				errorMessage
			});
		}else{//catch manual garbage entry
			setState({
				...state,
				rangeError : true,
				errorMessage : "Invalid date selected",
				[evt.target.name] : "evt.target.value",
				[`${evt.target.name}Error`] : true
			});
		}
	}
	
	const onKeyPress = function(evt) {
		if (evt.key === "Enter") {
			onApply();
		}
	}
	
	return (
		<StyledContents>
			<div className="inputRow">
				<div className="startRange">
					<h5>Range Start</h5>
					<TextField
						autoFocus
						name='rangeStart'
						placeholder="Range starts..."
						margin="dense"
						value={state.rangeStart || ''}
						variant="outlined"
						type="date"
						onChange={onInputChange}
						onKeyPress={onKeyPress}
						error={ (state.rangeError === true || state.rangeStartError === true) }
					/>
				</div>
				<div className="endRange">
					<h5>Range End</h5>
					<TextField
						autoFocus
						name='rangeEnd'
						placeholder="Range Ends..."
						margin="dense"
						value={state.rangeEnd || ''}
						variant="outlined"
						type="date"
						onChange={onInputChange}
						onKeyPress={onKeyPress}
						error={ (state.rangeError === true || state.rangeEndError === true) }
					/>
				</div>
			</div>
			{
				state.rangeError &&
				<div className="errorMessage">
					<h5>Error: {state.errorMessage}</h5>
				</div>
			}
			<DataViewFilterDropdownButtons onApply={onApply} onClear={onClear} onCancel={props.onClose} disableApply={state.rangeError}/>
		</StyledContents>
	)
}

export default DataViewFilterDateRangeDropdownContent;