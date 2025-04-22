import React, { memo, useRef, useCallback, useState, useEffect, useMemo, useContext } from "react";

// Components
import Row from "../Row/Row";

// Types
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { SectionPropTypes } from "./SectionTypes";
import {
	StyledAccordion,
	StyledDescription,
	StyledRows,
	StyledSectionContent,
	StyledSectionHeader,
	StyledTitle,
} from "./SectionStyled";
import { FormContext } from "../FormContext";

const Section = (props: SectionPropTypes) => {
	const {
		title,
		description,
		fieldsDef,
		rows,
		sectionIdx,
		collapsed = false,
		registerRef,
		gridMinWidth,
		spacing,
		methods,
		skeleton,
	} = props;

	const { state } = useContext(FormContext);

	const fieldsHaveErrors = useCallback(() => {
		const fieldNames = rows
			.flat(2)
			.map(column => typeof column === "string" ? column : column.names)
			.flat();

		if (fieldNames.some(name => state.errors[name])) {
			return true;
		}

		return false;
	}, [rows, state.errors]);

	const defaultExpanded = useMemo(() => {
		if (fieldsHaveErrors()) {
			return true;
		}

		return !collapsed;
	}, [collapsed, fieldsHaveErrors]);

	const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		if (!fieldsHaveErrors()) {
			return;
		}

		setExpanded(true);
	}, [fieldsHaveErrors]);

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
								fieldsDef={fieldsDef}
								gridMinWidth={gridMinWidth}
								spacing={spacing}
								methods={methods}
								skeleton={skeleton}
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
