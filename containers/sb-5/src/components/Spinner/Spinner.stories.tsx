import * as React from "react";
import { ReactElement } from "react";
import { number, boolean, withKnobs } from "@storybook/addon-knobs";
import Spinner from "@root/components/Spinner";
import { SubtitleText } from "@root/components/Typography";

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
			<SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
			<Spinner />
			<SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
			<Spinner progress={60} />
		</>
	);
};
