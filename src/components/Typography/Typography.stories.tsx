import * as React from "react";
import { ReactElement } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import theme from "@root/theme";
import {
	H1 as H1Elm,
	H3 as H3Elm,
	BodyText as BodyTextElm,
	P as PElm
} from "./";


export default {
	title : "Components/Typography",
	decorators: [withKnobs],
} as Meta;

const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const variants = ["H1", "H3", "BodyText", "Paragraph"];

const componentMap = {
	"H1": H1Elm,
	"H3": H3Elm,
	"BodyText": BodyTextElm,
	"Paragraph": PElm
};

const colors = [
	"black",
	"blue",
	"lightBlue",
	"red",
	"yellow",
	"teal",
	"gray",
	"white"
];

const getBackgroundColor = typographyColor =>
	typographyColor === "lightBlue"
		? theme.colors.blue
		: typographyColor === "white"
			? theme.colors.black
			: "";

export function Playground(): ReactElement {

	const typographyVariant = select("Variant", variants, "H1");
	const typographyText = text("Text", "Lorem ipsum");
	const typographyColor = select("Color", colors, "black");

	const Component = componentMap[typographyVariant];

	return (
		<React.Fragment>
			<Component
				style={{backgroundColor: getBackgroundColor(typographyColor)}}
				color={typographyColor}
			>
				{typographyText}
			</Component>
		</React.Fragment>
	)
}

export function KitchenSink(): ReactElement {

	return (
		<React.Fragment>
			{
				variants.map((variant, id) => {
					const Component = componentMap[variant];
					return (
						<React.Fragment key={id}>
							<h1>{variant}</h1>
							{
								colors.map((color, color_id) => (
									<div key={color_id}>
										<Component
											style={{backgroundColor: getBackgroundColor(color)}}
											color={color}>
											{variant === "Paragraph" ? paragraphText : "Lorem ipsum dolor"}
										</Component>
									</div>
								))
							}
						</React.Fragment>
					)}
				)
			}
		</React.Fragment>
	)
}
