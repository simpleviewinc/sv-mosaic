import * as React from "react";
import { ReactElement } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// Components
import Content, { ContentProps } from ".";

export default {
	title: "Components/Content",
	decorators: [withKnobs],
} as Meta;

const onEdit = () => alert("Edit button clicked");

const content: ContentProps["content"] = [
	[
		{ type: "paragraph", label: "Paragraph label", value: "Cum quod earum." },
		{ type: "labelValue", label: "Label", value: "value" },
	],
	[
		{ type: "labelValue", label: "Label", value: "value" },
		{ type: "labelValue", label: "Label", value: "value" },
	],
	[
		{ type: "labelValue", label: "Label", value: "value" },
		{ type: "labelValue", label: "Label", value: "value" },
	],
	[
		{ type: "labelValue", label: "Label", value: "value" },
		{ type: "labelValue", label: "Label", value: "value" },
	],
	[{ type: "tags", label: "Tags Label", value: ["Tag", "Tag"] }],
	[
		{
			type: "paragraph",
			label: "Paragraph label",
			value:
        "Cum quod earum saepe veniam. Quis quis est assumenda in at tempora iusto dicta tempore. Vel mollitia voluptatem pariatur. Cum quod earum saepe veniam. Quis quis est assumenda in at tempora iusto dicta tempore. Vel mollitia voluptatem pariatur.",
		},
		{
			type: "file",
			label: "NameFile.pdf",
			value: "· 00/00/0000 at 00:00",
			icon: PictureAsPdfIcon,
		},
	],
	[
		{
			type: "paragraph",
			label: "Paragraph label",
			value:
        "Cum quod earum saepe veniam. Quis quis est assumenda in at tempora iusto dicta tempore. Vel mollitia voluptatem pariatur. Cum quod earum saepe veniam. Quis quis est assumenda in at tempora iusto dicta tempore. Vel mollitia voluptatem pariatur.",
		},
	],
];

const onAdd = () => alert("Add button clicked");

export const Playground = (): ReactElement => {
	const title = text("Title", "Main Section Title");
	const showEdit = boolean("Show edit button", true);
	const showAdd = boolean("Show add button", true);
	const showContent = boolean("Show content", true);

	return (
		<Content
			title={title}
			content={showContent && content}
			onEdit={showEdit && onEdit}
			onAdd={showAdd && onAdd}
		/>
	);
};
