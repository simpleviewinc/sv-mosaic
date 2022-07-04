import * as React from "react";
import { ReactElement, useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { ButtonProps } from "../Button";
import { Mail, Edit, Public } from "@mui/icons-material";
import { MenuItemProps } from "../MenuItem";

// Components
import SummaryPageTopComponent from ".";

export default {
	title: "Components/SummaryPageTopComponent",
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	const [checked, setChecked] = useState<boolean>(false);

	const title = text("Title", "Laudantium est optio voluptas");
	const img = boolean("Image", false);
	const showFavorite = boolean("Show star", true);
	const showMainActions = boolean("Main actions", true);
	const showAdditionalActions = boolean("Aditional actions", true);
	const showDescription = boolean("Description", true);
	const showTextLinks = boolean("Text links", true);
	const showFilter = boolean("Filter", true);
	
	const mainActions: ButtonProps[] = [
		{
			label: "Button 1",
			mIcon: Mail,
			onClick: () => alert("Button 1 Click"),
			color: "black",
			variant: "text"
		},
		{
			label: "Button 2",
			mIcon: Mail,
			onClick: () => alert("Button 2 Click"),
			color: "black",
			variant: "text"
		},
		{
			label: "Button 3",
			mIcon: Edit,
			onClick: () => alert("Button 3 Click"),
			color: "black",
			variant: "text"
		},
	];

	const additionalActions: MenuItemProps[] = [
		{
			label : "Edit",
			onClick : function() {
				alert("EDIT CLICK");
			}
		},
		{
			label : "Download",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			}
		}
	];

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

	const descriptionTexts = ["Information", "Information", "Example of a very long text information"];

	const options = [
		{ label : "Option A", value : "a" },
		{ label : "Option B", value : "b" },
		{ label : "Option C", value : "c" },
		{ label : "Option D", value : "d" }
	];

	const getOptions = () => {
		return {
			docs : options,
			hasMore : false
		}
	}

	const getSelected = (id) => {
		return options.filter(val => val.value === id)[0];
	}

	const filter = {
		label: "Testing",
		args: { getOptions, getSelected, required: false },
	}

	const favorite = {
		checked: checked,
		onClick: (val) => {alert(`Star changed to ${val ? "checked" : "unchecked"}`); setChecked(val);},
	}

	return (
		<SummaryPageTopComponent
			title={title}
			favorite={showFavorite && favorite}
			img={img && "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"}
			mainActions={showMainActions && mainActions}
			additionalActions={showAdditionalActions && additionalActions}
			descriptionTexts={showDescription && descriptionTexts}
			textLinks={showTextLinks && textLinks}
			filter={showFilter && filter}
		/>
	);
};
