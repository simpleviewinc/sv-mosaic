import {
	render,
	screen,
	cleanup,
	fireEvent,
	waitFor,
} from "@testing-library/react";
import * as React from "react";
import Content, { transpose } from "./Content";
import { ContentFieldDef } from "./ContentTypes";
import {
	transform_boolean,
	transform_chips,
	transform_colorPicker,
	transform_dateFormat,
	transform_thumbnail,
} from "@root/transforms";
import { MosaicObject } from "@root/types";
import "@testing-library/jest-dom";

afterEach(cleanup);

const fieldDef: ContentFieldDef[] = [
	{
		name: "chips",
		label: "Chips",
		transforms: [transform_chips()],
		column: "tags",
		show: [true, true, () => true]
	},
	{
		name: "toggle",
		label: "Toggle",
		transforms: [transform_boolean()],
		show: [false, false, () => false]
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
];

const sections = [
	[["tags"], ["colorPicker"]],
	[["toggle"], ["date"]],
	[["thumbnail"]],
];

const values = {
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
};

const getValues = async (): Promise<MosaicObject> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(values);
		}, 500);
	});
};

const getValuesUndefined = async (): Promise<MosaicObject> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(undefined);
		}, 500);
	});
};

const onClickEdit = jest.fn();
const originalScrollHeight = Object.getOwnPropertyDescriptor(
	HTMLElement.prototype,
	"offsetHeight"
);

describe("Content component", () => {
	beforeAll(() => {
		Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
			configurable: true,
			value: 500,
		});
	});

	afterAll(() => {
		Object.defineProperty(
			HTMLElement.prototype,
			"scrollHeight",
			originalScrollHeight
		);
	});

	beforeEach(() => {
		render(
			<Content
				title="Main Section"
				getValues={getValues}
				fieldDef={fieldDef}
				sections={sections}
				onEdit={onClickEdit}
			/>
		);
	});

	it("should display the content", async () => {
		await waitFor(() => {
			const chips = screen.getAllByTestId("chip-testid");
			const thumbnail = screen.getByRole("img");
			const date = screen.getByText("12/17/1995");
			const colorPicker = screen.getByText("#a8001791");

			expect(thumbnail).toBeInTheDocument();
			expect(chips).toHaveLength(4);
			expect(date).toBeInTheDocument();
			expect(colorPicker).toBeInTheDocument();
		});
	});

	it("should hide the toggle since all its show values are false", async () => {
		await waitFor(() => {
			const toggle = screen.queryByText("No");

			expect(toggle).not.toBeInTheDocument();
		});
	});

	it("should execute the onClick edit callback", async () => {
		await waitFor(() => {
			fireEvent.click(screen.getByTestId("icon-button-test"));

			expect(onClickEdit).toHaveBeenCalled();
		});
	});

	it("should toggle the 'More Details' button when clicked", async () => {
		await waitFor(() => {
			const moreDetailsBtn = screen.getByText("More Details");
			expect(moreDetailsBtn).toBeInTheDocument();

			fireEvent.click(moreDetailsBtn);

			expect(screen.getByText("Less Details")).toBeInTheDocument();
		});
	});
});

describe("Content componenent when no content is passed", () => {
	it("should display the '+' button when the content is null", async () => {
		render(
			<Content
				title="Main Section"
				sections={sections}
				getValues={getValuesUndefined}
				fieldDef={fieldDef}
				onEdit={onClickEdit}
			/>
		);

		await waitFor(() => {
			fireEvent.click(screen.getByTestId("icon-button-test"));

			expect(onClickEdit).toHaveBeenCalled();
			expect(screen.queryByText("More Details")).not.toBeInTheDocument();
		});
	});
});

describe("transpose function", () => {
	it("should transpose the matrix of sections", async () => {
		const result = [
			[["tags"], ["toggle"], ["thumbnail"]],
			[["colorPicker"], ["date"], undefined]
		];

		expect(transpose(sections)).toStrictEqual(result);
	});
});
