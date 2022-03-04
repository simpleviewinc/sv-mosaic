import * as React from 'react';
import { memo, useEffect } from 'react';
import styled from 'styled-components';
import { StyledDisabledForm } from './Form.styled';
import { FormProps } from './FormTypes';
import { actions } from './formUtils';
import FormLayout from './FormLayout';
import TopComponent from '../TopComponent';


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
`;

const Form = (props: FormProps) => {
	const {
		title,
		description,
		type,
		sections,
		fields,
		dispatch,
		state,
		onCancel,
		onLoad,
		cancelButtonAttrs,
		submitButtonAttrs,
	} = props;

	useEffect(() => {
		const loadForm = async (loadCb) => {
			await dispatch(
				actions.prepopulateForm({
					callback: loadCb
				})
			);
		}

		if (onLoad) {
			loadForm(onLoad);
		} else {
			let defaultValues = {};

			fields.forEach(field => {
				if (field.defaultValue)
					defaultValues = {
						...defaultValues,
						[field.name]: field.defaultValue
					}
			});

			loadForm(() => defaultValues);
		}
	}, [onLoad]);

	const submit = async (e) => {
		e.preventDefault();
		await dispatch(
			actions.submitForm()
		);
	}

	const cancel = (e) => {
		e.preventDefault();
		onCancel();
	}

	return (
		<>
			<StyledDisabledForm disabled={state?.disabled ? state.disabled : false} />
			<StyledForm>
				{title ?
					<TopComponent
						title={title}
						type={type}
						description={description}
						onCancel={(e) => cancel(e)}
						cancelButtonAttrs={cancelButtonAttrs}
						onSubmit={(e) => submit(e)}
						submitButtonAttrs={submitButtonAttrs}
						sections={sections}
					>
						<FormLayout
							state={state}
							dispatch={dispatch}
							fields={fields}
							sections={sections}
						/>
					</TopComponent>
					:
					<FormLayout
						state={state}
						dispatch={dispatch}
						fields={fields}
						sections={sections}
					/>
				}
			</StyledForm>
		</>
	);
}

export default memo(Form);
