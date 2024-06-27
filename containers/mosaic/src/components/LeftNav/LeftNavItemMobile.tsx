import * as React from "react";
import { useCallback, useContext, ReactElement } from "react";

import { LeftNavBlockProps, LeftNavContext } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";

function LeftNavItemMobile(props: LeftNavBlockProps): ReactElement {
	const {
		item,
		onOpen,
	} = props;

	const leftNavContext = useContext(LeftNavContext);

	const onClick: React.MouseEventHandler = useCallback((event) => {
		if (!item.items) {
			leftNavContext.onNav({ item, event });
		} else {
			onOpen(item.name);
		}
	}, []);

	const attrs = {
		onClick,
	};

	return (
		<LeftNavItem
			{...props}
			attrs={attrs}
		/>
	);
}

export default LeftNavItemMobile;
