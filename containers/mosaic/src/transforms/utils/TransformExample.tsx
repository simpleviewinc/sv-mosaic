import type { DataViewColumnTransform } from "@root/components/DataView";
import React from "react";

export const TransformExample = ({ cb, data }: { cb: DataViewColumnTransform; data: any }) => {
	const renderTransform = (cb, data) => {
		const content = cb({ data });
		return (content);
	};

	return (
		<div style={{ display: "inline-block" }}>
			{renderTransform(cb, data)}
		</div>
	);
};
