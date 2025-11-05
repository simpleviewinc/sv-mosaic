import React from "react";

// Components
import Row from "../Row/Row";

import { StyledDescription, StyledRows } from "./SectionStyled";
import type { SectionContentProps } from "./SectionTypes";

export function SectionContent({
	description,
	rows,
	sectionIdx,
	fieldsDef,
	gridMinWidth,
	spacing,
	methods,
	skeleton,
}: SectionContentProps) {
	return (
		<>
			{description && <StyledDescription>{description}</StyledDescription>}
			{rows && (
				<StyledRows>
					{rows.map((row, i) => (
						<Row
							key={`row-${i}`}
							row={row}
							rowIdx={i}
							sectionIdx={sectionIdx}
							fieldsDef={fieldsDef}
							gridMinWidth={gridMinWidth}
							spacing={spacing}
							methods={methods}
							skeleton={skeleton}
						/>
					))}
				</StyledRows>
			)}
		</>
	);
}
