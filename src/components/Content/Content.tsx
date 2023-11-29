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
} from "./Content.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import ContentRow from "./ContentRow";
import { MosaicGridConfig } from "@root/types";
import { useShow } from "@root/utils/show";

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

	const shownButtons = useShow(buttons);

	return (
		<MainWrapper className={cardVariant ? "card-wrapper" : "content-wrapper"}>
			<TitleWrapper className={cardVariant ? "title-bar" : ""}>
				<Title>{title}</Title>
				{shownButtons.length > 0 && (
					<ButtonRow
						buttons={shownButtons}
						separator={!cardVariant}
					/>
				)}
			</TitleWrapper>
			<div className={cardVariant ? "card-content" : ""}>
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
			</div>
		</MainWrapper>
	);
};

export default Content;
