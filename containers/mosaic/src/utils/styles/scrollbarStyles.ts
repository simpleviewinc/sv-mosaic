import theme from "@root/theme";

export const scrollbarStyles = `
	&::-webkit-scrollbar-thumb {
		background-color: ${theme.color.gray[400]};
		border: 4px solid transparent;
		border-radius: 8px;
		background-clip: padding-box;
		width: 4px;

		&:hover {
			background-color: ${theme.color.gray[500]};
		}
	}

	&::-webkit-scrollbar {
		background: transparent;
		width: 14px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0);
	}
`;
