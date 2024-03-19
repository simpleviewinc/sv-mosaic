import Spinner from "@root/components/Spinner";
import theme from "@root/theme";
import styled from "styled-components";

export const StyledFileCard = styled.div<{ $error?: boolean; $isDeleting?: boolean }>`
	display: flex;
	flex-direction: row;
	background-color: ${theme.colors.white};
	border: 2px solid ${({ $error }) => $error ? theme.newColors.darkRed["100"] : theme.newColors.grey2["100"]};
	padding: 16px;
	width: 100%;
	column-gap: 16px;

	${({ $isDeleting }) => $isDeleting && `
		opacity: 0.5;
	`}

	& > div {
		display: flex;
	}

	& .file-img,
	& .file-delete-btn {
		align-items: center;
	}

	& .file-img {
		border: 2px solid ${theme.newColors.grey2["100"]};

		a, img {
			display: block;
		}

		img, div {
			width: 62px;
			height: 62px;
		}

		img {
			object-fit: contain;
		}

		div {
			background-color: ${theme.newColors.grey2["100"]};
			color: ${theme.newColors.grey3["100"]};
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	& .file-data {
		font-size: 14px;
		width: 100%;
		flex-direction: column;
		row-gap: 8px;

		p {
			margin: 0px;
			padding: 0px;
		}
	}

	& .file-name {
		color: ${theme.newColors.grey3["100"]};
		font-weight: ${theme.fontWeight.semiBold};
		line-height: 17px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
		word-break: break-word;
	}

	& .file-size {
		color: ${theme.newColors.almostBlack["100"]};
		font-weight: ${theme.fontWeight.normal};
		line-height: 24px;
	}
`;

export const StyledSpinner = styled(Spinner)`
	flex: none;
	align-self: center;
`;
