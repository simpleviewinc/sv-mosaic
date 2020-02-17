import React, { memo } from "react";
import styled from "styled-components";
import RadioGroup from "@material-ui/core/RadioGroup";
import RadioGroupOption from "./RadioGroupOption";

const StyledRadioList = styled(RadioGroup)`
    & .RadioLabel{
        padding-left:15px;
    }
`;


function RadioList(props){
    return (
        <StyledRadioList
            onChange = {props.onChange}
            value = {props.value}
        >
            {
                props.options.map(option => {
                    return <RadioGroupOption
                        className="RadioLabel"
                        key = {option.value}
                        value = {option.value}
                        label = {option.label}
                    />
                })
            }
        </StyledRadioList>
    );
}

export default memo(RadioList);