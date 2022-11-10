import * as React from "react";
import {
	memo,
	ReactElement,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";
import theme from "@root/theme";

// External libraries
import { ColorResult, SketchPicker, RGBColor } from "react-color";

// Types
import { MosaicFieldProps } from "@root/components/Field";

// Styles
import { PopOver } from "./ColorPicker.styled";
import ColorSelected from "./ColorSelected";

/**
 * Convert an RGBA value to its HEX representation
 * @param rgbaColor: rgba color value
 * @returns hex color value
 */
export const RGBAToHexA = (rgbaColor: RGBColor) => {
	let r = rgbaColor.r.toString(16);
	let g = rgbaColor.g.toString(16);
	let b = rgbaColor.b.toString(16);
	let a = Math.round(rgbaColor.a * 255).toString(16);

	if (r.length === 1) r = "0" + r;
	if (g.length === 1) g = "0" + g;
	if (b.length === 1) b = "0" + b;
	if (a.length === 1) a = "0" + a;

	return "#" + r + g + b + a;
};

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, handleCloseCb) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				handleCloseCb();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props: {
  handleClose: () => void;
  children: ReactNode;
}) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, props.handleClose);

	return <div ref={wrapperRef}>{props.children}</div>;
}

const FormFieldColorPicker = (
	props: MosaicFieldProps<unknown, string>
): ReactElement => {
	const { fieldDef, value, onChange } = props;

	// State variables
	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	const [color, setColor] = useState<ColorResult>(null);

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};

	const onColorChange = (color: ColorResult) => {
		setColor(color);
		onChange(RGBAToHexA(color.rgb));
	};

	return (
		<>
			<ColorSelected
				disabled={fieldDef?.disabled}
				color={color?.rgb || value || { r: 0, g: 141, b: 168, a: 1 }}
				onClick={handleClick}
			/>
			{displayColorPicker && !fieldDef?.disabled && (
				<OutsideAlerter handleClose={handleClose}>
					<PopOver>
						<SketchPicker color={value || theme.newColors.realTeal["100"]} onChange={onColorChange} />
					</PopOver>
				</OutsideAlerter>
			)}
		</>
	);
};

export default memo(FormFieldColorPicker);
