// React
import * as React from "react";
import { useEffect, useState } from "react";
// Components
import Chip from "../../components/Chip";
import { StyledChipGroup } from "./FormFieldChipSingleSelect.styled";
const FormFieldChipSingleSelect = (props) => {
    const { fieldDef, error, onChange, onBlur, value, } = props;
    const { required } = fieldDef || null;
    const [internalOptions, setInternalOptions] = useState(fieldDef.inputSettings && [...fieldDef.inputSettings.options]);
    const [prepopulated, setPrepouplated] = useState(false);
    useEffect(() => {
        if (value && !prepopulated) {
            findSelectedOption([...internalOptions].find((o) => o.value === value));
            setPrepouplated(true);
        }
    }, [value, prepopulated]);
    const findSelectedOption = (option) => {
        let newOptions = [...internalOptions];
        newOptions = newOptions.map((o) => ((o === null || o === void 0 ? void 0 : o.value) === (option === null || option === void 0 ? void 0 : option.value) ?
            { ...o, selected: required && o.selected ? o.selected : !o.selected }
            :
                { ...o, selected: o.selected = false }));
        const selectedOption = newOptions.find(o => o.selected === true);
        setInternalOptions(newOptions);
        return selectedOption;
    };
    const updateSelectedOption = (option) => {
        const selectedOption = findSelectedOption(option);
        setPrepouplated(true);
        onChange((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) || undefined);
    };
    const errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    return (React.createElement(StyledChipGroup, { error: (errorWithMessage || (errorWithMessage && required)), onBlur: onBlur }, internalOptions.map((option) => React.createElement(Chip, { key: option.value, label: option.label, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, selected: option.selected, onClick: () => updateSelectedOption(option) }))));
};
export default FormFieldChipSingleSelect;
