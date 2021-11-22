import * as React from 'react';
import { memo, ReactElement, useState } from 'react';
import { SketchPicker } from 'react-color';
import { ColorContainer, ColorDiv, Cover, PopOver } from './ColorPicker.styled';
import { ColorPickerProps } from './ColorPickerTypes';

const ColorPicker = (props: ColorPickerProps): ReactElement => {
	const { color, disabled, onChange } = props;

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
				disabled={disabled}
			>
				<ColorDiv
					data-testid='colordiv-test'
					disabled={disabled}
					color={color}
					onClick={handleClick}
				/>
			</ColorContainer>
			{displayColorPicker && !disabled && (
				<PopOver>
					<Cover onClick={handleClose} />
					<SketchPicker
						color={color}
						onChange={onChange}
					/>
				</PopOver>
			)}
		</>
	);
};

export default memo(ColorPicker);
