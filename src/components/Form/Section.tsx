import * as React from "react";
import { memo, useRef, useState, useEffect, useMemo } from "react";
import theme from "@root/theme";
import styled from "styled-components";
import { FieldDef } from "@root/components/Field";

// Components
import Row from "./Row";

// Types
import { ViewType } from "@root/forms/TopComponent";
import { Views } from "@root/theme/theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MosaicGridConfig, MosaicShow } from "@root/types";

const StyledAccordion = styled(Accordion)`
	box-shadow: none !important;
	border-radius: 0px;
	scroll-margin-top: 60px;
	border: ${pr => !pr.hastitle ? "none" : `2px solid ${theme.newColors.grey2["100"]}`} !important;
	margin: ${pr => !pr.hastitle ? "0px" : "0px 0px 40px 0px"} !important;

	&:before {
		content: none !important;
	}
`;

const StyledSectionHeader = styled(AccordionSummary)`
	background-color: ${theme.newColors.grey2["100"]} !important;
	margin: 0px !important;
	padding: 16px 24px !important;
	min-height: 0px !important;

	& :first-child {
		margin: 0px !important;
	}
`;

const StyledSectionContent = styled(AccordionDetails)`
	padding: 0px !important;
	margin: 0px !important;
`;

const StyledDescription = styled.p`
	margin: 24px 24px 0px 24px;
	font-size: 16px;
	font-family: ${theme.fontFamily};
`;

const StyledRows = styled.div`
	margin: 0px;
	padding: ${pr => pr.view === Views.mobile ? "0px 30px" : `${!pr.hastitle ? "" : "16px 24px"}`};
`;

const StyledTitle = styled.h2`
	font-size: 20px;
	font-family: ${theme.fontFamily};
	font-weight: 500;
	margin: 0px;
`;

interface SectionPropTypes {
	title: string;
	sectionIdx: number;
	description: string | JSX.Element;
	fieldsDef: FieldDef[];
	rows: MosaicGridConfig;
	dispatch: any;
	state: any;
	view: ViewType;
	collapsed?: boolean;
	show?: MosaicShow;
	registerRef?: (ref: HTMLElement) => () => void;
}

const Section = (props: SectionPropTypes) => {
	const {
		title,
		description,
		fieldsDef,
		rows,
		dispatch,
		sectionIdx,
		state,
		view,
		collapsed = false,
		registerRef
	} = props;

	const [expanded, setExpanded] = useState<boolean>(!collapsed);
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		setExpanded(!collapsed);
	}, [collapsed]);

	const onExpandChange = (_e, newExpandVal) => {
		setExpanded(newExpandVal);
	}

	const fieldsInSection = useMemo(() => {
		const fieldNames = [];

		for (const row of rows) {
			fieldNames.push(...row);
		}

		return fieldNames;
	}, [rows]);

	useEffect(() => {
		for (let i = 0; i < fieldsInSection.length; i++) {
			if (state.errors?.[fieldsInSection[i]]) {
				setExpanded(true);
				break;
			}
		}
	}, [state.errors, fieldsInSection.length]);

	useEffect(() => {
		const unregister = registerRef(ref.current);
		return unregister;
	}, [ref.current])

	return (
		<StyledAccordion
			id={sectionIdx}
			data-testid="section-test-id"
			expanded={expanded}
			onChange={onExpandChange}
			square={true}
			hastitle={title}
			ref={ref}
		>
			{title &&
				<StyledSectionHeader
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
				>
					<StyledTitle className="section-title" id={sectionIdx}>{title}</StyledTitle>
				</StyledSectionHeader>
			}
			<StyledSectionContent>
				{description && <StyledDescription>{description}</StyledDescription>}
				{rows && (
					<StyledRows view={view} hastitle={title}>
						{rows.map((row, i) => (
							<Row
								key={`row-${i}`}
								row={row}
								rowIdx={i}
								sectionIdx={sectionIdx}
								state={state}
								fieldsDef={fieldsDef}
								dispatch={dispatch}
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
