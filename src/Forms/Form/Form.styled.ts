import styled from 'styled-components';

export const StyledDisabledForm = styled.div`
	height: 100%;
	width: 100%;
	background-color: black;
	z-index: 999999;
	display: ${pr => pr.disabled ? 'block' : 'none'};
	position: absolute;
	opacity: 30%;
`;