import type { PropsWithChildren } from "react";

export interface BadgeProps extends PropsWithChildren {
	variant?: "light" | "dark" | "darkest";
}
