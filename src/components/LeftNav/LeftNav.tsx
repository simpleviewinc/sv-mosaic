import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import { DrawerProps } from "@material-ui/core/Drawer";

import SettingsIcon from '@material-ui/icons/Settings';

import { LeftNavProps, LeftNavContext, LeftNavItemDef } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavGroup from "./LeftNavGroup";
import theme from "../../theme";

const StyledDiv = styled.div`
	background: #2e2e31;
	max-width: 250px;
	display: flex;
	flex-direction: column;
	height: 100%;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .top::-webkit-scrollbar {
		width: 12px;
	}

	& > .top::-webkit-scrollbar-track {
		background-color: #26262a;
	}

	& > .top::-webkit-scrollbar-thumb {
		background-color: #7a7a7d;
	}

	& > .top:hover::-webkit-scrollbar-thumb {
		background-color: #5b5b5d;
	}

	& > .bottom {
		flex: 0 0 auto;
		text-align: center;
		border-top: 1px solid ${theme.colors.gray600};
	}
`;

const leaveTimeout = 200;
const enterTimeout = 100;

const drawerProps: Pick<DrawerProps, "anchor" | "variant" | "ModalProps" | "PaperProps"> = {
	anchor : "left",
	variant : "temporary",
	ModalProps : { disableEnforceFocus : true },
	PaperProps : { style : { borderRight : "0px", zIndex : "auto" } }
}

function LeftNav(props: LeftNavProps) {
	const zIndex = props.zIndex ?? 100;

	const [state, setState] = useState({
		openAnchorEl : null
	});

	const onOpen = (openAnchorEl) => {
		setState({
			...state,
			openAnchorEl
		})
	}

	const onClose = function() {
		setState({
			...state,
			openAnchorEl : null
		});

		props.onClose();
	}

	useEffect(() => {
		// cleanup the timeout that may have been set due to enter/leave mechanics
		return function cleanup() {
			clearTimeout(timer);
		}
	}, []);

	const onNav: LeftNavProps["onNav"] = function(args) {
		// when we nav we want to close any flyouts we have
		setState({
			...state,
			openAnchorEl : null
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

	const contextValue = useMemo(() => {
		return {
			active : props.active,
			zIndex,
			onNav,
			leaveTimeout,
			enterTimeout
		}
	}, [props.onNav, zIndex, props.active]);

	const showLabel = props.variant === "icons_only" ? false : true;

	const children = props.items.map(item => {
		const Component = item.type === "group" && props.variant !== "icons_only" ? LeftNavGroup : LeftNavItem;

		return (
			<Component
				key={item.name}
				item={item}
				showLabel={showLabel}
				openAnchorEl={state.openAnchorEl}
				onOpen={onOpen}
			/>
		)
	});

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
	const onMouseLeave = function(e) {
		timer = window.setTimeout(() => {
			setState({
				...state,
				openAnchorEl : null
			})
		}, leaveTimeout);
	}

	const onMouseEnter = function() {
		clearTimeout(timer);
	}

	const navContent = (
		<StyledDiv onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
			<LeftNavContext.Provider value={contextValue}>
				<div className="top">
					{children}
				</div>
				<div className="bottom">
					<LeftNavItem
						item={settingsItem}
						showLabel={showLabel}
						openAnchorEl={state.openAnchorEl}
						onOpen={onOpen}
					/>
				</div>
			</LeftNavContext.Provider>
		</StyledDiv>
	);

	if (props.variant !== "hidden") {
		return navContent;
	} else {
		return (
			<Drawer
				{...drawerProps}
				open={props.open}
				onClose={onClose}
				style={{ zIndex }}
			>
				{navContent}
			</Drawer>
		)
	}
}

export default LeftNav;