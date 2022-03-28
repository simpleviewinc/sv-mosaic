import * as React from "react";
import { ReactElement, useState, useEffect, useRef, useMemo, memo } from "react";
import { StyledFieldContainer, StyledFieldWrapper } from "./Field.styled";

import { default as Label } from "./Label";
import { default as HelperText } from "./HelperText";
import { default as InstructionText } from "./InstructionText";
import { MosaicFieldProps } from ".";
import { Sizes } from "@root/theme/sizes";

const Field = ({
	children,
	error,
	fieldDef,
	colsInRow,
	value,
}: MosaicFieldProps<any>): ReactElement => {
	const [renderAsTooltip, setRenderAsTooltip] = useState(false);

	const description = useRef<HTMLDivElement>(null);

	const errorWithMessage = error?.trim().length > 0;

	const handleDescriptionRender = () => {
		if (description.current) {
			const node = description.current;
			const nodeStyle = window.getComputedStyle(node);
			const marginLeft = parseFloat(nodeStyle.getPropertyValue("margin-left"));
			if (marginLeft > 24) {
				setRenderAsTooltip(false);
			} else {
				setRenderAsTooltip(true);
			}
		}
	};

	useEffect(() => {
		if (colsInRow === 1) {
			if (fieldDef?.type === "imageUpload" || fieldDef?.type === "table") {
				setRenderAsTooltip(true);
			} else {
				handleDescriptionRender();
				let timeoutId: any = 150;
				const resizeListener = () => {
					if (timeoutId) {
						clearTimeout(timeoutId);
						timeoutId = setTimeout(() => handleDescriptionRender(), 150);
					}
				};
				window.addEventListener("resize", resizeListener);

				return () => {
					window.removeEventListener("resize", resizeListener);
				};
			}
		} else {
			setRenderAsTooltip(true);
		}
	}, []);

	const renderBottomText = () => {
		if ((errorWithMessage || (errorWithMessage && fieldDef?.required))) {
			return <HelperText error={!!error}>{error}</HelperText>;
		} else if (fieldDef?.helperText) {
			return <HelperText>{fieldDef?.helperText}</HelperText>;
		}
	};

	const labelMargin = useMemo(() => {
		let labelMargin = "8px";
		if (
			//fieldDef?.type === 'advancedSelection' ||
			fieldDef?.type === "imageUpload" ||
			fieldDef?.type === "address"
		) {
			return (labelMargin = "16px");
		} else if (fieldDef?.type === "table") {
			return (labelMargin = "13px");
		}

		return labelMargin;
	}, [fieldDef?.type]);

	return (
		<StyledFieldContainer className={fieldDef?.className} style={fieldDef?.style}>
			<StyledFieldWrapper
				error={errorWithMessage || (errorWithMessage && fieldDef?.required)}
				size={(fieldDef?.type === "chip" || fieldDef?.type === "linkSetup") ? Sizes.md : fieldDef?.type === "table" ? "fit-content" : fieldDef?.size}
			>
				{
					((fieldDef?.label && fieldDef?.label?.length > 0)
						|| fieldDef?.maxCharacters
						|| (fieldDef?.instructionText && renderAsTooltip))
					&&
					<Label
						labelMargin={labelMargin}
						disabled={fieldDef?.disabled}
						required={fieldDef?.required}
						htmlFor={fieldDef?.name}
						maxCharacters={fieldDef?.maxCharacters}
						value={value}
						tooltip={renderAsTooltip}
						instructionText={fieldDef?.instructionText}
					>
						{fieldDef?.label}
					</Label>
				}
				{children}
				{renderBottomText()}
			</StyledFieldWrapper>
			{(fieldDef?.instructionText && colsInRow === 1 && !renderAsTooltip) &&
				<InstructionText
					ref={description}
					tooltip={renderAsTooltip}
					labelMargin={labelMargin}
				>
					{fieldDef?.instructionText}
				</InstructionText>
			}
		</StyledFieldContainer>
	);
};

export default memo(Field);
