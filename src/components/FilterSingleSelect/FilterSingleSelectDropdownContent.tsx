import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import RadioGroup from "../RadioGroup";
import DataViewFilterDropdownButtons from "../DataViewFilterDropdownButtons.jsx";
import { FilterSingleSelectDropdownContentProps } from "./FilterSingleSelectTypes";

const StyledContents = styled.div`
    & > .optionsBlock {
		max-height: 400px;
        max-width: 300px;
        overflow-y: auto;
        overflow-x: hidden;
	}
`;

export default function FilterDateDropdownContent(props: FilterSingleSelectDropdownContentProps) {
    const [state, setState] = useState({
        value : props.value,
        label : props.label,
        options : []
    });
    
    useEffect(() => {
        async function fetchData() {
            const options = await props.getOptions({});
            setState({
                ...state,
                options: options,
            });
        }

        fetchData();
    }, []);

    const onApply = function () {
        props.onChange({
            value : (state.value !== '') ? state.value : undefined,
            label: (state.label !== '') ? state.label : undefined
        });

        props.onClose();
    }

    const onChange = function (evt) {
        const selectedOption = state.options.find( option => {
            return option.value === evt.target.value
        });

        setState({
            ...state,
            value: selectedOption.value,
            label: selectedOption.label
        });
    }

    const onClear = function () {
        setState({
            ...state,
            value: "",
            label: ""
        });
    }

    return (
        <StyledContents>
            <div className="optionsBlock">
                <RadioGroup
                    options={state.options}
                    value = {state.value}
                    onChange={onChange}
                >
                </RadioGroup>
            </div>
            <DataViewFilterDropdownButtons onApply={onApply} onClear={onClear} onCancel={props.onClose} />
        </StyledContents>
    )
}