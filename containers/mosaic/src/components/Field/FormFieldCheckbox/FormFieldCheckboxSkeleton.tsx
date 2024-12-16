import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { StyledSkeletonCheckbox, StyledSkeletonItem, StyledSkeletonWrapper } from "./FormFieldCheckbox.styled";
import testIds from "@root/utils/testIds";

function CheckboxSkeletonItem() {
	return (
		<StyledSkeletonItem>
			<StyledSkeletonCheckbox>
				<Skeleton
					variant="rectangular"
					width={18}
					height={18}
				/>
			</StyledSkeletonCheckbox>
			<Skeleton
				width={52}
				height={28}
			/>
		</StyledSkeletonItem>
	);
}

export function FormFieldCheckboxSkeleton() {
	return (
		<StyledSkeletonWrapper data-testid={testIds.FORM_FIELD_SKELETON}>
			<CheckboxSkeletonItem />
			<CheckboxSkeletonItem />
			<CheckboxSkeletonItem />
		</StyledSkeletonWrapper>
	);
}
