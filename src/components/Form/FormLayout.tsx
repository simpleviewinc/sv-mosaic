import { FieldDef } from "@root/components/Field";
import * as React from "react";
import { useMemo, memo, forwardRef, RefObject } from "react";
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
}

const StyledFormLayout = styled.div`
	margin: 0px;
	max-width: 1160px;
`;

const FormLayout = forwardRef((props: FormLayoutProps, ref) => {
	const { state, dispatch, fields, sections, view } = props;
	const sectionRef = ref as RefObject<HTMLDivElement>;

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	return (
		<StyledFormLayout data-testid="form-layout-test-id" className='layout'>
			{layout?.map((section, i) => (
				<Section
					ref={el => sectionRef.current[i] = el}
					key={`section-${i}`}
					title={section.title}
					sectionIdx={i}
					description={section.description}
					fieldsDef={fields}
					rows={section.fields}
					state={state}
					dispatch={dispatch}
					view={view}
				/>
			))}
		</StyledFormLayout>
	);
});

FormLayout.displayName = "FormLayout";

export default memo(FormLayout);
