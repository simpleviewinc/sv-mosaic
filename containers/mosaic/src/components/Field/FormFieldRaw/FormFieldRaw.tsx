import * as React from "react";
import type { ReactElement } from "react";
import { memo } from "react";

// Types and styles
import type { MosaicFieldProps } from "@root/components/Field";
import type { RawInputSettings, FieldDefRawData } from "./FormFieldRawTypes";

const FormFieldRaw = (
	props: MosaicFieldProps<"raw", RawInputSettings, FieldDefRawData>,
): ReactElement => {
	const {
		value,
	} = props;

	return <>{value}</>;
};

export default memo(FormFieldRaw);
