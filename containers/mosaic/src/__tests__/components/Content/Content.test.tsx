import {
	render,
	screen,
	cleanup,
	fireEvent,
} from "@testing-library/react";
import * as React from "react";
import Content, { ContentFieldDef } from "@root/components/Content";
import {
	transform_boolean,
	transform_chips,
	transform_colorPicker,
	transform_dateFormat,
	transform_thumbnail,
} from "@root/transforms";
import { ButtonProps } from "@root/components/Button";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import "@testing-library/jest-dom";

afterEach(cleanup);

const fields: ContentFieldDef[] = [
	{
		name: "chips",
		label: "Chips",
		transforms: [transform_chips()],
		column: "tags",
		show: [true, true, () => true],
	},
	{
		name: "toggle",
		label: "Toggle",
		transforms: [transform_boolean()],
		show: [false, false, () => false],
	},
	{
		name: "date",
		label: "Date using",
		transforms: [transform_dateFormat()],
	},
	{
		name: "color",
		label: "Color",
		transforms: [transform_colorPicker()],
		column: "colorPicker",
	},
	{
		name: "thumbnail",
		label: "Thumbnail",
		transforms: [transform_thumbnail({ width: 150, height: 150 })],
	},
	{
		name: "header",
		label: "Header with no transforms",
	},
];

const sections = [
	[["tags"], ["colorPicker"]],
	[["toggle"], ["date"]],
	[["thumbnail"], ["header"]],
];

const data = {
	tags: [
		{
			label: "Chip 1",
			value: "chip-1",
		},
		{
			label: "Chip 2",
			value: "chip-2",
		},
		{
			label: "Chip 3",
			value: "chip-3",
		},
		{
			label: "Chip 4",
			value: "chip-4",
		},
	],
	date: new Date("December 17, 1995 03:24:00"),
	toggle: false,
	colorPicker: "#a8001791",
	thumbnail:
		"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",
	header: <h1>H1 Header</h1>,
};

const onClickEdit = jest.fn();
const onClickAdd = jest.fn();

const buttons: ButtonProps[] = [
	{
		name: "edit",
		label: "Edit",
		mIcon: EditIcon,
		color: "gray",
		variant: "icon",
		onClick: onClickEdit,
	},
	{
		name: "add",
		label: "Add",
		mIcon: AddIcon,
		color: "gray",
		variant: "icon",
		onClick: onClickAdd,
	},
	{
		name: "hidden",
		label: "Hidden button",
		color: "teal",
		variant: "text",
		onClick: onClickAdd,
		show: false,
	},
];

describe("Content component", () => {
	beforeEach(() => {
		render(
			<Content
				title="Main Section"
				data={data}
				fields={fields}
				sections={sections}
				buttons={buttons}
			/>,
		);
	});

	it("should display the content", () => {
		const chips = screen.getAllByTestId("chip-testid");
		const thumbnail = screen.getByRole("img");
		const date = screen.getByText("12/17/1995");
		const colorPicker = screen.getByText("#a8001791");
		const header = screen.getByText("H1 Header");

		expect(thumbnail).toBeInTheDocument();
		expect(chips).toHaveLength(4);
		expect(date).toBeInTheDocument();
		expect(colorPicker).toBeInTheDocument();
		expect(header).toBeInTheDocument();
	});

	it("should hide the toggle since all its show values are false", () => {
		const toggle = screen.queryByText("No");

		expect(toggle).not.toBeInTheDocument();
	});

	it("should execute the button's onClick callbacks", () => {
		const [editButton, addButton] = screen.getAllByTestId("icon-button-test");
		fireEvent.click(editButton);
		fireEvent.click(addButton);

		expect(onClickEdit).toHaveBeenCalled();
		expect(onClickAdd).toHaveBeenCalled();
	});

	it("should not show the buttons that its prop show is set as false", () => {
		const hiddenButton = screen.queryByText("Hidden button");

		expect(hiddenButton).not.toBeInTheDocument();
	});
});

describe("Content componenent with no sections", () => {
	it("should display the content even if no sections are defined", async () => {
		render(
			<Content
				title="Main Section"
				data={data}
				fields={fields}
				buttons={buttons}
			/>,
		);

		const chips = screen.getAllByTestId("chip-testid");
		const thumbnail = screen.getByRole("img");
		const date = screen.getByText("12/17/1995");
		const colorPicker = screen.getByText("#a8001791");
		const header = screen.getByText("H1 Header");

		expect(thumbnail).toBeInTheDocument();
		expect(chips).toHaveLength(4);
		expect(date).toBeInTheDocument();
		expect(colorPicker).toBeInTheDocument();
		expect(header).toBeInTheDocument();
	});
});

describe("Content componenent with no buttons", () => {
	it("should display the content when buttons are not defined", async () => {
		render(
			<Content
				title="Main Section"
				data={data}
				fields={fields}
				buttons={undefined}
			/>,
		);

		const chips = screen.getAllByTestId("chip-testid");
		const thumbnail = screen.getByRole("img");
		const date = screen.getByText("12/17/1995");
		const colorPicker = screen.getByText("#a8001791");
		const header = screen.getByText("H1 Header");

		expect(thumbnail).toBeInTheDocument();
		expect(chips).toHaveLength(4);
		expect(date).toBeInTheDocument();
		expect(colorPicker).toBeInTheDocument();
		expect(header).toBeInTheDocument();
	});
});
