
import * as React from "react";
import { ContentRowProps } from "./ContentTypes";

import {
	FieldContainer,
} from "./Content.styled";
import Blank from "@root/components/Blank";
import ContentField from "./ContentField";
import testIds from "@root/utils/testIds";
import { useToggle } from "@root/utils/toggle";

/**
 * Checks if the field exists, can be shown and executes its transform function
 * if any otherwise it will render the data.
 */
const ContentRow = ({ fields, field, rowIndex, data }: ContentRowProps) => {
	const currentField = fields?.find((fieldDef) => {
		if (fieldDef?.column) {
			return field === fieldDef.column;
		}

		return field === fieldDef.name;
	});

	if (!field) {
		return (
			<FieldContainer data-testid={testIds.CONTENT_FIELD} />
		)
	}

	if (!currentField && field) {
		throw new Error(
			`No field declared for field name '${field}' in the ${rowIndex + 1} row.`
		);
	}

	const shouldShow = useToggle(currentField, "show");

	if (!shouldShow) {
		return (
			<FieldContainer data-testid={testIds.CONTENT_FIELD} />
		)
	}

	const fieldName = currentField?.column ? currentField?.column : currentField?.name;
	let fieldValue = data[fieldName];

	if (fieldValue === undefined || fieldValue === "" || (Array.isArray(fieldValue) && !fieldValue.length)) {
		return (
			<FieldContainer data-testid={testIds.CONTENT_FIELD}>
				<ContentField label={currentField.label} content={<Blank />} />
			</FieldContainer>
		)
	}

	if (currentField && !currentField?.transforms) {
		return (
			<FieldContainer key={`value-${currentField.name}`} data-testid={testIds.CONTENT_FIELD}>
				<ContentField label={currentField.label} content={data[fieldName]} />
			</FieldContainer>
		)
	}

	currentField?.transforms.forEach(transform => {
		fieldValue = transform({ data: fieldValue });
	})

	return (
		<FieldContainer key={`transformed-${currentField.name}`} data-testid={testIds.CONTENT_FIELD}>
			<ContentField label={currentField.label} content={fieldValue} />
		</FieldContainer>
	)
}

export default ContentRow;
