import * as React from "react";
import { ReactElement, useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import { ButtonProps } from "../Button";
import { FilterSingleSelectProps } from "../FilterSingleSelect";
import { Mail, Edit, Public } from "@material-ui/icons";
import { MenuItemProps } from "../MenuItem";

// Components
import SummaryPageTopComponent from ".";

export default {
	title: "Components/SummaryPageTopComponent",
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	
	const title = text("Title", "Laudantium est optio voluptas")
	const contextText = text("Context text", "Example of a very long text information")
	const imageSrc = text("Image src", "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg")
	const favorite = boolean("favorite", true)
	const showMainActions = boolean("Main actions", true)
	const showAditionalActions = boolean("Aditional actions", true)
	const showContexts = boolean("Context texts", true)
	const showTextLinks = boolean("Text links", true)
	const showFilterSingleSelect = boolean("FilterSingleSelect", true)
	
	const mainActions: ButtonProps[] = [
		{
			label: "Button 1",
			mIcon: Mail,
			onClick: () => alert("Click"),
			color: "black",
			variant: "text"
		},
		{
			label: "Button 2",
			mIcon: Mail,
			onClick: () => alert("Click"),
			color: "black",
			variant: "text"
		},
		{
			label: "Edit",
			mIcon: Edit,
			onClick: () => alert("Click"),
			color: "black",
			variant: "text"
		},
	]

	const aditionalActions: MenuItemProps[] = [
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

	const textLinks: ButtonProps[] = [
		{
			label: "Text link",
			color: "black",
			variant: "text",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: ()=> console.log("click"),
		},
		{
			label: "Text link",
			color: "black",
			variant: "text",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: ()=> console.log("click"),
		},
		{
			label: "Text link",
			color: "black",
			variant: "text",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: ()=> console.log("click"),
		},
	]

	const contextTexts = ["Information", "Information", contextText]

	const [state, setState] = useState({
		value : undefined
	});

	const required = false;

	const options = [
		{ label : "Option A", value : "a" },
		{ label : "Option B", value : "b" },
		{ label : "Option C", value : "c" },
		{ label : "Option D", value : "d" }
	]

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = () => undefined;

	const getOptions = function() {
		return {
			docs : options,
			hasMore : false
		}
	}

	const getSelected = function(id) {
		return options.filter(val => val.value === id)[0];
	}

	const filterSingleSelect: FilterSingleSelectProps = {
		type: "primary",
		label: "Testing",
		data: state,
		args: { getOptions, getSelected, required, color: "teal" },
		onRemove: onRemove,
		onChange: onChange
	}

	return (
		<SummaryPageTopComponent
			title={title}
			favorite={favorite}
			imageSrc={imageSrc}
			mainActions={showMainActions && mainActions}
			aditionalActions={showAditionalActions && aditionalActions}
			contextTexts={showContexts && contextTexts}
			textLinks={showTextLinks && textLinks}
			filterSingleSelect={showFilterSingleSelect && filterSingleSelect}
		/>
	);
};
