import React from "react";
import theme from "@simpleview/sv-mosaic/theme";
import { Markdown } from "@storybook/blocks";
import styled from "styled-components";

const StyledHeader = styled.header`
	align-items: center;
	display: flex;
	gap: 8px;
`;

interface HeaderProps {
	title: string;
	required?: boolean;
}

export function Header({ title, required }: HeaderProps) {
	return (
		<StyledHeader>
			<Markdown>{`### \`${title}\``}</Markdown>
			{required ? (
				<span style={{ color: theme.color.red[600] }}>Required</span>
			) : (
				<span style={{ color: theme.color.gray[600] }}>Optional</span>
			)}
		</StyledHeader>
	);
}
