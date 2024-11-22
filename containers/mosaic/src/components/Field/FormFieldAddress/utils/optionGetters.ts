import type { MosaicLabelValue } from "@root/types";
import countriesWithStates from "@root/components/Field/FormFieldAddress/utils/trimmedCountriesStates.json";

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
