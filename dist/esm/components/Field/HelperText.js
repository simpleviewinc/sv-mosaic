import * as React from "react";
import { ErrorTextWrapper, StyledErrorIcon, StyledText, } from "./HelperText.styled";
const HelperText = ({ children, error = false, }) => {
    return error ? (React.createElement(ErrorTextWrapper, null,
        React.createElement(StyledErrorIcon, { "data-testid": 'error-icon-test-id' }),
        React.createElement(StyledText, { error: error }, children))) : (React.createElement(StyledText, { error: error }, children));
};
export default HelperText;
