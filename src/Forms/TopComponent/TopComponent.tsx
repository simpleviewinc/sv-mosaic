import * as React from 'react';
import { memo, useState, ReactElement, useEffect, useMemo } from 'react';

// Components
import Button from '@root/forms/Button';
import Tooltip from '@root/components/Tooltip';
import Checkbox from '@root/components/Checkbox';
import MobileView from './Views/MobileView';
import DrawerView from './Views/DrawerView';
import ResponsiveView from './Views/ResponsiveView';
import DesktopView from './Views/DesktopView';

// Types and Utils
import { TopComponentProps } from './TopComponentTypes';

// Styles
import {
	StyledHelpIcon,
	StyledHelpIconWrapper,
} from './TopComponent.styled';

const TopComponent = (props: TopComponentProps): ReactElement => {
	const {
		cancelButtonAttrs,
		description,
		onCancel,
		onSubmit,
		showActive,
		title,
		tooltipInfo,
		sections,
		submitButtonAttrs,
		type = undefined,
		view = 'RESPONSIVE',
	} = props;

	// State variables
	const [activeChecked, setActiveChecked] = useState(false);
	const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

	const handleCloseTooltip = () => {
		setTooltipIsOpen(false);
	};

	const handleOpenTooltip = () => {
		setTooltipIsOpen(true);
	};

	const handleActiveClick = () => {
		setActiveChecked(!activeChecked);
	};

	const submitButton = useMemo(
		() => (
			<Button
				buttonType='primary'
				onClick={onSubmit}
				{...submitButtonAttrs}
			>
				{submitButtonAttrs?.children ? submitButtonAttrs?.children : 'Save'}
			</Button>
		),
		[onSubmit, submitButtonAttrs]
	);

	const buttons = useMemo(
		() => (
			<>
				<Button
					buttonType='secondary'
					onClick={onCancel}
					{...cancelButtonAttrs}
				>
					{cancelButtonAttrs?.children ? cancelButtonAttrs?.children : 'Cancel'}
				</Button>
				{submitButton}
			</>
		),
		[onCancel, cancelButtonAttrs, submitButton]
	);

	const checkbox = useMemo(
		() => (
			<Checkbox
				label='Active'
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
				isResponsiveView={view === 'RESPONSIVE'}
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
		if (view === 'MOBILE') return (
			<MobileView
				title={title}
				description={description}
				helpIcon={helpIcon}
				checkbox={checkbox}
				onCancel={onCancel}
				submitButton={submitButton}
				showActive={showActive}
				tooltipInfo={tooltipInfo}
			/>
		);
		if (view === 'DRAWER') return (
			<DrawerView
				title={title}
				type={type}
				onCancel={onCancel}
				tooltipInfo={tooltipInfo}
				helpIcon={helpIcon}
				buttons={buttons}
			/>
		);
		if (view === 'RESPONSIVE') return (
			<ResponsiveView
				title={title}
				description={description}
				showActive={showActive}
				tooltipInfo={tooltipInfo}
				helpIcon={helpIcon}
				checkbox={checkbox}
				buttons={buttons}
				sections={sections}
			/>
		);
		if (view === 'DESKTOP' || view === 'BIG_DESKTOP') return (
			<DesktopView
				title={title}
				description={description}
				showActive={showActive}
				tooltipInfo={tooltipInfo}
				helpIcon={helpIcon}
				checkbox={checkbox}
				buttons={buttons}
				sections={sections}
				view={view}
			/>
		);

		return null;
	}

	return (
		<RenderView />
	);
};

export default memo(TopComponent);
