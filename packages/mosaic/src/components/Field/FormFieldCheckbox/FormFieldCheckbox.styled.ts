import styled from "styled-components";
import CheckboxList from "../../CheckboxList";
import theme from "@root/theme";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledCheckboxList = styled(CheckboxList)`
	& {
		margin-left: ${theme.spacing(-1.5)};
	}
`;

export const StyledSkeletonWrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

export const StyledSkeletonItem = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledSkeletonCheckbox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 40px;
	margin-right: 14px;
`;
