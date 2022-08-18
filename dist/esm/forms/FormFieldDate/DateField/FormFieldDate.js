import * as React from "react";
import { memo, useState, useEffect } from "react";
// Components
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { DisabledDateTimeValue } from "../DatePicker/DatePicker.styled";
const FormFieldDate = (props) => {
    var _a, _b;
    const { fieldDef, onChange, value, onBlur, error, } = props;
    const { required, disabled } = fieldDef || {};
    const [dateInput, setDateInput] = useState(null);
    const [timeInput, setTimeInput] = useState(null);
    useEffect(() => {
        if (value && !dateInput && !timeInput) {
            setDateInput(formatDate(value));
            setTimeInput(formatDate(value));
        }
    }, [value, dateInput, timeInput]);
    const formatDate = (dateValue) => {
        const stringDate = dateValue.toISOString();
        const [date, time] = stringDate.split("T");
        const [year, month, day] = date.split("-");
        const [hours, minutes] = time.split(":");
        return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
    };
    const handleValue = (position, date) => {
        var _a, _b;
        let newValue = value || undefined;
        let year = 0;
        let month = 0;
        let day = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        position === 0 ? setDateInput(date) : setTimeInput(date);
        if (!isNaN(date === null || date === void 0 ? void 0 : date.valueOf())) {
            if (position === 0) {
                year = date.getFullYear();
                month = date.getMonth();
                day = date.getDate();
                hours = (timeInput === null || timeInput === void 0 ? void 0 : timeInput.getHours()) || 0;
                minutes = (timeInput === null || timeInput === void 0 ? void 0 : timeInput.getMinutes()) || 0;
                seconds = (timeInput === null || timeInput === void 0 ? void 0 : timeInput.getSeconds()) || 0;
            }
            else {
                year = (dateInput === null || dateInput === void 0 ? void 0 : dateInput.getFullYear()) || new Date().getFullYear();
                month = (dateInput === null || dateInput === void 0 ? void 0 : dateInput.getMonth()) || new Date().getMonth();
                day = (dateInput === null || dateInput === void 0 ? void 0 : dateInput.getDate()) || new Date().getDate();
                hours = date.getHours();
                minutes = date.getMinutes();
                seconds = date.getSeconds();
            }
            if (required && ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.showTime)) {
                if ((position === 0 && timeInput) || (position === 1 && dateInput)) {
                    newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
                }
            }
            else {
                newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
            }
        }
        else {
            if (!required && ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.showTime)) {
                if ((position === 0 && !timeInput) || (position === 1 && !dateInput)) {
                    newValue = undefined;
                }
            }
            else
                newValue = undefined;
        }
        return newValue;
    };
    const handleOnChange = async (position, date) => {
        const newValue = handleValue(position, date);
        await onChange(newValue);
    };
    return (React.createElement(DateTimeInputRow, null, !disabled ? (React.createElement(React.Fragment, null,
        React.createElement(DateTimePickerWrapper, null,
            React.createElement(DatePicker, { error: error, onChange: (date) => handleOnChange(0, date), fieldDef: {
                    name: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name,
                    label: "",
                    type: "",
                    inputSettings: {
                        placeholder: "MM / DD / YYYY"
                    },
                    required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required,
                }, value: dateInput, onBlur: onBlur })),
        ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.showTime) &&
            React.createElement(DateTimePickerWrapper, null,
                React.createElement(TimePicker, { error: error, onChange: (date) => handleOnChange(1, date), fieldDef: {
                        name: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name,
                        label: "",
                        type: "",
                        inputSettings: {
                            placeholder: "00:00 AM/PM"
                        }
                    }, value: timeInput, onBlur: onBlur })))) : (React.createElement(React.Fragment, null,
        React.createElement(DisabledDateTimeValue, null, value ? new Date(value).toLocaleDateString("en", { timeZone: "UTC" })
            : "MM / DD / YYYY"),
        ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.showTime) &&
            React.createElement(DisabledDateTimeValue, null, value ? new Date(value).toLocaleTimeString("en", { timeStyle: "short", hour12: true, timeZone: "UTC" })
                : "00:00 AM/PM")))));
};
export default memo(FormFieldDate);
