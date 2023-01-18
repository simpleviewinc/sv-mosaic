import styled from "styled-components";

export const StyledFileGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(max(200px, 400px), 1fr));
	grid-column-gap: 60px;
	grid-row-gap: 30px;
`;
