import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";

import CheckboxList from "#mosaic/components/CheckboxList";
import type { MosaicLabelValue } from "#mosaic/types";
import { mockOptions } from "#mosaic/mock";

export default {
	title: "Components/CheckboxList",
};

export const Playground = (): ReactElement => {
	const [checked, setChecked] = useState<MosaicLabelValue[]>([]);

	const onChange = (c) => {
		setChecked(c);
	};

	return (
		<div>
			<div>
				checked:
				{JSON.stringify(checked)}
			</div>
			<CheckboxList
				checked={checked}
				options={mockOptions}
				onChange={onChange}
			/>
		</div>
	);
};
