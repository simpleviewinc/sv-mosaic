import type { PropsWithChildren } from "react";
import type { TypographyProps } from "../Typography";

export type BadgeProps = PropsWithChildren & Omit<TypographyProps<"text">, "variant"> & {
	variant?: "light" | "dark" | "darkest";
}
