import type { ReactElement } from "react";

import React, { memo, useCallback, useState } from "react";

import type { AdvancedSelectionExternalOptions, AdvancedSelectionLocalOptions, AdvanceSelectionDrawerPropTypes } from ".";
import type { MosaicLabelValue } from "@root/types";

import { Column, FormDrawerWrapper } from "@root/components/common";
import type { PickerPanelProps } from "@root/components/PickerPanel";
import { useAdvancedOptions } from "@root/utils/hooks";
import { SelectedOptionsSubtitle, StyledPanelPickerActive } from "@root/components/DataViewFilterMultiselect/DataViewFilterMultiselect.styled";
import Chip from "@root/components/Chip";
import { useMosaicTranslation } from "@root/i18n";
import type { FieldDefBase } from "../FieldTypes";
import { StyledPickerPanel } from "./AdvancedSelection.styled";
import testIds from "@root/utils/testIds";

type AdvancedSelectionDrawerSyncProps = Omit<AdvanceSelectionDrawerPropTypes, "fieldDef">
	& Pick<PickerPanelProps, "onKeywordChange" | "onLoadMore" | "onCreateNew" | "isLoading">
	& {
		fieldDef: FieldDefBase<"advancedSelection", AdvancedSelectionLocalOptions>;
	}

const AdvancedSelectionDrawerSync = ({
	fieldDef: {
		label,
		inputSettings: {
			options,
			selectLimit = -1,
		},
	},
	value,
	onChange,
	onKeywordChange,
	onLoadMore,
	onCreateNew,
	isLoading,
	handleClose,
}: AdvancedSelectionDrawerSyncProps): ReactElement => {
	const [checked, setChecked] = useState(value?.length > 0 ? value : []);
	const { t } = useMosaicTranslation();

	const onOptionRemove = (option: MosaicLabelValue) => {
		setChecked(checked => checked.filter(item => item.value !== option.value));
	};

	const disabled = (selectLimit > 0 && checked.length >= selectLimit);

	const onSubmit = useCallback(async() => {
		await onChange(checked);
		handleClose(true);
	}, [checked, handleClose, onChange]);

	return (
		<FormDrawerWrapper className="advancedSelection">
			<StyledPickerPanel
				title={label}
				options={options}
				checked={checked}
				disabled={disabled}
				activePanel={(
					<StyledPanelPickerActive data-testid={testIds.ADVANCED_SELECTION_ACTIVE}>
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
				onChange={setChecked}
				onKeywordChange={onKeywordChange}
				onLoadMore={onLoadMore}
				onCreateNew={onCreateNew}
				onSave={onSubmit}
				onBack={handleClose}
				backLabel="Cancel advanced selection"
				onCancel={handleClose}
				isLoading={isLoading}
			/>
		</FormDrawerWrapper>
	);
};

type AdvancedSelectionDrawerAsyncProps = Omit<AdvanceSelectionDrawerPropTypes, "fieldDef">
	& {
		fieldDef: FieldDefBase<"advancedSelection", AdvancedSelectionExternalOptions>;
	}

const AdvancedSelectionDrawerAsync = ({
	fieldDef: {
		inputSettings: {
			getOptions,
			getOptionsLimit,
		},
	},
	fieldDef,
	...props
}: AdvancedSelectionDrawerAsyncProps) => {
	const { state, loadMore, debouncedSetKeyword, createNewOption } = useAdvancedOptions({
		getOptions: getOptions,
		limit: getOptionsLimit,
		onCreateNew: fieldDef.inputSettings.createNewOption,
	});

	return (
		<AdvancedSelectionDrawerSync
			{...props}
			fieldDef={{
				...fieldDef,
				inputSettings: {
					options: state.options,
				},
			}}
			onLoadMore={loadMore}
			onKeywordChange={debouncedSetKeyword}
			onCreateNew={createNewOption}
		/>
	);
};

const AdvancedSelectionDrawer = (props: AdvanceSelectionDrawerPropTypes): ReactElement => {
	const { fieldDef } = props;

	if (
		!fieldDef.inputSettings ||
		(
			!("options" in fieldDef.inputSettings) &&
			!("getOptions" in fieldDef.inputSettings)
		)
	) {
		throw new Error("AdvancedSelection field requires inputSettings containing either an `options` or `getOptions` property.");
	}

	if ("options" in fieldDef.inputSettings) {
		return (
			<AdvancedSelectionDrawerSync
				{...props}
				fieldDef={{
					...fieldDef,
					inputSettings: fieldDef.inputSettings,
				}}
				onCreateNew={fieldDef.inputSettings.createNewOption}
			/>
		);
	}

	return (
		<AdvancedSelectionDrawerAsync
			{...props}
			fieldDef={{
				...fieldDef,
				inputSettings: fieldDef.inputSettings,
			}}
		/>
	);

};

export default memo(AdvancedSelectionDrawer);
