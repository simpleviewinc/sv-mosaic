import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import Content from "./Content";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { ContentProps } from "./ContentTypes";

afterEach(cleanup);

const content: ContentProps["content"] = [
	[
		{ type: "paragraph", label: "Paragraph label", value: "First paragraph." },
		{
			type: "file",
			label: "NameFile.pdf",
			value: "· 00/00/0000 at 00:00",
			icon: PictureAsPdfIcon,
		},
	],
	[
		{ type: "labelValue", label: "Label1", value: "value1" },
		{ type: "labelValue", label: "Label2", value: "value2" },
	],
	[{ type: "tags", label: "Tags Label", value: ["Tag1", "Tag2"] }],
	[{ type: "paragraph", label: "Paragraph label", value: "Fourth paragraph" }],
];

const { getByText, getByTestId, getAllByTestId } = screen;
const onClickEdit = jest.fn();
const onClickAdd = jest.fn();

describe("Content component", () => {
	beforeEach(() => {
		render(
			<Content
				title="Main Section"
				content={content}
				onEdit={onClickEdit}
			/>
		);
	});

	it("should display all the content", () => {
		expect(getByText("Main Section")).toBeDefined();
		expect(getByText("Paragraph label:")).toBeDefined();
		expect(getByText("First paragraph.")).toBeDefined();
		expect(getByText("NameFile.pdf:")).toBeDefined();
		expect(getByTestId("PictureAsPdfIcon")).toBeDefined();
		expect(getByText("· 00/00/0000 at 00:00")).toBeDefined();
		expect(getByText("Label1:")).toBeDefined();
		expect(getByText("value1")).toBeDefined();
		expect(getByText("Label2:")).toBeDefined();
		expect(getByText("value2")).toBeDefined();
		expect(getByText("Tags Label:")).toBeDefined();
		expect(getByText("Tag1")).toBeDefined();
		expect(getByText("Tag2")).toBeDefined();
	});

	it("should execute the onClick edit callback", () => {
		fireEvent.click(getByTestId("icon-button-test"));
		expect(onClickEdit).toHaveBeenCalled();
	});

	it("should show all the content when the 'More Details' button is clicked", () => {
		expect(getAllByTestId("content-row").length).toBe(3);

		fireEvent.click(getByText("More Details"));

		expect(getAllByTestId("content-row").length).toBe(4);
		expect(getByText("Fourth paragraph")).toBeDefined();
	});
});

describe("Content componenent when no content is passed", () => {
	it("should display the '+' button when the content is an empty array", () => {
		render(
			<Content title="Main Section" content={[]} onAdd={onClickAdd} />
		);

		fireEvent.click(getByTestId("icon-button-test"));

		expect(onClickAdd).toHaveBeenCalled();
	});

	it("should display the '+' button when the content is undefined", () => {
		render(
			<Content title="Main Section" content={undefined} onAdd={onClickAdd} />
		);

		fireEvent.click(getByTestId("icon-button-test"));

		expect(onClickAdd).toHaveBeenCalled();
	});

	it("should display the '+' button when the content is null", () => {
		render(
			<Content title="Main Section" content={null} onAdd={onClickAdd} />
		);

		fireEvent.click(getByTestId("icon-button-test"));

		expect(onClickAdd).toHaveBeenCalled();
	});
});
