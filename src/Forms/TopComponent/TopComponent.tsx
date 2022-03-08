import * as React from 'react';
import { memo, useState, ReactElement, useEffect, useMemo } from 'react';

// Components
import Button from '@root/forms/Button';
import FormNav from '@root/forms/FormNav';
import Tooltip from '@root/components/Tooltip';
import Checkbox from '@root/components/Checkbox';
import MobileView from './Views/MobileView';
import DrawerView from './Views/DrawerView';
import ResponsiveView from './Views/ResponsiveView';
import DesktopView from './Views/DesktopView';

// Types and Utils
import { BREAKPOINTS } from '@root/theme/theme';
import { TopComponentProps } from './TopComponentTypes';

// Styles
import {
	Row,
	StyledHelpIcon,
	StyledHelpIconWrapper,
	FormContent,
} from './TopComponent.styled';

const responsiveBreakpoint = BREAKPOINTS.topComponent.responsiveView;
const mobileBreakpoint = BREAKPOINTS.mobile;
const bigScreenBreakpoint = BREAKPOINTS.topComponent.bigScreenView;

const TopComponent = (props: TopComponentProps): ReactElement => {
	const {
		cancelButtonAttrs,
		children,
		description,
		onCancel,
		onSubmit,
		showActive,
		title,
		tooltipInfo,
		sections,
		submitButtonAttrs,
		type = undefined,
	} = props;

	// State variables
	const [activeChecked, setActiveChecked] = useState(false);
	const [isBigView, setIsBigView] = useState(false);
	const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
	const [view, setView] = useState(null);

	const handleCloseTooltip = () => {
		setTooltipIsOpen(false);
	};

	const handleOpenTooltip = () => {
		setTooltipIsOpen(true);
	};

	const handleActiveClick = () => {
		setActiveChecked(!activeChecked);
	};

	const debounce = (func, timeout = 300) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	}

	const setResponsivenessDebounced = debounce(() => setResponsiveness());

	useEffect(() => {
		if (type === 'drawer') {
			setView('DRAWER');
		} else {
			// setResponsiveness();
			setResponsivenessDebounced();
			window.addEventListener('resize', setResponsiveness);

			return () => {
				window.removeEventListener('resize', setResponsiveness);
			};
		}
	}, []);

	const setResponsiveness = () => {
		const innerWidth = window.innerWidth;
		if (innerWidth < mobileBreakpoint) {
			setView('MOBILE');
		} else if (innerWidth < responsiveBreakpoint && innerWidth >= mobileBreakpoint) {
			setView('RESPONSIVE');

		} else if (innerWidth > bigScreenBreakpoint) {
			setView('DESKTOP');
		} else {
			setView('DESKTOP');
		}

		setIsBigView(innerWidth > bigScreenBreakpoint);
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
		if (view === 'DESKTOP') return (
			<DesktopView
				title={title}
				description={description}
				showActive={showActive}
				tooltipInfo={tooltipInfo}
				helpIcon={helpIcon}
				checkbox={checkbox}
				buttons={buttons}
				sections={sections}
				isBigView={isBigView}
			/>
		);

		return null;
	}

	return (
		<>
			<RenderView />
			{isBigView ? (
				<Row>
					{sections &&
						<FormNav sections={sections} />
					}
					<FormContent view={view}>{children}</FormContent>
				</Row>
			) : (
				<FormContent view={view}>{children}</FormContent>
			)}

		</>
	);
};

export default memo(TopComponent);
