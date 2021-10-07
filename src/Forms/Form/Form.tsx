import * as React from 'react';
import {
	useMemo,
	lazy,
	memo
} from 'react';
import { FieldDef, SectionDef } from './FormTypes';
import './Form.css';
import Section from './Section';
import Col from './Col';
import Row from './Row';


function Form(props) {
	//   const [layout, setLayout] = useState(props.sections);

	let layout = useMemo(() => {
		let customLayout: SectionDef[] = [];

		if (props.sections)
			customLayout = JSON.parse(JSON.stringify(props.sections));

		if (props.fields) {
			for (let field of props.fields) {
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
				} else if (!props.sections) {
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
	}, [props.sections, props.fields]);

	return (
		<form className='form'>
			{layout?.map((section, i) => (
				<Section
					key={i}
					title={section.title}
					description={section.description}
					fields={section.fields}
					{...props}
				>
		
					{/* <div key={i}>
						{section && (
							<div
								key={section.title}
								id={section.title?.replace(/\s+/g, '')}
								className='section'
							>
								{section.title && <h1>{section.title}</h1>}
								{section.description && <p>{section.description}</p>}
								{section.fields && (
									<div className='rows'>{renderFields(section.fields)}</div>
								)}
							</div>
						)}
					</div> */}
				</Section>
			))}
		</form>
	);
}

export default memo(Form);
