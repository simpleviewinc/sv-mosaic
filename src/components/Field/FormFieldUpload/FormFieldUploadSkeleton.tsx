import { Skeleton } from "@mui/material";
import React from "react";

export function FormFieldUploadSkeleton() {
	return (
		<div>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={204}
				sx={{ marginBottom: 2 }}
			/>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={100}
			/>
		</div>
	);
}
