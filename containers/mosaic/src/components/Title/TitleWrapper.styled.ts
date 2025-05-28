import styled from "styled-components";

// Utils
import theme from "@root/theme/theme";
import Button from "@root/components/Button/Button";
import type { TransientProps } from "@root/types";
import type { TitleWrapperProps } from "./TitleWrapperTypes";
import { containerQuery } from "@root/utils/css";

export const Title = styled.div`
	display: flex;
	align-items: center;
`;

export const Description = styled.div`
	color: ${theme.newColors.grey3["100"]};
	font-weight: ${theme.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`;

export const BackButton = styled(Button)<TransientProps<TitleWrapperProps, "collapse">>`
	margin-right: 10px;

	.MuiButtonBase-root{
		padding-left: 8px;
		padding-right: 6px;
		border-color: transparent;
	}

	.icon_left{
		margin-right: 0 !important;
	}

	${({ $collapse }) => $collapse && `
		display: none;

		${containerQuery($collapse.minWidth, $collapse.name)} {
			display: block;
		}
	`}
`;
