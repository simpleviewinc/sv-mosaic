import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { StyledSkeletonCheckbox, StyledSkeletonItem, StyledSkeletonWrapper } from "./FormFieldCheckbox.styled";

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
		<StyledSkeletonWrapper>
			<CheckboxSkeletonItem />
			<CheckboxSkeletonItem />
			<CheckboxSkeletonItem />
		</StyledSkeletonWrapper>
	);
}
