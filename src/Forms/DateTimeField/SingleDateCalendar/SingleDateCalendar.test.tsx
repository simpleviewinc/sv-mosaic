import { render } from '@testing-library/react';
import * as React from 'react';
import SingleDateCalendar from '../SingleDateCalendar';
//import * as DateFnsUtils from '@date-io/date-fns' // Works for test not for UI

describe('SingleDateCalendar component', () => {
	/* it('should should display the date picker component', () => {
		const { getByText } = render(
			<SingleDateCalendar
				utils={DateFnsUtils}
				disabled={false}
				value={new Date('2018-01-01T00:00:00.000Z')}
				onChange={() => jest.fn()}
			/>
		);
    
    screen.debug()
	}); */

	it('should should display the date value', () => {
		const { getByText } = render(
			<SingleDateCalendar
				disabled={true}
				value={new Date('2018-01-01T00:00:00.000Z')}
				onChange={() => jest.fn()}
			/>
		);
    
		expect(getByText('1/1/2018')).toBeTruthy();
	});

	it('should display the placeholder when is disabled and no value is provided', () => {
		const { getByText } = render(
			<SingleDateCalendar
				disabled={true}
				value={null}
				onChange={() => jest.fn()}
			/>
		);
    
		expect(getByText('MM / DD / YYYY')).toBeTruthy();
	})
});
