import * as React from "react";
import type { ReactElement } from "react";

import type { LeftNavProps } from "./LeftNavTypes";
import { MainMenu } from "../MainMenu";
/**
 * @deprecated Use MainMenu component instead.
 */
function LeftNav(props: LeftNavProps): ReactElement {
	return (
		<MainMenu
			{...props}
		/>
	);
}

export default LeftNav;
