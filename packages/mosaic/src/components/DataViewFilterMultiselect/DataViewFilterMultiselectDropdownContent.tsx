import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";

import type { MultiSelectComparison } from "./DataViewFilterMultiselectTypes";
import { type DataViewFilterMultiselectDropdownContentProps } from "./DataViewFilterMultiselectTypes";

import Chip from "@root/components/Chip";
import { useMosaicTranslation } from "@root/i18n";
import testIds from "@root/utils/testIds";
import DataViewFilterDropdownButtons from "@root/components/DataViewFilterDropdownButtons";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import { ComparisonDropdown, SelectedOptionsSubtitle, StyledComparisonHeader, StyledComparisonHelp, StyledPanelPickerActive, StyledPickerPanel } from "./DataViewFilterMultiselect.styled";
import { Column } from "../common";
import type { MosaicLabelValue } from "@root/types";
import { useAdvancedOptions } from "@root/utils/hooks";

function DataViewFilterMultiselectDropdownContent({
	createNewOption: onCreateNew,
	...props
}: DataViewFilterMultiselectDropdownContentProps) {
	const [comparison, setComparison] = useState<"" | MultiSelectComparison>(props.comparison);
	const [checked, setChecked] = useState<MosaicLabelValue[]>(props.selected);
	const { state, loadMore, reset, debouncedSetKeyword, createNewOption } = useAdvancedOptions({
		getOptions: props.getOptions,
		limit: props.limit,
		onCreateNew,
	});

	const { t } = useMosaicTranslation();

	// mark the active comparison
	const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === comparison) : undefined;
	const disabled = (props.selectLimit > 0 && checked.length >= props.selectLimit)
		|| ["exists", "not_exists"].includes(comparison);

	const onClear = function() {
		setComparison("in");
		setChecked([]);
		reset();
	};

	const onApply = function() {
		props.onApply({
			value : disabled ? [] : checked.map(({ value }) => value),
			comparison : comparison,
		});
	};

	let comparisonDropdown;

	if (props.comparisons) {
		const menuItems = props.comparisons.map(comparison => {
			return {
				label : comparison.label,
				onClick : function() {
					setChecked(checked => ["exists", "not_exists"].includes(comparison.value) ? [] : checked);
					setComparison(comparison.value);
				},
			};
		});

		const popoverP = {
			In: "The row must match one of selected option.",
			"Not In": "The row must match none of the selected options.",
			All: "The row must match all of the selected options.",
			Exists: "The row must have a value for this filter.",
			"Not Exists": "The row must not have a value for this filter.",
		};

		comparisonDropdown = (
			<ComparisonDropdown data-testid={testIds.DATA_VIEW_FILTERS_COMPARISON}>
				<StyledComparisonHeader>
					{t("mosaic:DataView.comparison")}
				</StyledComparisonHeader>
				<ButtonRow>
					<Button
						label={activeComparison.label}
						variant="contained"
						intent="secondary"
						iconPosition="right"
						mIcon={ExpandMoreIcon}
						menuItems={menuItems}
						muiAttrs={{ "aria-label": "Comparison Selector" }}
					/>
					<Button
						variant="text"
						intent="info"
						mIcon={HelpIcon}
						popover={(
							<StyledComparisonHelp data-testid={testIds.COMPARISON_HELP}>
								{menuItems.map((item, id) => (
									<span key={id}>
										<b>{item.label}</b>
										{" "}
										-
										{" "}
										{popoverP[item.label]}
										<br />
									</span>
								))}
							</StyledComparisonHelp>
						)}
						muiAttrs={{ "aria-label": "Comparison Help" }}
					/>
				</ButtonRow>
			</ComparisonDropdown>
		);
	}

	const onChange = async function(selected) {
		const fullOptions = [...selected];
		props.onChange?.(fullOptions);
		setChecked(fullOptions);
	};

	const onOptionRemove = (option: MosaicLabelValue) => {
		setChecked(checked => checked.filter(item => item.value !== option.value));
	};

	return (
		<div data-testid={testIds.DATA_VIEW_FILTER_MULTI_CONTENT}>
			<StyledPickerPanel
				options={state.options}
				checked={checked}
				disabled={disabled}
				activePanel={(
					<StyledPanelPickerActive
						data-testid={testIds.DATA_VIEW_FILTER_MULTI_ACTIVE}
						$rounded
					>
						{comparisonDropdown}
						<SelectedOptionsSubtitle>{t("mosaic:DataView.selected_options")}</SelectedOptionsSubtitle>
						<Column $align="start" $gap={[3]}>
							{checked.map(option => (
								<Chip
									key={option.value}
									label={option.label}
									onDelete={() => onOptionRemove(option)}
									fullWidth
								/>
							))}
						</Column>
					</StyledPanelPickerActive>
				)}
				onChange={onChange}
				onKeywordChange={debouncedSetKeyword}
				onLoadMore={state.hasMore ? loadMore : undefined}
				onCreateNew={createNewOption}
				isLoading={state.isLoading}
			/>
			{!props.hideButtons && (
				<DataViewFilterDropdownButtons
					onApply={onApply}
					onClear={onClear}
				/>
			)}
		</div>
	);
}

export default DataViewFilterMultiselectDropdownContent;
