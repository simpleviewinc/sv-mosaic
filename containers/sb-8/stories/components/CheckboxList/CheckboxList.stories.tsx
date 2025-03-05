import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";

import CheckboxList from "@root/components/CheckboxList";
import type { MosaicLabelValue } from "@root/types";
import { mockOptions } from "@root/mock";

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
