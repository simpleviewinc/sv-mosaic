import * as React from 'react';
import {
	useMemo,
	memo
} from 'react';
import styled from 'styled-components';
import { FormProps, SectionDef } from './FormTypes';
import Section from './Section';
import Button from '../Button';
import { actions } from './formUtils';
import FormLayout from './FormLayout';


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
`;

export const StyledDisabledForm = styled.div`
	height: 100%;
	width: 100%;
	background-color: black;
	z-index: 999999;
	display: ${pr => pr.disabled ? 'block' : 'none'};
	position: absolute;
	opacity: 30%;
`;

const StyledTopComponent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: inherit;
	border: 1px solid #EDEDED;
	box-shadow: 0px 10px 10px #EDEDED;

	div h1, div p {
		margin: 0px;
		padding: 0px;
	}

	#buttons {
		align-self: center;
		display: flex;
		flex-direction: row;
	}
`;

const Form = (props: FormProps) => {
	const {
		sections,
		fields,
		dispatch,
		state,
		onSubmit,
		onCancel,
		title,
		description,
		cancelButtonAttrs,
		submitButtonAttrs,
	} = props;

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
			<StyledDisabledForm disabled={state.disabled} />
			<StyledForm>
				{title &&
					<StyledTopComponent>
						<div>
							{title && <h1>{title}</h1>}
							{description && <p>{description}</p>}
						</div>
						<div id='buttons'>
							{onCancel &&
								<Button
									onClick={(e) => cancel(e)}
									buttonType='secondary'
									{...cancelButtonAttrs}
								>
									{cancelButtonAttrs?.children ? cancelButtonAttrs?.children : 'Cancel'}
								</Button>
							}
							{onSubmit &&
								<Button
									onClick={(e) => submit(e)}
									{...submitButtonAttrs}
								>
									{submitButtonAttrs?.children ? submitButtonAttrs?.children : 'Submit'}
								</Button>
							}
						</div>
					</StyledTopComponent>
				}
				<FormLayout
					state={state}
					dispatch={dispatch}
					fields={fields}
					sections={sections}
				/>
				{/* {layout?.map((section, i) => (
					<Section
						key={i}
						title={section.title}
						description={section.description}
						fieldsDef={fields}
						fieldsLayoutPos={section.fields}
						state={state}
						dispatch={dispatch}
					/>
				))} */}
			</StyledForm>
		</>
	);
}

export default memo(Form);
