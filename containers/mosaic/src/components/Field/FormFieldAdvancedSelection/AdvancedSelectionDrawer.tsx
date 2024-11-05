import type { ReactElement } from "react";

import React, { memo, useCallback, useState } from "react";

import type { ButtonProps } from "@root/components/Button";
import type { AdvancedSelectionExternalOptions, AdvancedSelectionLocalOptions, AdvanceSelectionDrawerPropTypes } from ".";
import type { GetOptions } from "@root/components/DataViewFilterMultiselect";
import type { MosaicLabelValue } from "@root/types";

import { FormDrawerWrapper } from "@root/components/common";
import { DataViewFilterMultiselectDropdownContent } from "@root/components/DataViewFilterMultiselect";
import PageHeader from "@root/components/PageHeader";
import { escapeRegexp } from "@root/utils/string/escapeRegexp";

const AdvancedSelectionDrawer = (props: AdvanceSelectionDrawerPropTypes): ReactElement => {
	const {
		value,
		fieldDef,
		onChange,
		handleClose,
	} = props;

	let externalOptions: AdvancedSelectionExternalOptions | undefined;
	let localOptions: AdvancedSelectionLocalOptions | undefined;

	if (fieldDef.inputSettings && "getOptions" in fieldDef.inputSettings) {
		externalOptions = fieldDef.inputSettings;
	}

	if (fieldDef.inputSettings && "options" in fieldDef.inputSettings) {
		localOptions = fieldDef.inputSettings;
	}

	const [selectedOptions, setSelectedOptions] = useState(value?.length > 0 ? value : []);

	const onSubmit = useCallback(async() => {
		await onChange(selectedOptions);
		handleClose(true);
	}, [selectedOptions]);

	const buttons: ButtonProps[] = [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	const getSyncOptions: GetOptions = ({ keyword }) => {
		let newOptions: MosaicLabelValue[] = localOptions?.options || [];
		const regSearchKeyword = new RegExp(escapeRegexp(keyword), "i");
		if (keyword !== undefined && localOptions.options !== undefined) {
			newOptions = localOptions?.options.filter(option => {
				return regSearchKeyword.exec(option.label);
			});
		}
		return {
			docs: newOptions,
			hasMore: false,
		};
	};

	// TODO: Already doing this in FormFieldAdvancedSelection.
	// Clean it up.
	const selectLimit = (fieldDef?.inputSettings?.selectLimit || 0) > 0 ? fieldDef?.inputSettings?.selectLimit : -1;

	return (
		<FormDrawerWrapper className="advancedSelection">
			<PageHeader
				title={fieldDef?.label}
				buttons={buttons}
				onBack={handleClose}
				backLabel="Cancel advanced selection"
			/>
			<DataViewFilterMultiselectDropdownContent
				comparison=""
				selected={value}
				getOptions={externalOptions?.getOptions !== undefined ? externalOptions.getOptions : getSyncOptions}
				isOpen={true}
				onApply={onSubmit}
				placeholder="Search..."
				limit={externalOptions?.getOptionsLimit}
				selectLimit={selectLimit}
				onChange={(value) => setSelectedOptions(value)}
				hideButtons={true}
				createNewOption={fieldDef.inputSettings?.createNewOption}
			/>
		</FormDrawerWrapper>

	);
};

export default memo(AdvancedSelectionDrawer);
