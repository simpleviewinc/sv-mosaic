import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import { render, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { useMemo } from "react";
import { AdvancedSelectionDef, optionsWithCategory } from ".";
import Form, { useForm, formActions } from "@root/components/Form";
import { additionalOptions } from "./advancedSelectionUtils";

afterEach(cleanup);

const externalOptions = [
	{
		category: "Category 1",
		label: "Option 1",
		value: "option_1-cat_1",
	},
];

const AdvancedSelectExample = ({optionsOrigin}: {optionsOrigin: "db" | "local"}) => {
	const { state, dispatch } = useForm();
	const options: optionsWithCategory[] = externalOptions ? externalOptions : [];

	const groupByCategory = false;
	const label = "Label";
	const required = false;
	const disabled = false;
	const getOptionsLimit = 5;

	const getOptions = async ({ limit, filter, offset }) => {
		let internalOptionsArr = [...additionalOptions];

		if (filter) {
			const trimmedFilter = filter.trim().toLowerCase();
			internalOptionsArr = additionalOptions.filter(
				option => (
					option.label.toLowerCase().includes(trimmedFilter)
				)
			);
		}

		let optionsToReturn = [];
		if (limit) {
			for (let i = offset; i < offset + limit; i++) {
				if (i < internalOptionsArr.length)
					optionsToReturn.push(internalOptionsArr[i]);
			}
		} else {
			optionsToReturn = internalOptionsArr;
		}

		return optionsToReturn;
	};

	const createNewOption = async (newOptionLabel) => {
		const value = `${newOptionLabel}_${additionalOptions.length}`
		const newOption = {
			label: newOptionLabel,
			value,
		}
		additionalOptions.push(newOption);

		return newOption;
	}

	const fields = useMemo(
		() => (
			[
				{
					name: "advancedSelection",
					label,
					required,
					disabled,
					type: "advancedSelection",
					inputSettings: {
						options: options,
						getOptions: optionsOrigin === "db" ? getOptions : undefined,
						getOptionsLimit: optionsOrigin === "db" ? getOptionsLimit : undefined,
						createNewOption,
					}
				},
			] as FieldDef<AdvancedSelectionDef>[]
		),
		[
			label,
			required,
			disabled,
			groupByCategory,
			options,
			getOptions,
			getOptionsLimit,
			createNewOption,
			optionsOrigin,
		]
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
		<Form
			buttons={buttons}
			title='Form Title'
			description='This is a description example'
			state={state}
			fields={fields}
			dispatch={dispatch}
		/>
	);
}

describe("AdvancedSelection component", () => {
	it("should select an option and display its chip", async () => {
		render(<AdvancedSelectExample optionsOrigin="db"/>);

		const addButton = screen.getByText("ADD ELEMENT");
		fireEvent.click(addButton);

		expect(await screen.findByTestId("drawer-title-test")).toBeTruthy();

		const optionCheckbox = await screen.findByText("Option 2");
		fireEvent.click(optionCheckbox);

		const optionChip = await screen.findByTestId("delete-icon-test-id");
		expect(optionChip).toBeTruthy();
	});

	it("should remove a selected option", async () => {
		render(<AdvancedSelectExample optionsOrigin="db"/>);

		const addButton = screen.getByText("ADD ELEMENT");
		fireEvent.click(addButton);

		expect(await screen.findByTestId("drawer-title-test")).toBeTruthy();

		const optionCheckbox = await screen.findByText("Option 2");
		fireEvent.click(optionCheckbox);

		const optionChip = await screen.findAllByTestId("delete-icon-test-id");
		expect(optionChip.length).toBe(1);
		fireEvent.click(optionChip[0]);

		const remainingChips = screen.queryAllByTestId("delete-icon-test-id");

		await waitFor(() => {
			expect(remainingChips.length).toBe(0);
		})
	});

	it("should filter the options", async () => {
		render(<AdvancedSelectExample optionsOrigin="db"/>);

		const addButton = screen.getByText("ADD ELEMENT");
		fireEvent.click(addButton);

		expect(await screen.findByTestId("drawer-title-test")).toBeTruthy();

		const inputNode = screen.getByPlaceholderText("Search...");
		fireEvent.change(inputNode, { target: { value: "abc" } });

		await waitFor(() => {
			expect(screen.queryByText("Option 1")).toBe(null);
		});

		expect(await screen.findByText("abc")).toBeTruthy();
	});

	it("should create a new option", async () => {
		render(<AdvancedSelectExample optionsOrigin="local"/>);

		const addButton = screen.getByText("ADD ELEMENT");
		fireEvent.click(addButton);

		expect(await screen.findByTestId("drawer-title-test")).toBeTruthy();

		const inputNode = screen.getByPlaceholderText("Search...");
		fireEvent.change(inputNode, { target: { value: "Brand new option" } });
		fireEvent.click(await screen.findByText("Create"));

		expect(await screen.findByText("Brand new option")).toBeTruthy();
	});
});
