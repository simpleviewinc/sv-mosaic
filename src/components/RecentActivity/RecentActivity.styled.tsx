import styled from "styled-components";
import theme from "../../utils/theme.js";

export const Activities = styled.div`
	div:last-child {
		padding-bottom: 40px;
	}
`;

export const ActivityWrapper = styled.div`
	margin-top: 32px;
`;

export const ActivityDescription = styled.p`
  color: ${theme.colors.gray700};
	font-size: 14px;
	margin-bottom: 8px;
`;

export const ActivityDate = styled.span`
	color: ${theme.colors.gray600};
	font-size: 14px;
`;

export const StyledHr = styled.hr`
	margin-top: 40px;
	border-top: 1px solid ${theme.colors.gray200};
`;
