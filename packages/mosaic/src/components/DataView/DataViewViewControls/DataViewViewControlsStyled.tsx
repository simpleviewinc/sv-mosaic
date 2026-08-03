import Button from "@root/components/Button";
import theme from "@root/theme";
import styled from "styled-components";

export const StyledDataViewViewButton = styled(Button)`
	&& {
		button {
			padding: ${theme.spacing(1)};
			height: auto;
			text-align: left;

			&:hover {
				background-color: transparent;
				box-shadow: none;

				.MuiSvgIcon-root {
					background-color: ${theme.color.gray[100]};
				}
			}
		}

		.MuiSvgIcon-root {
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			transition-property: background-color,box-shadow;
			align-self: end;
			border-radius: ${theme.rounded.md};
		}
	}
`;

export const ViewListWrapper = styled.div<{ $hasOnViewList?: boolean}>`
	font-weight: ${theme.weight.medium};

	${({ $hasOnViewList }) => $hasOnViewList ? "" : `
		padding: ${theme.spacing(1)};
	`}
`;

export const ViewListLabel = styled.div`
	font-size: ${theme.fontSize.text.sm};
	line-height: ${theme.line.loose};
	color: ${theme.color.gray[600]};
`;

export const CurrenViewName = styled.div<{ $viewSelected?: boolean }>`
	line-height: ${theme.line.normal};

	${({ $viewSelected }) => $viewSelected ? "" : `
		color: ${theme.color.gray[600]};
	`}
`;
