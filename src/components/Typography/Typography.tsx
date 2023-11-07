import * as React from "react";
import { ReactElement } from "react";

import { TypographyProps, TypographyTag, TypographyVariant } from "./TypographyTypes";
import { Component } from "./Typography.styled";

const defaultTagMap: Record<TypographyVariant, TypographyTag> = {
	title: "h1",
	subtitle: "h3",
	body: "div"
}

export default function Typography({
	children,
	attrs = {},
	as,
	tag: providedTag = as,
	variant,
	maxLines,
	color,
	breakAll,
	className
}: TypographyProps): ReactElement {
	const tag = providedTag || defaultTagMap[variant];

	return (
		<Component
			{...attrs}
			className={className}
			$variant={variant}
			$maxLines={maxLines}
			$color={color}
			$breakAll={breakAll}
			title={typeof children === "string" ? children : undefined}
			as={tag}
		>
			{children}
		</Component>
	);
}
