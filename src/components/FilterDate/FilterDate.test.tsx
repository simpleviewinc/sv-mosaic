import testArray from "../../utils/testArray";
import * as React from "react";
import * as Enzyme from "enzyme";
import { mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import FilterDate from "./FilterDate";

Enzyme.configure({
	adapter: new Adapter()
});

jest.mock("@root/i18n", () => {
	return {
		useMosaicTranslation : val => val
	};
});

describe(__filename, function() {
	describe("props", function() {
		const tests = [
			{
				name : "no data",
				args : {
					data : {},
					result : "any"
				}
			},
			{
				name : "valid range start only",
				args : {
					data : {
						rangeStart : new Date(2020, 0, 1)
					},
					result : "from 1/1/2020"
				}
			},
			{
				name : "valid range end only",
				args : {
					data : {
						rangeEnd : new Date(2020, 0, 1)
					},
					result : "to 1/1/2020"
				}
			},
			{
				name : "valid range start and end",
				args : {
					data : {
						rangeStart : new Date(2020, 0, 1),
						rangeEnd : new Date(2020, 11, 31)
					},
					result : "1/1/2020 - 12/31/2020"
				}
			},
			{
				name : "valid range start and end which are equal",
				args : {
					data : {
						rangeStart : new Date(2020, 0, 1),
						rangeEnd : new Date(2020, 0, 1)
					},
					result : "1/1/2020"
				}
			},
		];

		testArray(tests, async function(test) {
			const wrapper = mount(
				<FilterDate
					label="Testing"
					type="primary"
					data={test.data}
					args={{}}
					onRemove={() => {}}
					onChange={() => {}}
				/>
			);
	
			expect(wrapper.find("span.filterValue").text()).toEqual(test.result)
		})
	});
});