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
	Title,
	ContentRowWrapper,
	FieldsList,
} from "./Content.styled";
import evaluateShow from "@root/utils/show/evaluateShow";
import ButtonRow from "../ButtonRow/ButtonRow";
import ContentRow from "./ContentRow";
import { MosaicGridConfig } from "@root/types";

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

	/**
	 * Filters the buttons based on their show prop. If a button
	 * does a show value defined it will be rendered.
	 */
	const buttonToRender = buttons?.filter((button) => evaluateShow(button.show));

	return (
		<MainWrapper className={cardVariant ? "card-wrapper" : "content-wrapper"}>
			<TitleWrapper className={cardVariant ? "title-bar" : ""}>
				<Title>{title}</Title>
				{buttonToRender.length > 0 && (
					<ButtonRow
						buttons={buttonToRender}
						separator={!cardVariant}
					/>
				)}
			</TitleWrapper>
			<FieldsList className={cardVariant ? "card-content" : ""}>
				{data && sectionsToRender.map((section, idx) => (
					<ContentRowWrapper key={`${idx}-row`} className={cardVariant ? "card-row" : ""}>
						{section.map((field, idx) => (
							<ContentRow
								key={`${field[0]}-${idx}`}
								fields={fields}
								field={field[0]}
								rowIndex={idx}
								sectionLength={section?.length}
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
