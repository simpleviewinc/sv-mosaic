import Skeleton from "@mui/material/Skeleton";
import React from "react";
import type { FormFieldDateSkeletonProps } from "./DateFieldTypes";
import { DateTimeInputRow } from "./DateField.styled";

export function FormFieldDateSkeleton({ showTime }: FormFieldDateSkeletonProps) {
	return (
		<DateTimeInputRow $hasTimeField={showTime}>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
			/>
			{showTime && (
				<Skeleton
					variant="rectangular"
					width="100%"
					height={43}
				/>
			)}
		</DateTimeInputRow>
	);
}
