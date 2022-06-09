import * as React from "react";
import { ReactElement, useState, useEffect } from "react";
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
	ContentRow,
	ContentColumn,
} from "./Content.styled";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const invalidContents = {
	tags: (value: string | string[]) => typeof value === "string",
	paragraph: (value: string | string[]) => Array.isArray(value),
	labelValue: (value: string | string[]) => Array.isArray(value),
	file: (value: string | string[]) => Array.isArray(value),
} 

const Content = (props: ContentProps): ReactElement => {
	const { title, onEdit, content, onAdd } = props;
	const [show, setShow] = useState(content?.length < 3);

	/**
	 * Validates if the combinations of the type of content and
	 * value are allowed.
	 */
	useEffect(() => {
		content?.forEach((contentRow) => {
			contentRow.forEach((contentElement) => {
				if (invalidContents[contentElement.type](contentElement.value)) {
					throw new Error(
						`Content of type '${
							contentElement.type
						}' with a value of type '${typeof contentElement.value}' is not a valid combination`
					);
				}
			});
		});
	}, [content]);

	/**
	 * Toggles the state use to show or hide the content.
	 */
	const showDetails = () => {
		setShow(!show);
	};

	let contentForDisplay;

	if (content) {
		contentForDisplay = show ? content : content.slice(0, 3);
	}

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
		<LabelValueWrapper>
			<Label>{contentItem.label}:</Label>
			<Paragraph>{contentItem.value}</Paragraph>
		</LabelValueWrapper>
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
				<Value isFile>{contentItem.value}</Value>
			</>
		);
	};

	return (
		<MainWrapper>
			<TitleWrapper>
				<Title>{title}</Title>
				<ButtonsWrapper isMaxContent={content?.length < 3}>
					{content?.length === 0 || !contentForDisplay
						? onAdd && (
							<Button
								color="teal"
								variant="icon"
								mIcon={AddIcon}
								onClick={onAdd}
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
					{content?.length > 3 && (
						<Button
							color="teal"
							variant="text"
							label={show ? "Less Details" : "More Details"}
							onClick={showDetails}
						></Button>
					)}
				</ButtonsWrapper>
			</TitleWrapper>
			<div>
				{contentForDisplay?.map((items, idx) => {
					return (
						<ContentRow
							data-testid={"content-row"}
							key={`${idx}-contentLayout`}
						>
							{items.map((contentItem, idx) => {
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
