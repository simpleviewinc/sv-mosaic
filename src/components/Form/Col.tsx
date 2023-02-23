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
import FormFieldToggleSwitch from "@root/forms/FormFieldToggleSwitch";
import Field, { FieldDef } from "@root/components/Field";
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
import { Sizes } from "@root/theme";

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
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
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

	const componentMap = useMemo(() => ({
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
		upload: FormFieldUpload
	}), []);

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

	/* const onBlurMap = useMemo(() => {
		return fieldsDef.reduce((prev, curr) => {
			prev[curr.name] = async function () {
				await dispatch(
					formActions.validateField({ name: curr.name })
				);

				if (curr.pairedFields)
					curr.pairedFields.forEach(async pairedField => {
						await dispatch(
							formActions.validateField({ name: pairedField })
						);
					});
			};

			return prev;
		}, {});
	}, [fieldsDef, state.pairedFields]); */

	return (
		<StyledCol colsInRow={colsInRow}>
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

				const Component: ElementType = typeof type === "string" ? componentMap[type] : type;

				if (!Component) {
					throw new Error(`Invalid type ${type}`);
				}

				const onChange = onChangeMap[fieldProps.name];

				// const onBlur = onBlurMap[fieldProps.name];

				const name = fieldProps.name;
				const ref = fieldProps.ref;
				const value = state?.data[fieldProps.name];
				const error = state?.errors[fieldProps.name] || "";

				let maxSize: Sizes | string;
				const SizeSelected = Sizes[currentField?.size] ? Sizes[currentField?.size] : currentField?.size;

				if (currentField?.size)
					switch (colsInRow) {
					case 1:
						maxSize = SizeSelected <= Sizes.lg ? SizeSelected : Sizes.lg;
						break;
					case 2:
						maxSize = SizeSelected <= Sizes.md ? SizeSelected : Sizes.md;
						break;
					case 3:
						maxSize = SizeSelected <= Sizes.sm ? SizeSelected : Sizes.sm;
						break;
					default:
						break;
					}

				const children = useMemo(() => (
					<Component
						fieldDef={{ ...currentField, size: maxSize, }}
						name={name}
						value={value}
						error={error}
						onChange={onChange}
						ref={ref}
						// onBlur={onBlur}
						key={`${name}_${i}`}
					/>
				), [value, error, onChange, currentField]);

				return (typeof type === "string" && componentMap[type]) ? (
					<Field
						key={`${name}_${i}`}
						fieldDef={{ ...currentField, size: maxSize }}
						value={value}
						error={error}
						colsInRow={colsInRow}
						id={name}
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
