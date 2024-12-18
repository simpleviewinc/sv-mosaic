import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { StyledChipsSkeletonWrapper } from "./FormFieldChips.styled";
import testIds from "@root/utils/testIds";

export function FormFieldChipsSkeleton() {
	return (
		<StyledChipsSkeletonWrapper data-testid={testIds.FORM_FIELD_SKELETON}>
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
