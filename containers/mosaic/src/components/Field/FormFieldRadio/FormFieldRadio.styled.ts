import styled from "styled-components";
import { default as MUIRadioGroup } from "@mui/material/RadioGroup";

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
