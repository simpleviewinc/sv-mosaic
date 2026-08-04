import type { ReactElement } from "react";

import React from "react";

import type { BadgeProps } from "./BadgeTypes";

import { StyledBadge } from "./Badge.styled";

function Badge({
	children,
	variant = "light",
	...props
}: BadgeProps): ReactElement {
	return (
		<StyledBadge $variant={variant} {...props}>
			{children}
		</StyledBadge>
	);
}

export default Badge;
