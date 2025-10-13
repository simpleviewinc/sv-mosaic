import React from "react";
import Skeleton from "@mui/material/Skeleton";
import testIds from "@root/utils/testIds";
import { Row } from "@root/components/common";

export function FormFieldAddressSkeleton() {
	return (
		<div data-testid={testIds.FORM_FIELD_SKELETON}>
			<Skeleton
				variant="rectangular"
				width={143}
				height={36}
				sx={{ marginBottom: 2 }}
			/>
			<Row $gap={[4]}>
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
			</Row>
		</div>
	);
}
