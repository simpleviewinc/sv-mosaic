import Avatar from "@mui/material/Avatar";
import theme from "@root/theme";
import styled from "styled-components";

export const LinkLibraryAvatar = styled(Avatar)<{ $selected?: boolean }>`
    && {
        ${({ $selected }) => $selected && `
            background-color: ${theme.colors.teal};
        `}
    }
`;
