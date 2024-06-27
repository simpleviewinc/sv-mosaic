import * as React from "react";
import { ReactElement, useMemo } from "react";
import styled from "styled-components";
import { withKnobs, select } from "@storybook/addon-knobs";
import { toggleMap, toggleOptions } from "@root/utils/storyUtils";

import ButtonRow from "@root/components/ButtonRow";
import { ButtonProps } from "@root/components/Button";

export default {
	title: "Components/ButtonRow",
	decorators: [withKnobs],
};

const StyledButtonRow = styled(ButtonRow)`
	border: 2px solid maroon;
	background: #eee;
	padding: 1rem;
`;

export const Playground = (): ReactElement => {
	const showToast = select("Show toast", toggleOptions, "Undefined");
	const showTea = select("Show tea", toggleOptions, "Undefined");
	const showCrumpets = select("Show crumpets", toggleOptions, "Undefined");

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
