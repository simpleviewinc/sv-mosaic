import * as React from "react";
import type { ReactElement } from "react";

// Components
import type { ChipListProps } from "@root/components";
import { ChipList } from "@root/components";
import { mockOptions } from "@root/mock";

export default {
	title: "Components/ChipList",
};

export const Playground = ({
	optionCount,
	maxInitialChips,
}: typeof Playground.args): ReactElement => {
	const options = React.useMemo<ChipListProps["options"]>(() => {
		return mockOptions.slice(0, optionCount);
	}, [optionCount]);

	return (
		<ChipList
			options={options}
			maxInitialChips={maxInitialChips}
		/>
	);
};

Playground.args = {
	optionCount: 25,
	maxInitialChips: 8,
};

Playground.argTypes = {
	optionCount: {
		name: "Number of Options",
	},
	maxInitialChips: {
		name: "Maximum Initial Chips",
	},
};
