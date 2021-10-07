import * as React from 'react';
import { memo, useMemo } from 'react';
import styled from 'styled-components';
import { actions } from './formUtils';

import FormFieldText from '../FormFieldText';
import FormFieldTextArea from '../FormFieldTextArea';
import FormFieldCheckbox from '../FormFieldCheckbox';

const componentMap = {
	text: FormFieldText,
	textArea: FormFieldTextArea,
	checkbox: FormFieldCheckbox,
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
					actions.validateField({name: curr.name})
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

	return(
		<StyledCol>
			{col.map((field, i) => {
				const currentField = fieldsDef?.find(
					(fieldDef) => {
						return field === fieldDef.name;
					}
				);

				const { type, inputSettings, ...fieldProps } = currentField;

				const Component = componentMap[type];

				const onChange = onChangeMap[fieldProps.name];

				const onBlur = onBlurMap[fieldProps.name];

				return (
					<Component
						key={i}
						{...currentField}
						value={state.data[fieldProps.name] || ''}
						touched={state.touched[fieldProps.name] || false}
						error={state.errors[fieldProps.name] ? true : false}
						errorText={state.errors[fieldProps.name] || ''}
						onChange={onChange}
						onBlur={onBlur}
					/>
				);
			})}
		</StyledCol>
	);
};

export default memo(Col);