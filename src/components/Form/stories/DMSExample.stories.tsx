import * as React from "react";
import { ReactElement } from "react";
import { FormWithLayout } from "./FormWithLayout.stories";


import HomeIcon from "@mui/icons-material/Home";
import { NavWrapper } from "@root/components/LeftNav/NavWrapper";

export const DMSExample = (): ReactElement => {
	const items = [{
		name : "form_with_layout",
		label : "Form With Layout",
		mIcon : HomeIcon,
	}];

	return (
		<NavWrapper items={items} onlyContent={true}>
			<FormWithLayout height="100%"/>
		</NavWrapper>
	);
};
