import * as React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// Styles
import { customTheme } from "./TimePicker.styled";
import { DatePickerWrapper } from "../DatePicker/DatePicker.styled";
import { ThemeProvider } from "@mui/material/styles";
const TimeFieldPicker = (props) => {
    const { error, fieldDef, onChange, value, onBlur } = props;
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const handleOpenState = async () => {
        setIsPickerOpen(!isPickerOpen);
        await onBlur();
    };
    const renderInput = (params) => {
        var _a;
        return (React.createElement(TextField, { ...params, onBlur: onBlur, required: fieldDef.required, inputProps: {
                ...params.inputProps,
                placeholder: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.placeholder,
            } }));
    };
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDateFns },
        React.createElement(ThemeProvider, { theme: customTheme },
            React.createElement(DatePickerWrapper, { isPickerOpen: isPickerOpen, error: !!error },
                React.createElement(TimePicker, { value: value, onChange: onChange, renderInput: renderInput, onOpen: handleOpenState, onClose: handleOpenState })))));
};
export default TimeFieldPicker;
