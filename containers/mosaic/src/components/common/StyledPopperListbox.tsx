import styled from "styled-components";
import theme from "@root/theme";

export const StyledPopperListbox = styled.ul`
	padding: ${theme.spacing(2)};
	margin: 0;

	> .Mos-listboxOption {
		border-radius: ${theme.rounded.md};
		cursor: pointer;
		font-size: ${theme.fontSize.text.lg};
		line-height: ${theme.line.tight};
		padding: ${theme.spacing(2, 3)};
		align-items: baseline;
		display: flex;
		gap: ${theme.spacing(3)};

		&.Mui-focused {
			background-color: ${theme.color.gray[100]};
		}

		&.Mui-focusVisible {
			background-color: ${theme.color.gray[200]};
		}

		&[aria-selected="true"] {
			background-color: ${theme.color.teal[50]};

			&.Mui-focused {
				background-color: ${theme.color.teal[100]};
			}
		}

		+ li {
			margin-top: 1px;
		}
	}
`;
