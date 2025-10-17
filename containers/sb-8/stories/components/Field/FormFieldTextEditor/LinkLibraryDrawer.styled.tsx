import Avatar from "@mui/material/Avatar";
import theme from "#mosaic/theme";
import styled from "styled-components";

export const LinkLibraryAvatar = styled(Avatar)<{ $selected?: boolean }>`
    && {
        ${({ $selected }) => $selected && `
            background-color: ${theme.color.teal[700]};
        `}
    }
`;
