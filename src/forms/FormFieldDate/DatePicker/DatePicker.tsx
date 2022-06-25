import * as React from "react";
import { ReactElement, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

// Styles
import {
	DatePickerWrapper,
	popperSx,
} from "./DatePicker.styled";
import { MosaicFieldProps } from "@root/components/Field";

const DateFieldPicker = (props: MosaicFieldProps<any>): ReactElement => {
	const { error, fieldDef, onChange, value, onBlur } = props;

	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleOpenState = async () => {
		setIsPickerOpen(!isPickerOpen);
		await onBlur();
	};

	const renderInput = (params) => (
		<TextField
			{...params}
			onBlur={onBlur}
			required={fieldDef.required}
			inputProps={{
				...params.inputProps,
				placeholder: fieldDef?.inputSettings?.placeholder,
			}}
		/>
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePickerWrapper error={!!error} isPickerOpen={isPickerOpen}>
				<DatePicker
					renderInput={renderInput}
					inputFormat="MM/dd/yyyy"
					value={value}
					onChange={onChange}
					onOpen={handleOpenState}
					onClose={handleOpenState}
					PopperProps={{
						sx: popperSx,
					}}
				/>
			</DatePickerWrapper>
		</LocalizationProvider>
	);
};

export default DateFieldPicker;
