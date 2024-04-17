import { Skeleton } from "@mui/material";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
// import styled from "styled-components";

const StyledSkeletonRowWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const StyledSkeletonCell = styled.div`
	flex: 1 1 0%;
	padding: 16px;
`;

function SkeletonInputCell() {
	return (
		<StyledSkeletonCell>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
			/>
		</StyledSkeletonCell>
	);
}

export function SkeletonRow() {
	return (
		<StyledSkeletonRowWrapper>
			<StyledSkeletonCell>
				<Skeleton
					width={80}
					height={28}
				/>
				<Skeleton
					width={64}
					height={28}
				/>
			</StyledSkeletonCell>
			<SkeletonInputCell />
			<SkeletonInputCell />
			<SkeletonInputCell />
			<SkeletonInputCell />
			<SkeletonInputCell />
			<SkeletonInputCell />
			<StyledSkeletonCell>
				<Skeleton
					width={78}
					height={28}
				/>
			</StyledSkeletonCell>
		</StyledSkeletonRowWrapper>
	);
}

export function FormFieldNumberTableSkeleton() {
	return (
		<div>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={64}
			/>
			<SkeletonRow />
			<SkeletonRow />
		</div>
	);
}
