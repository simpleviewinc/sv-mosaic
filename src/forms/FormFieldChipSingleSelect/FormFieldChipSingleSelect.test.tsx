import * as React from "react";
import { useMemo } from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//Components
import Form, { useForm, formActions } from "../Form";
import { FieldDef } from "@root/components/Field";
import { FormFieldChipSingleSelectDef } from "./FormFieldChipSingleSelectTypes";
import { ButtonProps } from "@root/components/Button";

afterEach(cleanup);

const { getAllByRole, getByText } = screen;

const FormFieldChipSingleSelectExample = () => {
	const { state, dispatch, registerFields } = useForm();
	
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
						options
					},
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

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
		render(<FormFieldChipSingleSelectExample />);
	})

	it("should display the list of options", () => {
		expect(getByText("Option 1")).toBeTruthy();
		expect(getByText("Option 2")).toBeTruthy();
		expect(getByText("Option 3")).toBeTruthy();
	});

	it("should check the clicked option", () => {
		const chipElements = getAllByRole("button") as HTMLInputElement[];
		fireEvent.click(chipElements[1]);

		expect(window.getComputedStyle(chipElements[0]).backgroundColor).toBe("rgb(240, 242, 245)");
		expect(window.getComputedStyle(chipElements[1]).backgroundColor).toBe("rgb(253, 185, 36)");
		expect(window.getComputedStyle(chipElements[2]).backgroundColor).toBe("rgb(240, 242, 245)");
	});
});
