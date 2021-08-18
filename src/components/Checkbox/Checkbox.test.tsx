import * as React from "react";
import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";

import Checkbox from "./Checkbox";

describe(__filename, function() {
	it("it should check with onClick", () => {
		function C() {
			const [checked, setChecked] = useState(false);

			const onClick = function() {
				setChecked(!checked);
			}

			return (
				<Checkbox
					checked={checked}
					onClick={onClick}
				/>
			)
		}

		const { getByRole } = render(<C/>);
	
		const checkbox = getByRole("checkbox") as HTMLInputElement;

		expect(checkbox.checked).toEqual(false);
	
		fireEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
	});
});