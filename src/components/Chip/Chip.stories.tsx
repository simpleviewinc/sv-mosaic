import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";

// Components
import Chip from "./Chip";
import theme from "@root/theme";

export default {
	title: "Components/Chip",
	component: Chip
};

const KitchenSinkContainerChip = styled.div`
    font-family: ${theme.fontFamily};
`;

const Template = (args) => <Chip {...args} onDelete={args.deletable && args.onDelete}/>;

export const Playground = Template.bind({});
Playground.args = {
	label: "Label",
	disabled: false,
	selected: false,
	deletable: false,
	onDelete: () => alert("Deleted")
}

// export const Playground = (): ReactElement => {
// 	const deletable = boolean("Deletable", false);

// 	return (
// 		deletable ?
// 			<Chip
// 				label={text("Label", "Label")}
// 				disabled={boolean("Disabled", false)}
// 				selected={boolean("Selected", false)}
// 				onDelete={() => alert("Deleted")}
// 			/> :
// 			<Chip
// 				label={text("Label", "Label")}
// 				disabled={boolean("Disabled", false)}
// 				selected={boolean("Selected", false)}
// 			/>
// 	)
// };

export const KitchenSink = (): ReactElement => {
	const handleDelete = () => {
		alert("Clicked on delete icon");
	};

	return (
		<KitchenSinkContainerChip>
			<h1>Chip</h1>
			<h2>Basic Chip</h2>
			<Chip
				label={"Label"}
				disabled={false}
			/>
			<Chip
				label={"Label"}
				disabled={false}
				selected={true}
			/>
			<h2>Deletable Chip</h2>
			<Chip
				label={"Label"}
				disabled={false}
				onDelete={handleDelete}
			/>
			<h2>Disabled</h2>
			<Chip
				label={"Label"}
				disabled={true}
			/>
			<Chip
				label={"Label"}
				selected={true}
				disabled={true}
			/>
		</KitchenSinkContainerChip>
	);
};
