import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";
import DataViewFilterNumber from "#mosaic/components/DataViewFilterNumber";
import { Playground as NumberFieldPlayground } from "../Field/FormFieldNumber/FormFieldNumber.stories";

export default {
	title : "Components/DataViewFilterNumber",
};

export const Playground = ({
	decimalPlaces,
	prefix,
	suffix,
	sign,
}: typeof Playground.args): ReactElement => {
	const [state, setState] = useState({});

	return (
		<DataViewFilterNumber
			label="Number filter example"
			data={state}
			args={{
				decimalPlaces,
				prefix,
				suffix,
				sign,
			}}
			onChange={setState}
		/>
	);
};

Playground.args = {
	decimalPlaces: NumberFieldPlayground.args.decimalPlaces,
	prefix: NumberFieldPlayground.args.prefix,
	suffix: NumberFieldPlayground.args.suffix,
	sign: NumberFieldPlayground.args.sign,
};

Playground.argTypes = {
	decimalPlaces: NumberFieldPlayground.argTypes.decimalPlaces,
	prefix: NumberFieldPlayground.argTypes.prefix,
	suffix: NumberFieldPlayground.argTypes.suffix,
	sign: NumberFieldPlayground.argTypes.sign,
};
