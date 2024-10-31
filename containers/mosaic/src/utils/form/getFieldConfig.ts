import type { FieldConfig, FieldDef, FieldDefCustom } from "@root/components/Field";

import type { DateData, FieldDefDate } from "@root/components/Field/FormFieldDate/DateField";
import type { TimeData } from "@root/components/Field/FormFieldTime/TimeField";
import type { UploadData, UploadDataPending } from "@root/components/Field/FormFieldUpload";

import { matchTime } from "@root/utils/date";
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

type FieldConfigMap = Partial<Record<Exclude<FieldDef["type"], FieldDefCustom["type"]>, FieldConfig>>;

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
			},
			checkbox: {
				Component: FormFieldCheckbox,
				validate: "onChange",
				getResolvedValue: defaultResolver,
			},
			chip: {
				Component: FormFieldChips,
				validate: "onChange",
				getResolvedValue: defaultResolver,
			},
			dropdown: {
				Component: FormFieldDropdown,
				validate: "onChange",
				getResolvedValue: defaultResolver,
			},
			phone: {
				Component: FormFieldPhone,
				validate: "onBlurAmend",
				getResolvedValue: defaultResolver,
			},
			radio: {
				Component: FormFieldRadio,
				validate: "onChange",
				getResolvedValue: defaultResolver,
			},
			toggle: {
				Component: FormFieldToggle,
				validate: "onChange",
				getResolvedValue: defaultResolver,
			},
			color: {
				Component: FormFieldColor,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
			},
			date: {
				Component: FormFieldDate,
				validate: "onBlurChange",
				getResolvedValue: (
					value: DateData | Date | undefined,
					fieldDef: FieldDefDate,
				): {
					internalValue: DateData | undefined;
					value: Date | undefined;
				} => {
					if (value instanceof Date ) {
						return {
							internalValue: { date: value, validDate: true, time: value, validTime: true },
							value,
						};
					} else {
						const fixedTime = fieldDef?.inputSettings?.fixedTime || [0, 0, 0, 0];

						if (!value) {
							return {
								internalValue: undefined,
								value: undefined,
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

						return { internalValue: value, value: matchTime(value.date, value.time) };
					}
				},
			},
			time: {
				Component: FormFieldTime,
				validate: "onBlur",
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
							internalValue: { time: date, validTime: true },
							value,
						};
					} else {
						if (!value) {
							return {
								internalValue: undefined,
								value: undefined,
							};
						}

						if (!value.validTime) {
							return { internalValue: value, value: undefined };
						}

						const time = `${
							String(value.time.getHours()).padStart(2, "0")
						}:${
							String(value.time.getMinutes()).padStart(2, "0")
						}`;

						return { internalValue: value, value: time };
					}
				},
			},
			address: {
				Component: FormFieldAddress,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
			},
			textEditor: {
				Component: FormFieldTextEditor,
				validate: "onBlurAmend",
				getResolvedValue: defaultResolver,
			},
			advancedSelection: {
				Component: FormFieldAdvancedSelection,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
			},
			mapCoordinates: {
				Component: FormFieldMapCoordinates,
				validate: "onBlur",
				getResolvedValue: defaultResolver,
			},
			matrix: {
				Component: FormFieldMatrix,
				validate: "onChange",
				getResolvedValue: defaultResolver,
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
			},
			number: {
				Component: FormFieldNumber,
				validate: "onBlurAmend",
				getResolvedValue: defaultResolver,
			},
			numberTable: {
				Component: FormFieldNumberTable,
				validate: "onChange",
				getResolvedValue: defaultResolver,
			},
			raw: {
				Component: FormFieldRaw,
				validate: "onChange",
				getResolvedValue: defaultResolver,
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
		};
	}

	if (!fieldConfigMap[type]) {
		return {
			Component: null,
			validate: "onBlur",
			getResolvedValue: defaultResolver,
		};
	}

	return fieldConfigMap[type];
}

export default getFieldConfig;
