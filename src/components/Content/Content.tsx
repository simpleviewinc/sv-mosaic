import * as React from "react";
import { ReactElement, useState } from "react";
import { ContentProps, ContentType } from "./ContentTypes";

// Components
import Button from "../Button";
import Chip from "../Chip";
import {
	MainWrapper,
	Title,
	TitleWrapper,
	ButtonsWrapper,
	Label,
	Value,
	LabelValueWrapper,
	Paragraph,
	ChipsWrapper,
	LabelWrapper,
	ValueFile,
	ContentRow,
	ContentColumn,
	ParagraphWrapper,
} from "./Content.styled";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const Content = (props: ContentProps): ReactElement => {
	const { title, onClickEdit, content, onClickAdd } = props;
	const [showOrHide, setShowOrHide] = useState(content.length < 3);

	/**
	 * Toggles the state use to show or hide the content.
	 */
	const showOrHideDetails = () => {
		setShowOrHide(!showOrHide);
	};

	const contentForDisplay = showOrHide ? content : content.slice(0, 3);

	/**
	 * Renders the content of type "labelValue"
	 * @param contentItem 
	 * @returns The content with a sctructure of label: value
	 */
	const labelValueContent = (contentItem: ContentType) => (
			<LabelValueWrapper>
				<Label>{contentItem.label}:</Label>
				<Value>{contentItem.value}</Value>
			</LabelValueWrapper>
	);

	/**
	 * Renders the content of type "paragraph"
	 * @param contentItem 
	 * @returns A paragraph with the value of the content
	 */
	const paragraphContent = (contentItem: ContentType) => (
		<ParagraphWrapper>
			<Label>{contentItem.label}:</Label>
			<Paragraph>{contentItem.value}</Paragraph>
		</ParagraphWrapper>
	);

	/**
	 * Renders the content of type "tags"
	 * @param contentItem 
	 * @returns The a lists of tags/chips.
	 */
	const tagsContent = (contentItem: ContentType) => {
		if (!Array.isArray(contentItem.value)) {
			return;
		}

		return (
			<>
				<Label>{contentItem.label}:</Label>
				<ChipsWrapper>
					{contentItem.value.map((value, idx) => (
						<Chip key={`${idx}-${value}`} label={value} />
					))}
				</ChipsWrapper>
			</>
		);
	};

	/**
	 * Renders the content of type "file"
	 * @param contentItem 
	 * @returns The info of the file passed within the label
	 * and value attributes and it renders an icon if any.
	 */
	const fileContent = (contentItem: ContentType) => {
		const FileIcon = contentItem?.icon;

		return (
			<>
				<LabelWrapper>
					{FileIcon && <FileIcon />}
					<Label>{contentItem.label}:</Label>
				</LabelWrapper>
				<ValueFile>{contentItem.value}</ValueFile>
			</>
		);
	};

	return (
		<MainWrapper>
			<TitleWrapper>
				<Title>{title}</Title>
				<ButtonsWrapper>
					{content?.length === 0 ? (
						<Button color="teal" variant="icon" mIcon={AddIcon} onClick={onClickAdd}></Button>
					) : (
						onClickEdit && (
							<Button
								color="gray"
								variant="icon"
								mIcon={EditIcon}
								onClick={onClickEdit}
							></Button>
						)
					)}
					<Button
						color="teal"
						variant="text"
						label={showOrHide ? "Less Details" : "More Details"}
						onClick={showOrHideDetails}
					></Button>
				</ButtonsWrapper>
			</TitleWrapper>
			<div>
				{contentForDisplay.map((items, idx) => {
					return (
						<ContentRow data-testid={"content-row"} key={`${idx}-contentLayout`}>
							{items.map((contentItem, idx) => {
								if (
									(contentItem.type === "tags" &&
                    typeof contentItem.value === "string") ||
                  ((contentItem.type === "paragraph" ||
                    contentItem.type === "labelValue") &&
                    Array.isArray(contentItem.value))
								) {
									throw new Error(`Content of type '${contentItem.type}' with a value of type '${typeof contentItem.value}' is not a valid combination`);
								}

								const contentMap = {
									labelValue: labelValueContent(contentItem),
									paragraph: paragraphContent(contentItem),
									tags: tagsContent(contentItem),
									file: fileContent(contentItem),
								};

								return (
									<ContentColumn cols={items.length} key={idx}>
										{contentMap[contentItem.type]}
									</ContentColumn>
								);
							})}
						</ContentRow>
					);
				})}
			</div>
		</MainWrapper>
	);
};

export default Content;
