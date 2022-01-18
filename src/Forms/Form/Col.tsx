import * as React from 'react';
import { memo, useMemo } from 'react';
import styled from 'styled-components';
import { actions } from './formUtils';

// import FormFieldAddLink from '../FormFieldAddLink';
import FormFieldText from '../FormFieldText';
import FormFieldTextArea from '../FormFieldTextArea';
import FormFieldCheckbox from '../FormFieldCheckbox';
import FormFieldChipSingleSelect from '../FormFieldChipSingleSelect';
import FormFieldDropdownSingleSelection from '../FormFieldDropdownSingleSelection';
import FormFieldPhoneSelectionDropdown from '../FormFieldPhoneSelectionDropdown';
import FormFieldRadio from '../FormFieldRadio';
import FormFieldToggleSwitch from '../FormFieldToggleSwitch';
import Field from '@root/components/Field';
import LinkSetup from '../LinkSetup';
import ImageVideoDocumentSetUp from '../ImageVideoDocumentSetUp';
import ColorPicker from '../ColorPicker';
import SingleDateCalendar from '../DateTimeField/SingleDateCalendar';
import DateRangeCalendar from '../DateTimeField/DateRangeCalendar';
import TimeInput from '../DateTimeField/TimeInput';
import DateTimeInput from '../DateTimeField/DateTimeInput';
import Address from '../Address';
import Table from '../Table';
// import TextEditor from '../TextEditor';
import AdvancedSelection from '../AdvancedSelection';
import MapCoordinates from '../MapCoordinates';
import FormFieldImageUpload from '../FormFieldImageUpload';

const StyledCol = styled.div`
	display: flex;
	flex-direction: column;
	${pr => pr.formType === 'modal' ?
		`
			flex: 1 1 auto;
		`
		:
		`
			width: 100%;
		`
	}
`;

const Col = (props) => {
	const {
		col,
		state,
		fieldsDef,
		dispatch,
		formType,
	} = props;

	const componentMap = useMemo(() => ({
		// addLink: FormFieldAddLink,
		text: FormFieldText,
		textArea: FormFieldTextArea,
		checkbox: FormFieldCheckbox,
		chip: FormFieldChipSingleSelect,
		dropdown: FormFieldDropdownSingleSelection,
		phone: FormFieldPhoneSelectionDropdown,
		radio: FormFieldRadio,
		toggleSwitch: FormFieldToggleSwitch,
		linkSetup: LinkSetup,
		imageVideoDocument: ImageVideoDocumentSetUp,
		color: ColorPicker,
		date: SingleDateCalendar,
		dateRange: DateRangeCalendar,
		time: TimeInput,
		dateTime: DateTimeInput,
		address: Address,
		table: Table,
		// textEditor: TextEditor,
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
		<StyledCol formType={formType}>
			{col.map((field, i) => {
				let currentField = fieldsDef?.find(
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
						fieldDef={{ ...currentField }}
						name={name}
						value={value}
						touched={touched}
						error={error}
						onChange={onChange}
						onBlur={onBlur}
						key={`${name}_${i}`}
					/>
				), [value, error, onChange, onBlur, touched, currentField]);

				return ((type !== ('address' || 'advancedSelection' || 'mapCoordinates')) && !!componentMap[type]) ? (
					<Field
						key={`${name}_${i}`}
						fieldDef={{ ...currentField }}
						value={value}
						error={error}
					// type={typeof type === 'string' ? type : 'type'}
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