import AddressAutocompleteField from "@root/components/Field/FormFieldAddress/AddressAutocomplete/AddressAutocompleteField";
import AddressStateField from "@root/components/Field/FormFieldAddress/AddressStateField/AddressStateField";
import getAddressFields from "@root/components/Field/FormFieldAddress/utils/getAddressFields";
import { validatePostcode } from "@root/utils/form/validators";

const getOptionsCountries = async () => [];
const getOptionsStates = async () => [];

describe(__dirname, () => {
	it("should throw an error when address1 is included without city", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["address1", "state", "postalCode"],
		})).toThrowError("The \"address1\" sub field requires the city to also be included.");
	});

	it("should throw an error when address1 is included without state", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["address1", "city", "postalCode"],
		})).toThrowError("The \"address1\" sub field requires the state to also be included.");
	});

	it("should throw an error when address1 is included without postalCode", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["address1", "city", "state"],
		})).toThrowError("The \"address1\" sub field requires the postalCode to also be included.");
	});

	it("should throw an error when address2 is included without address1", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["address2"],
		})).toThrowError("The \"address2\" sub field requires the address1 to also be included.");
	});

	it("should throw an error when address3 is included without address2", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["address3"],
		})).toThrowError("The \"address3\" sub field requires the address2 to also be included.");
	});

	it("should throw an error when state is included without country", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["state", "postalCode"],
		})).toThrowError("The \"state\" sub field requires the country to also be included.");
	});

	it("should throw an error when state is included without postalCode", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["state", "country"],
		})).toThrowError("The \"state\" sub field requires the postalCode to also be included.");
	});

	it("should throw an error when city is included without country", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["city", "state", "postalCode"],
		})).toThrowError("The \"city\" sub field requires the country to also be included.");
	});

	it("should throw an error when city is included without state", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["city", "country", "postalCode"],
		})).toThrowError("The \"city\" sub field requires the state to also be included.");
	});

	it("should throw an error when city is included without postalCode", async () => {
		expect(() => getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: ["city", "country", "state"],
		})).toThrowError("The \"city\" sub field requires the postalCode to also be included.");
	});

	it("should merge fields into the resulting fields object using the name", async () => {
		expect(getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			include: [
				{
					name: "postalCode",
					label: "My Post Code",
				},
			],
		})).toStrictEqual([
			{
				name: "postalCode",
				label: "My Post Code",
				disabled: undefined,
				inputSettings: {
					type: "string",
				},
				required: undefined,
				size: "sm",
				type: "text",
				validators:  [
					{
						fn: "validatePostcode",
						options:  {
							countryField: "country",
						},
					},
				],
			},
		]);
	});

	it("should render an autocomplete field for address1 if a Google Maps API key is provided", async () => {
		expect(getAddressFields({
			getOptionsCountries,
			getOptionsStates,
			googleMapsApiKey: "Foo",
			include: ["address1", "country", "city", "state", "postalCode"],
		})).toStrictEqual([
			{
				disabled: undefined,
				label: "Address",
				name: "address1",
				required: undefined,
				size: "lg",
				type: AddressAutocompleteField,
				inputSettings: {
					getOptionsCountries: getOptionsCountries,
					getOptionsStates: getOptionsStates,
					googleMapsApiKey: "Foo",
				},
			},
			{
				disabled: undefined,
				inputSettings: {
					getOptions: getOptionsCountries,
				},
				label: "Country",
				name: "country",
				required: undefined,
				size: "sm",
				type: "dropdown",
				validates: [
					{
						include: [
							validatePostcode,
						],
						name: "postalCode",
					},
				],
			},
			{
				disabled: undefined,
				label: "City",
				name: "city",
				required: undefined,
				size: "sm",
				type: "text",
			},
			{
				disabled: undefined,
				inputSettings: {
					getOptionsStates: getOptionsStates,
				},
				label: "State",
				name: "state",
				size: "sm",
				type: AddressStateField,
			},
			{
				disabled: undefined,
				inputSettings: {
					type: "string",
				},
				label: "Postal Code",
				name: "postalCode",
				required: undefined,
				size: "sm",
				type: "text",
				validators: [
					{
						fn: "validatePostcode",
						options: {
							countryField: "country",
						},
					},
				],
			},
		]);
	});

	it("should return all available sub fields if no include parameter is provided", async () => {
		expect(getAddressFields({
			getOptionsCountries,
			getOptionsStates,
		})).toStrictEqual([
			{
				disabled: undefined,
				label: "Address",
				name: "address1",
				required: undefined,
				size: "lg",
				type: "text",
			},
			{
				disabled: undefined,
				label: undefined,
				name: "address2",
				size: "lg",
				type: "text",
			},
			{
				disabled: undefined,
				label: undefined,
				name: "address3",
				size: "lg",
				type: "text",
			},
			{
				disabled: undefined,
				inputSettings: {
					getOptions: getOptionsCountries,
				},
				label: "Country",
				name: "country",
				required: undefined,
				size: "sm",
				type: "dropdown",
				validates: [
					{
						include: [
							validatePostcode,
						],
						name: "postalCode",
					},
				],
			},
			{
				disabled: undefined,
				label: "City",
				name: "city",
				required: undefined,
				size: "sm",
				type: "text",
			},
			{
				disabled: undefined,
				inputSettings: {
					getOptionsStates: getOptionsStates,
				},
				label: "State",
				name: "state",
				size: "sm",
				type: AddressStateField,
			},
			{
				disabled: undefined,
				inputSettings: {
					type: "string",
				},
				label: "Postal Code",
				name: "postalCode",
				required: undefined,
				size: "sm",
				type: "text",
				validators: [
					{
						fn: "validatePostcode",
						options: {
							countryField: "country",
						},
					},
				],
			},
		]);
	});
});
