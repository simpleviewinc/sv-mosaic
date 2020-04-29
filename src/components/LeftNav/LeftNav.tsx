import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

import SettingsIcon from '@material-ui/icons/Settings';

import { LeftNavProps, LeftNavContext, LeftNavItemDef } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavGroup from "./LeftNavGroup";
import theme from "../../theme";
import LeftNavSettingsButton from "./LeftNavSettingsButton";
import LeftNavLocalStorage from "./LeftNavLocalStorage";

const StyledDiv = styled.div`
	background: #2e2e31;
	max-width: 300px;
	display: flex;
	flex-direction: column;
	height: 100%;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .bottom {
		flex: 0 0 auto;
		text-align: center;
		border-top: 1px solid ${theme.colors.gray600};
	}
`;

const defaultStorage = new LeftNavLocalStorage();
const leaveTimeout = 200;
const enterTimeout = 100;

function LeftNav(props: LeftNavProps) {
	const zIndex = props.zIndex ?? 100;
	const settingsStorage = props.settingsStorage ?? defaultStorage;

	const [state, setState] = useState({
		openAnchorEl : null,
		variant : undefined
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
		async function get() {
			const settings = await settingsStorage.get() ?? {};

			setState({
				...state,
				variant : settings.variant ?? "full"
			})
		}

		get();

		// cleanup the timeout that may have been set due to enter/leave mechanics
		return function cleanup() {
			clearTimeout(timer);
		}
	}, []);

	const onVariantChange = function(variant) {
		async function set() {
			await settingsStorage.set({ variant });

			setState({
				...state,
				variant
			})
		}

		set();
	}

	const onNav: LeftNavProps["onNav"] = function(args) {
		if (args.item.name.startsWith("_internal.")) {
			const variant = args.item.name.match(/_internal.(.*)/)[1];
			onVariantChange(variant);
			return;
		}

		props.onNav(args);

		if (state.variant === "hidden") {
			props.onClose();
		} else {
			setState({
				...state,
				openAnchorEl : null
			});
		}
	}

	const contextValue = useMemo(() => {
		return {
			zIndex,
			variant : state.variant,
			onNav,
			onVariantChange,
			leaveTimeout,
			enterTimeout
		}
	}, [props.onNav, zIndex, state.variant, onVariantChange]);

	const showLabel = state.variant === "icons_only" ? false : true;

	const children = props.items.map(item => {
		const Component = item.type === "group" && state.variant !== "icons_only" ? LeftNavGroup : LeftNavItem;

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
		if (name === state.variant) {
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
	
	const drawerVariant = (state.variant === "full" || state.variant === "icons_only") ? "persistent" : "temporary";
	const open = drawerVariant === "persistent" ? true : props.open;

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

	if (!state.variant) {
		return null;
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

	if (state.variant !== "hidden") {
		return navContent;
	} else {
		return (
			<Drawer
				anchor="left"
				variant={drawerVariant}
				open={open}
				onClose={onClose}
				ModalProps={{ disableEnforceFocus : true }}
				PaperProps={{ style : { borderRight : "0px", zIndex : "auto" } }}
				style={{ zIndex }}
			>
				{navContent}
			</Drawer>
		)
	}
}

export default LeftNav;