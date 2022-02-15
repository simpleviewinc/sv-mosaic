import { render } from '@testing-library/react';
import * as React from 'react';
import SingleDateCalendar from '.';

describe('SingleDateCalendar component', () => {
	it('should should display the date value', () => {
		const { getByText } = render(
			<SingleDateCalendar
				fieldDef={{
					name: 'singleDateCalendar',
					label: '',
					disabled: true,
				}}
				value={new Date('2018-01-01T00:00:00.000Z')}

			/>
		);

		expect(getByText('1/1/2018')).toBeTruthy();
	});

	it('should display the placeholder when is disabled and no value is provided', () => {
		const { getByText } = render(
			<SingleDateCalendar
				fieldDef={{
					name: 'singleDateCalendar',
					label: '',
					disabled: true,
				}}
				value={null}

			/>
		);

		expect(getByText('MM / DD / YYYY')).toBeTruthy();
	})
});
