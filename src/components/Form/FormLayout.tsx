import { FieldDef } from "@root/components/Field";
import * as React from "react";
import { useMemo, memo } from "react";
import { SectionDef } from "./FormTypes";
import { generateLayout } from "./formUtils";
import styled from "styled-components";

// Components
import Section from "./Section";

// Types
import { ViewType } from "@root/forms/TopComponent";

interface FormLayoutProps {
  state: any;
  dispatch: any;
  fields: FieldDef[];
  sections: SectionDef[];
  view: ViewType;
  registerRef?: (ref: HTMLElement) => () => void
}

const StyledFormLayout = styled.div`
	margin: 0px;
	max-width: 1160px;
`;

const FormLayout = (props: FormLayoutProps) => {
	const { state, dispatch, fields, sections, view, registerRef } = props;

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	return (
		<StyledFormLayout data-testid="form-layout-test-id" className='layout'>
			{layout?.map((section, i) => (
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
					view={view}
					collapsed={section.collapsed}
				/>
			))}
		</StyledFormLayout>
	);
};

FormLayout.displayName = "FormLayout";

export default memo(FormLayout);
