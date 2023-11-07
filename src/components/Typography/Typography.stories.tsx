/* eslint-disable react/no-children-prop */
import * as React from "react";
import { ReactElement } from "react";
import { Properties } from "csstype";
import { withKnobs, text, select, number, boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";
import theme from "@root/theme";
import {
	BodyText,
	SubtitleText,
	TitleText,
	TypographyVariant
} from "./";
import styled from "styled-components";
import Typography from "./Typography";
import { ColorTypes } from "../Button";
import { tags } from "./storyUtils";


export default {
	title : "Components/Typography",
	decorators: [withKnobs],
} as Meta;

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, nulla et iaculis semper, turpis massa faucibus sem, et egestas purus leo ut mauris. Nam ac ex porttitor, tempus eros eu, rhoncus libero. Integer risus lacus, ultrices at turpis id, suscipit vulputate nulla. Cras tincidunt ante quis mi accumsan.";
const contentShort = content.substring(0, 93);
const contentUrl = "https://www.google.com/?q=46503807498226023045874012183575071093022671901587285495525521941359381308429902926377654197863336467166861936857990937433143015269066983394795324415786553093224671668619368579909374331430152690669833947"

const variants: TypographyVariant[] = ["title", "subtitle", "body"];

const colors: ColorTypes[] = [
	"black",
	"blue",
	"lightBlue",
	"red",
	"yellow",
	"teal",
	"gray",
	"white"
];

const whiteSpaceOptions: Properties["whiteSpace"][] = [
	"-moz-initial",
	"-moz-pre-wrap",
	"break-spaces",
	"inherit",
	"initial",
	"normal",
	"nowrap",
	"pre",
	"pre-line",
	"pre-wrap",
	"revert",
	"revert-layer",
];

const BackDrop = styled.div`
	background-color: #f6f6f6;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 4rem 2rem 0;
	min-height: 100vh
`

const Wrapper = styled.div`
	background: white;
	padding: 1rem 4rem 4rem;
	width: 980px;
	max-width: 100%;
	border: 1px solid #e5e5e5;
	border-bottom: 0;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	flex-grow: 1;
`

const Heading = styled.h2`
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	font-size: 16px;
	font-weight: ${theme.fontWeight.light};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${theme.colors.simplyGray};
	margin: 2rem -12px;
	display: flex;
	align-items: center;
	text-transform: uppercase;

	&::after{
		content: " ";
		flex-grow: 1;
		border-top: 1px solid ${theme.newColors.grey2["100"]};
		margin-left: 16px;
		margin-top: 4px;
	}
`

const MyBodyText = styled(BodyText)`
	&& {
		font-size: 12px;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	}
`

export function Playground(): ReactElement {
	const variant = select("Variant", variants, "title");
	const tag = select("Tag", tags, "div");
	const maxLines = number("Maximum Lines", 0);
	const whiteSpace = select("White Space", whiteSpaceOptions, "normal");
	const breakAll = boolean("Break All", false);
	const title = text("Title", "");
	const children = text("Children", "Lorem ipsum");
	const color = select("Color", colors, "black");

	return (
		<Typography
			variant={variant}
			tag={tag}
			maxLines={maxLines}
			whiteSpace={whiteSpace}
			breakAll={breakAll}
			title={title}
			children={children}
			color={color}
		/>
	)
}

export function KitchenSink(): ReactElement {

	return (
		<>
			<BackDrop>
				<Wrapper>

					<Heading>Standard Title</Heading>
					<TitleText
						children={contentShort}
					/>

					<Heading>Title rendered as a h2 element</Heading>
					<TitleText
						tag="h2"
						children={contentShort}
					/>

					<Heading>Title with a maximum number of lines</Heading>
					<TitleText
						children={content}
						maxLines={1}
					/>

					<Heading>Subtitle</Heading>
					<SubtitleText
						children={contentShort}
					/>

					<Heading>Body</Heading>
					<BodyText
						children={content}
					/>

					<Heading>Body with an alternate colour and a maximum number of lines</Heading>
					<BodyText
						children={content}
						maxLines={2}
						color="red"
					/>

					<Heading>Body with a maximum number of lines and breakable characters</Heading>
					<BodyText
						children={contentUrl}
						maxLines={1}
						breakAll
					/>

					<Heading>Body with custom styling</Heading>
					<MyBodyText
						children={contentUrl}
						maxLines={1}
						breakAll
					/>

				</Wrapper>
			</BackDrop>
			<style dangerouslySetInnerHTML={{__html: ".sb-show-main{margin: 0}"}} />
		</>
	)
}
