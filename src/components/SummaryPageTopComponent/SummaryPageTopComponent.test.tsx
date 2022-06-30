import * as React from "react";
import { screen, cleanup, render } from "@testing-library/react";
import { Mail, Edit, Public } from "@mui/icons-material";
import { ButtonProps } from "../Button";
import { FilterSingleSelectProps } from "../FilterSingleSelect";
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

const largeMainActions: ButtonProps[] = [
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
	{
		label: "Edit2",
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

const largeTextLinks: ButtonProps[] = [
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

const state = {value : undefined};

const required = false;

const getOptions = jest.fn()

const getSelected = jest.fn()

const filterSingleSelect: FilterSingleSelectProps = {
	type: "primary",
	label: "Testing",
	data: state,
	args: { getOptions, getSelected, required, color: "teal" },
	onRemove: jest.fn(),
	onChange: jest.fn(),
}

const { getByText, getByTestId, getAllByTestId } = screen;

describe("SummaryPageTopComponent", () => {
	beforeEach(() => {
		render(<SummaryPageTopComponent
			title={title}
			favorite={true}
			imageSrc={imageSrc}
			mainActions={mainActions}
			aditionalActions={aditionalActions}
			contextTexts={contextTexts}
			textLinks={textLinks}
			filterSingleSelect={filterSingleSelect}
		/>)
	})

	it("Should display the image", () => {
		expect(screen.getByRole("img"));
	});

	it("Should display the title", () => {
		expect(getByText("Laudantium est optio voluptas"));
	});
	
	it("Should display favorite icon", () => {
		expect(getByTestId("StarRateRoundedIcon"))
	})

	it("Should display three main action buttons", () => { 
		expect(getAllByTestId("btn-main-action")).toHaveLength(3)
	})

	it("Should display aditional action button", () => { 
		expect(getByTestId("btn-aditional-action"))
	})

	it("Should display three context texts", () => { 
		expect(getAllByTestId("context-text")).toHaveLength(3)
	})

	it("Should display three textlink buttons", () => { 
		expect(getAllByTestId("btn-text-link")).toHaveLength(3)
	})

	it("Should display filterSingleSelect button", () => { 
		expect(getByTestId("btn-filterSingleSelect"))
	})
})

describe("SummaryPageTopComponent variants", () => {

	beforeEach(() => {
		render(<SummaryPageTopComponent
			title={title}
			favorite={false}
			filterSingleSelect={filterSingleSelect}
		/>)
	})
	
	it("Should display no favorite icon", () => {
		expect(getByTestId("StarBorderRoundedIcon"))
	})
})

describe("SummaryPageTopComponent error expected", () => {

	it("Should display error when SummaryPageTopComponent has more than three main buttons", () => {
		expect(() => {
			render (<SummaryPageTopComponent
				title={title}
				favorite={true}
				imageSrc={imageSrc}
				mainActions={largeMainActions}
				aditionalActions={aditionalActions}
				contextTexts={contextTexts}
				textLinks={textLinks}
				filterSingleSelect={filterSingleSelect}
			/>)
		}).toThrowError("mainActions should be maximun three buttons");
	});

	it("Should display error when SummaryPageTopComponent has more than three textlinks", () => {
		expect(() => {
			render (<SummaryPageTopComponent
				title={title}
				favorite={true}
				imageSrc={imageSrc}
				mainActions={mainActions}
				aditionalActions={aditionalActions}
				contextTexts={contextTexts}
				textLinks={largeTextLinks}
				filterSingleSelect={filterSingleSelect}
			/>)
		}).toThrowError("textLinks should be maximun three links");
	});
})