import * as React from "react";
import type {
	ReactElement } from "react";
import {
	memo,
	useCallback,
	useState,
} from "react";

// Types
import type { AdvancedSelectionData, AdvancedSelectionInputSettings } from "./AdvancedSelectionTypes";
import type { MosaicFieldProps } from "@root/components/Field";

// Components
import AddIcon from "@mui/icons-material/Add";
import Button from "@root/components/Button";
import Drawer from "@root/components/Drawer";
import ChipList from "@root/components/ChipList";
import AdvancedSelectionDrawer from "./AdvancedSelectionDrawer";

// Styles
import type { MosaicLabelValue } from "@root/types";
import { FormFieldAdvancedSelectionSkeleton } from "./FormFieldAdvancedSelectionSkeleton";
import { StyledButton } from "./AdvancedSelection.styled";

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

	const selectLimit = (fieldDef?.inputSettings?.selectLimit || 0) > 0 ? fieldDef?.inputSettings?.selectLimit : -1;

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

	const onDelete = useCallback((options: MosaicLabelValue[]) => {
		onChange(options);
		onBlur && onBlur();
	}, [onChange]);

	if (skeleton) {
		return <FormFieldAdvancedSelectionSkeleton />;
	}

	return (
		<>
			{value?.length > 0 ? (
				<div>
					{(selectLimit < 0 || value?.length < selectLimit) && (
						<StyledButton
							color="teal"
							variant="text"
							label="Add"
							onClick={handleOpenModal}
							mIcon={AddIcon}
							disabled={disabled}
						/>
					)}
					{value && (
						<ChipList
							options={value}
							onDelete={onDelete}
							disabled={disabled}
						/>
					)}
				</div>
			) : (
				<Button
					color="gray"
					variant="outlined"
					label="Add"
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
					handleClose={handleClose}
				/>
			</Drawer>
		</>
	);
};

export default memo(FormFieldAdvancedSelection);
