import ButtonRow from "@root/components/ButtonRow";
import styled from "styled-components";

export const StyledButtonRow = styled(ButtonRow)<{ $hidden?: boolean }>`
    ${({ $hidden }) => $hidden && `
        visibility: hidden;
    `}
`
