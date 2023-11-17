import { FieldDef, FieldDefCustom } from "../FormTypes";
import { FieldConfig } from "@root/components/Field";

import FormFieldText from "@root/components/Field/FormFieldText";
import FormFieldCheckbox from "@root/components/Field/FormFieldCheckbox";
import FormFieldChipSingleSelect from "@root/components/Field/FormFieldChipSingleSelect";
import FormFieldDropdownSingleSelection from "@root/components/Field/FormFieldDropdownSingleSelection";
import FormFieldPhoneSelectionDropdown from "@root/components/Field/FormFieldPhoneSelectionDropdown";
import FormFieldRadio from "@root/components/Field/FormFieldRadio";
import FormFieldRaw from "@root/components/Field/FormFieldRaw";
import FormFieldToggleSwitch from "@root/components/Field/FormFieldToggleSwitch";
import FormFieldImageVideoLinkDocumentBrowsing from "@root/components/Field/FormFieldImageVideoLinkDocumentBrowsing";
import FormFieldColorPicker from "@root/components/Field/FormFieldColorPicker";
import FormFieldDate from "@root/components/Field/FormFieldDate/DateField";
import FormFieldAddress from "@root/components/Field/FormFieldAddress";
import FormFieldTable from "@root/components/Field/FormFieldTable";
import FormFieldTextEditor from "@root/components/Field/FormFieldTextEditor";
import FormFieldAdvancedSelection from "@root/components/Field/FormFieldAdvancedSelection";
import FormFieldMapCoordinates from "@root/components/Field/FormFieldMapCoordinates";
import FormFieldImageUpload from "@root/components/Field/FormFieldImageUpload";
import FormFieldMatrix from "@root/components/Field/FormFieldMatrix";
import FormFieldUpload from "@root/components/Field/FormFieldUpload";
import FormFieldNumberTable from "@root/components/Field/FormFieldNumberTable";

const fieldConfigMap: Partial<Record<Exclude<FieldDef["type"], FieldDefCustom["type"]>, FieldConfig>> = {
	text: {
		Component: FormFieldText,
		validate: "onBlurChange"
	},
	checkbox: {
		Component: FormFieldCheckbox,
		validate: "onChange"
	},
	chip: {
		Component: FormFieldChipSingleSelect,
		validate: "onBlur"
	},
	dropdown: {
		Component: FormFieldDropdownSingleSelection,
		validate: "onBlur"
	},
	phone: {
		Component: FormFieldPhoneSelectionDropdown,
		validate: "onBlur"
	},
	radio: {
		Component: FormFieldRadio,
		validate: "onBlur"
	},
	toggleSwitch: {
		Component: FormFieldToggleSwitch,
		validate: "onBlur"
	},
	imageVideoDocumentLink: {
		Component: FormFieldImageVideoLinkDocumentBrowsing,
		validate: "onBlur"
	},
	color: {
		Component: FormFieldColorPicker,
		validate: "onBlur"
	},
	date: {
		Component: FormFieldDate,
		validate: "onBlur"
	},
	address: {
		Component: FormFieldAddress,
		validate: "onChange"
	},
	table: {
		Component: FormFieldTable,
		validate: "onBlur"
	},
	textEditor: {
		Component: FormFieldTextEditor,
		validate: "onBlur"
	},
	advancedSelection: {
		Component: FormFieldAdvancedSelection,
		validate: "onBlur"
	},
	mapCoordinates: {
		Component: FormFieldMapCoordinates,
		validate: "onBlur"
	},
	imageUpload: {
		Component: FormFieldImageUpload,
		validate: "onBlur"
	},
	matrix: {
		Component: FormFieldMatrix,
		validate: "onBlur"
	},
	upload: {
		Component: FormFieldUpload,
		validate: "onBlur"
	},
	numberTable: {
		Component: FormFieldNumberTable,
		validate: "onBlur"
	},
	raw: {
		Component: FormFieldRaw,
		validate: "onBlur"
	}
};

export default fieldConfigMap;
