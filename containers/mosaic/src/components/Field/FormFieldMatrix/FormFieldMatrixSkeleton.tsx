import React from "react";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const StyledSkeletonTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const StyledSkeletonTableHeader = styled(Skeleton)`
	margin-bottom: 16px;
`;

const StyledSkeletonRowWrapper = styled.div`
	display: flex;
	align-items: center;
    gap: 16px;
`;

const StyledSkeletonCell = styled.div`
	flex: 1 1 0%;
`;

const StyledSkeletonActionCell = styled.div`
	flex: 0 0 32px;
`;

function SkeletonPrimaryAction() {
	return (
		<Skeleton
			variant="rectangular"
			width={143}
			height={36}
			sx={{ marginBottom: 2 }}
		/>
	);
}

function SkeletonActionCell() {
	return (
		<StyledSkeletonActionCell>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={32}
			/>
		</StyledSkeletonActionCell>
	);
}

function SkeletonInputCell() {
	return (
		<StyledSkeletonCell>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={48}
			/>
		</StyledSkeletonCell>
	);
}

export function SkeletonRow() {
	return (
		<StyledSkeletonRowWrapper>
			<SkeletonActionCell />
			<SkeletonActionCell />
			<SkeletonInputCell />
			<SkeletonInputCell />
			<SkeletonInputCell />
		</StyledSkeletonRowWrapper>
	);
}

export function FormFieldMatrixSkeleton({ buttonCount = 0 }: { buttonCount?: number }) {
	return (
		<div>
			<StyledSkeletonRowWrapper>
				{[...Array(buttonCount)].map((_, i) => (
					<SkeletonPrimaryAction key={i} />
				))}
			</StyledSkeletonRowWrapper>
			<StyledSkeletonTableHeader
				variant="rectangular"
				width="100%"
				height={56}
			/>
			<StyledSkeletonTableWrapper>
				<SkeletonRow />
				<SkeletonRow />
			</StyledSkeletonTableWrapper>
		</div>
	);
}
