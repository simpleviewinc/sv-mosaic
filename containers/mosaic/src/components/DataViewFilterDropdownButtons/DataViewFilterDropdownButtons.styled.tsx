import theme from "@root/theme";
import styled from "styled-components";

export const StyledWrapper = styled.div`
	border-top: 2px solid ${theme.newColors.grey2[100]};
    display: flex;
    justify-content: space-between;
    padding: 16px;
    gap: 12px;
`;
