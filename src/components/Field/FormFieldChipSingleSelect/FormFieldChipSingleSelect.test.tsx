import * as React from "react";
import { useMemo, ReactElement } from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

//Components
import Form, { useForm, formActions } from "@root/components/Form";
import { FieldDef } from "@root/components/Field";
import { ButtonProps } from "@root/components/Button";
import { getOptions } from "@root/utils/getOptions";

afterEach(cleanup);

const { getByText } = screen;

const FormFieldChipSingleSelectExample = (props:{ fromDB: boolean }): ReactElement => {
	const { state, dispatch } = useForm();

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

	const onSubmit = async () => {
		const { valid, data } = await dispatch(formActions.submitForm());
		if (!valid) return;

		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	};

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
				buttons={buttons}
				title={"Form Title"}
				description={"This is a description example"}
				state={state}
				fields={fields}
				dispatch={dispatch}
			/>
		</>
	);
};

const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

describe("FormFieldChipSingleSelect component", () => {
	beforeEach(async () => {
		await act(() => {
			render(<FormFieldChipSingleSelectExample fromDB={false} />);
		});
	});

	it("should display the list of options", () => {
		expect(getByText("Option 1")).toBeTruthy();
		expect(getByText("Option 2")).toBeTruthy();
		expect(getByText("Option 3")).toBeTruthy();
	});
});

describe("FormFieldChipSingleSelect component with options from DB", () => {
	it("should display the list of options from DB", async () => {
		await act( async() => {
			render(<FormFieldChipSingleSelectExample fromDB={true} />);
		});

		await waitFor(() => {
			expect(getByText("Option 1")).toBeTruthy();
			expect(getByText("Option 2")).toBeTruthy();
			expect(getByText("Option 3")).toBeTruthy();
			expect(getByText("Option 4")).toBeTruthy();
		}, { timeout: 1000 });
	});
});
