import type { MosaicLabelValue } from "@root/types";
import countriesWithStates from "./trimmedCountriesStates.json";

export const mockOptions: MosaicLabelValue[] = [
	{
		label: "Dog",
		value: "dog",
	},
	{
		label: "Cat",
		value: "cat",
	},
	{
		label: "Horse",
		value: "horse",
	},
	{
		label: "Lion",
		value: "lion",
	},
	{
		label: "Tiger",
		value: "tiger",
	},
	{
		label: "Human",
		value: "human",
	},
	{
		label: "Cow",
		value: "cow",
	},
	{
		label: "Snake",
		value: "snake",
	},
	{
		label: "Bear",
		value: "bear",
	},
	{
		label: "Wolf",
		value: "wolf",
	},
	{
		label: "Koala",
		value: "koala",
	},
	{
		label: "Deer",
		value: "deer",
	},
	{
		label: "Giraffe",
		value: "giraffe",
	},
	{
		label: "Panda",
		value: "panda",
	},
];

export const getOptions: () => Promise<MosaicLabelValue[]> = async () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(mockOptions);
		}, 500);
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
