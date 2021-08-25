import * as React from 'react';
import { ReactElement } from 'react';

// Material UI
import ClearIcon from '@material-ui/icons/Clear';

// Types and styles
import { ChipsProps } from './ChipTypes';
import { StyledChip, StyledDeletableChip, StyledLabel } from './Chip.styled';

const Chip = (props: ChipsProps): ReactElement => {
	const { label, required, disabled, selected, onDelete } = props;

	if (onDelete) {
		return (
			<StyledDeletableChip
				label={<StyledLabel>{label}</StyledLabel>}
				required={required}
				disabled={disabled}
				selected={selected}
				deleteIcon={<ClearIcon data-testid='delete-icon-test-id' />}
				onDelete={onDelete}
			/>
		);
	}

	return (
		<StyledChip
			label={<StyledLabel>{label}</StyledLabel>}
			required={required}
			disabled={disabled}
			selected={selected}
		/>
	);
};

export default Chip;
