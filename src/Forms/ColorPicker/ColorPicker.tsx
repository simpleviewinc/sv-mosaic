import { MosaicFieldProps } from '@root/components/Field';
import * as React from 'react';
import { memo, ReactElement, useState } from 'react';
import { SketchPicker } from 'react-color';
import { ColorContainer, ColorDiv, Cover, PopOver } from './ColorPicker.styled';
// import { ColorPickerProps } from './ColorPickerTypes';

const ColorPicker = (props: MosaicFieldProps<any>): ReactElement => {
	const {
		fieldDef,
		value,
		onChange
	} = props;

	// State variables
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};

	return (
		<>
			<ColorContainer
				displayColorPicker={displayColorPicker}
				disabled={fieldDef?.disabled}
			>
				<ColorDiv
					data-testid='colordiv-test'
					disabled={fieldDef?.disabled}
					color={value ? value : {
						rgb: {
							r: 0,
							g: 141,
							b: 168,
							a: 1,
						}
					}}
					onClick={handleClick}
				/>
			</ColorContainer>
			{displayColorPicker && !fieldDef?.disabled && (
				<PopOver>
					<Cover onClick={handleClose} />
					<SketchPicker
						color={value ? value : '#008DA8'}
						onChange={onChange}
					/>
				</PopOver>
			)}
		</>
	);
};

export default memo(ColorPicker);
