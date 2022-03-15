import * as React from 'react';
import {
	memo,
	ReactElement,
	useEffect,
	useState
} from 'react';

// Types
import { AdvancedSelectionDef } from './AdvancedSelectionTypes';
import { MosaicFieldProps } from '@root/components/Field';

// Components
import AddIcon from '@material-ui/icons/Add';
import Button from '@root/forms/Button';
import Drawer from "../../components/Drawer.jsx";
import AdvancedSelectionDrawer from './AdvancedSelectionDrawer';
import ChipList from './ChipList';

// Styles
import {
	AdvancedSelectionWrapper,
} from './AdvancedSelection.styled';
import { BREAKPOINTS } from '@root/theme/theme';

const AdvancedSelection = (props: MosaicFieldProps<AdvancedSelectionDef>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		fieldDef,
	} = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);

	const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
	const [dialogOpen, setIsDialogOpen] = useState(false);

	useEffect(() => {
		const setResponsiveness = () => {
			setIsMobileView(window.innerWidth < BREAKPOINTS.mobile);
		};

		setResponsiveness();
		window.addEventListener('resize', setResponsiveness);

		return () => {
			window.removeEventListener('resize', setResponsiveness);
		};
	}, []);

	/**
   * Sets the open state of the modal to true.
   */
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	/**
   * Sets the open state of the modal to false.
   */
	const handleClose = async (save = false) => {
		if (typeof save === 'boolean' && save) {
			setIsModalOpen(false);
			await onBlur();
		} else if (hasUnsavedChanges)
			setIsDialogOpen(true);
		else {
			setIsModalOpen(false);
			await onBlur();
		}
	};

	const handleDialogClose = async (close: boolean) => {
		if (close) {
			setIsModalOpen(false);
			await onBlur();
		}
		setIsDialogOpen(false);
	}

	return (
		<>
			{value.length > 0 && !isModalOpen ? (
				<AdvancedSelectionWrapper>
					<Button
						buttonType='blueText'
						disabled={fieldDef?.disabled}
						icon={AddIcon}
						onClick={handleOpenModal}
						style={{ marginBottom: '8px' }}
					>
						Add Element
					</Button>
					<ChipList
						fieldDef={{
							inputSettings: {
								isModalOpen,
								isMobileView,
								selectedOptions: value,
								getSelected: fieldDef?.inputSettings?.getSelected,
								deleteSelectedOption: onChange,
							},
							disabled: fieldDef?.disabled
						}}
					/>
				</AdvancedSelectionWrapper>
			) : (
				<Button
					buttonType='secondary'
					disabled={fieldDef?.disabled}
					onClick={handleOpenModal}
				>
					ADD ELEMENT
				</Button>
			)}
			<Drawer
				open={isModalOpen}
				onClose={handleClose}
			>
				<AdvancedSelectionDrawer
					value={value}
					fieldDef={fieldDef}
					onChange={onChange}
					isModalOpen={isModalOpen}
					isMobileView={isMobileView}
					handleClose={handleClose}
					handleUnsavedChanges={(e) => setUnsavedChanges(e)}
					dialogOpen={dialogOpen}
					handleDialogClose={handleDialogClose}
				/>
			</Drawer>
		</>
	);
};

export default memo(AdvancedSelection);
