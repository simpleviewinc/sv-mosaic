import type { IAddress } from "@root/components";
import addressesAreEqual from "@root/components/Field/FormFieldAddress/utils/addressesAreEqual";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";

describe(__dirname, () => {
	interface Test {
		first?: IAddress;
		second?: IAddress;
		result: boolean;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should consider two addresses with the same parts equal",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: true,
			},
		},
		{
			name: "should consider two undefined addresses equal",
			args: {
				first: undefined,
				second: undefined,
				result: true,
			},
		},
		{
			name: "should consider two addresses equal if one is undefined and the other has all undefined properties for parts",
			args: {
				first: undefined,
				second: {
					address1: undefined,
					address2: undefined,
					address3: undefined,
					city: undefined,
					country: undefined,
					postalCode: undefined,
					state: undefined,
					types: undefined,
				},
				result: true,
			},
		},
		{
			name: "should consider an address and undefined not equal",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: undefined,
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the address1 part is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "42 High St",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the address2 part is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Trent",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the address3 part is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Mile",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the city part is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Brighton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the country part is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United States",
						value: "US",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the postal code part is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "BN1 8TA",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the state part is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Dorset",
						value: "Dorset",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the list of types is different",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Shipping",
							value: "shipping",
						},
					],
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the first has a list of types but the second doesn't",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: undefined,
				},
				result: false,
			},
		},
		{
			name: "should consider addresses not equal if the second has a list of types but the first doesn't",
			args: {
				first: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: undefined,
				},
				second: {
					address1: "25 Esthwaite Gardens",
					address2: "Coldfield",
					address3: "Chester",
					city: "Shepperton",
					country: {
						label: "United Kingdom",
						value: "GB",
					},
					postalCode: "TW17 0EE",
					state: {
						label: "Middlesex",
						value: "Middlesex",
					},
					types: [
						{
							label: "Physical",
							value: "physical",
						},
					],
				},
				result: false,
			},
		},
	];

	testArray(tests, (test) => expect(addressesAreEqual(test.first, test.second)).toBe(test.result));
});
