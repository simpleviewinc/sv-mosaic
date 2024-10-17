import styled from "styled-components";

export const StyledDrawerTopBar = styled.div`
	& {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
	}

	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > h1 {
		display: inline;
		padding: 0px 50px 0px 20px;
		margin: 0;
		position: relative;
		top: -2px;
	}
`;

export const StyledDrawerBottom = styled.div`
	& {
		flex: 1;
		padding: 12px;
	}

	&.background-gray {
		background: #FAFBFC;
	}
`;

export const StyledDrawerContent = styled.div`
	width: 600px;
`;
