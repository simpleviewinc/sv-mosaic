import * as React from "react";
import {
	memo,
	useState,
	ReactElement,
	useMemo,
	forwardRef,
	useCallback,
} from "react";

// Components
import Tooltip from "@root/components/Tooltip";
import Checkbox from "@root/components/Checkbox";

// Types and Utils
import { TopComponentProps } from "./TopComponentTypes";

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
} from "./TopComponent.styled";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import { Title } from "./Utils/TitleWrapper.styled";
import TitleBackButton from "./Utils/TitleBackButton";
import { H1 } from "@root/components/Typography";

const TopComponent = forwardRef<HTMLDivElement, TopComponentProps>((props: TopComponentProps, ref): ReactElement => {
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
			<TopWrapper ref={ref}>
				<Heading>
					<Title>
						{props.onBack && (
							<TitleBackButton
								collapse={collapse}
								onClick={props.onBack}
								label={backLabel}
							/>
						)}
						<H1 attrs={{ title }} >{title}</H1>
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
}
);

TopComponent.displayName = "TopComponent";

export default memo(TopComponent);
