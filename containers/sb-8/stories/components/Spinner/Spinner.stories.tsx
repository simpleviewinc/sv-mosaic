import * as React from "react";
import type { ReactElement } from "react";
import Spinner from "#mosaic/components/Spinner";
import { SubtitleText } from "#mosaic/components/Typography";

export default {
	title: "Components/Spinner",
};

export const Playground = ({ spin, progress }: typeof Playground.args): ReactElement => {
	return (
		<Spinner progress={!spin ? progress : undefined} />
	);
};

Playground.args = {
	spin: true,
	progress: 60,
};

Playground.argTypes = {
	spin: {
		name: "Spin Indefinitely",
	},
	progress: {
		name: "Progress",
	},
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
