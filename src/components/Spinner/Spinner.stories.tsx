import * as React from "react";
import { ReactElement } from "react";
import { number, boolean, withKnobs } from "@storybook/addon-knobs";
import Spinner from "./Spinner";
import { H3 } from "../Typography";

export default {
	title: "Components/Spinner",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const spin = boolean("Spin indifinitely", true);
	const progress = number("Progress", 60);

	return (
		<Spinner progress={!spin ? progress : undefined} />
	);
};

export const KitchenSink = (): ReactElement => {
	return (
		<>
			<H3>Spinner that spins indifinitely</H3>
			<Spinner />
			<H3>Spinner set to 60%</H3>
			<Spinner progress={60} />
		</>
	);
};
