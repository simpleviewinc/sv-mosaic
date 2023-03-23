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
import MobileView from "./Views/MobileView";
import ResponsiveView from "./Views/ResponsiveView";
import DesktopView from "./Views/DesktopView";
import { Views } from "@root/theme/theme";

// Types and Utils
import { TopComponentProps } from "./TopComponentTypes";

// Styles
import { StyledHelpIcon, StyledHelpIconWrapper } from "./TopComponent.styled";
import { useView } from "@root/utils/formViewUtils";

const TopComponent = forwardRef<HTMLDivElement, TopComponentProps>((props: TopComponentProps, ref): ReactElement => {
	const {
		buttons,
		description,
		showActive,
		title,
		onBack,
		tooltipInfo,
		sections,
		sectionsRefs,
		formContentRef,
	} = props;

	// State variables
	const [activeChecked, setActiveChecked] = useState(false);
	const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
	const view = useView(Views.responsive);

	const handleActiveClick = useCallback(() => {
		setActiveChecked((prev) => !prev);
	}, []);

	const checkbox = useMemo(
		() => (
			<Checkbox
				label="Active"
				checked={activeChecked}
				onClick={handleActiveClick}
			/>
		),
		[activeChecked, handleActiveClick]
	);

	const helpIcon = useMemo(
		() => (
			<StyledHelpIconWrapper
				onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
				showActive={showActive}
				isResponsiveView={view === Views.responsive}
				className={view}
			>
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
		[showActive, view, tooltipInfo, setTooltipIsOpen, tooltipIsOpen]
	);

	const desktopView = (
		<DesktopView
			ref={ref}
			sectionsRefs={sectionsRefs}
			title={title}
			onBack={onBack}
			description={description}
			showActive={showActive}
			tooltipInfo={tooltipInfo}
			helpIcon={helpIcon}
			checkbox={checkbox}
			buttons={buttons}
			sections={sections}
			view={view === Views.bigDesktop ? Views.bigDesktop : Views.desktop}
			formContentRef={formContentRef}
		/>
	);

	const ViewToRender = {
		"MOBILE": (
			<MobileView
				ref={ref}
				buttons={buttons}
				title={title}
				onBack={onBack}
				description={description}
				helpIcon={helpIcon}
				checkbox={checkbox}
				showActive={showActive}
				tooltipInfo={tooltipInfo}
				view={Views.mobile}
			/>
		),
		"RESPONSIVE": (
			<ResponsiveView
				ref={ref}
				title={title}
				onBack={onBack}
				description={description}
				showActive={showActive}
				tooltipInfo={tooltipInfo}
				helpIcon={helpIcon}
				checkbox={checkbox}
				buttons={buttons}
				sections={sections}
				view={Views.responsive}
				sectionsRefs={sectionsRefs}
				formContentRef={formContentRef}
			/>
		),
		"DESKTOP": desktopView,
		"BIG_DESKTOP": desktopView
	};

	return ViewToRender[view];
}
);

TopComponent.displayName = "TopComponent";

export default memo(TopComponent);
