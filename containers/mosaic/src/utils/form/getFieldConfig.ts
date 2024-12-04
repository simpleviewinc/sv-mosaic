import type { FieldConfig, FieldDef, FieldDefCustom } from "@root/components/Field";

import type { DateData } from "@root/components/Field/FormFieldDate/DateField";
import type { TimeData } from "@root/components/Field/FormFieldTime/TimeField";
import type { UploadData, UploadDataPending } from "@root/components/Field/FormFieldUpload";

import { isPendingUploadData } from "@root/components/Field/FormFieldUpload/FormFieldUploadTypes";
import defaultResolver from "./defaultResolver";
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
import FormFieldDate from "@root/components/Field/FormFieldDate/DateField";
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
import { matchTime } from "../date";

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
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			checkbox: {
				Component: FormFieldCheckbox,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			chip: {
				Component: FormFieldChips,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			dropdown: {
				Component: FormFieldDropdown,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			phone: {
				Component: FormFieldPhone,
				validate: "onBlurAmend",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			radio: {
				Component: FormFieldRadio,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			toggle: {
				Component: FormFieldToggle,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			color: {
				Component: FormFieldColor,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			date: {
				Component: FormFieldDate,
				validate: "onBlurAmend",
				getResolvedValue: (value: DateData | Date | undefined, fieldDef): {
					internalValue: DateData | undefined;
					value: Date | undefined;
				} => {

					if (value instanceof Date ) {
						return {
							internalValue: { date: value },
							value,
						};
					} else {
						if (!value || !value.date) {
							return {
								internalValue: undefined,
								value: undefined,
							};
						}

						return {
							internalValue: value,
							value: matchTime(value.date, fieldDef?.inputSettings?.fixedTime || [0, 0, 0, 0]),
						};
					}
				},
				hasValue: ({ internalValue }) => {
					return Boolean(internalValue && internalValue.date);
				},
			},
			time: {
				Component: FormFieldTime,
				validate: "onBlurAmend",
				getResolvedValue: (
					value: TimeData | string | undefined,
				): {
					internalValue: TimeData | undefined;
					value: string | undefined;
				} => {
					if (typeof value === "string") {
						const date = new Date();
						const [hrs, mins] = value.split(":");

						date.setHours(Number(hrs));
						date.setMinutes(Number(mins));

						return {
							internalValue: {
								time: date,
								keyboardInputValue: undefined,
							},
							value,
						};
					} else {
						if (!value || !value.time) {
							return {
								internalValue: undefined,
								value: undefined,
							};
						}

						const time = !isNaN(value.time.getTime()) ? [
							String(value.time.getHours()).padStart(2, "0"),
							String(value.time.getMinutes()).padStart(2, "0"),
						].join(":") : undefined;

						return { internalValue: value, value: time };
					}
				},
				hasValue: ({ internalValue }) => {
					return Boolean(internalValue && internalValue.time);
				},
			},
			address: {
				Component: FormFieldAddress,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			textEditor: {
				Component: FormFieldTextEditor,
				validate: "onBlurAmend",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			advancedSelection: {
				Component: FormFieldAdvancedSelection,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			mapCoordinates: {
				Component: FormFieldMapCoordinates,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			matrix: {
				Component: FormFieldMatrix,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			upload: {
				Component: FormFieldUpload,
				validate: "onChange",
				getResolvedValue: (
					value: (UploadData | UploadDataPending)[] = [],
				) => {
					return {
						value: cleanValue(value.filter((item) => !isPendingUploadData(item) && !item.isDeleting)),
						internalValue: value || [],
					};
				},
				hasValue: defaultHasValue,
			},
			number: {
				Component: FormFieldNumber,
				validate: "onBlurAmend",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			numberTable: {
				Component: FormFieldNumberTable,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			raw: {
				Component: FormFieldRaw,
				validate: "onChange",
				getResolvedValue: defaultResolver,
				hasValue: defaultHasValue,
			},
			group: {
				Component: FormFieldGroup,
				validate: "onSubmit",
				getResolvedValue: defaultResolver,
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
			getResolvedValue: defaultResolver,
			hasValue: defaultHasValue,
		};
	}

	if (!fieldConfigMap[type]) {
		return {
			Component: null,
			validate: "onBlur",
			getResolvedValue: defaultResolver,
			hasValue: defaultHasValue,
		};
	}

	return fieldConfigMap[type];
}

export default getFieldConfig;
