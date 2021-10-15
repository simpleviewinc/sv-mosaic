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

function Form(props) {
	const { sections, fields, dispatch, state, formMetadata, onSubmit } = props;

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


	const validateForm = async ({ fields }) => {
		await dispatch(
			actions.validateForm({ fields })
		);
	};

	const submit = (e) => {
		e.preventDefault();

		validateForm({ fields });
	}

	return (
		<>
			<StyledDisabledForm disabled={state.disabled} />
			<StyledForm>
				{onSubmit && <Button onClick={(e) => submit(e)}>Submit</Button>}
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
