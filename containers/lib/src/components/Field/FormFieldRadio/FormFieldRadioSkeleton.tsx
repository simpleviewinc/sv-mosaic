import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { StyledSkeletonRadio, StyledSkeletonItem, StyledSkeletonWrapper } from "./FormFieldRadio.styled";

function RadioSkeletonItem() {
	return (
		<StyledSkeletonItem>
			<StyledSkeletonRadio>
				<Skeleton
					variant="circular"
					width={18}
					height={18}
				/>
			</StyledSkeletonRadio>
			<Skeleton
				width={52}
				height={28}
			/>
		</StyledSkeletonItem>
	);
}

export function FormFieldRadioSkeleton() {
	return (
		<StyledSkeletonWrapper>
			<RadioSkeletonItem />
			<RadioSkeletonItem />
			<RadioSkeletonItem />
		</StyledSkeletonWrapper>
	);
}
