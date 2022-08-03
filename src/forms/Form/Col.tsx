import * as React from "react";
import { memo, useMemo } from "react";
import styled from "styled-components";
import { formActions } from "./formActions";

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

	const doneTypingInterval = 500;
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
		clearTimeout(typingTimer);
		return fieldsDef.reduce((prev, curr) => {
			prev[curr.name] = async function (value) {
				await dispatch(
					formActions.setFieldValue({
						name: curr.name,
						value,
					})
				);
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

				// const onBlur = onBlurMap[fieldProps.name];

				const name = fieldProps.name;
				const value = state?.data[fieldProps.name] || "";
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
						fieldDef={{ ...currentField, size: maxSize }}
						name={name}
						value={value}
						error={error}
						onChange={onChange}
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
