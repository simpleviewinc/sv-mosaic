import theme from "@root/theme";
import styled from "styled-components";

export const Wrapper = styled.div<{ $error?: boolean }>(({ $error }) => `
	border-radius: ${theme.rounded.md};
	overflow: hidden;
	box-shadow:
		${$error ? "var(--mos-border-danger)" : "var(--mos-border-medium)"},
		var(--mos-shadow-sm);
`);
