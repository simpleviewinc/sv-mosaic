import * as React from "react";
import {
	ReactElement,
	useMemo,
} from "react";
import { ContentProps } from "./ContentTypes";

// Components
import {
	MainWrapper,
	TitleWrapper,
	ContentRowWrapper,
	FieldsList,
} from "./Content.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import ContentRow from "./ContentRow";
import { MosaicGridConfig } from "@root/types";
import { SubtitleText } from "../Typography";

const Content = (props: ContentProps): ReactElement => {
	const { fields, data, sections, title, buttons = [], variant } = props;

	const cardVariant = variant === "card" ? true : false;

	/**
	 * Generates the sections that will be iterated to render the fields
	 * as they're positioned. If no sections are provided it will return
	 * a one-single column section using the field's name or colum if defined.
	 * @returns the sections that contains the names of the fields
	 */
	const sectionsToRender = useMemo(() => {
		const newSections: MosaicGridConfig = []

		if (!sections) {
			fields.forEach(field => {
				const fieldName = field?.column ? field.column : field.name;
				newSections.push([[ fieldName ]])
			});

			return newSections;
		}

		return sections;
	}, [sections]);

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
				{data && sectionsToRender.map((section, idx) => (
					<ContentRowWrapper
						key={`${idx}-row`}
						className={cardVariant ? "card-row" : ""}
						$columns={section.length}
					>
						{section.map((field, idx) => (
							<ContentRow
								key={`${field[0]}-${idx}`}
								fields={fields}
								field={field[0]}
								rowIndex={idx}
								data={data}
							/>
						))}
					</ContentRowWrapper>
				))}
			</FieldsList>
		</MainWrapper>
	);
};

export default Content;
