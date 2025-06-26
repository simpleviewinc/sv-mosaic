import type { ReactElement } from "react";

import React, { memo, useCallback, useState } from "react";

import type { AdvancedSelectionExternalOptions, AdvancedSelectionLocalOptions, AdvanceSelectionDrawerPropTypes } from ".";
import type { MosaicLabelValue } from "@root/types";

import { Column, FormDrawerWrapper } from "@root/components/common";
import type { PickerPanelProps } from "@root/components/PickerPanel";
import PickerPanel from "@root/components/PickerPanel";
import { useAdvancedOptions } from "@root/utils/hooks";
import { SelectedOptionsSubtitle, StyledPanelPickerActive } from "@root/components/DataViewFilterMultiselect/DataViewFilterMultiselect.styled";
import Chip from "@root/components/Chip";
import { useMosaicTranslation } from "@root/i18n";
import type { FieldDefBase } from "../FieldTypes";

type AdvancedSelectionDrawerSyncProps = Omit<AdvanceSelectionDrawerPropTypes, "fieldDef">
	& Pick<PickerPanelProps, "onKeywordChange" | "onLoadMore" | "onCreateNew" | "isLoading">
	& {
		fieldDef: FieldDefBase<"advancedSelection", AdvancedSelectionLocalOptions>;
	}

const AdvancedSelectionDrawerSync = ({
	fieldDef: {
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
			<PickerPanel
				title="Cancel advanced selection"
				options={options}
				checked={checked}
				disabled={disabled}
				activePanel={(
					<StyledPanelPickerActive>
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

	if ("options" in fieldDef.inputSettings) {
		return (
			<AdvancedSelectionDrawerSync
				{...props}
				fieldDef={{
					...fieldDef,
					inputSettings: fieldDef.inputSettings,
				}}
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
