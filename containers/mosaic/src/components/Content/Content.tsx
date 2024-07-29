import * as React from "react";
import {
	ReactElement,
	useMemo,
} from "react";
import { ContentFieldDef, ContentProps } from "./ContentTypes";

// Components
import {
	MainWrapper,
	TitleWrapper,
	ContentRowWrapper,
	FieldsList,
	FieldContainer,
} from "./Content.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import ContentField from "./ContentField";
import { MosaicGridConfig } from "@root/types";
import { SubtitleText } from "../Typography";
import { getToggle } from "@root/utils";
import testIds from "@root/utils/testIds";

const Content = (props: ContentProps): ReactElement => {
	const { fields, data, sections: providedSections, title, buttons = [], variant } = props;

	const cardVariant = variant === "card" ? true : false;

	const rows = useMemo<MosaicGridConfig<ContentFieldDef>>(() => {
		const sections: MosaicGridConfig = providedSections || fields.map(({ name, column }) => [[column || name]]);

		return sections.map((rows, sectionIdx) => rows.map((columns, rowIdx) => columns.map(fieldName => {
			const field = fields.find(({ name, column }) => (column || name) === fieldName);

			if (!field) {
				throw new Error(`No field declared for field name '${fieldName}'. (${providedSections ? `section ${sectionIdx}, row ${rowIdx}` : `field ${sectionIdx}`})`);
			}

			if (!getToggle(field.show, true)) {
				return;
			}

			return field;
		}).filter(Boolean))).filter(rows => rows.flat().length);
	}, [fields, providedSections]);

	if (!data) {
		return null;
	}

	return (
		<MainWrapper className={cardVariant ? "card-wrapper" : "content-wrapper"}>
			<TitleWrapper className={cardVariant ? "title-bar" : ""}>
				<SubtitleText maxLines={1}>{title}</SubtitleText>
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
						{columns.map(([field], colIdx) => field ? (
							<ContentField
								{...field}
								key={field.name}
								value={data[field.column || field.name]}
								data-testid={testIds.CONTENT_COL}
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
