import * as React from "react";
import type { ReactElement } from "react";

import type { ButtonIntent, ButtonProps } from "#mosaic/components/Button";
import Button from "#mosaic/components/Button";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

import { useToggle } from "#mosaic/utils/toggle";
import { toggleMap, toggleMapInverse, toggleOptions, toggleOptionsInverse } from "@utils";
import { ButtonHeading, ButtonGrid, ButtonRow, ButtonCell } from "./Button.stories.styled";
import { BodyText } from "@simpleview/sv-mosaic/components/Typography";

export default {
	title: "Components/Button",
	parameters: {
		layout: "centered",
	},
};

const dropdownWithIcons: ButtonProps["menuItems"] = [
	{
		label : "Edit",
		mIcon : CreateIcon,
		onClick : function() {
			alert("EDIT CLICK");
		},
	},
	{
		label : "Download",
		mIcon : CloudDownloadIcon,
		onClick : function() {
			alert("DOWNLOAD CLICK");
		},
	},
];

export const Playground = ({
	backgroundColor,
	buttonIntent,
	buttonVariant,
	disabled,
	fullWidth,
	href,
	iconColor,
	iconPosition,
	label,
	labelText,
	menuItems,
	popover,
	popoverEvent,
	show,
	showIcon,
	size,
	smallText,
	tooltip,
}: typeof Playground.args): ReactElement => {
	const useIcon = buttonVariant === "icon" || showIcon;
	const tooltipType = tooltip ? tooltip === "string" ? "Tooltip string" : <h2>Tooltip as an H2</h2> : undefined;

	const action = {
		name: "show",
		onClick: () => alert("Clicked"),
		show: toggleMap[show],
		intent: buttonIntent,
		variant: buttonVariant,
	};

	const showButton = useToggle(action, "show");

	return (
		<div style={{ backgroundColor: backgroundColor === "light" ? "white" : "#333", padding: 20 }}>
			{showButton && (
				<Button
					attrs={{ $smallText: smallText }}
					label={label === "String" ? labelText : <FormatListBulletedOutlinedIcon />}
					variant={buttonVariant}
					intent={buttonIntent}
					fullWidth={fullWidth}
					disabled={toggleMapInverse[disabled]}
					tooltip={tooltipType}
					size={size}
					mIcon={useIcon && AddIcon}
					mIconColor={useIcon && iconColor}
					href={href ? "https://www.google.com/" : null}
					iconPosition={iconPosition}
					popover={popover && !tooltipType && <p>Popover Content</p>}
					popoverEvent={popoverEvent}
					menuItems={menuItems && dropdownWithIcons}
				/>
			)}
		</div>
	);
};

Playground.args = {
	backgroundColor: "light",
	buttonIntent: "primary",
	buttonVariant: "contained",
	disabled: "Undefined",
	fullWidth: false,
	href: false,
	iconColor: "",
	iconPosition: "left",
	label: "String",
	labelText: "Text",
	menuItems: false,
	popover: false,
	popoverEvent: "onClick",
	show: "Undefined",
	showIcon: false,
	size: "medium",
	smallText: false,
	tooltip: null,
};

Playground.argTypes = {
	backgroundColor: {
		options: ["light", "dark"],
		control: { type: "select" },
		name: "Background Color",
	},
	buttonIntent: {
		options: ["primary", "secondary", "tertiary", "info", "specialized", "danger"],
		control: { type: "select" },
		name: "Intent",
	},
	buttonVariant: {
		options: ["text", "contained"],
		control: { type: "select" },
		name: "Variant",
	},
	disabled: {
		options: toggleOptionsInverse,
		control: { type: "select" },
		name: "Disabled",
	},
	fullWidth: {
		name: "Full Width",
	},
	href: {
		name: "URL (href)",
	},
	iconColor: {
		options: ["black", "blue", "lightBlue", "red", "yellow", "teal", "gray", "white"],
		control: { type: "select" },
		name: "Icon Color",
	},
	iconPosition: {
		options: ["left", "right"],
		control: { type: "select" },
		name: "Icon Position",
	},
	label: {
		options: ["String", "JSX"],
		control: { type: "select" },
		name: "Label",
	},
	labelText: {
		name: "Label Text",
	},
	menuItems: {
		name: "Menu Items",
	},
	popover: {
		name: "Popover",
	},
	popoverEvent: {
		options: ["onClick", "onHover"],
		control: { type: "select" },
		name: "Popover Event",
	},
	show: {
		options: toggleOptions,
		control: { type: "select" },
		name: "Show",
	},
	showIcon: {
		name: "Show Icon",
	},
	size: {
		options: ["small", "medium"],
		control: { type: "select" },
		name: "Size",
	},
	smallText: {
		name: "Small Text",
	},
	tooltip: {
		options: ["string", "JSX", null],
		control: { type: "select" },
		name: "Tooltip",
	},
};

const buttonIntents: Record<string, ButtonIntent> = {
	Primary: "primary",
	Secondary: "secondary",
	Tertiary: "tertiary",
	Info: "info",
	Danger: "danger",
	Specialized: "specialized",
};

export const KitchenSink = (): ReactElement => {
	return (
		<div>
			{Object.entries(buttonIntents).map(([header, intent]) => (
				<div key={header}>
					<ButtonHeading>{header}</ButtonHeading>
					<ButtonGrid>
						<ButtonRow>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={AddIcon}
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									mIcon={AddIcon}
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={AddIcon}
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									mIcon={AddIcon}
								/>
							</ButtonCell>
						</ButtonRow>
						<ButtonRow>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									disabled
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={AddIcon}
									disabled
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
									disabled
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									mIcon={AddIcon}
									disabled
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									disabled
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={AddIcon}
									disabled
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
									disabled
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									mIcon={AddIcon}
									disabled
								/>
							</ButtonCell>
						</ButtonRow>
						<ButtonRow>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									size="small"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={AddIcon}
									size="small"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
									size="small"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									mIcon={AddIcon}
									size="small"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									size="small"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={AddIcon}
									size="small"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
									size="small"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									mIcon={AddIcon}
									size="small"
								/>
							</ButtonCell>
						</ButtonRow>
						<ButtonRow>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									size="xsmall"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={AddIcon}
									size="xsmall"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
									size="xsmall"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="contained"
									mIcon={AddIcon}
									size="xsmall"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									size="xsmall"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={AddIcon}
									size="xsmall"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									label="Label"
									mIcon={ExpandMoreIcon}
									iconPosition="right"
									size="xsmall"
								/>
							</ButtonCell>
							<ButtonCell>
								<Button
									intent={intent}
									variant="text"
									mIcon={AddIcon}
									size="xsmall"
								/>
							</ButtonCell>
						</ButtonRow>
					</ButtonGrid>
					<BodyText attrs={{ style:{ maxWidth: 700, margin: "0 auto 15px", textAlign: "center" } }}>
						<>This is a body of text used to demonstrate a button with the inline size. This button can be nested amongst a large paragraph of text, but will inherit the font size, line height of the text that surrounds it. It works just like the one you see</>
						{" "}
						<Button
							intent={intent}
							variant="text"
							label="here"
							size="inherit"
						/>
						{". "}
						<>You can even include an icon</>
						{" "}
						<Button
							intent={intent}
							variant="text"
							label="like this"
							size="inherit"
							mIcon={OpenInNewIcon}
							href="https://www.google.com"
							muiAttrs={{ target: "_blank" }}
						/>
						{" "}
						and it fits in there nice and snug.
					</BodyText>
				</div>
			))}
		</div>
	);
};
