import type { MosaicLabelValue } from "@root/types";
import countriesWithStates from "./trimmedCountriesStates.json";

export const optionsLibrary: MosaicLabelValue[] = [
	{
		label: "Option 1",
		value: "option_1-cat_1",
	},
	{
		label: "Option 2",
		value: "option_2-cat_1",
	},
	{
		label: "Option 3",
		value: "option_3-cat_1",
	},
	{
		label: "Option 4",
		value: "option_4-cat_1",
	},
	{
		label: "Option 1 category 2",
		value: "option_1-cat_2",
	},
	{
		label: "Test option category 2",
		value: "option_2-cat_2",
	},
	{
		label: "Another option of category 2",
		value: "option_3-cat_2",
	},
	{
		label: "Option 4 category 2",
		value: "option_4-cat_2",
	},
	{
		label: "You can filter by category",
		value: "option_1-test_category",
	},
	{
		label: "Very long label that does not fit",
		value: "option_2-test_category",
	},
	{
		label: "Option 1 category 4",
		value: "option_1-cat_4",
	},
	{
		label: "Option without category",
		value: "option_without_category",
	},
	{
		label: "ABC",
		value: "ABC_UPPER",
	},
	{
		label: "abc",
		value: "abc_lower",
	},
	{
		label: "abcdef",
		value: "option_abcdef",
	},
	{
		label: "Category 5",
		value: "abc123",
	},
	{
		label: "Category (With Escaped Characters)",
		value: "category_with_escape",
	},
];

export const getOptions: () => Promise<MosaicLabelValue[]> = async () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(optionsLibrary);
		}, 3000);
	});
};

export const getOptionsCountries = async (): Promise<MosaicLabelValue[]> => {
	return Promise.resolve(countriesWithStates.map((country) => ({
		label: country.name,
		value: country.iso2,
	})));
};

export const getOptionsStates = async (countryValue: string | undefined): Promise<MosaicLabelValue[]> => {
	const selectedCountry = countriesWithStates?.find(
		(c) => c.iso2 === countryValue,
	);

	if (selectedCountry) {
		return Promise.resolve(selectedCountry.states.map((state) => ({ label: state.name, value: state.code })));
	}

	return Promise.resolve([]);
};
