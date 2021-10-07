import * as React from 'react';
import { memo, useMemo, lazy } from 'react';
import { FieldDef, SectionDef } from './FormTypes';

const FormFieldText = lazy(() => import('../FormFieldText'));
const FormFieldTextArea = lazy(() => import('../FormFieldTextArea'));
const FormFieldCheckbox = lazy(() => import('../FormFieldCheckbox'));
import { actions } from './formUtils';

const Section = (props) => {
	const { 
		title,
		description,
		children,
		fields,
		dispatch,
	} = props;

	const componentMap = {
		text: FormFieldText,
		textArea: FormFieldTextArea,
		checkbox: FormFieldCheckbox,
	};

	console.log(props);

	const onChangeMap = useMemo(() => {
		return props.fields.reduce((prev, curr) => {
			prev[curr.name] = async function (value) {
				await props.dispatch(
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
	}, [props.fields]);

	const renderFields = (sectionFields: (string | FieldDef)[][][]) => {
		let layout = [...sectionFields];

		return layout.map((row, i) => (
			<div key={i} className='row'>
				{row.map((col, i) => (
					<div key={i} className='col'>
						{col.map((field, i) => {

							const currentField = props.fields?.find(
								(fieldDef) => {
									return field === fieldDef.name;
								}
							);

							const { type, inputSettings, ...fieldProps } = currentField;

							const Component = componentMap[type];

							const onChange = onChangeMap[fieldProps.name];

							return (
								<Component
									{...currentField}
									value={props.state.data[fieldProps.name] || ''}
									touched={props.state.touched[fieldProps.name] || false}
									error={props.state.errors[fieldProps.name] ? true : false}
									errorText={props.state.errors[fieldProps.name] || ''}
									onChange={onChange}
								/>
							);
						})}
					</div>
				))}
			</div>
		));
	};

	return(
		<div>
			{title && <h1>{title}</h1>}
			{description && <p>{description}</p>}
			{/* {children} */}
		</div>
	);
};

export default memo(Section);