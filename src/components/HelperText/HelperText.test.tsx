// React
import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

// Components
import HelperText from './HelperText';

afterEach(cleanup);

describe('HelperText component', () => {
	it('should display the error message with the alert icon', () => {
		render(<HelperText error>{'Error text'}</HelperText>);

		const errorHelperText = screen.getByText('Error text');
		const errorIcon = screen.getByTestId('error-icon-test-id');

		expect(errorIcon).toBeDefined();
		expect(errorHelperText).toBeDefined();
	});

	it('should display only the helper text', () => {
		render(<HelperText>{'Helper text'}</HelperText>);

		const helperText = screen.getByText('Helper text');
		const errorIcon = screen.queryByTestId('error-icon-test-id');

		expect(helperText).toBeDefined();
		expect(errorIcon).toBe(null);
	});
});
