import * as React from "react";
import { ButtonProps } from "@root/components/Button";
import {
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useState
} from "react";
import { AdvanceSelectionDrawerPropTypes } from ".";
import { FormDrawerWrapper } from "../shared/styledComponents";
import { DataViewFilterMultiselectDropdownContent } from "@root/components/DataViewFilterMultiselect";
import DrawerHeader from "@root/components/DrawerHeader";
import Dialog from "@root/components/Dialog";

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

	const { options, getOptions, createNewOption } = fieldDef?.inputSettings || {};

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

	const getSyncOptions = ({keyword}) => {
		let newOptions = options || [];
		const regSearchKeyword = new RegExp(keyword, "i");
		if (keyword !== undefined && options !== undefined) {
			newOptions = options.filter(option => {
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
			<DrawerHeader
				title={fieldDef?.label}
				buttons={buttons}
			/>
			<DataViewFilterMultiselectDropdownContent
				value={value && value.map(v => v.value)}
				comparison={""}
				selected={value}
				getOptions={getOptions ? getOptions : getSyncOptions}
				isOpen={true}
				onApply={onSubmit}
				placeholder={"Search..."}
				limit={fieldDef?.inputSettings?.getOptionsLimit}
				selectLimit={fieldDef?.inputSettings?.selectLimit}
				onChange={(value) => setSelectedOptions(value)}
				hideButtons={true}
				createNewOption={createNewOption}
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
