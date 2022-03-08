import * as React from 'react';
import { memo, useEffect } from 'react';
import { StyledDisabledForm, StyledForm } from './Form.styled';
import { FormProps } from './FormTypes';
import { actions } from './formUtils';
import FormLayout from './FormLayout';
import TopComponent from '../TopComponent';

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

	//THIS IS PRINTING ONCE PER FIELD
	// console.log(state.disabled);
	// display: ${pr => pr.disabled ? 'block' : 'none'};

	return (
		<div style={{ position: 'relative' }}>
			{state.disabled &&
				<StyledDisabledForm disabled={!!state?.disabled} />
			}
			<StyledForm>
				{title ?
					<TopComponent
						title={title}
						type={type}
						description={description}
						onSubmit={(e) => submit(e)}
						submitButtonAttrs={submitButtonAttrs}
						onCancel={(e) => cancel(e)}
						cancelButtonAttrs={cancelButtonAttrs}
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
		</div>
	);
}

export default memo(Form);
