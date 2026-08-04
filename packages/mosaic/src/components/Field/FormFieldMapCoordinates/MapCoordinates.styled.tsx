import styled from "styled-components";
import theme from "@root/theme";
import { CardWrapper } from "@root/components/Card/Card.styled";

export const StyledSpan = styled.div`
	color: ${theme.color.gray[600]};
	margin-top: ${theme.spacing(1)};
`;

export const StyledCardWrapper = styled(CardWrapper)`
	width: 450px;
	max-width: 100%;
`;

export const MapPreview = styled.div`
	margin: ${theme.spacing(-3, -4, 3)};
	border-top-left-radius: ${theme.rounded.md};
	border-top-right-radius: ${theme.rounded.md};
	overflow: hidden;
	border-bottom: 1px solid ${theme.color.gray[300]};

	img {
		display: block;
		width: 100%;
	}
`;

export const ResetButtonContainer = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: end;
`;
