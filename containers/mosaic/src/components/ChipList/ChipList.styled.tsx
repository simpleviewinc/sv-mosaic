import styled from "styled-components";

import Button from "../Button";
import theme from "@root/theme";

export const ChipsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${theme.spacing(3)};
`;

export const ShowButton = styled(Button)`
	margin-top: 8px;
`;
