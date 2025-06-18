import * as React from "react";
import type { ReactElement } from "react";
import { useState, useMemo, useContext, Fragment } from "react";
import styled from "styled-components";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";

import LeftNavDrawer from "./LeftNavDrawer";
import LeftNavRoot from "./LeftNavRoot";
import LeftNavItems from "./LeftNavItems";
import LeftNavItemMobile from "./LeftNavItemMobile";
import LeftNavScroller from "./LeftNavScroller";
import LeftNavTitle from "./LeftNavTitle";
import type { LeftNavProps, LeftNavItemDef, LeftNavOnNav } from "./LeftNavTypes";
import { LeftNavContext } from "./LeftNavTypes";
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
		border-bottom: 1px solid ${theme.newColors.grey3["100"]};
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
		border-bottom: 1px solid ${theme.newColors.grey4["100"]};
		cursor: pointer;
	}

	& > .backButton > .buttonLabel {
		margin-left: 16px;
		color: white;
	}
`;

/**
 * Finds the parent of an item with a given name. Group
 * items do not count as parents, the closest ancestor
 * that is not a group is considered the parent.
 */
function findParent(items: LeftNavItemDef[], name: string, current?: LeftNavItemDef): undefined | LeftNavItemDef {
	for (const item of items) {
		if (item.name === name) {
			return current;
		}

		if (item.items) {
			const parent = findParent(item.items, name, item.type === "group" ? current : item);

			if (parent) {
				return parent;
			}
		}
	}
}

/**
 * Simple recursive function to search for an item by
 * a given name.
 */
function findItem(items: LeftNavItemDef[], name: string): undefined | LeftNavItemDef {
	for (const item of items) {
		if (item.name === name) {
			return item;
		}

		if (item.items) {
			const child = findItem(item.items, name);

			if (child) {
				return child;
			}
		}
	}
}

const ROOT_NAME = "_internal.root";

function LeftNavMobile(props: LeftNavProps): ReactElement {
	// Derive items from those provided in props, but create
	// a new level to act as the top level main menu
	const items = useMemo<LeftNavItemDef[]>(() => ([
		{
			name: ROOT_NAME,
			label: "Main Menu",
			items: props.items,
		},
	]), [props.items]);

	const [name, setName] = useState<string | undefined>(ROOT_NAME);

	const { current, previous } = useMemo(() => ({
		current: findItem(items, name),
		previous: findParent(items, name),
	}), [items, name]);

	const leftNavContext = useContext(LeftNavContext);

	const onClose = function() {
		setName(ROOT_NAME);
		props.onClose();
	};

	const onNav: LeftNavOnNav = function(args) {
		setName(ROOT_NAME);
		leftNavContext.onNav(args);
	};

	const onBack = function() {
		const parent = findParent(items, name);
		setName(parent.name);
	};

	const newContext = {
		...leftNavContext,
		onNav,
		ItemComponent : LeftNavItemMobile,
	};

	// Don't break if the items happen to change whilst
	// a sub menu is selected.
	if (!current) {
		setName(ROOT_NAME);
		return null;
	}

	return (
		<LeftNavDrawer
			open={props.open}
			onClose={onClose}
		>
			<LeftNavContext.Provider value={newContext}>
				<RootDiv aria-label="Main">
					<div className="header">
						<TridentIcon />
						<CloseIcon onClick={onClose} className="closeIcon" />
					</div>
					{
						previous !== undefined && (
							<Fragment>
								<div className="backButton" onClick={onBack}>
									<KeyboardBackspaceIcon />
									<div className="buttonLabel">{previous.label}</div>
								</div>
								<LeftNavTitle label={current.label} />
							</Fragment>
						)
					}
					<LeftNavScroller>
						<LeftNavItems
							items={current.items}
							onOpen={setName}
						/>
					</LeftNavScroller>
				</RootDiv>
			</LeftNavContext.Provider>
		</LeftNavDrawer>
	);
}

export default LeftNavMobile;
