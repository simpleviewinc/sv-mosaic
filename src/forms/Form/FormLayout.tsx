import { FieldDef } from "@root/components/Field";
import * as React from "react";
import { useMemo, memo, forwardRef, RefObject } from "react";
import { SectionDef } from "./FormTypes";
import { generateLayout } from "./formUtils";

// Components
import Section from "./Section";

interface FormLayoutProps {
  state: any;
  dispatch: any;
  fields: FieldDef[];
  sections: SectionDef[];
}

const FormLayout = forwardRef((props: FormLayoutProps, ref) => {
	const { state, dispatch, fields, sections } = props;
	const sectionRef = ref as RefObject<HTMLDivElement>;

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	return (
		<>
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
				/>
			))}
		</>
	);
});

FormLayout.displayName = "FormLayout";

export default memo(FormLayout);
