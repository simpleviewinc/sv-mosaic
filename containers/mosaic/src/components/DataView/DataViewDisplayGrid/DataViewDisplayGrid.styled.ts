import styled from "styled-components";
import theme from "@root/theme/theme";

export const StyledDiv = styled.div`
	& > .topRowBulkAll {
		margin-bottom: 5px;
	}

	& > .grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		grid-column-gap: 16px;
		grid-row-gap: 24px;
	}

	& > .grid > .cell {
		min-width: 0;
	}

	& > .grid > .cell.checked > .image > .checkboxContainer {
		opacity: 1;
	}

	& > .grid > .cell > .image img {
		max-width: 100%;
		min-width: 100%;
	}

	& > .grid > .cell h2 {
		margin: 8px 0 8px 0;
		max-width: 161px;
		font-size: ${theme.fontSize.text.sm};
		font-weight: ${theme.weight.semi};
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .grid > .cell h3 {
		margin: 0;
		font-size: ${theme.fontSize.text.sm};
		font-weight: ${theme.weight.regular};
	}

	& > .grid > .cell .image {
		position: relative;
	}

	& > .grid > .cell > .image > .checkboxContainer {
		opacity: 0;
		position: absolute;
		top: 8px;
		left: 8px;
		transition: opacity 150ms;
		z-index: 1;
	}

	& > .grid > .cell .image img {
		display: block;
		width: 100%;
	}

	& > .grid > .cell > .image:hover > .checkboxContainer,
	& > .grid > .cell > .image > .checkboxContainer.anyChecked,
	& > .grid > .cell > .image:hover > .checkboxContainer .custom-checkbox:hover {
		opacity: 1;
	}

	& > .grid > .cell > .image:hover > .checkboxContainer .custom-checkbox,
	& > .grid > .cell > .image > .checkboxContainer.anyChecked .custom-checkbox {
		background: ${theme.color.gray[100]};
		opacity: 0.7;
	}

	& > .grid > .cell.checked > .image:hover > .checkboxContainer .custom-checkbox {
		background: transparent;
		opacity: 1;
	}

	& .overlay {
		position: absolute;
		height: 100%;
		width: 100%;
		opacity: 0;
		background-color: ${theme.color.black};
	}

	& > .grid > .cell .image > .imageContainer {
		position: relative;
	}

	& > .grid > .cell .image > .imageContainer:hover .overlay,
	& > .grid > .cell .image > .checkboxContainer:hover ~ .imageContainer > .overlay,
	& > .grid > .cell.checked .image > .imageContainer > .overlay	{
		opacity: 0.6;
	}

	& > .grid > .cell .info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
		margin-bottom: 8px;
	}

	& > .grid > .cell > .info > .left {
		min-width: 0;
	}

	& > .grid > .cell > .info > .right {
		flex-shrink: 0;
		margin-left: 4px;

		& > span button {
			margin: 0px;
		}
	}
`;
