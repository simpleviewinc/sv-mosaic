import type { ReactElement } from "react";

import React, { useMemo } from "react";

import type { ContentRow, ContentFieldDef, ContentProps } from "./ContentTypes";

import {
	StyledContentRow,
	ContentFields,
	FieldContainer,
} from "./Content.styled";
import ContentField from "./ContentField";
import { getToggle } from "@root/utils";
import testIds from "@root/utils/testIds";
import { CardContent, CardWrapper } from "../Card/Card.styled";
import { CardHeading } from "../Card/CardHeading";

const Content = (props: ContentProps): ReactElement => {
	const { fields, data, sections: providedSections, title, buttons = [], columns } = props;

	const rows = useMemo<ContentRow<ContentFieldDef>[]>(() => {
		const result: ContentRow<ContentFieldDef>[] = [];
		const rows: ContentProps["sections"] = providedSections ?
			providedSections :
			fields.map(({ name, column }) => [column || name]);

		for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
			const rowDef = rows[rowIdx];
			const { fields: rowFieldNames, breakpoints }: ContentRow = Array.isArray(rowDef) ? {
				fields: rowDef,
				breakpoints: typeof columns === "object" ?
					columns :
					{ [typeof columns === "string" ? columns : "md"]: rowDef.length },
			} : rowDef;
			const rowFields: ContentFieldDef[] = [];

			for (let fieldIdx = 0; fieldIdx < rowFieldNames.length; fieldIdx++) {
				const fieldName = rowFieldNames[fieldIdx];
				const field = fields.find(({ name, column }) => (column || name) === fieldName);

				if (fieldName && !field) {
					throw new Error(`No field declared for field name '${fieldName}'. (row ${rowIdx}, field ${fieldIdx})`);
				}

				if (field && !getToggle(field.show, true)) {
					continue;
				}

				rowFields.push(field);
			}

			if (rowFields) {
				result.push({
					fields: rowFields,
					breakpoints,
				});
			}
		}

		return result;
	}, [fields, providedSections]);

	if (!data) {
		return null;
	}

	return (
		<CardWrapper data-testid={testIds.CONTENT}>
			<CardHeading buttons={buttons}>
				{title}
			</CardHeading>
			<CardContent>
				<ContentFields data-testid={testIds.CONTENT_FIELD_LIST}>
					{rows.map(({ fields, breakpoints }, idx) => (
						<StyledContentRow
							key={`${idx}-row`}
							$breakpoints={breakpoints}
							data-testid={testIds.CONTENT_ROW}
						>
							{fields.map((field, colIdx) => field ? (
								<ContentField
									{...field}
									key={field.name}
									value={data[field.column || field.name]}
								/>
							) : (
								<FieldContainer key={colIdx} data-testid={testIds.CONTENT_FIELD} />
							))}
						</StyledContentRow>
					))}
				</ContentFields>
			</CardContent>
		</CardWrapper>
	);
};

export default Content;
