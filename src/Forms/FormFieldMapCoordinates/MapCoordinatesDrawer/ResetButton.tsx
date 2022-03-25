import * as React from "react";
import { memo, ReactElement } from "react";
import Button from "@root/components/Button";

const ResetButton = (props: { value: any; fieldDef: any; }): ReactElement => {
	const { value, fieldDef } = props;

	return (
		value && (
			<Button
				color="teal"
				variant="text"
				label="Reset"
				onClick={fieldDef?.inputSettings?.resetLocation}
				muiAttrs={{ disableRipple: true }}
				attrs={{ style: { margin: "auto auto 35px auto" } }}
			></Button>
		)
	);
};

export default memo(ResetButton);
