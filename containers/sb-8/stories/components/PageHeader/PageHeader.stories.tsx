import * as React from "react";
import { ReactElement } from "react";
import PageHeader from "@root/components/PageHeader";
import { onCancel } from "../../../utils";

export default {
	title: "Components/PageHeader",
};

export const Playground = ({ title, showButtons, showBack }: typeof Playground.args): ReactElement => {
	return (
		<PageHeader
			title={title}
			buttons={showButtons ? (
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
			) : undefined}
			onBack={showBack ? onCancel : undefined}
		/>
	);
};

Playground.args = {
	title: "Playground page",
	showButtons: true,
	showBack: true,
};

Playground.argTypes = {
	title: {
		name: "Title",
	},
	showButtons: {
		name: "Show Primary Actions",
	},
	showBack: {
		name: "Show Back Button",
	},
};
