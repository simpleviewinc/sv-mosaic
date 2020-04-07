import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

import { LeftNavProps, LeftNavContext } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
import LeftNavGroup from "./LeftNavGroup";
import theme from "../../theme";
import LeftNavSettingsButton from "./LeftNavSettingsButton";
import LeftNavLocalStorage from "./LeftNavLocalStorage";

const StyledDiv = styled.div`
	background: #2e2e31;
	max-width: 300px;
	flex: 1;
	display: flex;
	flex-direction: column;

	& > .top {
		flex: 1
	}

	& > .bottom {
		flex: 0 0 auto;
		text-align: center;
		margin-bottom: 12px;
		margin-top: 12px;
	}
`;

const defaultStorage = new LeftNavLocalStorage();

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

	const onNav = function(args) {
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
		}
	}, [props.onNav, zIndex, state.variant, onVariantChange]);

	const children = props.items.map(item => {
		const Component = item.type === "group" && state.variant !== "icons_only" ? LeftNavGroup : LeftNavItem;

		const showLabel = state.variant === "icons_only" ? false : true;

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
	
	const drawerVariant = (state.variant === "full" || state.variant === "icons_only") ? "persistent" : "temporary";
	const open = drawerVariant === "persistent" ? true : props.open;

	const onMouseLeave = function(e) {
		setState({
			...state,
			openAnchorEl : null
		})
	}

	if (!state.variant) {
		return null;
	}

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
			<StyledDiv onMouseLeave={onMouseLeave} onMouseEnter={function() { console.log("ENTER ROOT"); }}>
				<LeftNavContext.Provider value={contextValue}>
					<div className="top">
						{children}
					</div>
					<div className="bottom">
						<LeftNavSettingsButton/>
					</div>
				</LeftNavContext.Provider>
			</StyledDiv>
		</Drawer>
	)
}

export default LeftNav;