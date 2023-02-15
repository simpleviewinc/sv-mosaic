import * as React from "react";
import { ButtonProps } from "@root/components/Button";
import {
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useState
} from "react";
import { useForm } from "@root/components/Form";
import { AdvanceSelectionDrawerPropTypes } from ".";
import _ from "lodash";
import { FormDrawerWrapper } from "../shared/styledComponents";
import { DataViewFilterMultiselectDropdownContent } from "@root/components/DataViewFilterMultiselect";
import DrawerHeader from "@root/components/DrawerHeader";

const AdvancedSelectionDrawer = (props: AdvanceSelectionDrawerPropTypes): ReactElement => {
	const {
		value,
		fieldDef,
		onChange,
		handleClose,
		handleUnsavedChanges,
	} = props;

	const { options, getOptions, createNewOption } = fieldDef?.inputSettings || {};

	const { state } = useForm();

	const [selectedOptions, setSelectedOptions] = useState([]);

	useEffect(() => {
		if (state.data.listOfChips !== undefined) {
			handleUnsavedChanges(!_.isEqual([...value], state?.data?.listOfChips));
		}
	}, [state.data.listOfChips, value]);


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
	}

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
				disabled={fieldDef.disabled}
			/>
		</FormDrawerWrapper>
	);
};

export default memo(AdvancedSelectionDrawer);
