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
import Field, { FieldDef } from '@root/components/Field';
import ImageVideoLinkDocumentBrowsing from '../ImageVideoLinkDocumentBrowsing';
import ColorPicker from '../ColorPicker';
import SingleDateCalendar from '../DateTimeField/SingleDateCalendar';
import DateRangeCalendar from '../DateTimeField/DateRangeCalendar';
import TimeInput from '../DateTimeField/TimeInput';
import DateTimeInput from '../DateTimeField/DateTimeInput';
import Address from '../Address';
import Table from '../Table';
import TextEditor from '../TextEditor';
import AdvancedSelection from '../AdvancedSelection';
import MapCoordinates from '../MapCoordinates';
import FormFieldImageUpload from '../FormFieldImageUpload';

const StyledCol = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

interface ColPropsTypes {
	col: (string | FieldDef)[]
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
}

const Col = (props: ColPropsTypes) => {
	const {
		col,
		state,
		fieldsDef,
		dispatch,
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
		imageVideoDocumentLink: ImageVideoLinkDocumentBrowsing,
		color: ColorPicker,
		date: SingleDateCalendar,
		dateRange: DateRangeCalendar,
		time: TimeInput,
		dateTime: DateTimeInput,
		address: Address,
		table: Table,
		textEditor: TextEditor,
		advancedSelection: AdvancedSelection,
		mapCoordinates: MapCoordinates,
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
			prev[curr.name] = async function (value) {
				await dispatch(
					actions.validateField({ name: curr.name })
				);
			};

			return prev;
		}, {});
	}, [fieldsDef]);

	return (
		<StyledCol>
			{col.map((field, i) => {
				const currentField = fieldsDef?.find(
					(fieldDef) => {
						return field === fieldDef.name;
					}
				);

				const { type, ...fieldProps } = currentField;

				const Component = typeof type === 'string' ? componentMap[type] : type;

				if (!Component) {
					throw new Error(`Invalid type ${type}`);
				}

				const onChange = onChangeMap[fieldProps.name];

				const onBlur = onBlurMap[fieldProps.name];

				const name = fieldProps.name;
				const value = state?.data[fieldProps.name] || '';
				const touched = state?.touched[fieldProps.name] || '';
				const error = state?.errors[fieldProps.name] || '';

				const children = useMemo(() => (
					<Component
						fieldDef={{...currentField}}
						name={name}
						value={value}
						touched={touched}
						error={error}
						onChange={onChange}
						onBlur={onBlur}
						key={`${name}_${i}`}
					/>
				), [value, error, onChange, onBlur, touched, currentField]);

				return (typeof type === 'string' && componentMap[type]) ? (
					<Field
						key={`${name}_${i}`}
						fieldDef={{...currentField}}
						value={value}
						error={error}
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
