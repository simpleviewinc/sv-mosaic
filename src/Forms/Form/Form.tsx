import * as React from 'react';
import {
	useMemo,
	memo
} from 'react';
import styled from 'styled-components';
import { SectionDef } from './FormTypes';
import Section from './Section';
import Button from '../Button';
import { actions } from './formUtils';


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
`;

const StyledDisabledForm = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: black;
	z-index: 999999;
	display: ${pr => pr.disabled ? 'block' : 'none'};
	position: absolute;
	opacity: 90%;
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

function Form(props) {
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

	const layout = useMemo(() => {
		let customLayout: SectionDef[] = [];

		if (sections)
			customLayout = JSON.parse(JSON.stringify(sections));

		if (fields) {
			for (const field of fields) {
				if (field.layout) {
					let section = customLayout.length;
					if (field.layout.section !== undefined && field.layout.section >= 0) {
						section = field.layout.section;
					}

					let row = customLayout[section]?.fields?.length;
					if (field.layout.row !== undefined && field.layout.row >= 0) {
						row = field.layout.row;
					}

					let col = customLayout[section]?.fields[row]?.length;
					if (field.layout.col !== undefined && field.layout.col >= 0) {
						col = field.layout.col;
					}

					if (customLayout[section]) {
						customLayout[section].fields[row][col].push(field.name);
					} else {
						customLayout = [
							...customLayout,
							{
								fields: [[[field.name]]],
							},
						];
					}
				} else if (!sections) {
					customLayout = [
						...customLayout,
						{
							fields: [[[field.name]]],
						},
					];
				}
			}

			return customLayout;
		}
	}, [sections, fields]);

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
								{cancelButtonAttrs?.label ? cancelButtonAttrs?.label : 'Cancel'}
							</Button>
						}
						{onSubmit &&
							<Button
								onClick={(e) => submit(e)}
								{...submitButtonAttrs}
							>
								{submitButtonAttrs?.label ? submitButtonAttrs?.label : 'Submit'}
							</Button>
						}
					</div>
				</StyledTopComponent>
				{layout?.map((section, i) => (
					<Section
						key={i}
						title={section.title}
						description={section.description}
						fieldsDef={fields}
						fieldsLayoutPos={section.fields}
						state={state}
						dispatch={dispatch}
					/>
				))}
			</StyledForm>
		</>
	);
}

export default memo(Form);
