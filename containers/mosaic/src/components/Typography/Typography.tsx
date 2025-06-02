import * as React from "react";
import type { ReactElement } from "react";

import type { TypographyProps, TypographyVariantSize, TypographyTag, TypographyVariant } from "./TypographyTypes";
import { getComponent } from "./Typography.styled";
import type { Theme } from "@root/theme/theme";

const defaultTagMap: Record<TypographyVariant, TypographyTag> = {
	body: "div",
	display: "div",
	text: "span",
};

const defaultSizeMap: {[T in TypographyVariant]: TypographyVariantSize<T>} = {
	body: "md",
	display: "sm",
	text: "md",
};

const defaultWeightMap: Record<TypographyVariant, keyof Theme["weight"]> = {
	body: "regular",
	display: "medium",
	text: "inherit",
};

export default function Typography<T extends TypographyVariant>({
	children,
	attrs = {},
	tag: providedTag,
	variant = "text" as T,
	maxLines,
	color,
	breakAll,
	className,
	title,
	size = defaultSizeMap[variant],
	weight = defaultWeightMap[variant],
}: TypographyProps<T>): ReactElement {
	const tag = providedTag || defaultTagMap[variant];
	const Component = getComponent<T>();

	return (
		<Component
			{...attrs}
			className={className}
			$variant={variant}
			$maxLines={maxLines}
			$color={color}
			$breakAll={breakAll}
			$size={size}
			$weight={weight}
			title={title !== undefined ? title : typeof children === "string" ? children : undefined}
			as={tag}
		>
			{children}
		</Component>
	);
}
