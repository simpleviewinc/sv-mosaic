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
import FormFieldDate, { DateData, FieldDefDate } from "@root/components/Field/FormFieldDate/DateField";
import FormFieldAddress from "@root/components/Field/FormFieldAddress";
import FormFieldTable from "@root/components/Field/FormFieldTable";
import FormFieldTextEditor from "@root/components/Field/FormFieldTextEditor";
import FormFieldAdvancedSelection from "@root/components/Field/FormFieldAdvancedSelection";
import FormFieldMapCoordinates from "@root/components/Field/FormFieldMapCoordinates";
import FormFieldImageUpload from "@root/components/Field/FormFieldImageUpload";
import FormFieldMatrix from "@root/components/Field/FormFieldMatrix";
import FormFieldUpload from "@root/components/Field/FormFieldUpload";
import FormFieldNumberTable from "@root/components/Field/FormFieldNumberTable";
import { matchTime } from "@root/utils/date";

export function defaultResolver(value: any) {
	return { internalValue: value, value };
}

const fieldConfigMap: Partial<Record<Exclude<FieldDef["type"], FieldDefCustom["type"]>, FieldConfig>> = {
	text: {
		Component: FormFieldText,
		validate: "onBlurAmend",
		getResolvedValue: defaultResolver
	},
	checkbox: {
		Component: FormFieldCheckbox,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	chip: {
		Component: FormFieldChipSingleSelect,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	dropdown: {
		Component: FormFieldDropdownSingleSelection,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	phone: {
		Component: FormFieldPhoneSelectionDropdown,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	radio: {
		Component: FormFieldRadio,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	toggleSwitch: {
		Component: FormFieldToggleSwitch,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	imageVideoDocumentLink: {
		Component: FormFieldImageVideoLinkDocumentBrowsing,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	color: {
		Component: FormFieldColorPicker,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	date: {
		Component: FormFieldDate,
		validate: "onBlurChange",
		getResolvedValue: (value: DateData | undefined, fieldDef: FieldDefDate): { internalValue: DateData | undefined, value: Date | undefined } => {
			if (value instanceof Date ) {
				return {
					internalValue: { date: value, validDate: true, time: value, validTime: true },
					value
				}
			} else {
				const fixedTime = fieldDef?.inputSettings?.fixedTime || [0, 0, 0, 0];

				if (!value) {
					return {
						internalValue: undefined,
						value: undefined
					};
				}

				if (!value.validDate) {
					return { internalValue: value, value: undefined };
				}

				if (!fieldDef?.inputSettings?.showTime) {
					return { internalValue: value, value: matchTime(value.date, fixedTime) };
				}

				if (!value.validTime) {
					return { internalValue: value, value: undefined };
				}

				return { internalValue: value , value: matchTime(value.date, value.time) };
			}
		}
	},
	address: {
		Component: FormFieldAddress,
		validate: "onChange",
		getResolvedValue: defaultResolver
	},
	table: {
		Component: FormFieldTable,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	textEditor: {
		Component: FormFieldTextEditor,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	advancedSelection: {
		Component: FormFieldAdvancedSelection,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	mapCoordinates: {
		Component: FormFieldMapCoordinates,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	imageUpload: {
		Component: FormFieldImageUpload,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	matrix: {
		Component: FormFieldMatrix,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	upload: {
		Component: FormFieldUpload,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	numberTable: {
		Component: FormFieldNumberTable,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	},
	raw: {
		Component: FormFieldRaw,
		validate: "onBlur",
		getResolvedValue: defaultResolver
	}
};

export function getFieldConfig(type: FieldDef["type"]): FieldConfig {
	if (typeof type !== "string") {
		return {
			Component: type,
			validate: "onBlur",
			getResolvedValue: defaultResolver
		};
	}

	if (!fieldConfigMap[type]) {
		return {
			Component: null,
			validate: "onBlur",
			getResolvedValue: defaultResolver
		};
	}

	return fieldConfigMap[type];
}

export default fieldConfigMap;
