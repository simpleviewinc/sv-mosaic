import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { StyledSkeletonWrapper } from "./Address.styled";

export function FormFieldAddressSkeleton() {
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
					variant="rectangular"
					width={300}
					height={204}
				/>
				<Skeleton
					variant="rectangular"
					width={300}
					height={204}
				/>
			</StyledSkeletonWrapper>
		</div>
	);
}
