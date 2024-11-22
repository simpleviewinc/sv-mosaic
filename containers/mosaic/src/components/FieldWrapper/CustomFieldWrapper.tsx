import type { PropsWithChildren } from "react";
import React, { memo } from "react";
import type { MosaicFieldProps } from "../Field/FieldTypes";
import useRegisterField from "@root/utils/hooks/useRegisterField";

function CustomFieldWrapper({ children, ...props }: PropsWithChildren<MosaicFieldProps>): React.ReactElement {
	useRegisterField(props);

	return (
		<>{children}</>
	);
}

export default memo(CustomFieldWrapper);
