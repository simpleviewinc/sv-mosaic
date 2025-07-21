import * as React from "react";
import type { ReactElement } from "react";

import Chip from "#mosaic/components/Chip";
import { useStretchedWidthStory } from "@utils";

export default {
	title: "Components/Chip",
	parameters: {
		layout: "centered",
	},
};

export const Playground = ({
	variant,
	deletable,
	clickable,
	label,
	disabled,
	selected,
	fullWidth,
}: typeof Playground.args): ReactElement => {
	useStretchedWidthStory(fullWidth);

	const common = {
		variant: variant === "Undefined" ? undefined : variant,
		label,
		disabled,
		selected,
		fullWidth,
	};

	return (
		deletable ? (
			<Chip
				{...common}
				onDelete={() => alert("Deleted")}
			/>
		) : (
			<Chip
				{...common}
				onClick={clickable ? () => alert("onClick") : null}
			/>
		)
	);
};

Playground.args = {
	variant: "Undefined",
	deletable: false,
	clickable: false,
	label: "Label",
	disabled: false,
	selected: false,
	fullWidth: false,
};

Playground.argTypes = {
	variant: {
		name: "Variant",
		options: ["Undefined", "primary", "secondary", "tertiary"],
		control: { type: "select" },
	},
	deletable: {
		name: "Deletable",
	},
	clickable: {
		name: "Clickable",
	},
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	selected: {
		name: "Selected",
	},
	fullWidth: {
		name: "Full Width",
	},
};

export const KitchenSink = (): ReactElement => {
	const handleDelete = () => {
		alert("Clicked on delete icon");
	};

	return (
		<div>
			<h1>Chip</h1>
			<h2>Basic Chip with onClick</h2>
			<Chip
				label="Label"
				disabled={false}
				onClick={() => alert("onClick")}
			/>
			<Chip
				label="Label"
				disabled={false}
				selected={true}
				onClick={() => alert("onClick")}
			/>
			<h2>Basic Chip without onClick</h2>
			<Chip
				label="Label"
				disabled={false}
			/>
			<Chip
				label="Label"
				disabled={false}
				selected={true}
			/>
			<h2>Deletable Chip</h2>
			<Chip
				label="Label"
				disabled={false}
				onDelete={handleDelete}
			/>
			<h2>Disabled</h2>
			<Chip
				label="Label"
				disabled={true}
			/>
			<Chip
				label="Label"
				selected={true}
				disabled={true}
			/>
			<h2>Chip with very long text</h2>
			<Chip
				label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus."
				selected={true}
				onDelete={handleDelete}
			/>
			<Chip
				label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus."
			/>
		</div>
	);
};
