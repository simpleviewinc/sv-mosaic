import styled, { keyframes } from "styled-components";

export const ANIMATION_DURATION = 250;

export const openAnimation = keyframes`
	from {
	  	right: -75vw;
	}
	to {
	  	right: 0vw;
	}
  `;

export const closingAnimation = keyframes`
	from {
	  	right: 0vw;
	}

	to {
	  	right: -75vw;
	}
  `;

export const stackingAnimation = keyframes`
	from {
	  	right: 0vw;
	}

	to {
	  	right: 25vw;
	}
  `;

export const unstackingAnimation = keyframes`
	from {
	  	right: 25vw;
	}

	to {
	  	right: 0vw;
	}
  `;

export const PaperDiv = styled.div`
	width: 75%;
	transform: none !important;
	transition: initial !important;
	right: -75vw;

	&.opening {
		animation: ${ANIMATION_DURATION}ms ease-out 0s 1 ${openAnimation};
		right: 0;
	}

	&.open {
	  	right: 0;
	}

	&.stacking {
		animation: ${ANIMATION_DURATION}ms ease-out 0s 1 ${stackingAnimation};
		right: 25vw;
	}

	&.stacked {
		right: 25vw;
	}

	&.unstacking {
		animation: ${ANIMATION_DURATION}ms ease-out 0s 1 ${unstackingAnimation};
		right: 0vw;
	}

	&.closing {
		animation: ${ANIMATION_DURATION}ms ease-out 0s 1 ${closingAnimation};
		right: -75vw;
	}
`;
