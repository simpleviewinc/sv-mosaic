import * as React from "react";
import { ElementType, memo, useCallback, useMemo } from "react";
import { formActions } from "../formActions";

import FormFieldText from "@root/components/Field/FormFieldText";
import FormFieldCheckbox from "@root/components/Field/FormFieldCheckbox";
import FormFieldChipSingleSelect from "@root/components/Field/FormFieldChipSingleSelect";
import FormFieldDropdownSingleSelection from "@root/components/Field/FormFieldDropdownSingleSelection";
import FormFieldPhoneSelectionDropdown from "@root/components/Field/FormFieldPhoneSelectionDropdown";
import FormFieldRadio from "@root/components/Field/FormFieldRadio";
import FormFieldRaw from "@root/components/Field/FormFieldRaw";
import FormFieldToggleSwitch from "@root/components/Field/FormFieldToggleSwitch";
import Field, { FieldDef, sanitizeFieldSize } from "@root/components/Field";
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
import evaluateShow from "@root/utils/show/evaluateShow";
import { ColPropsTypes } from "./ColTypes";
import { StyledCol } from "./ColStyled";

const fieldComponentMap = {
	text: FormFieldText,
	checkbox: FormFieldCheckbox,
	chip: FormFieldChipSingleSelect,
	dropdown: FormFieldDropdownSingleSelection,
	phone: FormFieldPhoneSelectionDropdown,
	radio: FormFieldRadio,
	toggleSwitch: FormFieldToggleSwitch,
	imageVideoDocumentLink: FormFieldImageVideoLinkDocumentBrowsing,
	color: FormFieldColorPicker,
	date: FormFieldDate,
	address: FormFieldAddress,
	table: FormFieldTable,
	textEditor: FormFieldTextEditor,
	advancedSelection: FormFieldAdvancedSelection,
	mapCoordinates: FormFieldMapCoordinates,
	imageUpload: FormFieldImageUpload,
	matrix: FormFieldMatrix,
	upload: FormFieldUpload,
	numberTable: FormFieldNumberTable,
	raw: FormFieldRaw
};

let typingTimer;

const Col = (props: ColPropsTypes) => {
	const {
		col,
		state,
		fieldsDef,
		dispatch,
		colsInRow,
		colIdx,
		rowIdx,
		sectionIdx
	} = props;

	const doneTypingInterval = 300;

	const sendValidateField = useCallback(async (curr) => {
		await dispatch(formActions.validateField({ name: curr.name }))

		if (curr.pairedFields)
			curr.pairedFields.forEach(async pairedField => {
				await dispatch(
					formActions.validateField({ name: pairedField })
				);
			});
	}, [dispatch]);

	const onChangeMap = useMemo(() => {
		return fieldsDef.reduce((prev, curr) => {
			prev[curr.name] = async function (value) {
				await dispatch(
					formActions.setFieldValue({
						name: curr.name,
						value,
						touched: true
					})
				);
				clearTimeout(typingTimer);
				typingTimer = setTimeout(async () => await sendValidateField(curr), doneTypingInterval);
			};

			return prev;
		}, {});
	}, [fieldsDef, state.pairedFields, sendValidateField]);

	return (
		<StyledCol data-layout="column" $colsInRow={colsInRow}>
			{col.map((field, i) => {
				const currentField: FieldDef = fieldsDef?.find(
					(fieldDef) => {
						return field === fieldDef.name;
					}
				);

				if (!currentField) {
					throw new Error(`No field declared for field name '${field}' in section ${sectionIdx}, row ${rowIdx}, column ${colIdx}.`);
				}

				const { type, ...fieldProps } = currentField;

				const Component: ElementType = typeof type === "string" ? fieldComponentMap[type] : type;

				if (!Component) {
					throw new Error(`Invalid type ${type}`);
				}

				const onChange = onChangeMap[fieldProps.name];

				const name = fieldProps.name;
				const ref = fieldProps.ref;
				const value = state?.data[fieldProps.name];
				const error = (state?.errors[fieldProps.name] && !currentField.disabled) ? state.errors[fieldProps.name] : "";

				const size = sanitizeFieldSize(
					currentField.size,
					currentField.type
				);

				const children = useMemo(() => (
					<Component
						fieldDef={{ ...currentField, size, }}
						name={name}
						value={value}
						error={error}
						onChange={onChange}
						ref={ref}
						key={`${name}_${i}`}
						dispatch={dispatch}
					/>
				), [value, error, onChange, currentField]);

				const shouldShow = useMemo(() => evaluateShow(currentField.show, {data: state?.data}), [currentField.show, state?.data]);

				return shouldShow ? (
					(typeof type === "string" && fieldComponentMap[type]) ? (
						<Field
							key={`${name}_${i}`}
							fieldDef={{ ...currentField, size }}
							value={value}
							error={error}
							colsInRow={colsInRow}
							id={name}
							dispatch={dispatch}
						>
							{children}
						</Field>
					) : (
						children
					)
				) : null;
			})}
		</StyledCol>
	);
};

export default memo(Col);
