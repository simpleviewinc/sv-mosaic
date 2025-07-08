import styled from "styled-components";
import { Text } from "../Typography";
import theme from "@root/theme";

export const StyledOptionLabel = styled(Text)
	.attrs<{ $disabled?: boolean }>(({ $disabled }) => ({
		size: "lg",
		color: $disabled ? theme.color.gray[600] : undefined,
	}))`
		max-width: 414px;
	`;
