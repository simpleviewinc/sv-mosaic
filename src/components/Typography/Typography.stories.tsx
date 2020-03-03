import * as React from "react";

import {
	H1 as H1Elm,
	H3 as H3Elm,
	BodyText as BodyTextElm
} from "./";

export default {
	title : "Components|Typography"
}

export function H1() {
	return (
		<React.Fragment>
			<H1Elm>H1 - lorem ipsum dolor</H1Elm>
			<BodyTextElm as="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BodyTextElm>
		</React.Fragment>
	)
}

export function H3() {
	return (
		<React.Fragment>
			<H3Elm>H3 - lorem ipsum dolor</H3Elm>
			<BodyTextElm as="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BodyTextElm>
		</React.Fragment>
	)
}

export function BodyText() {
	return (
		<React.Fragment>
			<BodyTextElm as="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BodyTextElm>
		</React.Fragment>
	)
}