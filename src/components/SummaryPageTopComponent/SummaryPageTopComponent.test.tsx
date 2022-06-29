import * as React from "react";
import { ReactElement, useState } from "react";
import { screen, cleanup, render, fireEvent, act } from "@testing-library/react";
import SummaryPageTopComponent from ".";
import { Mail, Edit, Public } from "@mui/icons-material";
import { ButtonProps } from "../Button";
import { FilterSingleSelectProps } from "../FilterSingleSelect";
import { MenuItemProps } from "../MenuItem";


afterEach(cleanup);

export const SummaryPageTopComponentExample = (): ReactElement => {
	
	const title = "Laudantium est optio voluptas";
	const favorite = true;
	
	const mainActions: ButtonProps[] = [
		{
			label: "Button 1",
			mIcon: Mail,
			onClick: jest.fn(),
			color: "black",
			variant: "text"
		},
		{
			label: "Button 2",
			mIcon: Mail,
			onClick: jest.fn(),
			color: "black",
			variant: "text"
		},
		{
			label: "Edit",
			mIcon: Edit,
			onClick: () => jest.fn(),
			color: "black",
			variant: "text",
		},
	];

	const aditionalActions: MenuItemProps[] = [
		{
			label : "Edit",
			onClick : jest.fn()
		},
		{
			label : "Download",
			onClick : jest.fn()
		}
	];

	const textLinks: ButtonProps[] = [
		{
			label: "Text link",
			color: "black",
			variant: "text",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: jest.fn(),
		},
		{
			label: "Text link",
			color: "black",
			variant: "text",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: jest.fn(),
		},
		{
			label: "Text link",
			color: "black",
			variant: "text",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: jest.fn(),
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
		act(() => setState(data));
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
		onRemove: jest.fn(),
		onChange: jest.fn(),
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
};

const { getByText, getByTestId, getAllByTestId } = screen;

describe("SummaryPageTopComponent", () => {
	beforeEach(() => {
		render(<SummaryPageTopComponentExample/>)
	})

	it("should display the title", () => {
		expect(getByText("Laudantium est optio voluptas"));
	});
})