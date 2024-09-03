import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FileCard from "@root/components/Field/FormFieldUpload/FileCard";
import FileCardPending from "@root/components/Field/FormFieldUpload/FileCard/FileCardPending";
import { FileCardPendingProps } from "@root/components/Field/FormFieldUpload/FileCard/FileCardTypes";

const onFileDelete = vi.fn();

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
];

const pendingFileCards: FileCardPendingProps[] = [
	{ // Pending
		id: "1",
		name: "MyCard.jpg",
		size: 123,
		percent: 50,
		isPending: true,
		rawData: new File([""], "Woody.png"),
		onFileDelete,
	},
	{ // Error
		id: "1",
		name: "MyCard.jpg",
		size: 123,
		error: "File size exceeded",
		isPending: true,
		rawData: new File([""], "Woody.png"),
		onFileDelete,
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
		render(<FileCardPending {...pendingFileCards[0]} />);

		const name = screen.getByTestId("file-name");
		const size = screen.getByTestId("file-size");
		const progressBar = screen.getByRole("progressbar");

		expect(name.textContent).toBe(pendingFileCards[0].name);
		expect(size.textContent).toBe(`${pendingFileCards[0].size} B`);
		expect(progressBar.getAttribute("aria-valuenow")).toBe(pendingFileCards[0].percent.toString());
	});

	it("Should render an uploaded card with img", () => {
		render(<FileCardPending {...pendingFileCards[1]} />);

		const name = screen.getByTestId("file-name");
		const size = screen.getByTestId("file-size");
		const errorIcon = screen.getByTestId("DoNotDisturbIcon");
		const errorMessage = screen.getByText("File size exceeded");

		expect(name.textContent).toBe(pendingFileCards[1].name);
		expect(size.textContent).toBe(`${pendingFileCards[1].size} B`);
		expect(errorIcon).toBeInTheDocument();
		expect(errorMessage.textContent).toBe(pendingFileCards[1].error);
	});
});
