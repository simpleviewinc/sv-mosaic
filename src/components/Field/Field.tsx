import * as React from 'react';
import { ReactElement, useState, useEffect, useRef } from 'react';
import { StyledFieldContainer, StyledFieldWrapper } from './Field.styled';

import { default as Label } from './Label';
import { default as HelperText } from './HelperText';
import { default as InstructionText } from './InstructionText';
import { FieldDefProps } from '.';

const Field = ({
	children,
	error = false,
	disabled,
	required,
	label,
	helperText,
	errorText,
	instructionText,
	htmlFor,
	value,
	maxCharacters,
	name,
	size,
}: FieldDefProps): ReactElement => {
	const [renderAsTooltip, setRenderAsTooltip] = useState(false);

	const description = useRef<HTMLDivElement>(null);

	const errorWithMessage = error && errorText?.trim().length > 0;

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
	}, []);

	const renderBottomText = () => {
		if ((errorWithMessage || (errorWithMessage && required))) {
			return <HelperText error={error}>{errorText}</HelperText>;
		} else if (helperText) {
			console.log(helperText);
			return <HelperText>{helperText}</HelperText>;
		}
	}

	return (
		<StyledFieldContainer>
			<StyledFieldWrapper error={errorWithMessage || (errorWithMessage && required)} size={size}>
				<Label
					disabled={disabled}
					required={required}
					htmlFor={name}
					maxCharacters={maxCharacters}
					value={value}
					tooltip={renderAsTooltip}
					instructionText={instructionText}
				>
					{label}
				</Label>
				{children}
				{renderBottomText()}
			</StyledFieldWrapper>
			{instructionText && <InstructionText ref={description} tooltip={renderAsTooltip}>{instructionText}</InstructionText>}
		</StyledFieldContainer>
	);
};

export default Field;
