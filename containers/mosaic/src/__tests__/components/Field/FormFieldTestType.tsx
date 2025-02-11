import type { ReactNode } from "react";

import React, { useState } from "react";

import type { MosaicFieldProps } from "@root/components";

function FormFieldTestType<T = any, U = any, V = any>({
	Component,
	stateful,
	...props
}: MosaicFieldProps<T, U, V> & {
	Component: (props: MosaicFieldProps<T, U, V>) => ReactNode;
	stateful?: boolean;
}) {
	const [value, setValue] = useState<V | undefined>(undefined);

	if (stateful) {
		return (
			<Component
				{...props}
				value={value}
				onChange={async (value) => {
					props.onChange && props.onChange(value);
					setValue(value);
				}}
			/>
		);
	}

	return (
		<Component {...props} />
	);
}

export default FormFieldTestType;
