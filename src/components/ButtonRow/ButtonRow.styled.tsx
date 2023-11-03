import theme from "../../theme";
import styled from "styled-components";

import { ButtonRowProps } from "./ButtonRowTypes";
import { TransientProps } from "@root/types";

const gapMap: Record<ButtonRowProps["gap"], string> = {
	small: "10px",
	large: "16px"
}

export const Row = styled.div<TransientProps<ButtonRowProps, "wrap">>`
	display: flex;
	align-items: center;

	${({$wrap}) => $wrap && `
		flex-wrap: wrap;
	`}
`;

export const Item = styled.div<TransientProps<ButtonRowProps, "separator" | "gap">>`
	display: flex;
	align-items: center;

	${({$separator, $gap}) => `
		& + &{
			margin-left: ${gapMap[$gap]};
		}

		${$separator && `
			&:not(:first-child)::before{
				content: ' ';
				height: 1.4em;
				border-left: 2px solid ${theme.newColors.grey2["100"]};
				margin-right: ${gapMap[$gap]};
			}
		`}
	`}
`;
