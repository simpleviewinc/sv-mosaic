import * as React from "react";
import {
	memo,
	useState,
	ReactElement,
	useMemo,
	useCallback,
} from "react";

// Components
import Tooltip from "@root/components/Tooltip";
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
	HelpIcon,
	HelpIconWrapper,
	TopWrapper,
	SmallDescription,
	LargeDescription
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
		tooltipInfo,
		bottomBorder,
		collapse
	} = props;

	// State variables
	const [activeChecked, setActiveChecked] = useState(false);
	const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

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
		[activeChecked, handleActiveClick]
	);

	const helpIcon = useMemo(
		() => (
			<HelpIconWrapper>
				<Tooltip
					open={tooltipIsOpen}
					onOpen={() => setTooltipIsOpen(true)}
					onClose={() => setTooltipIsOpen(false)}
					text={tooltipInfo}
				>
					<HelpIcon />
				</Tooltip>
			</HelpIconWrapper>
		),
		[showActive, tooltipInfo, setTooltipIsOpen, tooltipIsOpen]
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
				{((tooltipInfo && helpIcon) || showActive) && (
					<SecondaryActions>
						{tooltipInfo && helpIcon}
						{showActive && checkbox}
					</SecondaryActions>
				)}
				<PrimaryActions>
					{onBack && (
						<SmallBack type="button" onClick={onBack}>
							<SmallBackIcon />
						</SmallBack>
					)}
					{buttons && (
						<ButtonRow buttons={buttons} />
					)}
				</PrimaryActions>
			</TopWrapper>
			{description && <LargeDescription>{description}</LargeDescription>}
		</TopRoot>
	);
};

export default memo(Top);
