import * as React from "react";
import {
	memo,
	ReactElement,
	useEffect,
	useState
} from "react";

// Context
import { RefsProvider } from "../shared/refsContext/RefsContext";

// Types
import { AdvancedSelectionData, AdvancedSelectionInputSettings } from "./AdvancedSelectionTypes";
import { MosaicFieldProps } from "@root/components/Field";

// Components
import AddIcon from "@mui/icons-material/Add";
import Button from "@root/components/Button";
import Drawer from "@root/components/Drawer";
import AdvancedSelectionDrawer from "./AdvancedSelectionDrawer";
import ChipList from "./ChipList";

// Styles
import {
	AdvancedSelectionWrapper,
} from "./AdvancedSelection.styled";
import { BREAKPOINTS } from "@root/theme/theme";
import { MosaicObject } from "@root/types";
import { transform_chips } from "@root/transforms";

const FormFieldAdvancedSelection = (props: MosaicFieldProps<"advancedSelection", AdvancedSelectionInputSettings, AdvancedSelectionData>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		fieldDef,
	} = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const setResponsiveness = () => {
			setIsMobileView(window.innerWidth < BREAKPOINTS.mobile);
		};

		setResponsiveness();
		window.addEventListener("resize", setResponsiveness);

		return () => {
			window.removeEventListener("resize", setResponsiveness);
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
		if (typeof save === "boolean" && save) {
			setIsModalOpen(false);
			if (onBlur) await onBlur();
		} else {
			setIsModalOpen(false);
			if (onBlur) await onBlur();
		}
	};

	const initialRefs: MosaicObject = {
		topComponentDrawerRef: null,
		formLayoutRef: null,
	}

	return (
		<>
			{value?.length > 0 && !isModalOpen ? (
				<AdvancedSelectionWrapper>
					{!fieldDef.disabled ? (
						<>
							<Button
								color="teal"
								variant="text"
								label="Add"
								onClick={handleOpenModal}
								mIcon={AddIcon}
								attrs={{ style: { marginBottom: "16px" } }}
							></Button>

							<ChipList
								value={value}
								fieldDef={{
									inputSettings: {
										isModalOpen,
										isMobileView,
										deleteSelectedOption: onChange,
									},
									disabled: fieldDef?.disabled,
								}}
							/>
						</>
					) : <>{transform_chips()({ data: value })}</>}
				</AdvancedSelectionWrapper>
			) : (
				!fieldDef.disabled && (
					<Button
						color="gray"
						variant="outlined"
						label="ADD"
						onClick={handleOpenModal}
					></Button>
				)
			)}
			<RefsProvider initialRefs={initialRefs}>
				<Drawer
					open={isModalOpen}
					onClose={handleClose} backdropCloseHandler={false}
				>
					<AdvancedSelectionDrawer
						value={value ?? []}
						fieldDef={fieldDef}
						onChange={onChange}
						isModalOpen={isModalOpen}
						isMobileView={isMobileView}
						handleClose={handleClose}
					/>
				</Drawer>
			</RefsProvider>
		</>
	);
};

export default memo(FormFieldAdvancedSelection);
