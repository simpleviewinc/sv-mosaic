import { FieldDef } from "@root/components/Field";
import * as React from "react";
import { useMemo, memo } from "react";
import { SectionDef } from "./FormTypes";
import { generateLayout } from "./formUtils";
import styled from "styled-components";

// Components
import Section from "./Section";

// Types
import evaluateShow from "@root/utils/show/evaluateShow";

interface FormLayoutProps {
  state: any;
  dispatch: any;
  fields: FieldDef[];
  sections: SectionDef[];
  registerRef?: (ref: HTMLElement) => () => void
}

const StyledFormLayout = styled.div`
	margin: 0px;
	max-width: 1160px;
	display: grid;
	grid-template-columns: repeat(1,minmax(0,1fr));
	gap: 24px 40px;
`;

const FormLayout = (props: FormLayoutProps) => {
	const { state, dispatch, fields, sections, registerRef } = props;

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	return (
		<StyledFormLayout data-testid="form-layout-test-id" className='layout'>
			{layout?.map((section, i) => (
				evaluateShow(section.show, {data: state.data}) && (
					<Section
						registerRef={registerRef}
						key={`section-${i}`}
						title={section.title}
						sectionIdx={i}
						description={section.description}
						fieldsDef={fields}
						rows={section.fields}
						state={state}
						dispatch={dispatch}
						collapsed={section.collapsed}
					/>
				)
			))}
		</StyledFormLayout>
	);
};

FormLayout.displayName = "FormLayout";

export default memo(FormLayout);
