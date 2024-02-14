import * as React from "react";
import { ReactElement } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import styled from "styled-components";

// Components
import Chip from "./Chip";
import theme from "@root/theme";

export default {
	title: "Components/Chip",
	decorators: [withKnobs],
} as Meta;

const KitchenSinkContainerChip = styled.div`
    font-family: ${theme.fontFamily};
`;

export const Playground = (): ReactElement => {
	const deletable = boolean("onDelete", false);
	const clickable = boolean("onClick", false);

	return (
		deletable ? (
			<Chip
				label={text("Label", "Label")}
				disabled={boolean("Disabled", false)}
				selected={boolean("Selected", false)}
				onDelete={() => alert("Deleted")}
			/>
		) : (
			<Chip
				label={text("Label", "Label")}
				disabled={boolean("Disabled", false)}
				selected={boolean("Selected", false)}
				onClick={clickable ? () => alert("onClick") : null}
			/>
		)
	);
};

export const KitchenSink = (): ReactElement => {
	const handleDelete = () => {
		alert("Clicked on delete icon");
	};

	return (
		<KitchenSinkContainerChip>
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
		</KitchenSinkContainerChip>
	);
};
