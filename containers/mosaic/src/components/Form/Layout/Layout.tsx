import * as React from "react";
import { memo } from "react";

// Components
import Section from "../Section/Section";

// Types
import type { LayoutProps } from "./LayoutTypes";
import { StyledLayout } from "./LayoutStyles";
import { SectionContent } from "../Section/SectionContent";

const Layout = (props: LayoutProps): React.ReactElement => {
	const {
		fields,
		sections,
		registerRef,
		spacing,
		methods,
		skeleton,
	} = props;

	if (sections.length < 2) {
		const [{
			description,
			fields: rows,
			gridMinWidth,
		}] = sections;

		return (
			<SectionContent
				description={description}
				rows={rows}
				fieldsDef={fields}
				methods={methods}
				sectionIdx={0}
				gridMinWidth={gridMinWidth}
				skeleton={skeleton}
			/>
		);
	}

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
					collapsed={section.collapsed}
					gridMinWidth={section.gridMinWidth}
					spacing={spacing}
					methods={methods}
					skeleton={skeleton}
				/>
			))}
		</StyledLayout>
	);
};

export default memo(Layout);
