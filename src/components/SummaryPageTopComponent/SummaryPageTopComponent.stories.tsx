import * as React from "react";
import { ReactElement } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import SummaryPageTopComponent from ".";

export default {
	title: "Components/SummaryPageTopComponent",
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	
	return (
		<SummaryPageTopComponent any={undefined} />
	);
};
