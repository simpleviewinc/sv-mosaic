import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { AddressAutocompleteInputSettings } from "@root/components/Field/FormFieldAddress/AddressAutocomplete";
import type { FormMethods, MosaicFieldProps } from "@root/components";

import AddressAutocompleteField from "@root/components/Field/FormFieldAddress/AddressAutocomplete/AddressAutocompleteField";
import { mockAutocompleteService, mockGeocodedItems } from "mock/address";
import { mockAddresses } from "@root/mock";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";
import { defaultFormContextMethods, FormContext } from "@root/components/Form/FormContext";
import { getInitialState } from "@root/components/Form/useForm/initial";
import testIds from "@root/utils/testIds";

const mocks = vi.hoisted(() => ({
	useLoadScript: vi.fn(() => ({
		isLoaded: true,
		loadError: false,
	})),
	geocodeByAddress: vi.fn(() => []),
}));

vi.mock("@react-google-maps/api", () => ({
	useLoadScript: mocks.useLoadScript,
}));

vi.mock("react-places-autocomplete", async (importOriginal) => ({
	// eslint-disable-next-line @typescript-eslint/consistent-type-imports
	...await importOriginal<typeof import("react-places-autocomplete")>(),
	geocodeByAddress: mocks.geocodeByAddress,
}));

mockAutocompleteService();

async function setup(
	props: Partial<MosaicFieldProps<"text", AddressAutocompleteInputSettings, string>> = {},
	formMethods: Partial<FormMethods> = {},
) {
	const onChangeCbMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormContext.Provider
			value={{
				state: getInitialState(),
				methods: { ...defaultFormContextMethods, ...formMethods },
			}}
		>
			<AddressAutocompleteField
				fieldDef={{
					name: "autocomplete",
					label: "Autocomplete",
					type: "text",
					inputSettings: {
						getOptionsCountries,
						getOptionsStates,
					},
				}}
				onChange={onChangeCbMock}
				{...props}
			/>
		</FormContext.Provider>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

beforeEach(() => {
	mocks.useLoadScript.mockRestore();
	mocks.geocodeByAddress.mockRestore();
});

describe(__dirname, () => {
	it("should render the address autocomplete field type", async () => {
		await setup();

		expect(await screen.findByRole("textbox")).toBeInTheDocument();
	});

	it("should fire the context set form values method with the correct address information for addresses without postal town", async () => {
		mocks.geocodeByAddress.mockReturnValue([mockGeocodedItems[0]]);

		const setFormValuesMock = vi.fn();

		const { user } = await setup({ value: "12" }, { setFormValues: setFormValuesMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "3");
		await waitFor(() => expect(screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_SUGGESTIONS)).toBeInTheDocument());
		const suggestion = screen.getByRole("option", { name: "123 William Street, New York, NY, USA" });
		expect(suggestion).toBeInTheDocument();
		await user.click(suggestion);
		expect(setFormValuesMock).toBeCalledWith({
			path: undefined,
			validate: true,
			values: {
				address1: "123 William Street",
				address2: "",
				city: "New York",
				country: {
					label: "United States",
					value: "US",
				},
				postalCode: "10038",
				state: {
					label: "New York",
					value: "NY",
				},
			},
		});
	});

	it("should fire the context set form values method with the correct address information for addresses with postal town", async () => {
		mocks.geocodeByAddress.mockReturnValue([mockGeocodedItems[1]]);

		const setFormValuesMock = vi.fn();

		const { user } = await setup({ value: "12" }, { setFormValues: setFormValuesMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "3");
		await waitFor(() => expect(screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_SUGGESTIONS)).toBeInTheDocument());
		const suggestion = screen.getByRole("option", { name: "81 Sussex Gardens, Hucclecote, Gloucester, UK" });
		expect(suggestion).toBeInTheDocument();
		await user.click(suggestion);
		expect(setFormValuesMock).toBeCalledWith({
			path: undefined,
			validate: true,
			values: {
				...mockAddresses[0],
				types: undefined,
			},
		});
	});

	it("should warn the user if the country cannot be populated if it's not in the list of country options", async () => {
		vi.spyOn(console, "warn").mockImplementation(() => null);
		mocks.geocodeByAddress.mockReturnValue([mockGeocodedItems[1]]);

		const setFormValuesMock = vi.fn();

		const { user } = await setup({
			value: "12",
			fieldDef: {
				name: "autocomplete",
				label: "Autocomplete",
				type: "text",
				inputSettings: {
					getOptionsCountries: async () => [],
					getOptionsStates,
				},
			},
		}, {
			setFormValues: setFormValuesMock,
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "3");
		await waitFor(() => expect(screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_SUGGESTIONS)).toBeInTheDocument());
		const suggestion = screen.getByRole("option", { name: "81 Sussex Gardens, Hucclecote, Gloucester, UK" });
		expect(suggestion).toBeInTheDocument();
		await user.click(suggestion);
		const snackbar = screen.queryByRole("alert");
		expect(snackbar).toBeInTheDocument();
		expect(snackbar).toHaveTextContent("The following fields could not be autocompleted: Country, State.");
	});

	it("should display a skeleton when the skeleton prop is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
		expect(screen.queryByRole("textbox")).toBeNull();
	});
});
