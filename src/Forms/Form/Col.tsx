import * as React from "react";
import { memo, useMemo } from "react";
import styled from "styled-components";
import { actions } from "./formUtils";

import FormFieldText from "../FormFieldText";
import FormFieldTextArea from "../FormFieldTextArea";
import FormFieldCheckbox from "../FormFieldCheckbox";
import FormFieldChipSingleSelect from "../FormFieldChipSingleSelect";
import FormFieldDropdownSingleSelection from "../FormFieldDropdownSingleSelection";
import FormFieldPhoneSelectionDropdown from "../FormFieldPhoneSelectionDropdown";
import FormFieldRadio from "../FormFieldRadio";
import FormFieldToggleSwitch from "../FormFieldToggleSwitch";
import Field, { FieldDef } from "@root/components/Field";
import FormFieldImageVideoLinkDocumentBrowsing from "../FormFieldImageVideoLinkDocumentBrowsing";
import FormFieldColorPicker from "../FormFieldColorPicker";
import FormFieldDate from "../FormFieldDate/DateField";
import FormFieldAddress from "../FormFieldAddress";
import FormFieldTable from "../FormFieldTable";
import FormFieldTextEditor from "../FormFieldTextEditor";
import FormFieldAdvancedSelection from "../FormFieldAdvancedSelection";
import FormFieldMapCoordinates from "../FormFieldMapCoordinates";
import FormFieldImageUpload from "../FormFieldImageUpload";
import { Sizes } from "@root/theme/sizes";

const StyledCol = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% / ${pr => pr.colsInRow});
`;

interface ColPropsTypes {
	col: (string | FieldDef)[];
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
	colsInRow?: number;
}

const Col = (props: ColPropsTypes) => {
	const {
		col,
		state,
		fieldsDef,
		dispatch,
		colsInRow,
	} = props;

	const componentMap = useMemo(() => ({
		text: FormFieldText,
		textArea: FormFieldTextArea,
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
	}), []);

	const onChangeMap = useMemo(() => {
		return fieldsDef.reduce((prev, curr) => {
			prev[curr.name] = async function (value) {
				await dispatch(
					actions.setFieldValue({
						name: curr.name,
						value,
					})
				);
			};

			return prev;
		}, {});
	}, [fieldsDef]);

	const onBlurMap = useMemo(() => {
		return fieldsDef.reduce((prev, curr) => {
			prev[curr.name] = async function () {
				await dispatch(
					actions.validateField({ name: curr.name })
				);

				if (curr.pairedFields)
					curr.pairedFields.forEach(async pairedField => {
						await dispatch(
							actions.validateField({ name: pairedField })
						);
					});
			};

			return prev;
		}, {});
	}, [fieldsDef, state.pairedFields]);

	return (
		<StyledCol colsInRow={colsInRow}>
			{col.map((field, i) => {
				const currentField = fieldsDef?.find(
					(fieldDef) => {
						return field === fieldDef.name;
					}
				);

				const { type, ...fieldProps } = currentField;

				const Component = typeof type === "string" ? componentMap[type] : type;

				if (!Component) {
					throw new Error(`Invalid type ${type}`);
				}

				const onChange = onChangeMap[fieldProps.name];

				const onBlur = onBlurMap[fieldProps.name];

				const name = fieldProps.name;
				const value = state?.data[fieldProps.name] || "";
				const touched = state?.touched[fieldProps.name] || "";
				const error = state?.errors[fieldProps.name] || "";

				let maxSize: Sizes | string;
				if (currentField?.size)
					switch (colsInRow) {
					case 1:
						maxSize = currentField?.size <= Sizes.lg ? currentField.size : Sizes.lg;
						break;
					case 2:
						maxSize = currentField?.size <= Sizes.md ? currentField.size : Sizes.md;
						break;
					case 3:
						maxSize = currentField?.size <= Sizes.sm ? currentField.size : Sizes.sm;
						break;
					default:
						break;
					}

				const children = useMemo(() => (
					<Component
						fieldDef={{ ...currentField, size: maxSize }}
						name={name}
						value={value}
						touched={touched}
						error={error}
						onChange={onChange}
						onBlur={onBlur}
						key={`${name}_${i}`}
					/>
				), [value, error, onChange, onBlur, touched, currentField]);

				return (typeof type === "string" && componentMap[type]) ? (
					<Field
						key={`${name}_${i}`}
						fieldDef={{ ...currentField, size: maxSize }}
						value={value}
						error={error}
						colsInRow={colsInRow}
					>
						{children}
					</Field>
				)
					:
					(
						children
					);
			})}
		</StyledCol>
	);
};

export default memo(Col);
