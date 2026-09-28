import React, { memo, useRef, useCallback, useState, useEffect, useMemo, useContext, useId } from "react";

import type { SectionPropTypes } from "./SectionTypes";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FormContext } from "../FormContext";
import { CardContent, CardWrapper } from "@root/components/Card/Card.styled";
import { CardHeading } from "@root/components/Card/CardHeading";
import Button from "@root/components/Button";
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
		id,
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
	const panelId = useId();
	const expanded = state === "expanded" || state === "expanding";

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
		});
		return unregister;
	}, [id, sectionIdx, registerRef]);

	return (
		<CardWrapper
			data-testid="section-test-id"
			$collapsed={state === "collapsed" || state === "collapsing"}
			ref={ref}
			id={`section-${id}`}
		>
			{title && (
				<CardHeading
					blunt={state !== "collapsed"}
					endSlot={(
						<Button
							intent="secondary"
							variant="text"
							mIcon={expanded ? ExpandLessIcon : ExpandMoreIcon}
							tooltip={`${expanded ? "Collapse" : "Expand"} ${title}`}
							onClick={() => setState((state) => state === "expanded" || state === "expanding" ? "collapsing" : "expanding")}
							muiAttrs={{
								"aria-controls": panelId,
								"aria-expanded": expanded,
							}}
						/>
					)}
				>
					{title}
				</CardHeading>
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
