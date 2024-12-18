import Skeleton from "@mui/material/Skeleton";
import testIds from "@root/utils/testIds";
import React from "react";

export function FormFieldDateSkeleton() {
	return (
		<Skeleton
			data-testid={testIds.FORM_FIELD_SKELETON}
			variant="rectangular"
			width="100%"
			height={43}
		/>
	);
}
