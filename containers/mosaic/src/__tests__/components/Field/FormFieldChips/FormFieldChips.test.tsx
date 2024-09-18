import type { ReactElement } from "react";

import * as React from "react";
import { act, useMemo } from "react";
import { render, cleanup, screen, waitFor, fireEvent } from "@testing-library/react";

import type { FieldDef } from "@root/components/Field";
import type { ButtonProps } from "@root/components/Button";

import Form, { useForm } from "@root/components/Form";
import { getOptions } from "@root/mock";

afterEach(cleanup);

const { getByText, getAllByRole } = screen;

const FormFieldChipsExample = (props:{ fromDB: boolean }): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const options = useMemo( ()=> [
		{
			label: "Option 1",
			value: "Option_1",
		},
		{
			label: "Option 2",
			value: "Option_2",
		},
		{
			label: "Option 3",
			value: "Option_3",
		},
	], []);

	const fields = useMemo(
		() =>
			[
				{
					label: "Chip test",
					name: "formFieldChipSingleSelect",
					type: "chip",
					inputSettings: {
						options: !props.fromDB ? options : undefined,
						getOptions: props.fromDB ? getOptions : undefined,
					},
				},
			] as FieldDef[],
		[],
	);

	const onSubmit = handleSubmit((data) => alert("Form submitted with the following data: " + JSON.stringify(data, null, " ")));

	const buttons: ButtonProps[] = [
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={buttons}
				title="Form Title"
				description="This is a description example"
				fields={fields}
			/>
		</>
	);
};

const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

describe("FormFieldChips component", () => {
	beforeEach(async () => {
		await act(() => {
			render(<FormFieldChipsExample fromDB={false} />);
		});
	});

	it("should display the list of options", () => {
		expect(getByText("Option 1")).toBeTruthy();
		expect(getByText("Option 2")).toBeTruthy();
		expect(getByText("Option 3")).toBeTruthy();
	});

	it("should select a Chip when clicked once and deselect it when clicked again", async () => {
		const [chip1, chip2, chip3] = getAllByRole("option");

		expect(chip1).toHaveAttribute("aria-selected", "false");
		expect(chip2).toHaveAttribute("aria-selected", "false");
		expect(chip3).toHaveAttribute("aria-selected", "false");

		await act(async () => {
			await fireEvent.click(chip1);
		});

		expect(chip1).toHaveAttribute("aria-selected", "true");

		await act(async () => {
			await fireEvent.click(chip1);
		});

		expect(chip1).toHaveAttribute("aria-selected", "false");
	});
});

describe("FormFieldChips component with options from DB", () => {
	it("should display the list of options from DB", async () => {
		await act( async() => {
			render(<FormFieldChipsExample fromDB={true} />);
		});

		await waitFor(() => {
			expect(getByText("Option 1")).toBeTruthy();
			expect(getByText("Option 2")).toBeTruthy();
			expect(getByText("Option 3")).toBeTruthy();
			expect(getByText("Option 4")).toBeTruthy();
		}, { timeout: 1000 });
	});
});
