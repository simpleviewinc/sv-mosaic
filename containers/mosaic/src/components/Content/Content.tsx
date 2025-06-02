import type { ReactElement } from "react";

import React, { useMemo } from "react";

import type { ContentFieldDef, ContentProps } from "./ContentTypes";
import type { MosaicGridConfig } from "@root/types";

import {
	MainWrapper,
	TitleWrapper,
	ContentRowWrapper,
	FieldsList,
	FieldContainer,
} from "./Content.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import ContentField from "./ContentField";
import { Text } from "../Typography";
import { getToggle } from "@root/utils";
import testIds from "@root/utils/testIds";

const Content = (props: ContentProps): ReactElement => {
	const { fields, data, sections: providedSections, title, buttons = [], variant } = props;

	const cardVariant = variant === "card" ? true : false;

	const rows = useMemo<MosaicGridConfig<ContentFieldDef>[number]>(() => {
		const sections: MosaicGridConfig[number] = providedSections ?
			providedSections :
			fields.map(({ name, column }) => [column || name]);

		return sections.map((rows, sectionIdx) => rows.map((fieldName, rowIdx) => {
			const field = fields.find(({ name, column }) => (column || name) === fieldName);

			if (fieldName && !field) {
				throw new Error(`No field declared for field name '${fieldName}'. (section ${sectionIdx}, row ${rowIdx})`);
			}

			if (field && !getToggle(field.show, true)) {
				return;
			}

			return field;
		})).filter(rows => rows.flat().length);
	}, [fields, providedSections]);

	if (!data) {
		return null;
	}

	return (
		<MainWrapper
			className={cardVariant ? "card-wrapper" : "content-wrapper"}
			data-testid={testIds.CONTENT}
		>
			<TitleWrapper className={cardVariant ? "title-bar" : ""}>
				<Text maxLines={1} tag="h3">{title}</Text>
				{buttons.length > 0 && (
					<ButtonRow
						buttons={buttons}
						separator={!cardVariant}
					/>
				)}
			</TitleWrapper>
			<FieldsList className={cardVariant ? "card-content" : ""}>
				{rows.map((columns, idx) => (
					<ContentRowWrapper
						key={`${idx}-row`}
						className={cardVariant ? "card-row" : ""}
						$columns={columns.length}
						data-testid={testIds.CONTENT_ROW}
					>
						{columns.map((field, colIdx) => field ? (
							<ContentField
								{...field}
								key={field.name}
								value={data[field.column || field.name]}
							/>
						) : (
							<FieldContainer key={colIdx} data-testid={testIds.CONTENT_FIELD} />
						))}
					</ContentRowWrapper>
				))}
			</FieldsList>
		</MainWrapper>
	);
};

export default Content;
