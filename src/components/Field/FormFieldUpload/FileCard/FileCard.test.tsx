import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FileCard from "./FileCard";

const onFileDelete = jest.fn();

const fileCards = [
	{ // Uploaded with img
		id: "1",
		name: "MyCard.jpg",
		size: 123,
		attachmentUrl: "myurl.com",
		thumbnailUrl: "myurl.com",
		onFileDelete,
	},
	{ // Uploaded without img
		id: "1",
		name: "MyCard.jpg",
		size: 123,
		onFileDelete,
	},
	{ // Pending
		id: "1",
		name: "MyCard.jpg",
		size: 123,
		percent: 50,
	},
	{ // Error
		id: "1",
		name: "MyCard.jpg",
		size: 123,
		error: "File size exceeded",
	},
];

describe("File card", () => {
	it("Should render an uploaded card with img", () => {
		render(<FileCard {...fileCards[0]} />);

		const name = screen.getByTestId("file-name");
		const size = screen.getByTestId("file-size");
		const img = screen.getByRole("img");
		const deleteIcon = screen.getByRole("button");
		fireEvent.click(deleteIcon);

		expect(name.textContent).toBe(fileCards[0].name);
		expect(size.textContent).toBe(`${fileCards[0].size} B`);
		expect(img.getAttribute("src")).toBe(fileCards[0].thumbnailUrl);
		expect(deleteIcon).toBeInTheDocument();
		expect(onFileDelete).toHaveBeenCalled();
	});

	it("Should render an uploaded card without img", () => {
		render(<FileCard {...fileCards[1]} />);

		const name = screen.getByTestId("file-name");
		const size = screen.getByTestId("file-size");
		const fileIcon = screen.getByTestId("InsertDriveFileIcon");
		const deleteIcon = screen.getByRole("button");
		fireEvent.click(deleteIcon);

		expect(name.textContent).toBe(fileCards[1].name);
		expect(size.textContent).toBe(`${fileCards[1].size} B`);
		expect(fileIcon).toBeInTheDocument();
		expect(deleteIcon).toBeInTheDocument();
		expect(onFileDelete).toHaveBeenCalled();
	});

	it("Should render a pending card", () => {
		render(<FileCard {...fileCards[2]} />);

		const name = screen.getByTestId("file-name");
		const size = screen.getByTestId("file-size");
		const progressBar = screen.getByRole("progressbar");

		expect(name.textContent).toBe(fileCards[2].name);
		expect(size.textContent).toBe(`${fileCards[2].size} B`);
		expect(progressBar.getAttribute("aria-valuenow")).toBe(fileCards[2].percent.toString());
	});

	it("Should render an uploaded card with img", () => {
		render(<FileCard {...fileCards[3]} />);

		const name = screen.getByTestId("file-name");
		const size = screen.getByTestId("file-size");
		const errorIcon = screen.getByTestId("DoNotDisturbIcon");
		const errorMessage = screen.getByText("File size exceeded");

		expect(name.textContent).toBe(fileCards[3].name);
		expect(size.textContent).toBe(`${fileCards[3].size} B`);
		expect(errorIcon).toBeInTheDocument();
		expect(errorMessage.textContent).toBe(fileCards[3].error);
	});
});
