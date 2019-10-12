import React from "react";
import styled from "styled-components";

const StyleTd = styled.td`
	height: 40px;
`

function GridTd(props) {
	return (
		<StyleTd>
			<div>
				{props.children}
			</div>
		</StyleTd>
	)
}

export default GridTd;