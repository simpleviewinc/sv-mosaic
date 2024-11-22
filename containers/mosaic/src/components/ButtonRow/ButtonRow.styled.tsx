import theme from "../../theme";
import styled from "styled-components";

import type { ButtonRowProps } from "./ButtonRowTypes";
import type { TransientProps } from "@root/types";

export const Row = styled.div<TransientProps<ButtonRowProps, "wrap">>`
	display: flex;
	align-items: center;

	${({ $wrap }) => $wrap && `
		flex-wrap: wrap;
	`}
`;

export const Item = styled.div<TransientProps<ButtonRowProps, "separator">>`
	display: flex;
	align-items: center;

	${({ $separator }) => `
		& + &{
			margin-left: 8px;
		}

		${$separator && `
			&:not(:first-child)::before{
				content: ' ';
				height: 1.4em;
				border-left: 2px solid ${theme.newColors.grey2["100"]};
				margin-right: 8px;
			}
		`}
	`}
`;
