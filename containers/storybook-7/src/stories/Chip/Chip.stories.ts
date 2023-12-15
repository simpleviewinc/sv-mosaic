import type { Meta, StoryObj } from "@storybook/react";

import Chip from "@root/components/Chip";
import ChipPlayground, { ChipPlaygroundProps } from "./Chip.Playground";

const meta: Meta<ChipPlaygroundProps> = {
	title: "Atoms/Chip",
	component: Chip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		label: "My Chip"
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: ChipPlayground,
	args: {
		label: "Button",
		hasOnDelete: false
	},
};

export { Docs } from "./Chip.Docs"
