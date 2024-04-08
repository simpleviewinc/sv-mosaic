import * as React from "react";
import { ReactElement, useMemo } from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import ButtonRow from ".";
import { ButtonProps } from "../Button";
import styled from "styled-components";

export default {
	title: "Components/ButtonRow",
	decorators: [withKnobs],
};

const StyledButtonRow = styled(ButtonRow)`
	border: 2px solid maroon;
	background: #eee;
	padding: 1rem;
`;

const showMap = {
	"Undefined": undefined,
	"True": true,
	"False": false,
	"Function that returns true": () => true,
	"Function that returns false": () => false,
	"Array of true values": [true, true, true],
	"Array with one falsy value": [true, false, true],
	"Array of functions that return true": [() => true, () => true],
	"Array of functions, one returns false": [() => false, () => true],
};

const showOptions = Object.keys(showMap) as (keyof typeof showMap)[];

export const Playground = (): ReactElement => {
	const showToast = select("Show toast", showOptions, "Undefined");
	const showTea = select("Show tea", showOptions, "Undefined");
	const showCrumpets = select("Show crumpets", showOptions, "Undefined");

	const buttonDefs: ButtonProps[] = useMemo(() => [
		{
			color: "red",
			variant: "contained",
			label: "Toast",
			show: showMap[showToast],
		},
		{
			color: "blue",
			variant: "contained",
			label: "Tea",
			show: showMap[showTea],
		},
		{
			color: "yellow",
			variant: "contained",
			label: "Crumpets",
			show: showMap[showCrumpets],
		},
	], [showToast, showTea, showCrumpets]);

	return (
		<StyledButtonRow buttons={buttonDefs} />
	);
};
