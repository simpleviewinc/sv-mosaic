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


	const validateSubmitted = useMemo(() => {
		return fields.reduce((prev, curr) => {
			prev[curr.name] = async function () {
				await dispatch(
					actions.validateField({ name: curr.name })
				);
			};

			return prev;
		}, {});
	}, [fields]);

	const submit = (e) => {
		e.preventDefault();

		fields.map(field => {
			// !!state.data[field.name] === false && await dispatch(
			// 	actions.validateField({name: field.name})
			// );

			// return fields.reduce((prev, curr) => {
			// 	prev[curr.name] = async () => {
			// 		!!state.data[field.name] === false  && await dispatch(
			// 			actions.validateField({name: field.name})
			// 		);
			// 	}

			// 	return prev;
			// });
			if (state.data[field.name] === undefined) {
				let validateField;
				validateField = validateSubmitted[field.name];
				validateField();
			}
		});

		Object.keys(state.errors).length === 0 ?
			onSubmit ? onSubmit(state.data) : null
			:
			alert('Please verify all fields are filled correctly');
	}

	return (
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
	);
}

export default memo(Form);
