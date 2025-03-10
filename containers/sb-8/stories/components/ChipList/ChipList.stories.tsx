import React, { useMemo } from "react";
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
	hasOnDelete,
}: typeof Playground.args): ReactElement => {
	const options = useMemo<ChipListProps["options"]>(() => {
		return mockOptions.slice(0, optionCount);
	}, [optionCount]);

	const onDelete = useMemo(() => {
		if (!hasOnDelete) {
			return;
		}

		return (options: ChipListProps["options"]) => alert(`Option delete. New options: ${JSON.stringify(options)}`);
	}, [hasOnDelete]);

	return (
		<ChipList
			options={options}
			maxInitialChips={maxInitialChips}
			onDelete={onDelete}
		/>
	);
};

Playground.args = {
	optionCount: 25,
	maxInitialChips: 8,
	hasOnDelete: false,
};

Playground.argTypes = {
	optionCount: {
		name: "Number of Options",
	},
	maxInitialChips: {
		name: "Maximum Initial Chips",
	},
	hasOnDelete: {
		name: "Has onDelete Handler",
	},
};
