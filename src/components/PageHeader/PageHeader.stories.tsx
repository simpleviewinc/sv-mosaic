import * as React from "react";
import { ReactElement } from "react";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import PageHeader from "./PageHeader";
import { onCancel } from "@root/utils/storyUtils";

export default {
	title: "Components/PageHeader",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const title = text("Title", "PageHeader Title Example");
	const buttonsBool = boolean("Buttons", true);
	const onBackBool = boolean("onBack", true);
	return (
		<PageHeader
			title={title}
			buttons={
				buttonsBool &&
				[
					{
						label: "Cancel",
						onClick: onCancel,
						color: "gray",
						variant: "outlined",
					},
					{
						label: "Save",
						onClick: () => alert("Saving"),
						color: "yellow",
						variant: "contained",
					},
				]
			}
			onBack={onBackBool && onCancel}
		/>
	);
};
