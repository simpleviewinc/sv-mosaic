import * as React from 'react';
import {
	memo,
	ReactElement,
	useEffect,
	useRef,
	useState
} from 'react';

// Types
import { AdvancedSelectionDef } from './AdvancedSelectionTypes';
import { MosaicFieldProps } from '@root/components/Field';

// Components
import AddIcon from '@material-ui/icons/Add';
import Button from '@root/forms/Button';
import AdvancedSelectionModal from './AdvancedSelectionModal';

// Styles
import {
	AdvancedSelectionWrapper,
} from './AdvancedSelection.styled';
import ChipList from './ChipList';
import { BREAKPOINTS } from '@root/theme/theme';
import Drawer from "../../components/Drawer.jsx";
// import { useOutsideAlerter } from '../Form/Col';

const AdvancedSelection = (props: MosaicFieldProps<AdvancedSelectionDef>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value,
	} = props;

	const wrapperRef = useRef(null); //TODO talk with Owen
	// useOutsideAlerter(wrapperRef);

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);

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
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{value.length > 0 && !isModalOpen ? (
				<AdvancedSelectionWrapper ref={wrapperRef}>
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
				onClose={handleCloseModal}
			>
				<AdvancedSelectionModal
					value={value}
					fieldDef={fieldDef}
					onChange={onChange}
					isModalOpen={isModalOpen}
					isMobileView={isMobileView}
					handleCloseModal={handleCloseModal}
				/>
			</Drawer>
		</>
	);
};

export default memo(AdvancedSelection);
