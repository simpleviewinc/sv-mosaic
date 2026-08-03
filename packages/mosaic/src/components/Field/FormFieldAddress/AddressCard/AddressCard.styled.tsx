import { CardWrapper } from "@root/components/Card/Card.styled";
import theme from "@root/theme";
import styled from "styled-components";

export const StyledCardWrapper = styled(CardWrapper)`
	width: 300px;
`;

export const AddressLine = styled.div`
	margin-bottom: ${theme.spacing(1)};

	&:last-child {
		margin-bottom: 0;
	}
`;
