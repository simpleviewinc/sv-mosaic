import { render } from '@testing-library/react';
import * as React from 'react';
import DateRangeCalendar from '../DateRangeCalendar';
//import * as DateFnsUtils from '@date-io/date-fns' // Works for test not for UI

describe('DateRangeCalendar component', () => {
	/* it('should should display the date picker component', () => {
		const { getByText } = render(
			<DateRangeCalendar
				utils={DateFnsUtils}
				disabled={false}
				value={new Date('2018-01-01T00:00:00.000Z')}
				onChange={() => jest.fn()}
			/>
		);
	}); */

	it('should should display the date value', () => {
		const { getByText } = render(
			<DateRangeCalendar
				disabled={true}
				fromValue={new Date('2017-01-01T00:00:00.000Z')}
				toValue={new Date('2018-01-01T00:00:00.000Z')}
				onChangeFrom={() => jest.fn()}
				onChangeTo={() => jest.fn()}
			/>
		);

		expect(getByText('1/1/2017')).toBeTruthy();
		expect(getByText('1/1/2018')).toBeTruthy();
	});

	it('should display the placeholder when is disabled and no value is provided', () => {
		const { getByText } = render(
			<DateRangeCalendar
				disabled={true}
				fromValue={null}
				toValue={null}
				onChangeFrom={() => jest.fn()}
				onChangeTo={() => jest.fn()}
			/>
		);

		expect(getByText('Start')).toBeTruthy();
		expect(getByText('To')).toBeTruthy();
		expect(getByText('End')).toBeTruthy();
	})
});
