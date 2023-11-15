import * as React from "react";
import { useMemo, memo } from "react";

// Components
import Section from "../Section";

// Types
import evaluateShow from "@root/utils/show/evaluateShow";
import { LayoutProps } from "./LayoutTypes";
import { StyledLayout } from "./LayoutStyles";
import { generateLayout } from "./layoutUtils";

const Layout = (props: LayoutProps): React.ReactElement => {
	const { state, dispatch, fields, sections, registerRef, spacing } = props;

	const layout = useMemo(() => {
		return generateLayout({ sections, fields });
	}, [sections, fields]);

	return (
		<StyledLayout data-testid="form-layout-test-id" className='layout'>
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
						gridMinWidth={section.gridMinWidth}
						spacing={spacing}
					/>
				)
			))}
		</StyledLayout>
	);
};

export default memo(Layout);
