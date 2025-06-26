import type { ReactElement } from "react";

import React from "react";

import type { BadgeProps } from "./BadgeTypes";

import { StyledBadge } from "./Badge.styled";

function Badge({
	children,
	variant = "light",
}: BadgeProps): ReactElement {
	return (
		<StyledBadge $variant={variant}>
			{children}
		</StyledBadge>
	);
}

export default Badge;
