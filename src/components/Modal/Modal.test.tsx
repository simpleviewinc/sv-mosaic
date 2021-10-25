import * as React from 'react';
import { useState } from 'react';
import { render, cleanup, fireEvent, screen, act } from '@testing-library/react';

// Components
import Modal from './Modal';
import Button from '@root/forms/Button';

afterEach(cleanup);

const handlePrimaryAction = jest.fn();
const handleSecondaryAction = jest.fn();

const ModalExample = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<Button onClick={handleClickOpen}>Open dialog</Button>
			<Modal
				dialogTitle='Dialog title'
				open={open}
				onClose={jest.fn()}
				primaryAction={handlePrimaryAction}
				primaryBtnLabel='Save'
				secondaryAction={handleSecondaryAction}
				secondaryBtnLabel='Close'
			>
				{'Test content'}
			</Modal>
		</>
	);
};

describe('Modal component', () => {
	beforeEach(() => {
		render(<ModalExample />);
		const openButton = screen.getByText('Open dialog');

		fireEvent.click(openButton);
	});

	it('should show its content', () => {
		const dialogContent = screen.getByText('Test content');
		const dialogTitle = screen.getByText('Dialog title');

		expect(dialogContent).toBeTruthy();
		expect(dialogTitle).toBeTruthy();
	});

	it('should trigger secondary button action', () => {
		const secondaryButton = screen.getByText('Close');
  
		fireEvent.click(secondaryButton);

		expect(handleSecondaryAction).toHaveBeenCalledTimes(1);
	});

	it('should trigger primary button action', () => {
		const primaryButton = screen.getByText('Save');
  
		fireEvent.click(primaryButton);

		expect(handlePrimaryAction).toHaveBeenCalledTimes(1);
	});

	it('should display close icon', () => {
		const closeButton = screen.getByTestId('close-icon');

		expect(closeButton).toBeTruthy();
	});

	it('should display back icon on mobile view', async() => {
	
		act(() => {
			global.innerWidth = 450;
			global.dispatchEvent(new Event('resize'));
		});

		const backButton = screen.getByTestId('arrow-back-icon');

		expect(backButton).toBeTruthy();
	});
});
