import * as React from "react";
import { render, screen } from "@testing-library/react";

// Components
import Spinner from "@root/components/Spinner";

describe("Spinner component", () => {
	it("should render with a progress value of 60", () => {
		render(<Spinner progress={60} />);

		const spinner = screen.getByRole("progressbar");
		expect(spinner).toHaveAttribute("aria-valuenow", "60");
	});
});
