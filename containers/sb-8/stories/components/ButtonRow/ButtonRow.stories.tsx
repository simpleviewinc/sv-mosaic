import * as React from "react";
import type { ReactElement } from "react";
import { useMemo } from "react";
import styled from "styled-components";
import { toggleMap, toggleOptions } from "../../../utils";

import ButtonRow from "@root/components/ButtonRow";
import type { ButtonProps } from "@root/components/Button";

export default {
	title: "Components/ButtonRow",
};

const StyledButtonRow = styled(ButtonRow)`
	border: 2px solid maroon;
	background: #eee;
	padding: 1rem;
`;

export const Playground = ({ showToast, showTea, showCrumpets }: typeof Playground.args): ReactElement => {
	const buttonDefs: ButtonProps[] = useMemo(() => [
		{
			color: "red",
			variant: "contained",
			label: "Toast",
			show: toggleMap[showToast],
		},
		{
			color: "blue",
			variant: "contained",
			label: "Tea",
			show: toggleMap[showTea],
		},
		{
			color: "yellow",
			variant: "contained",
			label: "Crumpets",
			show: toggleMap[showCrumpets],
		},
	], [showToast, showTea, showCrumpets]);

	return (
		<StyledButtonRow buttons={buttonDefs} />
	);
};

Playground.args = {
	showToast: "Undefined",
	showTea: "Undefined",
	showCrumpets: "Undefined",
};

Playground.argTypes = {
	showToast: {
		options: toggleOptions,
		control: { type: "select" },
		name: "Show Toast",
	},
	showTea: {
		options: toggleOptions,
		control: { type: "select" },
		name: "Show Tea",
	},
	showCrumpets: {
		options: toggleOptions,
		control: { type: "select" },
		name: "Show Crumpets",
	},
};
