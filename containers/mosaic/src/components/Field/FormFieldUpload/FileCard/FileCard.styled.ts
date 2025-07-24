import Spinner from "@root/components/Spinner";
import theme from "@root/theme";
import styled from "styled-components";

export const StyledFileCard = styled.div<{ $error?: boolean; $isDeleting?: boolean }>`
	display: flex;
	flex-direction: row;
	background-color: ${theme.color.white};
	box-shadow: var(--mos-border-light), var(--mos-shadow-sm);
	border-radius: ${theme.rounded.md};
	padding: ${theme.spacing(3, 4, 3, 3)};
	width: 100%;
	column-gap: ${theme.spacing(5)};
	align-items: center;

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
		a, img {
			display: block;
		}

		img, div {
			border-radius: ${theme.rounded.md};
			width: 50px;
			height: 50px;
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
		width: 100%;
		flex-direction: column;
		align-items: start;
	}

	& .file-name {
		font-weight: ${theme.weight.medium};
		line-height: 17px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
		word-break: break-word;
	}

	& .file-dimensions {
		font-size: 12px;
	}
`;

export const FileMeta = styled.div`
	color: ${theme.color.gray[600]};
	line-height: ${theme.line.normal};
`;

export const StyledSpinner = styled(Spinner)`
	flex: none;
	align-self: center;
`;
