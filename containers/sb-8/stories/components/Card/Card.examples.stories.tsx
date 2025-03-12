import type { ComponentProps } from "react";

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

import type { ButtonProps } from "@root/components";

import Card from "@root/components/Card/Card";

export default {
	title: "Components/Card/Examples",
};

const common: ComponentProps<typeof Card> = {
	content: [
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia sem id tempor laoreet. Donec rhoncus ullamcorper tortor ut ultricies. Curabitur sodales quam ut ullamcorper suscipit. Donec mollis sagittis bibendum. Donec a convallis urna, pulvinar rutrum orci. Morbi at felis vitae nisi sodales elementum. Integer vestibulum nec lectus commodo scelerisque.</p>,
		<p>Fusce fringilla ante dui, in faucibus lacus sagittis non. Phasellus nibh urna, convallis feugiat dapibus ac, pharetra sed sapien. Donec faucibus purus ut nisi porta vehicula. Quisque ut porta urna. Aenean sed tellus non felis fermentum interdum. Suspendisse potenti. Pellentesque vel luctus risus, ut feugiat nulla. Curabitur congue nisl lacus, eget suscipit risus sollicitudin id. Fusce ultrices suscipit consequat. Nulla porttitor sapien eu libero hendrerit congue. Nam ut metus id urna ultrices egestas. Suspendisse potenti. Nunc libero elit, laoreet vel justo vitae, lobortis sagittis justo. Curabitur venenatis erat neque, et vehicula sem aliquet vitae. Morbi scelerisque arcu quis urna rhoncus pharetra.</p>,
	],
	title: "My Card Title",
};

const commonButtons: ButtonProps[] = [
	{
		color: "black",
		variant: "text",
		label: "Make Default Card",
		onClick: () => alert("Make Default Card"),
	},
	{
		color: "yellow",
		variant: "contained",
		label: "Edit Card",
		onClick: () => alert("Edit Card"),
	},
	{
		color: "red",
		variant: "icon",
		label: "Create Card",
		mIcon: DeleteIcon,
		onClick: () => alert("Create Card"),
	},
];

/**
 * A simple way to display encapsulated, itemized information to the user. In it's simplest form, it is a bordered box
 * with a heading area containing a title.
 */
export function Base() {
	return (
		<Card {...common} />
	);
}

/**
 * Provide a list of buttons that should be displayed in the card's header area. The buttons will be horizontally aligned
 * to the right, vertically aligned center with the title and rendered within a `ButtonRow` component.
 */
export function TopActions() {
	return (
		<Card
			{...common}
			topActions={commonButtons}
		/>
	);
}

/**
 * Provide a list of buttons that should be displayed below the card's content. The buttons will be horizontally aligned
 * in the center and rendered within a `ButtonRow` component.
 */
export function BottomActions() {
	return (
		<Card
			{...common}
			bottomActions={commonButtons}
		/>
	);
}

/**
 * You can provide a MUI icon component (or any component, really) to the `titleIcon` property and it will be comfortably
 * rendered before the title with a small gap in between.
 */
export function TitleIcon() {
	return (
		<Card
			{...common}
			titleIcon={InfoIcon}
		/>
	);
}

/**
 * By providing a number to the `count` property, you can have the value displayed appropriately alongside the title of the
 * card. The number will be displayed in brackets in a slightly smaller font than the title. To avoid displaying the number
 * if it is "0", you can provide the `displayZeroCount` property as `false`.
 */
export function Count() {
	return (
		<Card
			{...common}
			count={5}
		/>
	);
}
