import * as React from "react";
import { memo, ReactElement, useState } from "react";
// External libraries
import { ColorResult, SketchPicker } from "react-color";

// Types
import { MosaicFieldProps } from "@root/components/Field";

// Styles
import { ColorContainer, ColorDiv, Cover, PopOver } from "./ColorPicker.styled";

const FormFieldColorPicker = (
	props: MosaicFieldProps<unknown, ColorResult>
): ReactElement => {
	const { fieldDef, value, onChange } = props;

	// State variables
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};

	const { rgb } = (value as ColorResult) || {};

	return (
		<>
			<ColorContainer
				displayColorPicker={displayColorPicker}
				disabled={fieldDef?.disabled}
			>
				<ColorDiv
					data-testid='colordiv-test'
					disabled={fieldDef?.disabled}
					color={value ? rgb : { r: 0, g: 141, b: 168, a: 1 }}
					onClick={handleClick}
				/>
			</ColorContainer>
			{displayColorPicker && !fieldDef?.disabled && (
				<PopOver>
					<Cover onClick={handleClose} />
					<SketchPicker color={value ? rgb : "#008DA8"} onChange={onChange} />
				</PopOver>
			)}
		</>
	);
};

export default memo(FormFieldColorPicker);
