import * as React from "react";
import { Fragment } from "react";
import LeftNavGroup from "./LeftNavGroup";
import LeftNavItem from "./LeftNavItem";
import { LeftNavItemDef, LeftNavBlockProps } from "./LeftNavTypes";

interface Props {
	items: LeftNavItemDef[]
	showLabel?: boolean
	openAnchorEl?: HTMLElement
	onOpen: LeftNavBlockProps["onOpen"]
}

function LeftNavItems(props: Props) {
	return (
		<Fragment>
			{
				props.items.map(val => {
					const Component = val.type === "group" ? LeftNavGroup : LeftNavItem;

					return (
						<Component
							key={val.name}
							item={val}
							showLabel={props.showLabel}
							openAnchorEl={props.openAnchorEl}
							onOpen={props.onOpen}
						/>
					)
				})
			}
		</Fragment>
	);
}

export default LeftNavItems;