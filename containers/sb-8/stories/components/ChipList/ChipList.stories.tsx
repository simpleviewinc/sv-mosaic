import React, { useMemo } from "react";
import type { ReactElement } from "react";

// Components
import type { ChipListProps } from "#mosaic/components/ChipList";
import ChipList from "#mosaic/components/ChipList";
import { mockOptions } from "#mosaic/mock";

export default {
	title: "Components/ChipList",
};

export const Playground = ({
	optionCount,
	maxInitialChips,
	hasOnDelete,
}: typeof Playground.args): ReactElement => {
	const options = useMemo<ChipListProps["options"]>(() => {
		return optionCount >= 0 ? mockOptions.slice(0, optionCount) : mockOptions;
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
		control: { min: 0 },
	},
	maxInitialChips: {
		name: "Maximum Initial Chips",
	},
	hasOnDelete: {
		name: "Has onDelete Handler",
	},
};
