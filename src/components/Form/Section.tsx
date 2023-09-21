import * as React from "react";
import { memo, useRef, useState, useEffect, useMemo } from "react";
import theme from "@root/theme";
import styled from "styled-components";
import { FieldDef } from "@root/components/Field";

// Components
import Row from "./Row";

// Types
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MosaicGridConfig, MosaicShow, StyledProps } from "@root/types";
import { containerQuery } from "@root/utils/css";

const StyledAccordion = styled(Accordion)<StyledProps<SectionPropTypes, "title">>`
	box-shadow: none !important;
	border-radius: 0px;
	scroll-margin-top: 60px;
	margin: 0 !important;

	${({ $title }) => $title ? `
		border: 1px solid ${theme.newColors.grey2["100"]};
		margin: 0px 0px 40px 0px;
	` : `
		border: 0;
		margin: 0;
	`}

	&:before {
		content: none !important;
	}
`;

const StyledSectionHeader = styled(AccordionSummary)`
	background-color: ${theme.newColors.grey2["100"]} !important;
	margin: 0px !important;
	padding: 12px 24px !important;
	min-height: 0px !important;
	color: ${theme.newColors.grey4["100"]} !important;

	& :first-child {
		margin: 0px !important;
	}
`;

const StyledSectionContent = styled(AccordionDetails)`
	padding: 0px !important;
	margin: 0px !important;
`;

const StyledDescription = styled.p`
	font-size: 16px;
	font-family: ${theme.fontFamily};
	color: ${theme.newColors.grey3["100"]};
	margin: 18px 0 0;
	padding: 0 20px;

	${containerQuery("lg", "FORM")} {
		margin-top: 32px;
		padding: 0 40px;
	}
`;

const StyledRows = styled.div<StyledProps<SectionPropTypes, "title">>`
	margin: 0px;
	display: grid;
	grid-template-columns: repeat(1,minmax(0,1fr));
	gap: 24px 0;

	${({ $title }) => $title && `
		padding: 18px 20px;

		${containerQuery("lg", "FORM")} {
			padding: 32px 40px;
		}
	`}
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
			data-testid="section-test-id"
			expanded={expanded}
			onChange={onExpandChange}
			square={true}
			$title={title}
			ref={ref}
		>
			{title &&
				<StyledSectionHeader
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
				>
					<StyledTitle className="section-title">{title}</StyledTitle>
				</StyledSectionHeader>
			}
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
