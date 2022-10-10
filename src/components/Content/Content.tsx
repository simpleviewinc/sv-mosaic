import * as React from "react";
import {
	ReactElement,
	useState,
	useEffect,
	useMemo,
	useRef
} from "react";
import { ContentProps } from "./ContentTypes";
import { isArray, zip } from "lodash";
import { MosaicObject } from "@root/types";

// Components
import {
	ContentColumn,
	ColumnsContainer,
	MainWrapper,
	TitleWrapper,
	Title,
	ButtonsWrapper,
	Label,
	FieldContainer,
	TransformContainer,
} from "./Content.styled";
import Button from "@root/components/Button";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { ActionAdditional } from "../DataView";

export const transpose = (matrix: string[][][]) => {
	return zip(...matrix);
}

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
	const { fieldDef, getValues, sections, title, onEdit } = props;
	const [values, setValues] = useState<MosaicObject>();
	const [showMore, setShowMore] = useState(false);
	const [canShowMore, setCanShowMore] = useState(false);
	const columnsContainerRef = useRef<HTMLDivElement>(null);
	const leftColumnRef = useRef<HTMLDivElement>(null);

	const getFieldsValues = async () => {
		try {
			const fieldValues = await getValues();
			setValues(fieldValues);
		} catch (error) {
			console.error(error);
		}
	};

	/**
	 * Set the values loaded from a DB call.
	 */
	useEffect(() => {
		if (getValues) {
			getFieldsValues();
		}
	}, [getValues]);

	useEffect(() => {
		if (values) {
			setCanShowMore(columnsContainerRef?.current?.scrollHeight > 179);
		}
	}, [values]);

	/**
	 * Transposes the sections so that the rows become columns.
	 * The result is separated into left and right columns by
	 * flattening the arrays to have something like:
	 * leftColumn: ["field1" , "field2"]
	 * rightColumn: ["field3" , "field4"]
	 */
	const [leftColumn, rightColumn] = useMemo(() => {
		let leftColumn = [];
		let rightColumn = [];

		if (!sections) {
			leftColumn = fieldDef.map((field) => field?.column ? field.column : field.name);

			return [leftColumn, rightColumn];
		}

		const sectionsTranspose = transpose(sections);

		if (sectionsTranspose?.length >= 3) {
			throw new Error("The max of columns allowed are two.");
		}

		leftColumn = sectionsTranspose[0]?.flat(1);
		rightColumn = sectionsTranspose[1]?.flat(1);

		return [leftColumn, rightColumn];
	}, [sections, fieldDef]);

	/**
	 * Toggles the state use to show or hide the content.
	 */
	const showDetails = () => {
		setShowMore(!showMore);
	};

	/**
	 * Given a column containing the positioned fields, checks if the
	 * field exists and executes its transform function.
	 * @param column that contains the names of the fields to render
	 * @returns the JSX element created by the transform function.
	 */
	const renderColumn = (fields: string[], column: string) => {
		return fields?.map((field, fieldIdx) => {
			const currentField = fieldDef?.find((fieldDef) => {
				if (fieldDef?.column) {
					return field === fieldDef.column;
				}

				return field === fieldDef.name;
			});

			if (!currentField && field) {
				throw new Error(
					`No field declared for field name '${field}' in the ${column} column.`
				);
			}

			if (currentField?.show && !showContent(currentField?.show)) {
				return;
			}

			const fieldName = currentField?.column ? currentField?.column : currentField?.name;

			if (currentField && !currentField?.transforms) {
				return (
					<FieldContainer key={`value-${currentField.name}`}>
						{renderField(values[fieldName], currentField.label)}
					</FieldContainer>
				)
			}

			const transforms = currentField?.transforms?.map((transform, idx) => (
				<TransformContainer key={`transform-${idx}`}>
					{transform({ data: values[fieldName] })}
				</TransformContainer>
			));

			return (
				<FieldContainer key={`trasnformed-${currentField.name}-${fieldIdx}`}>
					<Label>{currentField?.label}</Label>
					{transforms}
				</FieldContainer>
			)
		});
	};

	const renderField = (content: unknown, label: string) => {
		return (
			<>
				<Label>{label}</Label>
				<TransformContainer>
					{content}
				</TransformContainer>
			</>
		)
	};

	return (
		<MainWrapper>
			<TitleWrapper>
				<Title>{title}</Title>
				<ButtonsWrapper canShowMore={canShowMore && values}>
					{!values
						? onEdit && (
							<Button
								color="teal"
								variant="icon"
								mIcon={AddIcon}
								onClick={onEdit}
							></Button>
						)
						: onEdit && (
							<Button
								color="gray"
								variant="icon"
								mIcon={EditIcon}
								onClick={onEdit}
							></Button>
						)}
					{canShowMore && values && (
						<Button
							color="teal"
							variant="text"
							label={showMore ? "Less Details" : "More Details"}
							onClick={showDetails}
						></Button>
					)}
				</ButtonsWrapper>
			</TitleWrapper>
			{values && (
				<ColumnsContainer className={`${showMore ? "expanded" : "collapsed"}`} ref={columnsContainerRef}>
					<ContentColumn ref={leftColumnRef}>
						{renderColumn(leftColumn, "left")}
					</ContentColumn>
					{rightColumn && rightColumn.length > 0 && (
						<ContentColumn>
							{renderColumn(rightColumn, "right")}
						</ContentColumn>
					)}
				</ColumnsContainer>
			)}
		</MainWrapper>
	);
};

export default Content;
