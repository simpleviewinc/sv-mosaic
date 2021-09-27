import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Tooltip from './Tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';

beforeEach(() => {
	document.createRange = () => ({
		setStart: jest.fn(),
		setEnd: jest.fn(),
		// The types of the common Ancestor Container object in the following line
		// are ignored just for practical purposes to run the test.
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		commonAncestorContainer: {
			nodeName: 'BODY',
			ownerDocument: document,
		},
	});
});

afterEach(cleanup);

describe('Tooltip component', () => {
	it('should render a regular tooltip', async () => {
		const tooltip = render(
			<Tooltip text='Default tooltip test' type='default'>
				<MoreVertIcon />
			</Tooltip>
		);

		fireEvent.mouseOver(tooltip.getByTestId('tooltip-test-id'));

		expect(
			await tooltip.findByText("Default tooltip test")
		).toBeInTheDocument();
	});
	
	it('should render an advanced tooltip', async () => {
		const tooltip = render(
			<Tooltip text='Advanced tooltip test' type='advanced'>
				<MoreVertIcon />
			</Tooltip>
		);

		fireEvent.mouseOver(tooltip.getByTestId('tooltip-test-id'));

		expect(
			await tooltip.findByText("Advanced tooltip test")
		).toBeInTheDocument();
	});
});