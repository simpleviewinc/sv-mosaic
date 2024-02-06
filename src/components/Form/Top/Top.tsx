import * as React from "react";
import {
	memo,
	useState,
	ReactElement,
	useMemo,
	useCallback,
} from "react";

// Components
import Checkbox from "@root/components/Checkbox";

// Types and Utils
import { TopProps } from "./TopTypes";

// Styles
import {
	TopRoot,
	Heading,
	PrimaryActions,
	SecondaryActions,
	SmallBack,
	SmallBackIcon,
	ActiveCheckboxWrapper,
	TopWrapper,
	SmallDescription,
	LargeDescription,
} from "./TopStyled";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import { Title } from "@root/components/Title/TitleWrapper.styled";
import { TitleBackButton } from "@root/components/Title";
import { TitleText } from "@root/components/Typography";

const Top = (props: TopProps): ReactElement => {
	const {
		buttons,
		description,
		showActive,
		title,
		onBack,
		backLabel,
		bottomBorder,
		collapse,
	} = props;

	// State variables
	const [activeChecked, setActiveChecked] = useState(false);

	const handleActiveClick = useCallback(() => {
		setActiveChecked((prev) => !prev);
	}, []);

	const checkbox = useMemo(
		() => (
			<ActiveCheckboxWrapper>
				<Checkbox
					label="Active"
					checked={activeChecked}
					onClick={handleActiveClick}
				/>
			</ActiveCheckboxWrapper>
		),
		[activeChecked, handleActiveClick],
	);

	return (
		<TopRoot $bottomBorder={bottomBorder}>
			<TopWrapper>
				<Heading>
					<Title>
						{props.onBack && (
							<TitleBackButton
								collapse={collapse}
								onClick={props.onBack}
								label={backLabel}
							/>
						)}
						<TitleText attrs={{ title }} >{title}</TitleText>
					</Title>
				</Heading>
				{description && <SmallDescription>{description}</SmallDescription>}
				{showActive && (
					<SecondaryActions>
						{showActive && checkbox}
					</SecondaryActions>
				)}
				<PrimaryActions>
					{onBack && (
						<SmallBack type="button" onClick={onBack}>
							<SmallBackIcon />
						</SmallBack>
					)}
					<ButtonRow buttons={buttons} />
				</PrimaryActions>
			</TopWrapper>
			{description && <LargeDescription>{description}</LargeDescription>}
		</TopRoot>
	);
};

export default memo(Top);
