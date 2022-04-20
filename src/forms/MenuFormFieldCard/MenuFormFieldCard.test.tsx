import * as React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

// Components
import MenuFormFieldCard from "./MenuFormFieldCard";

afterEach(cleanup);

const editCallback = jest.fn();
const translateCallback = jest.fn();

const options = [
	{
		label: "Edit",
		action: editCallback,
	},
	{
		label: "Translate",
		action: translateCallback,
	},
];

describe("MenuFormFieldCard menu options callbacks", () => {
	beforeEach(() => {
		const { container } = render(<MenuFormFieldCard options={options}/>);
		const moreIcon = container.querySelector(".MuiButtonBase-root");
		fireEvent.click(moreIcon);
	});

	it("should trigger translate callback", () => {
		const translateOption = screen.getByText("Translate");
		fireEvent.click(translateOption);

		expect(translateCallback).toHaveBeenCalledTimes(1);
	});

	it("should trigger edit callback", () => {
		const editOption = screen.getByText("Edit");
		fireEvent.click(editOption);

		expect(editCallback).toHaveBeenCalledTimes(1);
	});
});
