import * as React from "react";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
// Styles
import { DatePickerWrapper, popperSx, } from "./DatePicker.styled";
const DateFieldPicker = (props) => {
    const { error, fieldDef, onChange, value, onBlur } = props;
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const handleOpenState = async () => {
        setIsPickerOpen(!isPickerOpen);
        if (onBlur) {
            await onBlur();
        }
    };
    const renderInput = (params) => {
        var _a;
        return (React.createElement(TextField, { ...params, onBlur: onBlur, required: fieldDef.required, inputProps: {
                ...params.inputProps,
                placeholder: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.placeholder,
            } }));
    };
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDateFns },
        React.createElement(DatePickerWrapper, { error: !!error, isPickerOpen: isPickerOpen },
            React.createElement(DatePicker, { renderInput: renderInput, inputFormat: "MM/dd/yyyy", value: value, onChange: onChange, onOpen: handleOpenState, onClose: handleOpenState, PopperProps: {
                    sx: popperSx,
                } }))));
};
export default DateFieldPicker;
