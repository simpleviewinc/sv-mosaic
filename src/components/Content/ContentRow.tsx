import React, { ReactNode, useMemo } from "react";
import { ContentFieldProps } from "./ContentTypes";

import {
	FieldContainer, FieldDefinition, FieldTerm,
} from "./Content.styled";
import Blank from "@root/components/Blank";
import testIds from "@root/utils/testIds";

/**
 * Checks if the field exists, can be shown and executes its transform function
 * if any otherwise it will render the data.
 */
const ContentField = ({ label, transforms, value: rawValue }: ContentFieldProps) => {
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
		<FieldContainer data-testid={testIds.CONTENT_FIELD}>
			<FieldTerm>{label}</FieldTerm>
			<FieldDefinition>
				{value as ReactNode}
			</FieldDefinition>
		</FieldContainer>
	);
};

export default ContentField;
