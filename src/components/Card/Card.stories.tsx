import * as React from "react";
import { ReactElement } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import styled from "styled-components";
import theme from "../../utils/theme.js";

// Components
import Card from "./Card";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";

export default {
	title: "Components/Card",
	decorators: [withKnobs],
} as Meta;

const SideCardActionsTitle = styled.span`
	color: ${theme.colors.almostBlack}
	font-size: 14px;
	margin-left: 8px;
`;

const ContentExample = () => <h1>Content Example</h1>;

export const Playground = (): ReactElement => {
	const showTitleIcon = boolean("Show title icon ", true);
	const showTopAction = boolean("Show top action", true);
	const showBottomAction = boolean("Show bottom action", true);

	return (
		<Card
			content={<ContentExample />}
			title={<SideCardActionsTitle>Section Title</SideCardActionsTitle>}
			titleIcon={
				showTitleIcon && <ContactsIcon sx={{ color: "black", width: 16 }} />
			}
			size="md"
			topAction={
				showTopAction && {
					color: "black",
					variant: "icon",
					onClick: () => alert("+ icon clicked"),
					mIcon: AddIcon,
				}
			}
			bottomAction={
				showBottomAction && {
					color: "teal",
					label: "Add a new task",
					variant: "text",
					onClick: () => alert("Add new task clicked"),
					mIcon: AddIcon,
				}
			}
		/>
	);
};
