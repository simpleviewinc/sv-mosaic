import { render, cleanup, fireEvent, screen, waitFor, act } from "@testing-library/react";
import React, { useMemo } from "react";

import type { ButtonProps } from "@root/components/Button";
import type { FieldDef } from "@root/components/Field";
import type { optionsWithCategory } from "@root/components/Field/FormFieldAdvancedSelection";

import Form, { useForm } from "@root/components/Form";
import { optionsLibrary } from "@root/mock";
import JSONDB from "@root/utils/JSONDB";
import categories from "@root/components/DataView/example/categories.json";
import MultiSelectHelper from "@root/components/DataView/example/MultiSelectHelper";
import testIds from "@root/utils/testIds";

afterEach(cleanup);

const externalOptions = [
	{
		category: "Category 1",
		label: "Option 1",
		value: "option_1-cat_1",
	},
];

const AdvancedSelectExample = ({ optionsOrigin }: { optionsOrigin: "db" | "local" }) => {
	const controller = useForm();
	const { handleSubmit } = controller;
	const options: optionsWithCategory[] = externalOptions ? externalOptions : [];

	const groupByCategory = false;
	const label = "Label";
	const required = false;
	const disabled = false;
	const getOptionsLimit = 5;
	const selectLimit = 3;

	const categoriesApi = new JSONDB(categories);

	const categoriesHelper = new MultiSelectHelper({
		api: categoriesApi,
		labelColumn: "tag",
		valueColumn: "id",
		sortColumn: "sort_tag",
	});

	const createNewOption = async (newOptionLabel) => {
		const value = `id_${(new Date()).getTime()}`;
		const newOption = {
			_id: value,
			tag: newOptionLabel,
			sort_tag: newOptionLabel,
			updated: new Date(),
			created: new Date(),
			id: value,
		};

		//Insert to db
		optionsLibrary.push({ label: newOption.tag, value: newOption.id });

		const data = await categoriesApi.getData();

		const newData = [...data, newOption];

		await categoriesApi.setData(newData);

		return { label: newOption.tag, value: newOption.id };
	};

	const fields: FieldDef[] = useMemo(
		() => (
			[
				{
					name: "advancedSelection",
					label,
					required,
					disabled,
					type: "advancedSelection",
					inputSettings: {
						options: optionsOrigin === "local" ? options : undefined,
						getOptions: optionsOrigin === "db" ? categoriesHelper.getOptions.bind(categoriesHelper) : undefined,
						getOptionsLimit: optionsOrigin === "db" ? getOptionsLimit : undefined,
						createNewOption,
						selectLimit,
					},
				},
			]
		),
		[
			label,
			required,
			disabled,
			groupByCategory,
			options,
			getOptionsLimit,
			createNewOption,
			optionsOrigin,
			selectLimit,
		],
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
		<Form
			{...controller}
			buttons={buttons}
			title="Form Title"
			description="This is a description example"
			fields={fields}
		/>
	);
};

const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

describe("AdvancedSelection component", () => {
	it("should select an option and display its chip", async () => {
		render(<AdvancedSelectExample optionsOrigin="db" />);

		const addButton = screen.getByText("ADD");
		await act(async () => {
			fireEvent.click(addButton);
		});

		expect(await screen.findByTestId("page-header-test-id")).toBeTruthy();

		const optionCheckbox = await screen.findByText("Accessibility");
		fireEvent.click(optionCheckbox);

		const optionChip = await screen.findByTestId(testIds.CHIP_DELETE_ICON);
		expect(optionChip).toBeTruthy();
	});

	it("should remove a selected option", async () => {
		render(<AdvancedSelectExample optionsOrigin="db" />);

		const addButton = screen.getByText("ADD");
		await act(async () => {
			fireEvent.click(addButton);
		});

		expect(await screen.findByTestId("page-header-test-id")).toBeTruthy();

		const optionCheckbox = await screen.findByText("Accessibility");
		fireEvent.click(optionCheckbox);

		const optionChip = await screen.findAllByTestId(testIds.CHIP_DELETE_ICON);
		expect(optionChip.length).toBe(1);
		fireEvent.click(optionChip[0]);

		const remainingChips = screen.queryAllByTestId(testIds.CHIP_DELETE_ICON);

		await waitFor(() => {
			expect(remainingChips.length).toBe(0);
		});
	});

	it("should filter the options", async () => {
		render(<AdvancedSelectExample optionsOrigin="db" />);

		const addButton = screen.getByText("ADD");
		await act(async () => {
			fireEvent.click(addButton);
		});

		expect(await screen.findByTestId("page-header-test-id")).toBeTruthy();

		const inputNode = screen.getByPlaceholderText("Search...");
		fireEvent.change(inputNode, { target: { value: "Art" } });

		await waitFor(() => {
			expect(screen.queryByText("Accessibility")).toBe(null);
		});

		expect(await screen.findByText("ArtPrize")).toBeTruthy();
	});

	it("should create a new option", async () => {
		render(<AdvancedSelectExample optionsOrigin="local" />);

		const addButton = screen.getByText("ADD");
		await act(async () => {
			fireEvent.click(addButton);
		});

		expect(await screen.findByTestId("page-header-test-id")).toBeTruthy();

		const inputNode = screen.getByPlaceholderText("Search...");
		fireEvent.change(inputNode, { target: { value: "Brand new option" } });
		fireEvent.click(await screen.findByText("Create"));

		expect(await screen.findByText("Brand new option")).toBeTruthy();
	});

	it("should only select three options, then the checkbokList should be disabled", async () => {
		render(<AdvancedSelectExample optionsOrigin="db" />);

		const addButton = screen.getByText("ADD");
		await act(async () => {
			fireEvent.click(addButton);
		});

		expect(await screen.findByTestId("page-header-test-id")).toBeTruthy();

		const optionCheckbox = await screen.findAllByTestId("label-test-id");

		for (let i = 0; i <= 3; i++) {
			fireEvent.click(optionCheckbox[i]);
		}

		const optionChip = await screen.findAllByTestId(testIds.CHIP_DELETE_ICON);

		expect(optionChip.length === 3).toBeTruthy();
		expect(optionCheckbox[3]).toHaveClass("Mui-disabled");
	});
});
