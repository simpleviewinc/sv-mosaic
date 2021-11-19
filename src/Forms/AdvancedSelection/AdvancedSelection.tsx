import * as React from 'react';
import { ReactElement, useState } from 'react';
import { AdvancedSelectionProps } from './AdvancedSelectionTypes';

// Components
import Button from '@root/forms/Button';
import Chip from '@root/components/Chip';
import CheckboxList from '@root/components/CheckboxList';
import Modal from '@root/components/Modal';

// Styles
import { StyledInput } from './AdvancedSelection.styled';
import { ChipsWrapper } from './AdvancedSelection.styled';

const AdvancedSelection = (props: AdvancedSelectionProps): ReactElement => {
	const { options, inputTitle } = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [optionsChecked, setOptionsChecked] = useState([]);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};

	const onChange = (checked) => {
		setOptionsChecked(checked);
	};

	const handleSaveSelection = () => {
		console.log('Save selection');
	};

	const onChipDelete = (label) => {
		setOptionsChecked((options) =>
			options.filter((option) => option !== label)
		);
	};

	const listOfChips = optionsChecked.map((option, idx) => {
		return (
			<Chip
				key={`${option}-${idx}`}
				label={option}
				onDelete={() => onChipDelete(option)}
			/>
		);
	});

	const listOfOptions = options.map((option, idx) => {
		return (
			<div key={`${option.category}-${idx}`}>
				<span>{option.category}</span>
				<CheckboxList
					checked={optionsChecked}
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
				{optionsChecked.length > 0 && (
					<ChipsWrapper>{listOfChips}</ChipsWrapper>
				)}
				<StyledInput type='text' placeholder='Search...' />
				{listOfOptions}
			</Modal>
		</>
	);
};

export default AdvancedSelection;
