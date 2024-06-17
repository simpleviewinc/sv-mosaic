import * as React from "react";
import { ReactElement } from "react";
import Spinner from "@root/components/Spinner";
import { SubtitleText } from "@root/components/Typography";

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
