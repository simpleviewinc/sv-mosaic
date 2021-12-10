import { ColorChangeHandler, Color } from 'react-color';
export interface ColorPickerProps {
    /**
     * RGB value of the selected color.
     */
    value: Color;
    /**
     * If true, sets opacity and disables the
     * click event.
     */
    disabled?: boolean;
    /**
     * Function to call every time the color is changed.
     */
    onChange: ColorChangeHandler;
}
