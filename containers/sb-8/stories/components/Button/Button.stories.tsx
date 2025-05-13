import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";

import type { ButtonProps } from "#mosaic/components/Button";
import Button from "#mosaic/components/Button";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HelpIcon from "@mui/icons-material/Help";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";

import ButtonRow from "#mosaic/components/ButtonRow";
import { useToggle } from "#mosaic/utils/toggle";
import { toggleMap, toggleMapInverse, toggleOptions, toggleOptionsInverse } from "@utils";

export default {
	title: "Components/Button",
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
	buttonColor,
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
		color: buttonColor,
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
					color={buttonColor}
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
	buttonColor: "black",
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
	buttonColor: {
		options: ["black", "blue", "lightBlue", "red", "yellow", "teal", "gray", "white"],
		control: { type: "select" },
		name: "Color",
	},
	buttonVariant: {
		options: ["text", "outlined", "contained", "icon"],
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

export const KitchenSink = (): ReactElement => {
	const [, setAnchorEl] = useState(null);

	function clickHandler() {
		alert("yes");
	}

	const openDropdown = function(event) {
		setAnchorEl(event.currentTarget);
	};

	const dropdownWithColoredIcons: ButtonProps["menuItems"] = [
		{
			label : "Edit",
			mIcon : CreateIcon,
			color : "blue",
			onClick : function() {
				alert("EDIT CLICK");
			},
		},
		{
			label : "Download",
			mIcon : CloudDownloadIcon,
			color : "blue",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			},
		},
		{
			label : "Delete",
			mIcon : DeleteIcon,
			color : "red",
			onClick : function() {
				alert("DELETE CLICK");
			},
		},
		{
			label : "Cancel",
			mIcon : ChevronLeftIcon,
			onClick : function() {
				alert("CANCEL CLICK");
			},
		},
	];

	const dropdownWithText: ButtonProps["menuItems"] = [
		{
			label : "Edit",
			onClick : function() {
				alert("EDIT CLICK");
			},
		},
		{
			label : "Download",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			},
		},
	];

	return (
		<div>
			<h1>Buttons!</h1>
			<h2>Contained</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Save" onClick={clickHandler} />
					<Button color="blue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="lightBlue" variant="contained" label="Save" onClick={clickHandler} />
					<Button color="lightBlue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="red" variant="contained" label="Delete" onClick={clickHandler} />
					<Button color="red" variant="contained" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
					<Button color="black" variant="contained" label="Cancel" onClick={clickHandler} />
					<Button color="black" variant="contained" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
					<Button color="yellow" variant="contained" label="Save" onClick={clickHandler} />
					<Button color="yellow" variant="contained" label="Add" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Contained - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" disabled label="Save" onClick={clickHandler} />
					<Button color="blue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="lightBlue" variant="contained" disabled label="Save" onClick={clickHandler} />
					<Button color="lightBlue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="red" variant="contained" disabled label="Delete" onClick={clickHandler} />
					<Button color="red" variant="contained" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
					<Button color="black" variant="contained" disabled label="Cancel" onClick={clickHandler} />
					<Button color="black" variant="contained" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
					<Button color="yellow" variant="contained" disabled label="Save" onClick={clickHandler} />
					<Button color="yellow" variant="contained" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Outlined</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Save" onClick={clickHandler} />
					<Button color="blue" variant="outlined" label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="red" variant="outlined" label="Delete" onClick={clickHandler} />
					<Button color="red" variant="outlined" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
					<Button color="black" variant="outlined" label="Cancel" onClick={clickHandler} />
					<Button color="black" variant="outlined" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
					<Button color="gray" variant="outlined" label="Save" onClick={clickHandler} />
					<Button color="gray" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="teal" variant="outlined" label="Save" onClick={clickHandler} />
					<Button color="teal" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Outlined - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" disabled label="Save" onClick={clickHandler} />
					<Button color="blue" variant="outlined" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="red" variant="outlined" disabled label="Delete" onClick={clickHandler} />
					<Button color="red" variant="outlined" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
					<Button color="black" variant="outlined" disabled label="Cancel" onClick={clickHandler} />
					<Button color="black" variant="outlined" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
					<Button color="gray" variant="outlined" disabled label="Save" onClick={clickHandler} />
					<Button color="gray" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="teal" variant="outlined" disabled label="Save" onClick={clickHandler} />
					<Button color="teal" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Text</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="text" label="Save" onClick={clickHandler} />
					<Button color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="red" variant="text" label="Delete" onClick={clickHandler} />
					<Button color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
					<Button color="black" variant="text" label="Cancel" onClick={clickHandler} />
					<Button color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
					<Button color="teal" variant="text" label="Save" onClick={clickHandler} />
					<Button color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Text - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="text" disabled label="Save" onClick={clickHandler} />
					<Button color="blue" variant="text" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="red" variant="text" disabled label="Delete" onClick={clickHandler} />
					<Button color="red" variant="text" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
					<Button color="black" variant="text" disabled label="Cancel" onClick={clickHandler} />
					<Button color="black" variant="text" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
					<Button color="teal" variant="text" disabled label="Save" onClick={clickHandler} />
					<Button color="teal" variant="text" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Small Text</h2>
			<div>
				<ButtonRow>
					<Button attrs={{ $smallText: true }} color="blue" variant="text" label="Save" onClick={clickHandler} />
					<Button attrs={{ $smallText: true }} color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler} />
					<Button attrs={{ $smallText: true }} color="red" variant="text" label="Delete" onClick={clickHandler} />
					<Button attrs={{ $smallText: true }} color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
					<Button attrs={{ $smallText: true }} color="black" variant="text" label="Cancel" onClick={clickHandler} />
					<Button attrs={{ $smallText: true }} color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
					<Button attrs={{ $smallText: true }} color="teal" variant="text" label="Save" onClick={clickHandler} />
					<Button attrs={{ $smallText: true }} color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Icon Positions</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Save" iconPosition="left" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="blue" variant="contained" label="Save" iconPosition="right" mIcon={AddIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Multi-Icon buttons</h2>
			<div>
				<ButtonRow>
					<Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="contained" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
					<Button color="blue" label={<GridOnOutlinedIcon />} variant="contained" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
					<Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="outlined" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
					<Button color="blue" label={<GridOnOutlinedIcon />} variant="outlined" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
					<Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="text" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
					<Button color="blue" label={<GridOnOutlinedIcon />} variant="text" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
				</ButtonRow>
			</div>

			<h2>Icon Buttons</h2>
			<div>
				<Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
				<Button color="blue" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="blue" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="blue" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
				<Button color="red" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
				<Button color="red" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="red" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="red" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
				<Button color="black" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
				<Button color="black" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="black" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="black" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
				<Button color="gray" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="gray" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="gray" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
				<Button color="teal" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
				<Button color="teal" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="teal" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="teal" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
				<Button color="yellow" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
				<Button color="yellow" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="yellow" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="yellow" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
				<div style={{ background: "black", display: "inline-block" }}>
					<Button color="white" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
					<Button color="white" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
					<Button color="white" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
					<Button color="white" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
				</div>
			</div>

			<h2>Icon Buttons - disabled</h2>
			<div>
				<Button color="blue" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
				<Button color="blue" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="blue" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="blue" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
				<Button color="red" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
				<Button color="red" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="red" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="red" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
				<Button color="black" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
				<Button color="black" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
				<Button color="black" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
				<Button color="black" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
			</div>

			<h2>Button Sizes</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Small" size="small" />
					<Button color="blue" variant="contained" label="Medium (default)" />
				</ButtonRow>
			</div>
			<br />
			<br />
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Small" size="small" mIcon={AddIcon} />
					<Button color="blue" variant="outlined" label="Medium (default)" mIcon={AddIcon} />
				</ButtonRow>
			</div>
			<br />
			<br />
			<div>
				<ButtonRow>
					<Button color="black" variant="icon" size="small" mIcon={AddIcon} />
					<Button color="black" variant="icon" mIcon={AddIcon} />
				</ButtonRow>
			</div>

			<h2>Buttons that open menus</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Dropdown with Icons" menuItems={dropdownWithIcons} />
					<Button color="blue" variant="outlined" label="Dropdown with text" menuItems={dropdownWithText} />
					<Button color="blue" variant="outlined" label="Dropdown with colored icons" menuItems={dropdownWithColoredIcons} />
					<Button color="blue" variant="icon" mIcon={MoreHorizIcon} menuItems={dropdownWithIcons} />
				</ButtonRow>
			</div>

			<h2>Buttons that triggers Popover on click</h2>
			<div>
				<ButtonRow>
					<Button
						color="blue"
						variant="outlined"
						popover={<p>Popover Content</p>}
						label="With Popover"
					/>
					<Button
						color="blue"
						variant="icon"
						mIcon={HelpIcon}
						popover={<p>Helper Text</p>}
						popoverEvent="onClick"
					/>
				</ButtonRow>
			</div>

			<h2>Buttons that triggers Popover on hover</h2>
			<div>
				<ButtonRow>
					<Button
						color="blue"
						variant="outlined"
						popover={<p>Popover Content</p>}
						popoverEvent="onHover"
						label="With Popover"
					/>
					<Button
						color="blue"
						variant="icon"
						mIcon={HelpIcon}
						popoverEvent="onHover"
						popover={<p>Helper Text</p>}
					/>
				</ButtonRow>
			</div>

			<h2>Buttons with custom attrs</h2>
			<div>
				<ButtonRow>
					<Button
						color="black"
						variant="outlined"
						label="With data attribute"
						attrs={{ "data-foo" : "foo value" }}
						muiAttrs={{ "data-bar": "bar value" }}
					/>
					<Button
						color="black"
						variant="icon"
						mIcon={AddIcon}
						attrs={{ "data-foo" : "foo value" }}
						muiAttrs={{ "data-bar": "bar value" }}
					/>
				</ButtonRow>
			</div>

			<h2>Buttons with tooltips</h2>
			<div>
				<ButtonRow>
					<Button
						color="black"
						variant="outlined"
						label="One"
						tooltip="I can haz a tooltip"
					/>
					<Button
						color="black"
						variant="outlined"
						label="Two"
						tooltip="I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long."
					/>
				</ButtonRow>
			</div>

			<h2>Buttons with href that turn into a tags</h2>
			<div>
				<ButtonRow>
					<Button
						color="black"
						variant="outlined"
						label="With Link"
						href="https://www.google.com/"
					/>
					<Button
						color="black"
						variant="outlined"
						label="With Link and click handler"
						href="https://www.bing.com/"
						onClick={function(e) { e.preventDefault(); alert("Click handler"); }}
					/>
					<Button
						color="blue"
						variant="icon"
						mIcon={AddIcon}
						onClick={clickHandler}
						size="small"
						href="https://www.google.com/"
					/>
				</ButtonRow>
			</div>
		</div>
	);
};
