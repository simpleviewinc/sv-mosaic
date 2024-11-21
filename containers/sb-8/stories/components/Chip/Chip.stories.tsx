import * as React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

// Components
import Chip from "@root/components/Chip";
import theme from "@root/theme";

export default {
	title: "Components/Chip",
};

const KitchenSinkContainerChip = styled.div`
    font-family: ${theme.fontFamily};
`;

export const Playground = ({ deletable, clickable, label, disabled, selected }: typeof Playground.args): ReactElement => {
	return (
		deletable ? (
			<Chip
				label={label}
				disabled={disabled}
				selected={selected}
				onDelete={() => alert("Deleted")}
			/>
		) : (
			<Chip
				label={label}
				disabled={disabled}
				selected={selected}
				onClick={clickable ? () => alert("onClick") : null}
			/>
		)
	);
};

Playground.args = {
	deletable: false,
	clickable: false,
	label: "Label",
	disabled: false,
	selected: false,
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
