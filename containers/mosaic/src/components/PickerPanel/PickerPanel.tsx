import type { ChangeEvent, ReactElement } from "react";

import React, { useMemo, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import type { PickerPanelProps } from "./PickerPanelTypes";
import type { PageHeaderProps } from "../PageHeader";
import type { CheckboxListProps } from "../CheckboxList";

import PageHeader from "../PageHeader";
import { PickerPanelSubtitle, OptionsWrapper, StyledPickerPanel, PickerPanelPrimary, LoadMoreButton, KeywordSearchInput, StyledSpinner, LeftPanel, LeftPanelTop } from "./PickerPanel.styled";
import CheckboxList from "../CheckboxList";
import Button from "../Button";
import { useMosaicTranslation } from "@root/i18n";
import { Row } from "../common";

function PickerPanel({
	fullHeight = true,
	className,
	options,
	checked,
	disabled,
	optionsSubtitle,
	activePanel,
	onLoadMore,
	onChange,
	onKeywordChange,
	onSave,
	onCancel,
	onCreateNew,
	isLoading,
	...rest
}: PickerPanelProps): ReactElement {
	const [keyword, setKeyword] = useState<string>("");
	const { t } = useMosaicTranslation();

	// Reduce the options to a filtered list if there is a keyword
	const filteredOptions = useMemo(() => {
		if (!keyword) {
			return options;
		}

		return options.filter(option => option.label.toLowerCase().includes(keyword.toLowerCase()));
	}, [keyword, options]);

	const onCheckboxListChange: CheckboxListProps["onChange"] = (value) => {
		onChange && onChange(value);
	};

	const pageHeaderButtons = useMemo<PageHeaderProps["buttons"]>(() => {
		const result: PageHeaderProps["buttons"] = [];

		if (!onSave && !onCancel) {
			return result;
		}

		if (onCancel) {
			result.push({
				label: "Cancel",
				onClick: onCancel,
				color: "gray",
				variant: "outlined",
			});
		}

		if (onSave) {
			result.push({
				label: "Save",
				onClick: () => onSave(checked),
				color: "yellow",
				variant: "contained",
			});
		}

		return result;
	}, [checked, onCancel, onSave]);

	const onKeywordInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
		setKeyword(value);
		onKeywordChange && onKeywordChange(value);
	};

	return (
		<StyledPickerPanel $fullHeight={fullHeight} className={className}>
			{(rest.title || pageHeaderButtons.length || rest.onBack) && (
				<PageHeader
					{...rest}
					buttons={pageHeaderButtons}
				/>
			)}
			<PickerPanelPrimary>
				<LeftPanel>
					<LeftPanelTop>
						{optionsSubtitle && (
							<PickerPanelSubtitle>
								{optionsSubtitle}
							</PickerPanelSubtitle>
						)}
						<KeywordSearchInput
							fieldSize="100%"
							onChange={onKeywordInputChange}
							value={keyword}
							placeholder={t("mosaic:common.keyword___")}
							autoFocus
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
								endAdornment: onCreateNew && keyword && (
									<InputAdornment position="end">
										<Button
											label="Create"
											variant="text"
											color="black"
											mIcon={AddIcon}
											onClick={() => onCreateNew(keyword)}
										/>
									</InputAdornment>
								),
							}}
						/>
					</LeftPanelTop>
					<OptionsWrapper>
						<CheckboxList
							checked={checked}
							options={filteredOptions}
							onChange={onCheckboxListChange}
							itemsPerColumn={-1}
							disabled={disabled}
						/>
						{isLoading && (
							<Row $justify="center">
								<StyledSpinner />
							</Row>
						)}
						{!isLoading && onLoadMore && (
							<LoadMoreButton
								color="black"
								variant="outlined"
								label="Load More"
								onClick={onLoadMore}
							/>
						)}
					</OptionsWrapper>
				</LeftPanel>
				{activePanel}
			</PickerPanelPrimary>
		</StyledPickerPanel>
	);
}

export default PickerPanel;
