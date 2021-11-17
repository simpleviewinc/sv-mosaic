import { ColorChangeHandler } from 'react-color';
export interface ColorPickerProps {
    /**
     * HEX value of the selected color.
     */
    color: string;
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
