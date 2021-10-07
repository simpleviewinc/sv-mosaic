import * as React from 'react';
import {
	useMemo,
	memo
} from 'react';
import styled from 'styled-components';
import { SectionDef } from './FormTypes';
// import './Form.css';
import Section from './Section';


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
`;

function Form(props) {
	const { sections, fields, dispatch, state } = props;

	let layout = useMemo(() => {
		let customLayout: SectionDef[] = [];

		if (sections)
			customLayout = JSON.parse(JSON.stringify(sections));

		if (fields) {
			for (let field of fields) {
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

	return (
		<StyledForm>
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
