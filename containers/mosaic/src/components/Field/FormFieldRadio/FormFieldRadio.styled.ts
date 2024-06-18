import styled from "styled-components";

/**
 * If we `import "@mui/material/RadioGroup"` here instead
 * of the component file itself, the onChange handler
 * doesn't get fired in a Storybook/Vite environment. I
 * have no idea why.
 */
import { default as MUIRadioGroup } from "@mui/material/RadioGroup/RadioGroup";

export const StyledRadioGroup = styled(MUIRadioGroup)`
  margin-left: -12px;
`;

export const StyledSkeletonWrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

export const StyledSkeletonItem = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledSkeletonRadio = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 40px;
	margin-right: 14px;
`;
