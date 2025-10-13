import styled from "styled-components";
import theme from "@root/theme";
import type { ColorSelectedProps } from "./FormFieldColorTypes";
import type { TransientProps } from "@root/types";
import Popover from "@mui/material/Popover";

export const StyledWrapper = styled.div`
	align-items: center;
	display: flex;
	gap: 12px;
`;

export const ColorContainer = styled.button`
	all: unset;
	background: ${theme.color.white};
	box-shadow: 0 0 0 1px rgba(0, 0, 0, .2), 0 1px 4px rgba(0, 0, 0, 0.08);
	border-radius: ${theme.rounded.md};
	cursor: pointer;
	margin-bottom: 0;
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
	padding: 1px;
	width: 80px;
	display: flex;
	align-items: center;
`;

export const ColorBackground = styled.div`
	background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'><rect width='2' height='2' fill='%23fff'/><rect width='1' height='1' x='0' y='0' fill='%23cacaca'/><rect width='1' height='1' x='1' y='1' fill='%23cacaca'/></svg>");
	background-size: 16px;
	background-position: center center;
	border-radius: ${theme.rounded.md};
	display: flex;
	flex-grow: 1;
`;

export const ColorDiv = styled.div<TransientProps<ColorSelectedProps, "disabled" | "color">>`
	${({ $color }) => $color && `
		background: ${$color};
	`}
	flex-grow: 1;
	min-height: 32px;
	border-radius: ${theme.rounded.md};
`;

export const NoColor = styled.div`
	color: ${theme.color.gray[600]};
	font-style: italic;
`;

export const StyledPopover = styled(Popover)`
`;

export const ExpressedColor = styled.div`
	color: ${theme.color.gray[800]};
	margin-bottom: ${theme.spacing(2)};
`;
