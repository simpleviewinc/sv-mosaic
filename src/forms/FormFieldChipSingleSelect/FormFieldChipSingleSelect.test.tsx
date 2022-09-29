import * as React from "react";
import { useMemo, ReactElement } from "react";
import { render, cleanup, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

//Components
import Form, { useForm, formActions } from "@root/components/Form";
import { FieldDef } from "@root/components/Field";
import { FormFieldChipSingleSelectDef } from "./FormFieldChipSingleSelectTypes";
import { ButtonProps } from "@root/components/Button";
import { getOptions } from "@root/utils/getOptions";

afterEach(cleanup);

const { getAllByRole, getByText } = screen;

const FormFieldChipSingleSelectExample = (props:{fromDB: boolean}): ReactElement => {
	const { state, dispatch } = useForm();

	const options = useMemo( ()=> [
		{
			label: "Label 1",
			value: "Label_1",
		},
		{
			label: "Label 2",
			value: "Label_2",
		},
		{
			label: "Label 3",
			value: "Label_3",
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
						getOptions: props.fromDB ? getOptions : undefined
					},
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
		[]
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

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");
	};

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
				onCancel={onCancel}
			/>
		</>
	);
};

describe("FormFieldChipSingleSelect component", () => {
	beforeEach(() => {
		render(<FormFieldChipSingleSelectExample fromDB={false} />);
	})

	it("should display the list of options", () => {
		expect(getByText("Label 1")).toBeTruthy();
		expect(getByText("Label 2")).toBeTruthy();
		expect(getByText("Label 3")).toBeTruthy();
	});

	it("should check the clicked option", () => {
		const chipElements = getAllByRole("button") as HTMLInputElement[];
		fireEvent.click(chipElements[1]);

		expect(window.getComputedStyle(chipElements[1]).backgroundColor).toBe("rgb(253, 185, 36)");
		expect(window.getComputedStyle(chipElements[2]).backgroundColor).toBe("rgb(240, 242, 245)");
		expect(window.getComputedStyle(chipElements[3]).backgroundColor).toBe("rgb(240, 242, 245)");
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
		}, {timeout: 1000});
	});
});
