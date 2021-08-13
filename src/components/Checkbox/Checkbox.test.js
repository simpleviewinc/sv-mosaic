import * as React from "react";
import Checkbox from './Checkbox';
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("changes style of div as checkbox is checked/unchecked", () => {
	const { getByTestId } = render(<Checkbox
		label="Test checkbox"
		checked={false}
	/>);

	const checkbox = getByTestId("checkbox-test-id");
	expect(checkbox.checked).toEqual(false);
	
	fireEvent.click(checkbox);
	expect(checkbox.checked).toEqual(true);
});