import * as React from "react";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import SettingsIcon from '@material-ui/icons/Settings';

import { LeftNavProps, LeftNavContext, LeftNavContextProps, LeftNavItemDef } from "./LeftNavTypes";
import LeftNavItems from "./LeftNavItems";
import LeftNavItemDesktop from "./LeftNavItemDesktop";
import LeftNavScroller from "./LeftNavScroller";
import LeftNavDrawer from "./LeftNavDrawer";
import LeftNavRoot from "./LeftNavRoot";
import theme from "../../theme";

const RootDiv = styled(LeftNavRoot)`
	max-width: 250px;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .bottom {
		flex: 0 0 auto;
		border-top: 1px solid ${theme.colors.gray600};
	}
`

function LeftNavDesktop(props: LeftNavProps) {
	const [state, setState] = useState({
		openName : undefined
	});

	const leftNavContext = useContext(LeftNavContext);

	const onOpen = (openName) => {
		setState({
			...state,
			openName
		})
	}

	const onClose = function() {
		setState({
			...state,
			openName : undefined
		});

		props.onClose();
	}

	const onNav: LeftNavProps["onNav"] = function(args) {
		// when we nav we want to close any flyouts we have
		setState({
			...state,
			openName : undefined
		});

		if (args.item.name.startsWith("_internal.")) {
			// if the display switcher was used, we call onVariantChange
			const variant = args.item.name.match(/_internal.(.*)/)[1] as LeftNavProps["variant"];
			props.onVariantChange(variant);
		} else {
			// else we all onNav for the main app to navigate
			props.onNav(args);
		}
	}

	const showLabel = props.variant === "icons_only" ? false : true;

	const items = props.variant === "icons_only" ? props.items.map(val => ({
		...val,
		type : "item" as LeftNavItemDef["type"]
	})) : props.items;

	const activeLabel = function(name) {
		if (name === props.variant) {
			return " (Active)"
		} else {
			return "";
		}
	}

	const settingsItem: LeftNavItemDef = {
		name : "_internal",
		label : "Nav Display",
		type : "item",
		mIcon : SettingsIcon,
		items : [
			{
				name : "_internal.full",
				label : `Full${activeLabel("full")}`
			},
			{
				name : "_internal.icons_only",
				label : `Icons Only${activeLabel("icons_only")}`
			},
			{
				name : "_internal.hidden",
				label : `Hidden${activeLabel("hidden")}`
			}
		]
	}

	// if the mouse leaves the component and it's children entirely, wait 200ms to close
	let timer: number;
	const onMouseLeave = function() {
		timer = window.setTimeout(() => {
			setState({
				...state,
				openName : undefined
			})
		}, leftNavContext.leaveTimeout);
	}

	const onMouseEnter = function() {
		clearTimeout(timer);
	}

	useEffect(() => {
		// cleanup the timeout that may have been set due to enter/leave mechanics
		return function cleanup() {
			clearTimeout(timer);
		}
	}, []);

	const newContext: LeftNavContextProps = {
		...leftNavContext,
		onNav,
		ItemComponent : LeftNavItemDesktop
	}

	const navContent = (
		<RootDiv onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<LeftNavContext.Provider value={newContext}>
				<LeftNavScroller className="top">
					<LeftNavItems
						items={items}
						showLabel={showLabel}
						onOpen={onOpen}
						openName={state.openName}
					/>
				</LeftNavScroller>
				<div className="bottom">
					<LeftNavItemDesktop
						item={settingsItem}
						showLabel={showLabel}
						openName={state.openName}
						onOpen={onOpen}
					/>
				</div>
			</LeftNavContext.Provider>
		</RootDiv>
	);
	
	const drawerContent = (
		<LeftNavDrawer
			open={props.open}
			onClose={onClose}
		>
			{navContent}
		</LeftNavDrawer>
	);

	if (["icons_only", "full"].includes(props.variant)) {
		return navContent;
	} else {
		return drawerContent;
	}
}

export default LeftNavDesktop;