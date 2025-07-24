import styled from "styled-components";
import Paper from "@mui/material/Paper";
import theme from "@root/theme";
import { PopoverPaper } from "@mui/material/Popover";

export const StyledPopperPaper = styled(Paper)<{ $hideShadow?: boolean; $hideBorder?: boolean }>(({ $hideShadow, $hideBorder }) => {
	const boxShadow = [
		!$hideBorder && "var(--mos-border-light)",
		!$hideShadow && "0 34px 60px 0 rgba(0, 0, 0, 0.15)",
		!$hideShadow && "var(--mos-shadow-xl)",
	].filter(Boolean).join(",");

	return `
		border-radius: ${theme.rounded.md};
		box-shadow: ${boxShadow || "0 0"};
	`;
});

export const StyledPopoverPaper = styled(PopoverPaper)`
	border-radius: ${theme.rounded.md};
	box-shadow:
		var(--mos-border-light),
		0 34px 60px 0 rgba(0, 0, 0, 0.15),
		var(--mos-shadow-xl);
`;
