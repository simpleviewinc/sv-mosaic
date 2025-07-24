import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataViewFilterDropdownButtons from "@root/components/DataViewFilterDropdownButtons";
import { useMosaicTranslation } from "@root/i18n";
import type { DataViewFilterTextDropdownContentProps } from "./DataViewFilterTextTypes";
import { StyledContents } from "./DataViewFilterText.styled";
import testIds from "@root/utils/testIds";
import Button from "../Button";
import { StyledTextField } from "../Field/FormFieldText/FormFieldText.styled";

const existsComparisons = ["exists", "not_exists"];

function DataViewFilterTextDropdownContent(props: DataViewFilterTextDropdownContentProps) {
	const [state, setState] = useState({
		value : props.value,
		comparison : props.comparison,
	});

	const { t } = useMosaicTranslation();

	const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === state.comparison) : undefined;

	const onApply = function() {
		const cleanValue = state.value.trim();

		if (existsComparisons.includes(state.comparison)) {
			// for these the value is not relevant
			props.onChange({
				comparison : state.comparison,
			});
		} else if (cleanValue === "") {
			// if the state is empty we wipe the whole object
			props.onChange(undefined);
		} else {
			// set both values
			props.onChange({
				value : cleanValue,
				comparison : state.comparison,
			});
		}

		props.onClose();
	};

	const onClear = function() {
		setState({
			...state,
			value : "",
			comparison : props.comparison,
		});
	};

	const onInputChange = function(event) {
		setState({
			...state,
			value : event.target.value,
		});
	};

	const onKeyPress = function(event) {
		if (event.key === "Enter") {
			onApply();
		}
	};

	const disabled = existsComparisons.includes(state.comparison);

	let comparisonButton;
	if (props.comparisons) {
		const menuItems = props.comparisons.map(comparison => {
			return {
				label : comparison.label,
				onClick : function() {
					const stateChange = {
						...state,
					};

					// for exists and not_exists we want to clear the value
					if (existsComparisons.includes(comparison.value) === true) {
						stateChange.value = "";
					}

					stateChange.comparison = comparison.value;

					setState(stateChange);
				},
			};
		});

		comparisonButton = (
			<Button
				className="comparisonButton"
				label={activeComparison.label}
				variant="contained"
				intent="secondary"
				iconPosition="right"
				mIcon={ExpandMoreIcon}
				menuItems={menuItems}
				bluntRight
				size="xlarge"
			/>
		);
	}

	return (
		<StyledContents data-testid={testIds.DATA_VIEW_FILTER_TEXT_CONTENT}>
			<div className="inputRow">
				{comparisonButton}
				{!disabled && (
					<StyledTextField
						autoComplete="off"
						autoFocus
						placeholder={props.placeholder || t("mosaic:common.filter___")}
						margin="dense"
						value={state.value}
						variant="outlined"
						onChange={onInputChange}
						onKeyPress={onKeyPress}
						disabled={disabled}
						$bluntLeft
					/>
				)}
			</div>
			<DataViewFilterDropdownButtons onApply={onApply} onClear={onClear} />
		</StyledContents>
	);
}

export default DataViewFilterTextDropdownContent;
