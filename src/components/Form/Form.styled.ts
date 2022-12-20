import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const StyledDisabledForm = styled.div`
	height: 100%;
	width: 100%;
	background-color: black;
	z-index: 1000;
	display: block;
	position: absolute;
	opacity: 30%;
`;
