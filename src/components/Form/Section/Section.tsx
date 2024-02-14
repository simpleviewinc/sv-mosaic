import * as React from "react";
import { memo, useRef, useState, useEffect, useMemo } from "react";

// Components
import Row from "../Row";

// Types
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SectionPropTypes } from "./SectionTypes";
import {
	StyledAccordion,
	StyledDescription,
	StyledRows,
	StyledSectionContent,
	StyledSectionHeader,
	StyledTitle,
} from "./SectionStyled";

const Section = (props: SectionPropTypes) => {
	const {
		title,
		description,
		fieldsDef,
		rows,
		dispatch,
		sectionIdx,
		state,
		collapsed = false,
		registerRef,
		gridMinWidth,
		spacing,
	} = props;

	const defaultExpanded = useMemo(() => {
		const fieldNames = rows.flat(2);

		if (fieldNames.some(name => state.errors[name])){
			return true;
		}

		return !collapsed;
	}, [collapsed, rows, state.errors]);

	const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		setExpanded(!collapsed);
	}, [collapsed]);

	const onExpandChange = (_e, newExpandVal) => {
		setExpanded(newExpandVal);
	};

	useEffect(() => {
		const unregister = registerRef(ref.current);
		return unregister;
	}, [ref.current]);

	return (
		<StyledAccordion
			data-testid="section-test-id"
			defaultExpanded={defaultExpanded}
			expanded={expanded}
			onChange={onExpandChange}
			square={true}
			$title={title}
			ref={ref}
		>
			{title && (
				<StyledSectionHeader
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
				>
					<StyledTitle className="section-title">{title}</StyledTitle>
				</StyledSectionHeader>
			)}
			<StyledSectionContent>
				{description && <StyledDescription>{description}</StyledDescription>}
				{rows && (
					<StyledRows $title={title}>
						{rows.map((row, i) => (
							<Row
								key={`row-${i}`}
								row={row}
								rowIdx={i}
								sectionIdx={sectionIdx}
								state={state}
								fieldsDef={fieldsDef}
								dispatch={dispatch}
								gridMinWidth={gridMinWidth}
								spacing={spacing}
							/>
						))}
					</StyledRows>
				)}
			</StyledSectionContent>
		</StyledAccordion>
	);
};

Section.displayName = "Section";

export default memo(Section);
