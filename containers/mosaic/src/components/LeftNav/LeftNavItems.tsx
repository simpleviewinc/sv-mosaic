import * as React from "react";
import type { ReactElement } from "react";
import { useContext, Fragment } from "react";

import LeftNavGroup from "./LeftNavGroup";
import type { LeftNavItemDef, LeftNavBlockProps } from "./LeftNavTypes";
import { LeftNavContext } from "./LeftNavTypes";

interface Props {
	items: LeftNavItemDef[];
	showLabel?: boolean;
	openName?: string;
	onOpen: LeftNavBlockProps["onOpen"];
}

/** Renders an array of navigation items. */
function LeftNavItems(props: Props): ReactElement {
	const leftNavContext = useContext(LeftNavContext);

	return (
		<Fragment>
			{
				props.items.map(val => {
					const Component = val.type === "group" ? LeftNavGroup : leftNavContext.ItemComponent;

					return (
						<Component
							key={val.name}
							item={val}
							showLabel={props.showLabel}
							openName={props.openName}
							onOpen={props.onOpen}
						/>
					);
				})
			}
		</Fragment>
	);
}

export default LeftNavItems;
