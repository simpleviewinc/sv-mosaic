import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { StyledSkeletonWrapper } from "./AdvancedSelection.styled";
import testIds from "@root/utils/testIds";

export function FormFieldAdvancedSelectionSkeleton() {
	return (
		<div data-testid={testIds.FORM_FIELD_SKELETON}>
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
