import styled from "styled-components";
import theme from "@root/theme";

export const EditorWrapper = styled.div`
  	.jodit-container {
		width: 620px !important;
		border: none !important;
	}

	.jodit-toolbar__box {
		background-color: white !important;
		border-radius: 0px !important;
		margin-bottom: 8px !important;
		border: ${(pr) => (pr.error ? theme.borders.error : theme.borders.simplyGray)} !important;
	}

	.jodit-workplace {
		background-color: ${theme.colors.gray100} !important;
		max-height: 200px !important;
		overflow-y: auto !important;
		padding: 16px !important;
		border: ${(pr) => {
		if (pr.error) return theme.borders.error;
		return theme.borders.simplyGray;
	}} !important;

		& .jodit-wysiwyg {
			padding: 0px !important;
			margin: 0px !important;
			width: 100% !important;
			height: 100% !important;

			& p:first-child {
				margin-top: 0px !important;
			}
		}

		&:focus-within {
			box-shadow: 0px 0px 5px #1A1A1A29;
			border: 1px solid ${theme.colors.almostBlack} !important;
		}
	}

	.jodit-placeholder {
		padding: 16px !important;
	}

	.jodit-workplace:focus-within + .jodit-status-bar {
		box-shadow: 0px 0px 5px #1A1A1A29;
		border: 1px solid ${theme.colors.almostBlack} !important;
		border-top: none !important;
	}

	.jodit-status-bar {
		border-radius: 0px !important;
		border: ${(pr) => {
		if (pr.error) return theme.borders.error;
		return theme.borders.simplyGray;
	}} !important;
		border-top: none !important;
		font-family: ${theme.fontFamily};
		background-color: ${theme.colors.grayHover};
	}
`;
