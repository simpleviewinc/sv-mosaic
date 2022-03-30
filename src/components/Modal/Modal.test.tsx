// import * as React from 'react';
// import { useMemo, useState } from 'react';
// import { render, cleanup, fireEvent, screen, act } from '@testing-library/react';

// // Components
// import Modal from './Modal';
// import Button from '@root/forms/Button';
// import { FieldDef } from '../Field';
// import { TextFieldDef } from '@root/forms/FormFieldText';
// import { useForm } from '@root/forms/Form/formUtils';

// afterEach(cleanup);

// const handlePrimaryAction = jest.fn();
// const handleSecondaryAction = jest.fn();

// const ModalExample = () => {
// 	const { state, dispatch, registerFields, registerOnSubmit } = useForm();
// 	const [open, setOpen] = useState(false);

// 	const handleClickOpen = () => {
// 		setOpen(true);
// 	};

// 	const handleClose = () => {
// 		setOpen(false);
// 	};

// 	const primaryAction = () => {
// 		alert('The primary button was clicked');
// 		setOpen(false);
// 	};

// 	useMemo(() => {
// 		registerOnSubmit(primaryAction);
// 	}, [primaryAction, registerOnSubmit]);

// 	const fields = useMemo(
// 		() =>
// 			[
// 				{
// 					name: "text1",
// 					label: "Simple Text",
// 					type: "text",
// 					inputSettings: {
// 						maxCharacters: 20,
// 					},
// 					instructionText: 'testing',
// 				}
// 			] as FieldDef<TextFieldDef>[],
// 		[]
// 	);

// 	useMemo(() => {
// 		registerFields(fields);
// 	}, [fields, registerFields]);

// 	return (
// 		<>
// 			<Button onClick={handleClickOpen}>Open modal</Button>
// 			<Modal
// 				state={state}
// 				dispatch={dispatch}
// 				fields={fields}
// 				title={'dialogTitle'}
// 				open={open}
// 				onCancel={handleClose}
// 				onSubmit={primaryAction}
// 			/>

// 		</>
// 	);
// };

// describe('Modal component', () => {
// 	beforeEach(() => {
// 		render(<ModalExample />);
// 		const openButton = screen.getByText('Open modal');

// 		fireEvent.click(openButton);
// 	});

// 	it('should show its content', () => {
// 		const dialogContent = screen.getByText('Test content');
// 		const dialogTitle = screen.getByText('Dialog title');

// 		expect(dialogContent).toBeTruthy();
// 		expect(dialogTitle).toBeTruthy();
// 	});

// 	it('should trigger secondary button action', () => {
// 		const secondaryButton = screen.getByText('Close');

// 		fireEvent.click(secondaryButton);

// 		expect(handleSecondaryAction).toHaveBeenCalledTimes(1);
// 	});

// 	it('should trigger primary button action', () => {
// 		const primaryButton = screen.getByText('Save');

// 		fireEvent.click(primaryButton);

// 		expect(handlePrimaryAction).toHaveBeenCalledTimes(1);
// 	});

// 	it('should display close icon', () => {
// 		const closeButton = screen.getByTestId('close-icon');

// 		expect(closeButton).toBeTruthy();
// 	});

// 	it('should display back icon on mobile view', async () => {

// 		act(() => {
// 			global.innerWidth = 450;
// 			global.dispatchEvent(new Event('resize'));
// 		});

// 		const backButton = screen.getByTestId('arrow-back-icon');

// 		expect(backButton).toBeTruthy();
// 	});
// });

it.skip("skip", () => undefined);