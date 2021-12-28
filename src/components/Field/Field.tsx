import * as React from 'react';
import { ReactElement, useState, useEffect, useRef, useMemo, memo } from 'react';
import { StyledFieldContainer, StyledFieldWrapper } from './Field.styled';

import { default as Label } from './Label';
import { default as HelperText } from './HelperText';
import { default as InstructionText } from './InstructionText';
import { FieldDefProps } from '.';
import { Sizes } from '@root/theme/sizes';

const Field = ({
	className,
	children,
	error,
	disabled,
	required,
	label,
	helperText,
	instructionText,
	htmlFor,
	value,
	maxCharacters,
	name,
	size,
	type,
}: FieldDefProps): ReactElement => {
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
			return <HelperText error={!!error}>{error}</HelperText>;
		} else if (helperText) {
			return <HelperText>{helperText}</HelperText>;
		}
	};

	const labelMargin = useMemo(() => {
		let labelMargin = '8px';
		if (type === 'linkSetup' || type === 'advancedSelection') {
			return labelMargin = '16px';
		} else if (type === 'table') {
			return labelMargin = '13px';
		}

		return labelMargin
	}, [type]);

	return (
		<StyledFieldContainer className={className}>
			<StyledFieldWrapper
				error={errorWithMessage || (errorWithMessage && required)}
				size={(type === 'chip' || type === 'linkSetup') ? Sizes.md : type === 'color' ? '102px' : type === 'table' ? 'fit-content' : size }
				type={type}
			>
				<Label
					labelMargin={labelMargin}
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
			{instructionText && type !== 'table' && <InstructionText ref={description} tooltip={renderAsTooltip}>{instructionText}</InstructionText>}
		</StyledFieldContainer>
	);
};

export default memo(Field);
