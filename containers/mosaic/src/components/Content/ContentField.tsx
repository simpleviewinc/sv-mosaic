import type { ReactNode } from "react";
import React, { useMemo } from "react";
import type { ContentFieldProps } from "./ContentTypes";

import {
	FieldContainer, FieldDefinition, FieldDefinitionInner, FieldTerm,
} from "./Content.styled";
import Blank from "@root/components/Blank";
import testIds from "@root/utils/testIds";
import { TooltipIcon } from "../common";
import Tooltip, { useTooltip } from "../Tooltip";

/**
 * Checks if the field exists, can be shown and executes its transform function
 * if any otherwise it will render the data.
 */
const ContentField = ({ label, transforms, value: rawValue, tooltip }: ContentFieldProps) => {
	const { anchorProps, tooltipProps } = useTooltip();

	const value = useMemo(() => {
		if (rawValue === undefined || rawValue === "" || (Array.isArray(rawValue) && !rawValue.length)) {
			return <Blank />;
		}

		if (!transforms) {
			return rawValue;
		}

		return transforms.reduce((acc, transform) => transform({ data: acc }), rawValue);
	}, [transforms, rawValue]);

	return (
		<FieldContainer
			data-testid={testIds.CONTENT_FIELD}
			$margin
		>
			<FieldTerm>
				{label}
				{tooltip && (
					<>
						<TooltipIcon {...anchorProps} />
						<Tooltip {...tooltipProps}>
							{tooltip}
						</Tooltip>
					</>
				)}
			</FieldTerm>
			<FieldDefinition>
				<FieldDefinitionInner>
					{value as ReactNode}
				</FieldDefinitionInner>
			</FieldDefinition>
		</FieldContainer>
	);
};

export default ContentField;
