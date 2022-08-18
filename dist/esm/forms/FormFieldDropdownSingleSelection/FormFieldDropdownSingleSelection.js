import * as React from "react";
import { useState, memo } from "react";
import { StyledAutocomplete, StyledDisabledDropdownText, StyledPopper, SingleDropdownWrapper, } from "./FormFieldDropdownSingleSelection.styled";
// Components
import InputWrapper from "../../components/InputWrapper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
const DropdownSingleSelection = (props) => {
    var _a, _b, _c;
    const { fieldDef, error, onChange, onBlur, value } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [dropDownValue, setDropDownValue] = useState(null);
    const renderInput = (params) => {
        var _a;
        return (React.createElement(InputWrapper, null,
            React.createElement(TextField, { ...params, "data-testid": "textfield-test-id", variant: "outlined", placeholder: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.placeholder, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required })));
    };
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    const onDropDownChange = async (option) => {
        setDropDownValue(option);
        onChange && (await onChange(option === null || option === void 0 ? void 0 : option.value));
    };
    const selectedOption = (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.options.find(option => {
        return option.value === value;
    });
    const isOptionEqualToValue = (option, value) => {
        if (value.value === "") {
            return true;
        }
        return option.value === value.value;
    };
    const CustomPopper = (props) => {
        return React.createElement(StyledPopper, { value: value === "", ...props });
    };
    return (React.createElement(React.Fragment, null, !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) ?
        React.createElement(SingleDropdownWrapper, { innerWidth: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size },
            React.createElement(StyledAutocomplete, { value: { label: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label, value: value }, onOpen: handleOpen, onClose: handleOpen, "data-testid": "autocomplete-test-id", options: (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.options, getOptionLabel: (option) => (option === null || option === void 0 ? void 0 : option.label) ? option.label : "", isOptionEqualToValue: isOptionEqualToValue, onChange: (_event, option) => onDropDownChange(option), error: ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required) && error) ? error : undefined, renderInput: renderInput, PopperComponent: CustomPopper, popupIcon: React.createElement(ExpandMoreIcon, null), onBlur: (e) => onBlur && onBlur(e.target.value), open: isOpen }))
        :
            React.createElement(StyledDisabledDropdownText, { "data-testid": "disabled-text-test-id" }, (!dropDownValue || (dropDownValue === null || dropDownValue === void 0 ? void 0 : dropDownValue.label.trim()) === "") ?
                (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.placeholder : dropDownValue.label)));
};
export default memo(DropdownSingleSelection);
