import theme from "@root/theme";
import styled from "styled-components";

export const StyledWrapper = styled.div`
    background-color: ${theme.color.gray[50]};
	border-top: 1px solid ${theme.color.gray[300]};
    display: flex;
    justify-content: end;
    padding: 16px;
    gap: 12px;
`;
