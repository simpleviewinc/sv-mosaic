import type { AddressData } from "@root/components";

/**
 * These suggestions are in the format that would be expected
 * from the Google Maps Places AutocompleteService.
 */
export const mockSuggestions = [
	{
		description: "123 William Street, New York, NY, USA",
		place_id: "ChIJIaGbBBhawokRUmbgNsUmr-s",
		active: false,
		index: 0,
		structured_formatting: {
			main_text: "123 William Street",
			secondary_text: "New York, NY, USA",
		},
		matched_substrings: [
			{ length: 3, offset: 0 },
		],
		terms: [
			{ offset: 0, value: "123" },
			{ offset: 4, value: "William Street" },
			{ offset: 20, value: "New York" },
			{ offset: 30, value: "NY" },
			{ offset: 34, value: "USA" },
		],
		types: ["geocode", "premise"],
	},
	{
		description: "81 Sussex Gardens, Hucclecote, Gloucester, UK",
		place_id: "ChIJzeBE6AwFcUgR9MGNxwMF7Og",
		active: false,
		index: 1,
		structured_formatting: {
			main_text: "81 Sussex Gardens",
			secondary_text: "Hucclecote, Gloucester, UK",
		},
		matched_substrings: [
			{ length: 2, offset: 0 },
			{ length: 14, offset: 3 },
		],
		terms: [
			{ offset: 0, value: "81" },
			{ offset: 3, value: "Sussex Gardens" },
			{ offset: 19, value: "Hucclecote" },
			{ offset: 31, value: "Gloucester" },
			{ offset: 43, value: "UK" },
		],
		types: ["premise", "geocode"],
	},
];

export const mockGeocodedItems = [
	{
		address_components: [
			{ long_name: "123", short_name: "123", types: ["street_number"] },
			{
				long_name: "William Street",
				short_name: "William St",
				types: ["route"],
			},
			{
				long_name: "Manhattan",
				short_name: "Manhattan",
				types: ["political", "sublocality", "sublocality_level_1"],
			},
			{
				long_name: "New York",
				short_name: "New York",
				types: ["locality", "political"],
			},
			{
				long_name: "New York County",
				short_name: "New York County",
				types: ["administrative_area_level_2", "political"],
			},
			{
				long_name: "New York",
				short_name: "NY",
				types: ["administrative_area_level_1", "political"],
			},
			{
				long_name: "United States",
				short_name: "US",
				types: ["country", "political"],
			},
			{ long_name: "10038", short_name: "10038", types: ["postal_code"] },
			{
				long_name: "3804",
				short_name: "3804",
				types: ["postal_code_suffix"],
			},
		],
		formatted_address: "123 William St, New York, NY 10038, USA",
		geometry: {
			location: { lat: 40.7094055, lng: -74.0071269 },
			location_type: "ROOFTOP",
			viewport: {
				south: 40.7079548197085,
				west: -74.0083148802915,
				north: 40.7106527802915,
				east: -74.00561691970849,
			},
		},
		place_id: "ChIJGXp3nGBbwokR0k8exweu1Js",
		plus_code: {
			compound_code: "PX5V+Q4 New York, NY, USA",
			global_code: "87G7PX5V+Q4",
		},
		types: ["street_address"],
	},
	{
		address_components: [
			{ long_name: "81", short_name: "81", types: ["street_number"] },
			{
				long_name: "Sussex Gardens",
				short_name: "Sussex Gardens",
				types: ["route"],
			},
			{
				long_name: "Hucclecote",
				short_name: "Hucclecote",
				types: ["locality", "political"],
			},
			{
				long_name: "Gloucester",
				short_name: "Gloucester",
				types: ["postal_town"],
			},
			{
				long_name: "Gloucestershire",
				short_name: "Gloucestershire",
				types: ["administrative_area_level_2", "political"],
			},
			{
				long_name: "England",
				short_name: "England",
				types: ["administrative_area_level_1", "political"],
			},
			{
				long_name: "United Kingdom",
				short_name: "GB",
				types: ["country", "political"],
			},
			{ long_name: "GL3 3SP", short_name: "GL3 3SP", types: ["postal_code"] },
		],
		formatted_address: "81 Sussex Gardens, Hucclecote, Gloucester GL3 3SP, UK",
		geometry: {
			bounds: {
				south: 51.8547471,
				west: -2.1764513,
				north: 51.85480519999999,
				east: -2.1763237,
			},
			location: { lat: 51.8547713, lng: -2.1763885 },
			location_type: "ROOFTOP",
			viewport: {
				south: 51.8534271697085,
				west: -2.177864730291502,
				north: 51.8561251302915,
				east: -2.175166769708498,
			},
		},
		place_id: "ChIJzeBE6AwFcUgR9MGNxwMF7Og",
		types: ["premise"],
	},
];

export const mockAddresses: AddressData = [
	{
		address1: "81 Sussex Gardens",
		address2: "Hucclecote",
		country: {
			label: "United Kingdom",
			value: "GB",
		},
		city: "Gloucester",
		state: {
			label: "Gloucestershire",
			value: "GLS",
		},
		postalCode: "GL3 3SP",
		types: [{ label: "Billing", value: "billing" }],
	},
	{
		address1: "81 Sussex Gardens",
		address2: "Hucclecote",
		country: {
			label: "United Kingdom",
			value: "GB",
		},
		city: "Gloucester",
		state: {
			label: "Gloucestershire",
			value: "GLS",
		},
		postalCode: "GL3 3SP",
		types: [{ label: "Physical", value: "physical" }],
	},
	{
		address1: "81 Sussex Gardens",
		address2: "Hucclecote",
		country: {
			label: "United Kingdom",
			value: "GB",
		},
		city: "Gloucester",
		state: {
			label: "Gloucestershire",
			value: "GLS",
		},
		postalCode: "GL3 3SP",
		types: [{ label: "Shipping", value: "shipping" }],
	},
];

export function mockAutocompleteService() {
	class AutocompleteService {
		getPlacePredictions(_, callback) {
			return callback(mockSuggestions, "OK");
		}
	}

	global.window.google = {
		maps: {
			places: {
				// @ts-expect-error We are mocking AutocompleteService class.
				AutocompleteService,
				PlacesServiceStatus: {
					// @ts-expect-error The PlacesServiceStatus enum is equal to "OK"
					OK: "OK",
				},
			},
		},
	};
}
