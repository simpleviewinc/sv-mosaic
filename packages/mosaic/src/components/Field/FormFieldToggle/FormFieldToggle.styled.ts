import styled from "styled-components";

export const StyledSkeletonWrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

export const StyledSkeletonItem = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledSkeletonSwitch = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
    padding-left: 10px;
	height: 40px;
	margin-right: 14px;

    & .MuiSkeleton-root {
        border-radius: 99999em;
    }
`;
