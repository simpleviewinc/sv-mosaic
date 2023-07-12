import * as React from "react";
import {
	ReactElement,
	useMemo,
	Fragment
} from "react";
import { ContentProps } from "./ContentTypes";

// Components
import {
	MainWrapper,
	TitleWrapper,
	Title,
	Label,
	FieldContainer,
	TransformContainer,
	ContentRow,
} from "./Content.styled";
import evaluateShow from "@root/utils/show/evaluateShow";
import Blank from "@root/components/Blank";
import ButtonRow from "../ButtonRow/ButtonRow";

const Content = (props: ContentProps): ReactElement => {
	const { fields, data, sections, title, buttons = [], variant } = props;

	const cardVariant = variant === "card" ? true : false;

	/**
	 * Checks if the field exists, can be shown and executes its transform function
	 * if any otherwise it will render the data.
	 * @param field the name of the field specified in the sections array
	 * @param rowIndex this index is by the error that is thrown to point where
	 * an invalid field was defined within the sections layout
	 * @param sectionLength the name of the field specified in the sections array
	 * @returns the JSX element created by the transform function.
	 */
	const renderRow = (field: string, rowIdx: number, sectionLength: number) => {
		const currentField = fields?.find((fieldDef) => {
			if (fieldDef?.column) {
				return field === fieldDef.column;
			}

			return field === fieldDef.name;
		});

		if (!field) {
			return (
				<FieldContainer key={`value-${rowIdx}`} columns={sectionLength} />
			)
		}

		if (!currentField && field) {
			throw new Error(
				`No field declared for field name '${field}' in the ${rowIdx + 1} row.`
			);
		}

		if (!evaluateShow(currentField?.show)) {
			return;
		}

		const fieldName = currentField?.column ? currentField?.column : currentField?.name;
		let fieldValue = data[fieldName];

		if (fieldValue === undefined || fieldValue === "") {
			return (
				<FieldContainer key={`value-${currentField.name}`} columns={sectionLength}>
					{renderField(currentField.label, <Blank />)}
				</FieldContainer>
			)
		}

		if (currentField && !currentField?.transforms) {
			return (
				<FieldContainer key={`value-${currentField.name}`} columns={sectionLength}>
					{renderField(currentField.label, data[fieldName])}
				</FieldContainer>
			)
		}

		currentField?.transforms.forEach(transform => {
			fieldValue = transform({ data: fieldValue });
		})

		return (
			<FieldContainer key={`transformed-${currentField.name}`} columns={sectionLength}>
				{renderField(currentField?.label, fieldValue)}
			</FieldContainer>
		)
	};

	/**
	 * Renders the content created either by the transform funcion or the
	 * raw data in case the transform function is not defined for the current field.
	 * @param content JSX Element | raw data
	 * @param label Text positioned above each field
	 * @returns JSX Element corresponding to the current field.
	 */
	const renderField = (label: React.ReactNode, content?: unknown) => {
		return (
			<>
				<Label>{label}</Label>
				<TransformContainer>
					{content}
				</TransformContainer>
			</>
		)
	};

	/**
	 * Generates the sections that will be iterated to render the fields
	 * as they're positioned. If no sections are provided it will return
	 * a one-single column section using the field's name or colum if defined.
	 * @returns the sections that contains the names of the fields
	 */
	const sectionsToRender = useMemo(() => {
		const newSections = []

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
			<div className={cardVariant ? "card-content" : ""}>
				{data && sectionsToRender.map((section, idx) => (
					<ContentRow key={`${idx}-row`} className={cardVariant ? "card-row" : ""}>
						{section.map((field, idx) => (
							<Fragment key={`${field[0]}-${idx}`}>
								{renderRow(field[0], idx, section?.length)}
							</Fragment>
						))}
					</ContentRow>
				))}
			</div>
		</MainWrapper>
	);
};

export default Content;
