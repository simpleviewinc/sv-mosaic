import React, { memo, useRef, useCallback, useState, useEffect, useMemo, useContext } from "react";

import type { SectionPropTypes } from "./SectionTypes";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormContext } from "../FormContext";
import { CardContent, CardWrapper } from "@root/components/Card/Card.styled";
import { CardHeading } from "@root/components/Card/CardHeading";
import Collapse from "@mui/material/Collapse";
import { SectionContent } from "./SectionContent";

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

	const { state: { errors } } = useContext(FormContext);

	const fieldsHaveErrors = useCallback(() => {
		const fieldNames = rows
			.flat(2)
			.map(column => typeof column === "string" ? column : column.names)
			.flat();

		if (fieldNames.some(name => errors[name])) {
			return true;
		}

		return false;
	}, [rows, errors]);

	const defaultExpanded = useMemo(() => {
		if (fieldsHaveErrors()) {
			return true;
		}

		return !collapsed;
	}, [collapsed, fieldsHaveErrors]);

	const [state, setState] = useState<"collapsed" | "collapsing" | "expanded" | "expanding">(defaultExpanded ? "expanded" : "collapsed");
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		if (!fieldsHaveErrors()) {
			return;
		}

		setState((state) => state === "collapsed" || state === "collapsing" ? "expanding" : state);
	}, [fieldsHaveErrors]);

	useEffect(() => {
		setState(collapsed ? "collapsed" : "expanded");
	}, [collapsed]);

	useEffect(() => {
		const unregister = registerRef(ref.current);
		return unregister;
	}, [ref.current]);

	return (
		<CardWrapper
			data-testid="section-test-id"
			$collapsed={state === "collapsed" || state === "collapsing"}
			ref={ref}
		>
			{title && (
				<CardHeading
					// buttons={[{
					// 	intent: "secondary",
					// 	variant: "text",
					// 	mIcon: state === "expanded" || state === "expanding" ? ExpandLessIcon : ExpandMoreIcon,
					// 	onClick: () => setState((state) => state === "expanded" || state === "expanding" ? "collapsing" : "expanding"),
					// 	tooltip: state === "expanded" || state === "expanding" ? "Collapse Section" : "Expand Section",
					// }]}
					blunt={state !== "collapsed"}
					aria-controls="panel1a-content"
					endSlot={state === "expanded" || state === "expanding" ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					onClick={() => setState((state) => state === "expanded" || state === "expanding" ? "collapsing" : "expanding")}
				>
					{title}
				</CardHeading>
			)}
			<Collapse
				in={state === "expanding" || state === "expanded"}
				onTransitionEnd={() => setState((state) => state === "expanding" || state === "expanded" ? "expanded" : "collapsed")}
			>
				<CardContent>
					<SectionContent
						description={description}
						rows={rows}
						fieldsDef={fieldsDef}
						methods={methods}
						sectionIdx={sectionIdx}
						gridMinWidth={gridMinWidth}
						skeleton={skeleton}
						spacing={spacing}
					/>
				</CardContent>
			</Collapse>
		</CardWrapper>
	);
};

Section.displayName = "Section";

export default memo(Section);
