import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import FilterSingleSelectDropdownContent from "./FilterSingleSelectDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { FilterSingleSelectProps } from "./FilterSingleSelectTypes";


const StyledWrapper = styled.span`
	
`;

export default function FilterSingleSelect(props: FilterSingleSelectProps) {
    const [anchorEl, setAnchorEl] = useState(null);

    const onClick = function (evt) {
        setAnchorEl(evt.currentTarget);
    }

    const onClose = function () {
        setAnchorEl(null);
    }

    let valueString = "any";
    if (props.data.label !== undefined){
        valueString = props.data.label;
    }
    
    return (
        <StyledWrapper>
            <DataViewPrimaryFilter
                label={props.label}
                value={valueString}
                type={props.type}
                onRemove={props.onRemove}
                onClick={onClick}
            />
            <DataViewFilterDropdown
                anchorEl={anchorEl}
                onClose={onClose}
            >
                <FilterSingleSelectDropdownContent
                    onClose={onClose}
                    onChange={props.onChange}
                    getOptions={props.args.getOptions}
                    value={props.data.value}
                    label={props.data.label}
                />
            </DataViewFilterDropdown>
        </StyledWrapper>
    );
}