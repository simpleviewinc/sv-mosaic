import * as React from "react";
import type { ReactElement } from "react";
import { memo } from "react";

// Components
import PhoneInput from "@simpleview/react-phone-input-2";

// Types and styles
import "@simpleview/react-phone-input-2/lib/bootstrap.css";
import type { PhoneDropdownData, PhoneSelectionInputSettings } from "./FormFieldPhoneTypes";
import {
	PhoneInputWrapper,
} from "./FormFieldPhone.styled";
import type { MosaicFieldProps } from "@root/components/Field";
import Skeleton from "@mui/material/Skeleton";
import { DropdownList } from "./DropdownList";
import testIds from "@root/utils/testIds";

const FormFieldPhone = (
	props: MosaicFieldProps<"phone", PhoneSelectionInputSettings, PhoneDropdownData>,
): ReactElement => {
	const {
		fieldDef,
		error,
		onChange,
		onBlur,
		value,
		disabled,
		inputRef,
		id,
		skeleton,
	} = props;

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
				data-testid={testIds.FORM_FIELD_SKELETON}
			/>
		);
	}

	return (
		<PhoneInputWrapper
			$error={Boolean(error)}
			onBlur={onBlur}
			$disabled={disabled}
		>
			<PhoneInput
				autoFormat={!!fieldDef?.inputSettings?.autoFormat}
				country={fieldDef?.inputSettings?.country ? fieldDef?.inputSettings.country : "us"}
				disabled={disabled}
				onChange={onChange}
				value={value}
				inputProps={{
					required: fieldDef?.required,
					ref: inputRef,
					id,
					"aria-label": fieldDef.label,
				}}
				tabbableDropdown={false}
				DropdownList={DropdownList}
			/>
		</PhoneInputWrapper>
	);
};
export default memo(FormFieldPhone);
