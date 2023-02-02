import styled from "styled-components";

export const StyledFileGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-column-gap: 60px;
	grid-row-gap: 30px;
	margin-top: 16px;
	max-width: 620px;
`;
