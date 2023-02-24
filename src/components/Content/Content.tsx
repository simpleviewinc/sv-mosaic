import * as React from "react";
import {
	ReactElement,
	useMemo,
	Fragment
} from "react";
import { ContentProps } from "./ContentTypes";
import { isArray } from "lodash";

// Components
import {
	MainWrapper,
	TitleWrapper,
	Title,
	ButtonsWrapper,
	Label,
	FieldContainer,
	TransformContainer,
	ContentRow,
} from "./Content.styled";
import Button from "@root/components/Button";
import { ActionAdditional } from "../DataView";

/**
 * @param show is used to evaluate whether a field should be displayed
 * @returns boolean flag comming from the  validation of the show paramater.
 */
const showContent = (show: ActionAdditional["show"]) => {
	const conditions = isArray(show) ? show : [show];

	const isValid = conditions.every((show) => {
		if (typeof show === "boolean") {
			return show;
		}

		return show();
	});

	return isValid;
};

const Content = (props: ContentProps): ReactElement => {
	const { fields, data, sections, title, buttons } = props;

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

		if (!currentField && field) {
			throw new Error(
				`No field declared for field name '${field}' in the ${rowIdx + 1} row.`
			);
		}

		if (currentField?.show && !showContent(currentField?.show)) {
			return;
		}

		const fieldName = currentField?.column ? currentField?.column : currentField?.name;

		if (currentField && !currentField?.transforms) {
			return (
				<FieldContainer key={`value-${currentField.name}`} columns={sectionLength}>
					{renderField(data[fieldName], currentField.label)}
				</FieldContainer>
			)
		}

		let fieldValue = data[fieldName];

		currentField?.transforms.forEach(transform => {
			fieldValue = transform({ data: fieldValue });
		})

		return (
			<FieldContainer key={`transformed-${currentField.name}`} columns={sectionLength}>
				{renderField(fieldValue, currentField?.label)}
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
	const renderField = (content: unknown, label: React.ReactNode) => {
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

	return (
		<MainWrapper className="content-wrapper">
			<TitleWrapper>
				<Title>{title}</Title>
				{buttons &&
					<ButtonsWrapper>
						{buttons?.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</ButtonsWrapper>}
			</TitleWrapper>
			<div>
				{data && sectionsToRender.map((section, idx) => (
					<ContentRow key={`${idx}-row`}>
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
