import * as React from "react";
import { memo } from "react";

// Components
import Section from "../Section";

// Types
import { LayoutProps } from "./LayoutTypes";
import { StyledLayout } from "./LayoutStyles";

const Layout = (props: LayoutProps): React.ReactElement => {
	const { state, dispatch, fields, sections, registerRef, spacing } = props;

	return (
		<StyledLayout data-testid="form-layout-test-id" className="layout">
			{sections.map((section, i) => (
				<Section
					registerRef={registerRef}
					key={i}
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
			))}
		</StyledLayout>
	);
};

export default memo(Layout);
