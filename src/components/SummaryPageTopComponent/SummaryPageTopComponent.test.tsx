import * as React from "react";
import { screen, cleanup, render, waitFor, act } from "@testing-library/react";
import { Mail, Edit, Public } from "@mui/icons-material";
import { ButtonProps } from "../Button";
import { MenuItemProps } from "../MenuItem";

// Components
import SummaryPageTopComponent from ".";

afterEach(cleanup);

const title = "Laudantium est optio voluptas";

const imageSrc = "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"

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
	}
];

const additionalActions: MenuItemProps[] = [
	{
		label : "Edit",
		onClick : jest.fn()
	},
	{
		label : "Download",
		onClick : jest.fn()
	}
];

const textLinks = [
	{
		label: "Text link",
		mIcon: Public,
		href: "https://www.google.com/",
		onClick: jest.fn(),
	},
	{
		label: "Text link",
		mIcon: Public,
		href: "https://www.google.com/",
		onClick: jest.fn(),
	},
	{
		label: "Text link",
		mIcon: Public,
		href: "https://www.google.com/",
		onClick: jest.fn(),
	},
];

const contextTexts = ["Information", "Information", "This is an example of a very long text information"];

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
};

const favorite = {
	checked: true,
	onClick: (val) => jest.fn(val),
};

const { getByText, getByTestId, getAllByTestId } = screen;

describe("SummaryPageTopComponent", () => {
	beforeEach(() => {
		jest.spyOn(console, "error").mockImplementation(() => jest.fn());
		
		act(() => {
			render(<SummaryPageTopComponent
				title={title}
				favorite={favorite}
				img={imageSrc}
				mainActions={mainActions}
				additionalActions={additionalActions}
				descriptionTexts={contextTexts}
				textLinks={textLinks}
				filter={filter}
			/>)
		});
	});

	it("Should display the image", async () => {
		await waitFor(() => {
			expect(screen.getByRole("img"));
		});
	});

	it("Should display the title", () => {
		expect(getByText("Laudantium est optio voluptas"));
	});
	
	it("Should display favorite icon", () => {
		expect(getByTestId("StarRateRoundedIcon"));
	})

	it("Should display three main action buttons", () => { 
		expect(getAllByTestId("btn-main-action")).toHaveLength(3);
	})

	it("Should display aditional action button", () => { 
		expect(getByTestId("btn-aditional-action"));
	})

	it("Should display three context texts", () => { 
		expect(getAllByTestId("context-text")).toHaveLength(3);
	})

	it("Should display three textlink buttons", () => { 
		expect(getAllByTestId("btn-text-link")).toHaveLength(3);
	})

	it("Should display filterSingleSelect button", () => { 
		expect(getByTestId("btn-filterSingleSelect"));
	})
});