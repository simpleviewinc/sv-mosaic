import styled from "styled-components";
import Button from "../Button";
import theme from "@root/theme";
import { Row } from "../common";
import Badge from "../Badge";

export const FilterButton = styled(Button)`
	&& {
		.MuiButtonBase-root,
		.Mos-ButtonContent {
			align-items: stretch;
		}

		.MuiButtonBase-root {
			padding-right: 0;

			&:hover {
				background-color: ${theme.color.white};
				box-shadow: var(--mos-border-dark), var(--mos-shadow-sm);
			}
		}
	}
`;

export const FilterValue = styled(Row).attrs({ $align: "center", $gap: [1] })`
	font-weight: ${theme.weight.regular};
	color: ${theme.color.gray[800]};
`;

export const FilterValueBadge = styled(Badge)`
	max-width: 187px;
	display: -webkit-box;
	text-overflow: ellipsis;
`;

export const FilterExpand = styled.div`
	background-color: ${theme.color.gray[100]};
	border-left: 1px solid ${theme.color.gray[300]};
	border-top-right-radius: ${theme.rounded.md};
	border-bottom-right-radius: ${theme.rounded.md};
	align-self: stretch;
	display: flex;
	align-items: center;
	padding: ${theme.spacing(1)};

	.MuiSvgIcon-root {
		font-size: ${theme.fontSize.text.lg};
	}
`;
