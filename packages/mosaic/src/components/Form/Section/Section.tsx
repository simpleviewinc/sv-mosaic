import React, { memo, useRef, useCallback, useState, useEffect, useMemo, useContext } from "react";

import type { SectionPropTypes } from "./SectionTypes";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormContext } from "../FormContext";
import { CardContent, CardWrapper } from "@root/components/Card/Card.styled";
import { Text } from "@root/components/Typography";
import Collapse from "@mui/material/Collapse";
import { SectionContent } from "./SectionContent";
import { SectionHeading, SectionHeadingButton } from "./SectionStyled";

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
		id,
		formId,
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
	const ref = useRef<HTMLDivElement>(undefined);
	const titleRef = useRef<HTMLButtonElement>(undefined);
	const expanded = state === "expanded" || state === "expanding";
	const expand = useCallback(() => {
		setState((state) => state === "collapsed" || state === "collapsing" ? "expanding" : state);
	}, []);
	/**
	 * `id` is caller-supplied (via `SectionDef.id`), so it isn't guaranteed to
	 * be unique across separate Form instances on the same page. Scoping with
	 * `formId` (the owning Form's `useId()`) keeps these DOM ids — and the
	 * `aria-controls` wired to them — unique document-wide.
	 */
	const sectionInstanceId = formId ? `${formId}-${id}` : id;
	const panelId = `section-panel-${sectionInstanceId}`;
	const headingId = `section-heading-${sectionInstanceId}`;

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
		const unregister = registerRef({
			id,
			index: sectionIdx,
			elem: ref.current,
			headingElem: titleRef.current,
			onNavigate: expand,
		});
		return unregister;
	}, [expand, id, sectionIdx, registerRef]);

	return (
		<CardWrapper
			data-testid="section-test-id"
			$collapsed={state === "collapsed" || state === "collapsing"}
			ref={ref}
			id={`section-${sectionInstanceId}`}
		>
			{title && (
				<SectionHeading $blunt={state !== "collapsed"} id={headingId}>
					<SectionHeadingButton
						ref={titleRef}
						type="button"
						aria-controls={panelId}
						aria-expanded={expanded}
						onClick={() => setState((state) => state === "expanded" || state === "expanding" ? "collapsing" : "expanding")}
					>
						<Text maxLines={1} size="xl" line="xtight" weight="medium">{title}</Text>
						{expanded ? <ExpandLessIcon aria-hidden="true" /> : <ExpandMoreIcon aria-hidden="true" />}
					</SectionHeadingButton>
				</SectionHeading>
			)}
			<Collapse
				in={expanded}
				onTransitionEnd={() => setState((state) => state === "expanding" || state === "expanded" ? "expanded" : "collapsed")}
			>
				<CardContent id={panelId}>
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

export default memo(Section);
