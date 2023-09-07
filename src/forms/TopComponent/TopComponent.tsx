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
	Heading,
	PrimaryActions,
	SecondaryActions,
	SmallBack,
	SmallBackIcon,
	StyledCheckboxWrapper,
	StyledHelpIcon,
	StyledHelpIconWrapper,
	TopWrapper
} from "./TopComponent.styled";
import ButtonRow from "@root/components/ButtonRow/ButtonRow";
import TitleWrapper from "./Utils/TitleWrapper";

const TopComponent = forwardRef<HTMLDivElement, TopComponentProps>((props: TopComponentProps, ref): ReactElement => {
	const {
		buttons,
		description,
		showActive,
		title,
		onBack,
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
			<StyledCheckboxWrapper>
				<Checkbox
					label="Active"
					checked={activeChecked}
					onClick={handleActiveClick}
				/>
			</StyledCheckboxWrapper>
		),
		[activeChecked, handleActiveClick]
	);

	const helpIcon = useMemo(
		() => (
			<StyledHelpIconWrapper>
				<Tooltip
					open={tooltipIsOpen}
					onOpen={() => setTooltipIsOpen(true)}
					onClose={() => setTooltipIsOpen(false)}
					text={tooltipInfo}
				>
					<StyledHelpIcon />
				</Tooltip>
			</StyledHelpIconWrapper>
		),
		[showActive, tooltipInfo, setTooltipIsOpen, tooltipIsOpen]
	);

	return (
		<TopWrapper ref={ref} $bottomBorder={bottomBorder}>
			<Heading>
				<TitleWrapper
					title={title}
					onBack={onBack}
					description={description}
					collapse={collapse}
				/>
			</Heading>
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
	);
}
);

TopComponent.displayName = "TopComponent";

export default memo(TopComponent);
