import * as React from 'react';
import { ReactElement, useState } from 'react';
import { AdvancedSelectionProps } from './AdvancedSelectionTypes';

// Components
import Button from '@root/forms/Button';
import CheckboxList from '@root/components/CheckboxList';
import Modal from '@root/components/Modal';

const AdvancedSelection = (props: AdvancedSelectionProps): ReactElement => {
	const { options, inputTitle } = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [checked, setChecked] = useState([]);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};

	const onChange = (checked) => {
		setChecked(checked);
	};

	const handleSaveSelection = () => {
		console.log('Save selection');
	};

	const listOfOptions = options.map((option, idx) => {
		return (
			<div key={`${option.category}-${idx}`}>
				<span>{option.category}</span>
				<CheckboxList
					checked={checked}
					options={option.options}
					onChange={onChange}
				/>
			</div>
		);
	});

	return (
		<>
			<Button buttonType='secondary' onClick={handleOpenModal}>
        ADD ELEMENT
			</Button>
			<Modal
				dialogTitle={inputTitle}
				open={isModalOpen}
				onClose={handleClose}
				primaryAction={handleSaveSelection}
				primaryBtnLabel='Save'
				secondaryAction={handleClose}
				secondaryBtnLabel='Cancel'
			>
				{listOfOptions}
			</Modal>
		</>
	);
};

export default AdvancedSelection;
