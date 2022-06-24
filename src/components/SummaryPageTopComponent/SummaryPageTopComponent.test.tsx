/* import * as React from "react";
import { ReactElement, useState } from "react";
import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import SummaryPageTopComponent from ".";

afterEach(cleanup);

export const SummaryPageTopComponentExample = (): ReactElement => {
	
	const title = "Laudantium est optio voluptas";
	const favorite = true;
	
	const mainActions = [
		{
			label: "Button 1",
			mIcon: Mail,
			onClick: () => alert("Click"),
		},
		{
			label: "Button 2",
			mIcon: Mail,
			onClick: () => alert("Click"),
		},
		{
			label: "Edit",
			mIcon: Edit,
			onClick: () => alert("Click"),
		},
	];

	const aditionalActions = [
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
			onClick: ()=> console.log("click"),
		},
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: ()=> console.log("click"),
		},
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: ()=> console.log("click"),
		},
	];

	const contextTexts = ["Information", "Information", "This is an example of a very long text information"];

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

	const filterSingleSelect = {
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
			imageSrc={"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"}
			mainActions={mainActions}
			aditionalActions={aditionalActions}
			contextTexts={contextTexts}
			textLinks={textLinks}
			filterSingleSelect={filterSingleSelect}
		/>
	);
}; */

