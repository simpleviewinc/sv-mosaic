import { FieldDef } from '@root/components/Field';
import * as React from 'react';
import { useMemo, memo } from 'react';
import { SectionDef } from './FormTypes';
import { generateLayout } from './formUtils';

// Components
import Section from './Section';

interface FormLayoutProps {
  state: any;
  dispatch: any;
  fields: FieldDef[];
  sections: SectionDef[];
}

const FormLayout = (props: FormLayoutProps) => {
	const { state, dispatch, fields, sections } = props;

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	return (
		<>
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
		</>
	);
};

export default memo(FormLayout);
