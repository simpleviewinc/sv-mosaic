import React from "react";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styled from "styled-components";
import theme from "../utils/theme.js";

const StyledFormControlLabel = styled(FormControlLabel)`
    & .Mui-checked.MuiIconButton-colorPrimary {
		color: ${theme.colors.blue};
	}
`;


function RadioGroupOption(props){
    return (
        <StyledFormControlLabel
            className={props.className}
            value={props.value}
            label={props.label}
            control={
                <Radio 
                    color="primary"
                    disableRipple
                />
            }
        />
    );
}

export default RadioGroupOption;