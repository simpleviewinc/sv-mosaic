import * as React from "react";
import type { ReactElement } from "react";
import { useMemo, useState } from "react";
import type { ButtonProps } from "#mosaic/components/Button";
import Button from "#mosaic/components/Button";
import Mail from "@mui/icons-material/Mail";
import Edit from "@mui/icons-material/Edit";
import Public from "@mui/icons-material/Public";
import type { MenuItemProps } from "#mosaic/components/MenuItem";
import styled from "styled-components";
import theme from "#mosaic/theme";

// Components
import TopSummary from "#mosaic/components/TopSummary";

const DescriptionItemParagraph = styled.p`
	font-weight: ${theme.fontWeight.light};
`;

export default {
	title: "Components/TopSummary",
};

function MockTitleReactNode() {
	return (
		<div>
			<div><strong>Pellentesque eget mollis augue</strong></div>
			<div><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small></div>
		</div>
	);
}

export const Playground = ({
	titleType,
	title,
	showBack,
	img,
	showFavorite,
	showMainActions,
	showAdditionalActions,
	showDescription,
}: typeof Playground.args): ReactElement => {
	const [checked, setChecked] = useState<boolean>(false);

	const mainActions: ButtonProps[] = [
		{
			label: "Button 1",
			mIcon: Mail,
			onClick: () => alert("Button 1 Click"),
			color: "black",
			variant: "text",
			show: () => Number(showMainActions) > 0,
		},
		{
			label: "Button 2",
			mIcon: Mail,
			onClick: () => alert("Button 2 Click"),
			color: "black",
			variant: "text",
			show: () => Number(showMainActions) > 1,
		},
		{
			label: "Button 3",
			mIcon: Edit,
			onClick: () => alert("Button 3 Click"),
			color: "black",
			variant: "text",
			show: () => Number(showMainActions) > 2,
		},
	];

	const additionalActions: MenuItemProps[] = useMemo(() => [
		{
			label : "Edit",
			onClick : function() {
				alert("EDIT CLICK");
			},
			show: showAdditionalActions !== "undefined" && Number(showAdditionalActions) > 0,
		},
		{
			label : "Download",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			},
			show: showAdditionalActions !== "undefined" && Number(showAdditionalActions) > 1,
		},
	], [showAdditionalActions]);

	const textLinks = [
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
		},
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
		},
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
		},
	];

	const descriptionItems = [
		<DescriptionItemParagraph key={1}>Information</DescriptionItemParagraph>,
		<DescriptionItemParagraph key={2}>Information</DescriptionItemParagraph>,
		<DescriptionItemParagraph key={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque</DescriptionItemParagraph>,
		<Button
			key={4}
			attrs={{ $linkButton: true }}
			color="black"
			variant="text"
			label={textLinks[0].label}
			mIcon={textLinks[0].mIcon}
			href={textLinks[0].href}
			{...textLinks[0]}
		/>,
		<Button
			key={5}
			attrs={{ $linkButton: true }}
			color="black"
			variant="text"
			label={textLinks[1].label}
			mIcon={textLinks[1].mIcon}
			href={textLinks[1].href}
			{...textLinks[1]}
		/>,
		<Button
			key={6}
			attrs={{ $linkButton: true }}
			color="black"
			variant="text"
			label={textLinks[2].label}
			mIcon={textLinks[2].mIcon}
			href={textLinks[2].href}
			{...textLinks[2]}
		/>,
	];

	const favorite = {
		checked: checked,
		onClick: (val) => {alert(`Star changed to ${val ? "checked" : "unchecked"}`); setChecked(val);},
	};

	return (
		<TopSummary
			title={titleType === "String" ? title : <MockTitleReactNode />}
			onBack={showBack ? () => alert("Cancelling, going back to previous site") : undefined}
			backLabel="Go back"
			favorite={showFavorite && favorite}
			img={img && "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"}
			mainActions={showMainActions && mainActions}
			additionalActions={additionalActions}
			descriptionItems={showDescription && descriptionItems}
		/>
	);
};

Playground.args = {
	titleType: "String",
	title: "Laudantium est optio voluptas",
	showBack: false,
	img: false,
	showFavorite: true,
	showMainActions: "3",
	showAdditionalActions: "2",
	showDescription: true,
};

Playground.argTypes = {
	titleType: {
		name: "Title Type",
		options: ["String", "React Node"],
		control: { type: "select" },
	},
	title: {
		name: "Title",
	},
	showBack: {
		name: "Show back button",
	},
	img: {
		name: "Show Image",
	},
	showFavorite: {
		name: "Show Favourite",
	},
	showMainActions: {
		name: "Main Action Count",
		control: { type: "select" },
		options: ["1", "2", "3", "0"],
	},
	showAdditionalActions: {
		name: "Additional Action Count",
		control: { type: "select" },
		options: ["1", "2", "0", "undefined"],
	},
	showDescription: {
		name: "Description Items",
	},
};
