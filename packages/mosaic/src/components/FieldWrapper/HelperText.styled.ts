import styled from "styled-components";

// Material UI
import ErrorIcon from "@mui/icons-material/Error";

// Theme
import theme from "@root/theme";

export const StyledWrapper = styled.div<{ $error?: boolean }>`
	align-items: start;
	display: flex;
	flex-direction: row;
	font-size: ${theme.fontSize.text.sm};
	line-height: ${theme.line["3xloose"]};
	margin-top: ${theme.spacing(2)};

	${({ $error }) => $error ? `
		color: ${theme.color.red[600]};
	` : `
		color: ${theme.color.gray[600]};
	`}
`;

export const StyledErrorIcon = styled(ErrorIcon)`
	&.MuiSvgIcon-root {
		font-size: ${theme.fontSize.text.lg};
		margin-right: ${theme.spacing(2)};
	}
`;
