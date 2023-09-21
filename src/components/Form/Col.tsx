import * as React from "react";
import { ElementType, memo, useMemo } from "react";
import styled from "styled-components";
import { formActions } from "./formActions";

import FormFieldText from "@root/forms/FormFieldText";
import FormFieldCheckbox from "@root/forms/FormFieldCheckbox";
import FormFieldChipSingleSelect from "@root/forms/FormFieldChipSingleSelect";
import FormFieldDropdownSingleSelection from "@root/forms/FormFieldDropdownSingleSelection";
import FormFieldPhoneSelectionDropdown from "@root/forms/FormFieldPhoneSelectionDropdown";
import FormFieldRadio from "@root/forms/FormFieldRadio";
import FormFieldRaw from "@root/forms/FormFieldRaw";
import FormFieldToggleSwitch from "@root/forms/FormFieldToggleSwitch";
import { FieldDef } from "@root/components/Field";
import FormFieldImageVideoLinkDocumentBrowsing from "@root/forms/FormFieldImageVideoLinkDocumentBrowsing";
import FormFieldColorPicker from "@root/forms/FormFieldColorPicker";
import FormFieldDate from "@root/forms/FormFieldDate/DateField";
import FormFieldAddress from "@root/forms/FormFieldAddress";
import FormFieldTable from "@root/forms/FormFieldTable";
import FormFieldTextEditor from "@root/forms/FormFieldTextEditor";
import FormFieldAdvancedSelection from "@root/forms/FormFieldAdvancedSelection";
import FormFieldMapCoordinates from "@root/forms/FormFieldMapCoordinates";
import FormFieldImageUpload from "@root/forms/FormFieldImageUpload";
import FormFieldMatrix from "@root/forms/FormFieldMatrix";
import FormFieldUpload from "@root/forms/FormFieldUpload";
import FormFieldNumberTable from "@root/forms/FormFieldNumberTable";
import evaluateShow from "@root/utils/show/evaluateShow";
import RegisteredField from "../Field/RegisteredField";
import { StyledProps } from "@root/types";
import { CONTAINERS } from "@root/theme/theme";
import { Sizes } from "@root/theme";

const StyledCol = styled.div<StyledProps<ColPropsTypes, "colsInRow">>`
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 24px;

	container-type: inline-size;
	container-name: ${CONTAINERS.FORM_COL};
`;

interface ColPropsTypes {
	col: (string | FieldDef)[];
	// TODO Use something other than any
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
}

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

function sanitizeSize(size: undefined | Sizes | string | number): string {
	if (!size) {
		return "full";
	}

	if (Sizes[size]) {
		return Sizes[size];
	}

	return String(size);
}

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
	let typingTimer;

	const sendValidateField = async (curr) => {
		await dispatch(formActions.validateField({ name: curr.name }))

		if (curr.pairedFields)
			curr.pairedFields.forEach(async pairedField => {
				await dispatch(
					formActions.validateField({ name: pairedField })
				);
			});
	};

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
	}, [fieldsDef, state.pairedFields]);

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

				const size = sanitizeSize(currentField.size);

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
						<RegisteredField
							key={`${name}_${i}`}
							fieldDef={{ ...currentField, size }}
							value={value}
							error={error}
							colsInRow={colsInRow}
							id={name}
							name={name}
							dispatch={dispatch}
						>
							{children}
						</RegisteredField>
					) : (
						children
					)
				) : null;
			})}
		</StyledCol>
	);
};

export default memo(Col);
