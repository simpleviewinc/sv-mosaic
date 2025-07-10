import styled from "styled-components";

import theme from "@root/theme";
import Button from "@root/components/Button";
import Popper from "@mui/material/Popper";

export const StyledPopper = styled(Popper)`
	z-index: 1300;
`;

export const StyledNodeForm = styled.div`
    border: 1px solid ${theme.colors.gray300};
    background: white;
    width: 300px;
`;

export const RemoveButton = styled(Button)`
    && {
        margin-left: auto;

        .Mos-ButtonAdornmentIcon {
            width: 24px;
            height: 24px;
        }
    }
`;

export const StyledLinkOpen = styled.a.attrs((props) => ({ ...props, target: "_blank" }))`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${theme.colors.teal};
`;
