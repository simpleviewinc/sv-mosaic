import styled from "styled-components";

export const StyledPopperListboxOption = styled.li.attrs((props) => ({
	...props,
	className: `${props.className || ""} Mos-listboxOption`,
}))``;
