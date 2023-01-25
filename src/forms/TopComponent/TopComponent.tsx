import * as React from "react";
import { memo, useState, ReactElement, useMemo, forwardRef } from "react";

// Components
import Tooltip from "@root/components/Tooltip";
import Checkbox from "@root/components/Checkbox";
import MobileView from "./Views/MobileView";
import DrawerHeader from "@root/components/DrawerHeader/DrawerHeader";
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
		onCancel,
		showActive,
		title,
		tooltipInfo,
		sections,
		sectionsRefs,
		formContentRef,
	} = props;

	// State variables
	const [activeChecked, setActiveChecked] = useState(false);
	const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
	const view = useView(Views.responsive);

	const handleCloseTooltip = () => {
		setTooltipIsOpen(false);
	};

	const handleOpenTooltip = () => {
		setTooltipIsOpen(true);
	};

	const handleActiveClick = () => {
		setActiveChecked(!activeChecked);
	};

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
					onOpen={handleOpenTooltip}
					onClose={handleCloseTooltip}
					text={tooltipInfo}
				>
					<StyledHelpIcon />
				</Tooltip>
			</StyledHelpIconWrapper>
		),
		[
			showActive,
			view,
			tooltipInfo,
			setTooltipIsOpen,
			tooltipIsOpen,
			handleOpenTooltip,
			handleCloseTooltip,
		]
	);

	const RenderView = () => {
		if (view === Views.mobile)
			return (
				<MobileView
					ref={ref}
					buttons={buttons}
					title={title}
					description={description}
					helpIcon={helpIcon}
					checkbox={checkbox}
					onCancel={onCancel}
					showActive={showActive}
					tooltipInfo={tooltipInfo}
					view={view}
				/>
			);
		if (view === Views.drawer)
			return (
				<DrawerHeader
					ref={ref}
					title={title}
					buttons={buttons}
					onCancel={onCancel}
				/>
			);
		if (view === Views.responsive)
			return (
				<ResponsiveView
					ref={ref}
					title={title}
					description={description}
					showActive={showActive}
					tooltipInfo={tooltipInfo}
					helpIcon={helpIcon}
					checkbox={checkbox}
					buttons={buttons}
					sections={sections}
					view={view}
					sectionsRefs={sectionsRefs}
					formContentRef={formContentRef}
				/>
			);
		if (view === Views.desktop || view === Views.bigDesktop)
			return (
				<DesktopView
					ref={ref}
					sectionsRefs={sectionsRefs}
					title={title}
					description={description}
					showActive={showActive}
					tooltipInfo={tooltipInfo}
					helpIcon={helpIcon}
					checkbox={checkbox}
					buttons={buttons}
					sections={sections}
					view={view}
					formContentRef={formContentRef}
				/>
			);

		return null;
	};

	return <RenderView />;
});

TopComponent.displayName = "TopComponent";

export default memo(TopComponent);