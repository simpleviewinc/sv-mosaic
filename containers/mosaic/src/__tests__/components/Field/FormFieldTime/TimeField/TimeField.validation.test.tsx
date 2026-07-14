import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import FormFieldTime from "@root/components/Field/FormFieldTime/TimeField";

function FormFieldTimeWithBlur({ onBlur }: { onBlur: () => void }) {
	return (
		<FormFieldTime
			fieldDef={{ name: "time", label: "Time", type: "time", required: true }}
			onChange={vi.fn()}
			onBlur={onBlur}
			id="time-input"
		/>
	);
}

describe("FormFieldTime validation timing", () => {
	it("should not fire onBlur when clicking clock button", async () => {
		const onBlurMock = vi.fn();
		const user = userEvent.setup();

		render(<FormFieldTimeWithBlur onBlur={onBlurMock} />);

		await user.click(screen.getByRole("button", { name: "Choose time" }));

		expect(onBlurMock).not.toHaveBeenCalled();
	});

	it("should fire onBlur when tabbing out through the open button", async () => {
		const onBlurMock = vi.fn();
		const user = userEvent.setup();

		render(
			<>
				<FormFieldTimeWithBlur onBlur={onBlurMock} />
				<input data-testid="after" />
			</>,
		);

		await user.click(screen.getAllByRole("spinbutton")[0]);
		// Empty fields have no clear button: sections → open → next control.
		await user.tab();
		await user.tab();

		await waitFor(() => {
			expect(onBlurMock).toHaveBeenCalled();
		});
		expect(screen.getByTestId("after")).toHaveFocus();
	});
});
