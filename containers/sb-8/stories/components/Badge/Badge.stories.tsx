import type { ReactElement } from "react";

import React from "react";

import Badge from "@simpleview/sv-mosaic/components/Badge";

export default {
	title: "Components/Badge",
	parameters: {
		layout: "centered",
	},
};

export const Playground = ({ text, variant }: typeof Playground.args): ReactElement => {
	return (
		<Badge variant={variant}>{text}</Badge>
	);
};

Playground.args = {
	text: "15",
	variant: "light",
};

Playground.argTypes = {
	text: {
		name: "Text",
	},
	variant: {
		name: "Variant",
		options: ["light", "dark", "darkest"],
		control: { type: "select" },
	},
};
