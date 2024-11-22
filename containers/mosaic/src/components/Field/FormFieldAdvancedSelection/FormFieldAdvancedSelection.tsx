import * as React from "react";
import type {
	ReactElement } from "react";
import {
	memo,
	useCallback,
	useEffect,
	useState,
} from "react";

// Types
import type { AdvancedSelectionData, AdvancedSelectionInputSettings } from "./AdvancedSelectionTypes";
import type { MosaicFieldProps } from "@root/components/Field";

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
import type { MosaicLabelValue } from "@root/types";
import { FormFieldAdvancedSelectionSkeleton } from "./FormFieldAdvancedSelectionSkeleton";

const FormFieldAdvancedSelection = (props: MosaicFieldProps<"advancedSelection", AdvancedSelectionInputSettings, AdvancedSelectionData>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		disabled,
		fieldDef,
		skeleton,
	} = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);

	const selectLimit = (fieldDef?.inputSettings?.selectLimit || 0) > 0 ? fieldDef?.inputSettings?.selectLimit : -1;

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

	const deleteSelectedOption = useCallback(async (options: MosaicLabelValue[]) => {
		await onChange(options);
		await onBlur();
	}, [onChange]);

	if (skeleton) {
		return <FormFieldAdvancedSelectionSkeleton />;
	}

	return (
		<>
			{value?.length > 0 ? (
				<AdvancedSelectionWrapper>
					{(selectLimit < 0 || value?.length < selectLimit) && (
						<Button
							color="teal"
							variant="text"
							label="Add"
							onClick={handleOpenModal}
							mIcon={AddIcon}
							attrs={{ style: { marginBottom: "16px" } }}
							disabled={disabled}
						/>
					)}
					<ChipList
						value={value}
						fieldDef={{
							inputSettings: {
								isMobileView,
								deleteSelectedOption,
							},
							disabled,
						}}
					/>
				</AdvancedSelectionWrapper>
			) : (
				<Button
					color="gray"
					variant="outlined"
					label="ADD"
					onClick={handleOpenModal}
					disabled={disabled}
				/>
			)}
			<Drawer
				open={isModalOpen}
				onClose={handleClose}
				backdropCloseHandler={false}
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
		</>
	);
};

export default memo(FormFieldAdvancedSelection);
