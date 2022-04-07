import * as React from "react";
import { ReactElement } from "react";

import {
	H1 as H1Elm,
	H3 as H3Elm,
	BodyText as BodyTextElm,
	P as PElm
} from "./";

export default {
	title : "Components/Typography"
}

export function H1(): ReactElement {
	return (
		<React.Fragment>
			<H1Elm>H1 - lorem ipsum dolor</H1Elm>
			<PElm>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PElm>
		</React.Fragment>
	)
}

export function H3(): ReactElement {
	return (
		<React.Fragment>
			<H3Elm>H3 - lorem ipsum dolor</H3Elm>
			<PElm>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PElm>
		</React.Fragment>
	)
}

export function BodyText(): ReactElement {
	return (
		<React.Fragment>
			<div>
				<BodyTextElm>Lorem</BodyTextElm> <BodyTextElm>ipsum</BodyTextElm>
			</div>
		</React.Fragment>
	)
}

export function P(): ReactElement {
	return (
		<PElm>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PElm>
	)
}