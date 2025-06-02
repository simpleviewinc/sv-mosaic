import * as React from "react";
import type { ReactElement } from "react";
import Spinner from "#mosaic/components/Spinner";
import { Text } from "#mosaic/components/Typography";

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
			<Text tag="h3">Spinner that spins indifinitely</Text>
			<Spinner />
			<Text tag="h3">Spinner that reaches 60%</Text>
			<Spinner progress={60} />
		</>
	);
};
