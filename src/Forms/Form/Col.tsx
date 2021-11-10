import * as React from 'react';
import { memo, useMemo } from 'react';
import styled from 'styled-components';
import { actions } from './formUtils';

import FormFieldText from '../FormFieldText';
import FormFieldTextArea from '../FormFieldTextArea';
import FormFieldCheckbox from '../FormFieldCheckbox';
import FormFieldChipSingleSelect from '../FormFieldChipSingleSelect';
import FormFieldDropdownSingleSelection from '../FormFieldDropdownSingleSelection';
import FormFieldPhoneSelectionDropdown from '../FormFieldPhoneSelectionDropdown';
import FormFieldRadio from '../FormFieldRadio';
import FormFieldToggleSwitch from '../FormFieldToggleSwitch';
import Field from '@root/components/Field';

const componentMap = {
	text: FormFieldText,
	textArea: FormFieldTextArea,
	checkbox: FormFieldCheckbox,
	chip: FormFieldChipSingleSelect,
	dropdown: FormFieldDropdownSingleSelection,
	phone: FormFieldPhoneSelectionDropdown,
	radio: FormFieldRadio,
	toggleSwitch: FormFieldToggleSwitch,
};

const StyledCol = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Col = (props) => {
	const {
		col,
		state,
		fieldsDef,
		dispatch
	} = props;

	const onChangeMap = useMemo(() => {
		return fieldsDef.reduce((prev, curr) => {
			prev[curr.name] = async function (value) {
				await dispatch(
					actions.setFieldValue({
						name: curr.name,
						value,
					})
				);

				if (curr.onChange) {
					/**
					 * Sending the value will allow devs
					 * to do whatever they want with this value
					 */
					curr.onChange(value);
				}
			};

			return prev;
		}, {});
	}, [fieldsDef]);

	const onBlurMap = useMemo(() => {
		return fieldsDef.reduce((prev, curr) => {
			prev[curr.name] = async function (value) {
				await dispatch(
					actions.validateField({ name: curr.name })
				);

				if (curr.onBlur) {
					/**
					 * Sending the value will allow devs
					 * to do whatever they want with this value
					 */
					curr.onBlur(value);
				}
			};

			return prev;
		}, {});
	}, [fieldsDef]);

	return (
		<StyledCol>
			{col.map((field, i) => {
				let currentField = fieldsDef?.find(
					(fieldDef) => {
						return field === fieldDef.name;
					}
				);

				const { type, ...fieldProps } = currentField;

				const Component = componentMap[type];

				const onChange = onChangeMap[fieldProps.name];

				const onBlur = onBlurMap[fieldProps.name];

				const value = state.data[fieldProps.name] || '';
				const touched = state.touched[fieldProps.name] || '';
				const error = state.errors[fieldProps.name] || '';

				const children = useMemo(() => (
					<Component
						{...currentField}
						value={value}
						touched={touched}
						error={error}
						onChange={onChange}
						onBlur={onBlur}
					/>
				), [value, error, onChange, onBlur, touched, currentField]);

				return (
					<Field
						key={i}
						{...currentField}
						value={value}
						error={error}
					>
						{children}
					</Field>
				);
			})}
		</StyledCol>
	);
};

export default memo(Col);