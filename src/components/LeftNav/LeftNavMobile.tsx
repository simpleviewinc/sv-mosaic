import * as React from "react";
import { useState, useMemo, useContext, Fragment, ReactElement } from "react";
import styled from "styled-components";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CloseIcon from "@material-ui/icons/Close";

import LeftNavDrawer from "./LeftNavDrawer";
import LeftNavRoot from "./LeftNavRoot";
import LeftNavItems from "./LeftNavItems";
import LeftNavItemMobile from "./LeftNavItemMobile";
import LeftNavScroller from "./LeftNavScroller";
import LeftNavTitle from "./LeftNavTitle";
import { LeftNavProps, LeftNavContext, LeftNavItemDef, LeftNavOnNav } from "./LeftNavTypes";
import { BodyText } from "../Typography";
import theme from "../../theme";
import TridentIcon from "../../theme/TridentIcon";

const RootDiv = styled(LeftNavRoot)`
	width: 80vw;
	max-width: 250px;

	& > .header {
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${theme.colors.gray600};
	}

	& > .header > .closeIcon {
		color: ${theme.colors.gray400};
		cursor: pointer;
	}

	& > .backButton {
		padding: 8px 16px;
		color: ${theme.colors.gray400};
		line-height: 24px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${theme.colors.gray700};
		cursor: pointer;
	}

	& > .backButton > .buttonLabel {
		margin-left: 16px;
		color: white;
	}
`;

function LeftNavMobile(props: LeftNavProps): ReactElement {
	const mobileRoot: LeftNavItemDef = useMemo(() => ({
		name : "root",
		label : "Main Menu",
		items : props.items
	}), [props.items]);

	const defaultState = {
		history : [mobileRoot]
	}

	const [state, setState] = useState(defaultState);

	const leftNavContext = useContext(LeftNavContext);

	const current = state.history[state.history.length - 1];
	const previous = state.history.length > 1 ? state.history[state.history.length - 2] : undefined;

	const onClose = function() {
		setState(defaultState);

		props.onClose();
	}

	const onNav: LeftNavOnNav = function(args) {
		setState(defaultState);

		leftNavContext.onNav(args);
	}

	const onOpen = function(name) {
		const allItems = [
			...current.items,
			...current.items.filter(val => val.type === "group").map(val => val.items).flat()
		];

		const item = allItems.find(val => val.name === name);

		setState({
			...state,
			history : [...state.history, item]
		});
	}

	const onBack = function() {
		const newHistory = state.history.slice(0, -1);

		setState({
			...state,
			history : newHistory
		})
	}

	const newContext = {
		...leftNavContext,
		onNav,
		ItemComponent : LeftNavItemMobile
	}

	return (
		<LeftNavDrawer
			open={props.open}
			onClose={onClose}
		>
			<LeftNavContext.Provider value={newContext}>
				<RootDiv>
					<div className="header">
						<TridentIcon/>
						<CloseIcon onClick={onClose} className="closeIcon"/>
					</div>
					{
						previous !== undefined &&
						<Fragment>
							<div className="backButton" onClick={onBack}>
								<KeyboardBackspaceIcon/>
								<BodyText className="buttonLabel">{previous.label}</BodyText>
							</div>
							<LeftNavTitle label={current.label}/>
						</Fragment>
					}
					<LeftNavScroller>
						<LeftNavItems
							items={current.items}
							onOpen={onOpen}
						/>
					</LeftNavScroller>
				</RootDiv>
			</LeftNavContext.Provider>
		</LeftNavDrawer>
	)
}

export default LeftNavMobile;