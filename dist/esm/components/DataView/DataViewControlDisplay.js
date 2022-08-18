import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../Button";
import { default as MenuSelect } from "../MenuSelect";
import theme from "../../theme";
const StyledSpan = styled.span `
	& .labelIcon {
		font-size: ${theme.iconFontSize};
	}
`;
function DataViewControlDisplay(props) {
    const activeDisplay = props.displayOptions.find(val => val.name === props.display);
    const Icon = activeDisplay.mIcon;
    const options = props.displayOptions.map(val => {
        return {
            value: val.name,
            label: val.label,
            mIcon: val.mIcon,
        };
    });
    const menuContent = (React.createElement(MenuSelect, { options: options, onChange: props.onDisplayChange, value: props.display }));
    return (React.createElement(StyledSpan, null,
        React.createElement(Button, { variant: "text", color: "black", label: React.createElement(Icon, null), iconPosition: "right", size: "small", mIcon: ExpandMoreIcon, mIconColor: theme.colors.gray600, menuContent: menuContent })));
}
export default memo(DataViewControlDisplay);
