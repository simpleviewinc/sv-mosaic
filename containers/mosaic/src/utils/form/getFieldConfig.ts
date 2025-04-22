import type { FieldConfig, FieldDef, FieldDefCustom } from "@root/components/Field";

import type { DateData } from "@root/components/Field/FormFieldDate";
import type { UploadData, UploadDataPending } from "@root/components/Field/FormFieldUpload";

import { isPendingUploadData } from "@root/components/Field/FormFieldUpload/FormFieldUploadTypes";
import { externalToInternalValue, internalToExternalValue } from "./defaultValueTransform";
import cleanValue from "./cleanValue";

import FormFieldText from "@root/components/Field/FormFieldText/FormFieldText";
import FormFieldCheckbox from "@root/components/Field/FormFieldCheckbox/FormFieldCheckbox";
import FormFieldChips from "@root/components/Field/FormFieldChips/FormFieldChips";
import FormFieldDropdown from "@root/components/Field/FormFieldDropdown/FormFieldDropdown";
import FormFieldPhone from "@root/components/Field/FormFieldPhone/FormFieldPhone";
import FormFieldRadio from "@root/components/Field/FormFieldRadio/FormFieldRadio";
import FormFieldRaw from "@root/components/Field/FormFieldRaw/FormFieldRaw";
import FormFieldToggle from "@root/components/Field/FormFieldToggle/FormFieldToggle";
import FormFieldColor from "@root/components/Field/FormFieldColor/FormFieldColor";
import FormFieldDate from "@root/components/Field/FormFieldDate";
import type { TimeData } from "@root/components/Field/FormFieldTime/TimeField";
import FormFieldTime from "@root/components/Field/FormFieldTime/TimeField";
import FormFieldAddress from "@root/components/Field/FormFieldAddress/FormFieldAddress";
import { FormFieldTextEditor } from "@root/components/Field/FormFieldTextEditor/FormFieldTextEditor";
import FormFieldAdvancedSelection from "@root/components/Field/FormFieldAdvancedSelection/FormFieldAdvancedSelection";
import FormFieldMapCoordinates from "@root/components/Field/FormFieldMapCoordinates/FormFieldMapCoordinates";
import FormFieldMatrix from "@root/components/Field/FormFieldMatrix/FormFieldMatrix";
import FormFieldUpload from "@root/components/Field/FormFieldUpload/FormFieldUpload";
import FormFieldNumber from "@root/components/Field/FormFieldNumber/FormFieldNumber";
import FormFieldNumberTable from "@root/components/Field/FormFieldNumberTable/FormFieldNumberTable";
import FormFieldGroup from "@root/components/Field/FormFieldGroup/FormFieldGroup";
import defaultHasValue from "./defaultHasValue";
import { matchTime, textIsValidDate } from "../date";
import { DATE_FORMAT_FULL } from "@root/constants";

type FieldConfigMap = Partial<Record<Exclude<FieldDef["type"], FieldDefCustom["type"]>, FieldConfig>>;

// We are wrapping the field config map in a function and calling it lazily, because
// otherwise it breaks hot reloading in development due to circular dependencies being
// referenced before they're available. We memo it to avoid recreating the map every
// time we need it, which isn't that often, but still.
function getFieldConfigMapMemo(): () => FieldConfigMap {
	let cache: null | FieldConfigMap = null;

	return () => {
		if (cache) {
			return cache;
		}

		cache = {
			text: {
				Component: FormFieldText,
				validate: "onBlurAmend",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			checkbox: {
				Component: FormFieldCheckbox,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			chip: {
				Component: FormFieldChips,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			dropdown: {
				Component: FormFieldDropdown,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			phone: {
				Component: FormFieldPhone,
				validate: "onBlurAmend",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			radio: {
				Component: FormFieldRadio,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			toggle: {
				Component: FormFieldToggle,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			color: {
				Component: FormFieldColor,
				validate: "onBlur",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			date: {
				Component: FormFieldDate,
				validate: "onBlurAmend",
				externalToInternalValue: (value: Date | undefined) => {
					if (!value || !(value instanceof Date)) {
						return { date: undefined };
					}

					return {
						date: value,
					};
				},
				internalToExternalValue: (value: DateData | undefined, fieldDef) => {
					if (!value || !value.date) {
						return undefined;
					}

					if (
						isNaN(value.date.getTime()) ||
						(value.keyboardInputValue && !textIsValidDate(value.keyboardInputValue, DATE_FORMAT_FULL))
					) {
						return undefined;
					}

					return matchTime(value.date, fieldDef?.inputSettings?.fixedTime || [0, 0, 0, 0]);
				},
				hasValue: ({ internalValue }) => {
					return Boolean(internalValue && internalValue.date);
				},
			},
			time: {
				Component: FormFieldTime,
				validate: "onBlurAmend",
				externalToInternalValue: (value: string | undefined) => {
					if (!value) {
						return undefined;
					}

					const time = new Date();
					const [hrs, mins] = value.split(":");

					time.setHours(Number(hrs));
					time.setMinutes(Number(mins));

					return {
						time,
					};
				},
				internalToExternalValue: (value: TimeData | undefined) => {
					if (!value || !value.time) {
						return undefined;
					}

					return [
						String(value.time.getHours()).padStart(2, "0"),
						String(value.time.getMinutes()).padStart(2, "0"),
					].join(":");
				},
				hasValue: ({ internalValue }) => {
					return Boolean(internalValue && internalValue.time);
				},
			},
			address: {
				Component: FormFieldAddress,
				validate: "onBlur",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			textEditor: {
				Component: FormFieldTextEditor,
				validate: "onBlurAmend",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			advancedSelection: {
				Component: FormFieldAdvancedSelection,
				validate: "onBlur",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			mapCoordinates: {
				Component: FormFieldMapCoordinates,
				validate: "onBlur",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			matrix: {
				Component: FormFieldMatrix,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			upload: {
				Component: FormFieldUpload,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue: (value: (UploadData | UploadDataPending)[]) => {
					return cleanValue(value.filter((item) => !isPendingUploadData(item) && !item.isDeleting));
				},
				hasValue: defaultHasValue,
			},
			number: {
				Component: FormFieldNumber,
				validate: "onBlurAmend",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			numberTable: {
				Component: FormFieldNumberTable,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			raw: {
				Component: FormFieldRaw,
				validate: "onChange",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
			group: {
				Component: FormFieldGroup,
				validate: "onSubmit",
				externalToInternalValue,
				internalToExternalValue,
				hasValue: defaultHasValue,
			},
		};

		return cache;
	};
}

const getFieldConfigMap = getFieldConfigMapMemo();

export function getFieldConfig(type: FieldDef["type"]): FieldConfig {
	const fieldConfigMap = getFieldConfigMap();

	if (typeof type !== "string") {
		return {
			Component: type,
			validate: "onBlur",
			externalToInternalValue,
			internalToExternalValue,
			hasValue: defaultHasValue,
		};
	}

	if (!fieldConfigMap[type]) {
		return {
			Component: null,
			validate: "onBlur",
			externalToInternalValue,
			internalToExternalValue,
			hasValue: defaultHasValue,
		};
	}

	return fieldConfigMap[type];
}

export default getFieldConfig;
