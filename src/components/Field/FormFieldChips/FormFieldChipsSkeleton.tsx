import React from "react";
import { Skeleton } from "@mui/material";
import { StyledChipsSkeletonWrapper } from "./FormFieldChips.styled";

export function FormFieldChipsSkeleton() {
	return (
		<StyledChipsSkeletonWrapper>
			<Skeleton
				variant="rounded"
				width={85}
				height={32}
			/>
			<Skeleton
				variant="rounded"
				width={78}
				height={32}
			/>
			<Skeleton
				variant="rounded"
				width={186}
				height={32}
			/>
		</StyledChipsSkeletonWrapper>
	);
}
