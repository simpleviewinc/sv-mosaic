import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import FilterSingleSelectContent from "./FilterSingleSelectContent";
import MenuSelect from "../MenuSelect";
const StyledWrapper = styled.span ``;
export default function FilterSingleSelect(props) {
    var _a;
    const [state, setState] = useState({
        anchorEl: null,
        selected: undefined,
        options: []
    });
    if (props.args.required && !props.data.value)
        throw new Error("Invalid use-case, a value is required but none was provided");
    const value = props.data.value;
    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            const selected = await props.args.getSelected(value);
            const options = await props.args.getOptions();
            setState({
                ...state,
                options: options.docs,
                selected
            });
        }
        if (isMounted) {
            fetchData();
        }
        return () => {
            isMounted = false;
        };
    }, [props.data]);
    const onClick = function (evt) {
        setState({
            ...state,
            anchorEl: evt.currentTarget
        });
    };
    const onClose = function () {
        setState({
            ...state,
            anchorEl: null
        });
    };
    let valueString;
    if (state.selected !== undefined) {
        valueString = state.selected.label;
    }
    const onChange = function (value) {
        props.onChange({
            value: value === "" ? undefined : value
        });
        onClose();
    };
    return (React.createElement(StyledWrapper, null,
        React.createElement(DataViewPrimaryFilter, { label: props.label, value: valueString, type: props.type, onRemove: props.onRemove, onClick: onClick, color: props.args.color }),
        React.createElement(FilterSingleSelectContent, { onClose: onClose, anchorEl: state.anchorEl },
            React.createElement(MenuSelect, { placeholder: !((_a = props.args) === null || _a === void 0 ? void 0 : _a.required) ? "Any..." : undefined, value: value, options: state.options, onChange: onChange }))));
}
