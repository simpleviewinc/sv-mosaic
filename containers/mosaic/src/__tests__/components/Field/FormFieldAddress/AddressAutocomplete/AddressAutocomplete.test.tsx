import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { AddressAutocompleteProps } from "@root/components/Field/FormFieldAddress/AddressAutocomplete";

import AddressAutocomplete from "@root/components/Field/FormFieldAddress/AddressAutocomplete";
import testIds from "@root/utils/testIds";
import { mockAutocompleteService } from "../../../../mock/address";

const mocks = vi.hoisted(() => ({
	useLoadScript: vi.fn(() => ({
		isLoaded: true,
		loadError: false,
	})),
}));

vi.mock("@react-google-maps/api", () => ({
	useLoadScript: mocks.useLoadScript,
}));

mockAutocompleteService();

async function setup(props: Partial<AddressAutocompleteProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();
	const onSelect = props.onSelect || vi.fn();

	const renderResult = await act(async () => render(
		<AddressAutocomplete
			googleMapsApiKey="Foo"
			onChange={onChangeMock}
			onSelect={onSelect}
			value=""
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

beforeEach(() => {
	mocks.useLoadScript.mockRestore();
});

describe(__dirname, () => {
	it("should render the address autocomplete field", async () => {
		await setup();

		expect(await screen.findByRole("textbox")).toBeInTheDocument();
	});

	it("should not render the autocomplete field if the API is loading", async () => {
		mocks.useLoadScript.mockReturnValue({
			loadError: false,
			isLoaded: false,
		});

		await setup();

		expect(screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_TEXTBOX)).toBeNull();

		mocks.useLoadScript.mockRestore();
	});

	it("should not render the autocomplete field if the API errors", async () => {
		mocks.useLoadScript.mockReturnValue({
			loadError: true,
			isLoaded: true,
		});

		await setup();

		expect(screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_TEXTBOX)).toBeNull();

		mocks.useLoadScript.mockRestore();
	});

	it("should fire the on change handler when the non-autocomplete input is used", async () => {
		mocks.useLoadScript.mockReturnValue({
			loadError: true,
			isLoaded: false,
		});

		const onChangeMock = vi.fn();
		const { user } = await setup({ onChange: onChangeMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "A");
		expect(onChangeMock).toBeCalledWith("A");

		mocks.useLoadScript.mockRestore();
	});

	it("should render the suggestions container when the text field receives focus and close it again on backdrop close", async () => {
		const { user } = await setup({ value: "12" });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "3");
		await waitFor(() => expect(screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_SUGGESTIONS)).toBeInTheDocument());
		const backdrop = screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_BACKDROP);
		expect(backdrop).toBeInTheDocument();
		await user.click(backdrop);
		expect(backdrop).not.toBeInTheDocument();
	});

	it("should fire the on select handler when an autocomplete suggestion is clicked", async () => {
		const onSelectMock = vi.fn();
		const { user } = await setup({ value: "12", onSelect: onSelectMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "3");
		await waitFor(() => expect(screen.queryByTestId(testIds.FORM_FIELD_AUTOCOMPLETE_SUGGESTIONS)).toBeInTheDocument());
		const suggestion = screen.getByRole("option", { name: "123 William Street, New York, NY, USA" });
		expect(suggestion).toBeInTheDocument();
		await user.click(suggestion);
		expect(onSelectMock).toBeCalledWith(
			"123 William Street, New York, NY, USA",
			"ChIJIaGbBBhawokRUmbgNsUmr-s",
			{
				description: "123 William Street, New York, NY, USA",
				placeId: "ChIJIaGbBBhawokRUmbgNsUmr-s",
				active: true,
				index: 0,
				formattedSuggestion: {
					mainText: "123 William Street",
					secondaryText: "New York, NY, USA",
				},
				matchedSubstrings: [
					{
						length: 3,
						offset: 0,
					},
				],
				terms: [
					{
						offset: 0,
						value: "123",
					},
					{
						offset: 4,
						value: "William Street",
					},
					{
						offset: 20,
						value: "New York",
					},
					{
						offset: 30,
						value: "NY",
					},
					{
						offset: 34,
						value: "USA",
					},
				],
				types: ["geocode", "premise"],
			},
		);
	});

	it("should propagate the blur event", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });
		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.keyboard("{Tab}");
		expect(onBlurMock).toBeCalled();
	});
});
