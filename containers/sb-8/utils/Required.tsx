import React from "react";
import theme from "@simpleview/sv-mosaic/theme";

export function Required() {
	return (
		<span style={{ color: theme.color.red[600] }}>Required</span>
	);
}
