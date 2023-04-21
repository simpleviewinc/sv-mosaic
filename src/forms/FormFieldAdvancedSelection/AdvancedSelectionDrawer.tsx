import * as React from "react";
import { ButtonProps } from "@root/components/Button";
import {
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useState
} from "react";
import { AdvancedSelectionExternalOptions, AdvancedSelectionLocalOptions, AdvanceSelectionDrawerPropTypes } from ".";
import { FormDrawerWrapper } from "../shared/styledComponents";
import { DataViewFilterMultiselectDropdownContent, GetOptions } from "@root/components/DataViewFilterMultiselect";
import PageHeader from "@root/components/PageHeader";
import Dialog from "@root/components/Dialog";
import { MosaicLabelValue } from "@root/types";

const AdvancedSelectionDrawer = (props: AdvanceSelectionDrawerPropTypes): ReactElement => {
	const {
		value,
		fieldDef,
		onChange,
		handleClose,
		handleUnsavedChanges,
		dialogOpen,
		handleDialogClose,
	} = props;

	let externalOptions: AdvancedSelectionExternalOptions | undefined;
	let localOptions: AdvancedSelectionLocalOptions | undefined;

	if ("getOptions" in fieldDef.inputSettings) {
		externalOptions = fieldDef.inputSettings;
	}

	if ("options" in fieldDef.inputSettings) {
		localOptions = fieldDef.inputSettings;
	}

	const [selectedOptions, setSelectedOptions] = useState(value?.length > 0 ? value : []);

	const dialogButtons: ButtonProps[] = [
		{
			label: "No, stay",
			onClick: () => handleDialogClose(false),
			color: "gray",
			variant: "outlined",
		},
		{
			label: "Yes, leave",
			onClick: () => handleDialogClose(true),
			color: "yellow",
			variant: "contained",
		},
	];

	useEffect(() => {
		if (selectedOptions.length > 0) {
			handleUnsavedChanges(true);
		}
	}, [selectedOptions]);

	const onSubmit = useCallback(async() => {
		await onChange(selectedOptions);
		handleClose(true);
	}, [selectedOptions]);

	const buttons: ButtonProps[] = [
		{
			label: "Cancel",
			onClick: () => handleClose(),
			color: "gray",
			variant: "outlined"
		},
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained"
		}
	];

	const getSyncOptions: GetOptions = ({ keyword }) => {
		let newOptions: MosaicLabelValue[] = localOptions?.options || [];
		const regSearchKeyword = new RegExp(keyword, "i");
		if (keyword !== undefined && localOptions.options !== undefined) {
			newOptions = localOptions.options.filter(option => {
				return regSearchKeyword.exec(option.label)
			})
		}
		return {
			docs: newOptions,
			hasMore: false
		}
	};

	return (
		<FormDrawerWrapper className="advancedSelection">
			<PageHeader
				title={fieldDef?.label}
				buttons={buttons}
				onBack={handleClose}
			/>
			<DataViewFilterMultiselectDropdownContent
				value={value && value.map(v => v.value)}
				comparison={""}
				selected={value}
				getOptions={externalOptions.getOptions ? externalOptions.getOptions : getSyncOptions}
				isOpen={true}
				onApply={onSubmit}
				placeholder={"Search..."}
				limit={externalOptions.getOptionsLimit}
				selectLimit={fieldDef.inputSettings.selectLimit}
				onChange={(value) => setSelectedOptions(value)}
				hideButtons={true}
				createNewOption={fieldDef.inputSettings.createNewOption}
			/>
			<Dialog
				buttons={dialogButtons}
				dialogTitle='Are you sure you want to leave?'
				open={dialogOpen}
			>
				You have unsaved changes. If you leave all your changes will be lost.
			</Dialog>
		</FormDrawerWrapper>

	);
};

export default memo(AdvancedSelectionDrawer);
