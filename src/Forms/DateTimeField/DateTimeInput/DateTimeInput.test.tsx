import { render } from '@testing-library/react';
import * as React from 'react';
import DateTimeInput from '.';

describe('DateTimeInput component', () => {
	it('should should display the date value', () => {
		const { getByText } = render(
			<DateTimeInput
				fieldDef={{
					name: 'dateTimeInput',
					label: '',
					disabled: true,
				}}
			// dateValue={new Date('2018-01-01T00:00:00.000Z')}
			// timeValue={new Date('2018-01-01T00:00:00.000Z')}
			// onChangeDate={() => jest.fn()}
			// onChangeTime={() => jest.fn()}
			/>
		);

		expect(getByText('12:00 AM')).toBeTruthy();
		expect(getByText('1/1/2018')).toBeTruthy();
	});

	it('should display the placeholder when is disabled and no value is provided', () => {
		const { getByText } = render(
			<DateTimeInput
				fieldDef={{
					name: 'dateTimeInput',
					label: '',
					disabled: true,
				}}
			// dateValue={null}
			// timeValue={null}
			// onChangeDate={() => jest.fn()}
			// onChangeTime={() => jest.fn()}
			/>
		);

		expect(getByText('Start')).toBeTruthy();
		expect(getByText('00:00 AM/PM')).toBeTruthy();
	})
});
