import React from "react";
import { Skeleton } from "@mui/material";
import { StyledSkeletonSwitch, StyledSkeletonItem, StyledSkeletonWrapper } from "./FormFieldToggle.styled";

function SwitchSkeletonItem() {
	return (
		<StyledSkeletonItem>
			<StyledSkeletonSwitch>
				<Skeleton
					variant="rounded"
					width={36}
					height={22}
				/>
			</StyledSkeletonSwitch>
			<Skeleton
				width={78}
				height={28}
			/>
		</StyledSkeletonItem>
	);
}

export function FormFieldSwitchSkeleton() {
	return (
		<StyledSkeletonWrapper>
			<SwitchSkeletonItem />
		</StyledSkeletonWrapper>
	);
}
