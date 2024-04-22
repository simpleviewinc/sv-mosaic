import React from "react";
import { Skeleton } from "@mui/material";
import { StyledSkeletonWrapper } from "./AdvancedSelection.styled";

export function FormFieldAdvancedSelectionSkeleton() {
	return (
		<div>
			<Skeleton
				variant="rectangular"
				width={143}
				height={36}
				sx={{ marginBottom: 2 }}
			/>
			<StyledSkeletonWrapper>
				<Skeleton
					variant="rounded"
					width={186}
					height={32}
				/>
				<Skeleton
					variant="rounded"
					width={78}
					height={32}
				/>
			</StyledSkeletonWrapper>
		</div>
	);
}
