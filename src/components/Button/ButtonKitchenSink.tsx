import * as React from "react";
import { useState, ReactElement } from "react";

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

import ButtonRow from "../ButtonRow";
import Button from "./Button";
import { ButtonProps } from "./ButtonTypes";

function Buttons(): ReactElement {
	const [, setAnchorEl] = useState(null);

	function clickHandler() {
		alert("yes");
	}

	const openDropdown = function(event) {
		console.log("EVENT", event);
		setAnchorEl(event.currentTarget);
	}

	const dropdownWithIcons: ButtonProps["menuItems"] = [
		{
			label : "Edit",
			mIcon : CreateIcon,
			onClick : function() {
				alert("EDIT CLICK");
			}
		},
		{
			label : "Download",
			mIcon : CloudDownloadIcon,
			onClick : function() {
				alert("DOWNLOAD CLICK");
			}
		}
	];

	const dropdownWithColoredIcons: ButtonProps["menuItems"] = [
		{
			label : "Edit",
			mIcon : CreateIcon,
			color : "blue",
			onClick : function() {
				alert("EDIT CLICK");
			}
		},
		{
			label : "Download",
			mIcon : CloudDownloadIcon,
			color : "blue",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			}
		},
		{
			label : "Delete",
			mIcon : DeleteIcon,
			color : "red",
			onClick : function() {
				alert("DELETE CLICK");
			}
		},
		{
			label : "Cancel",
			mIcon : ChevronLeftIcon,
			onClick : function() {
				alert("CANCEL CLICK");
			}
		}
	];

	const dropdownWithText: ButtonProps["menuItems"] = [
		{
			label : "Edit",
			onClick : function() {
				alert("EDIT CLICK");
			}
		},
		{
			label : "Download",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			}
		}
	];

	return (
		<div>
			<h1>Buttons!</h1>
			<h2>Contained</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="lightBlue" variant="contained" label="Save" onClick={clickHandler}/>
					<Button color="lightBlue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler}/>
					<Button color="red" variant="contained" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="contained" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="contained" label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="contained" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
					<Button color="yellow" variant="contained" label="Save" onClick={clickHandler}></Button>
					<Button color="yellow" variant="contained" label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Contained - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="lightBlue" variant="contained" disabled label="Save" onClick={clickHandler}/>
					<Button color="lightBlue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler}/>
					<Button color="red" variant="contained" disabled label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="contained" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="contained" disabled label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="contained" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
					<Button color="yellow" variant="contained" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="yellow" variant="contained" disabled label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Outlined</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="outlined" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
					<Button color="gray" variant="outlined" label="Save" onClick={clickHandler}></Button>
					<Button color="gray" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="teal" variant="outlined" label="Save" onClick={clickHandler}></Button>
					<Button color="teal" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Outlined - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="outlined" disabled label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" disabled label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" disabled label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
					<Button color="gray" variant="outlined" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="gray" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="teal" variant="outlined" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="teal" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Text</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="text" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="text" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="text" label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
					<Button color="teal" variant="text" label="Save" onClick={clickHandler}></Button>
					<Button color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Text - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="text" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="text" disabled label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="text" disabled label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="text" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="text" disabled label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="text" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
					<Button color="teal" variant="text" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="teal" variant="text" disabled label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Small Text</h2>
			<div>
				<ButtonRow>
					<Button attrs={{smallText: true}} color="blue" variant="text" label="Save" onClick={clickHandler}></Button>
					<Button attrs={{smallText: true}} color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button attrs={{smallText: true}} color="red" variant="text" label="Delete" onClick={clickHandler}></Button>
					<Button attrs={{smallText: true}} color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button attrs={{smallText: true}} color="black" variant="text" label="Cancel" onClick={clickHandler}></Button>
					<Button attrs={{smallText: true}} color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
					<Button attrs={{smallText: true}} color="teal" variant="text" label="Save" onClick={clickHandler}></Button>
					<Button attrs={{smallText: true}} color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Icon Positions</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Save" iconPosition="left" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="blue" variant="contained" label="Save" iconPosition="right" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Multi-Icon buttons</h2>
			<div>
				<ButtonRow>
					<Button color="blue" label={<FormatListBulletedOutlinedIcon/>} variant="contained" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<GridOnOutlinedIcon/>} variant="contained" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<FormatListBulletedOutlinedIcon/>} variant="outlined" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<GridOnOutlinedIcon/>} variant="outlined" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<FormatListBulletedOutlinedIcon/>} variant="text" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<GridOnOutlinedIcon/>} variant="text" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>

			<h2>Icon Buttons</h2>
			<div>
				<Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="red" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="black" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="gray" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="gray" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="gray" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="teal" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="teal" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="teal" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<div style={{ background: "black", display: "inline-block" }}>
					<Button color="white" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="white" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
					<Button color="white" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
					<Button color="white" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				</div>
			</div>

			<h2>Icon Buttons - disabled</h2>
			<div>
				<Button color="blue" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="red" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="black" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
			</div>

			<h2>Button Sizes</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Small" size="small"/>
					<Button color="blue" variant="contained" label="Medium (default)"/>
				</ButtonRow>
			</div>
			<br/><br/>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Small" size="small" mIcon={AddIcon}/>
					<Button color="blue" variant="outlined" label="Medium (default)" mIcon={AddIcon}/>
				</ButtonRow>
			</div>
			<br/><br/>
			<div>
				<ButtonRow>
					<Button color="black" variant="icon" size="small" mIcon={AddIcon}/>
					<Button color="black" variant="icon" mIcon={AddIcon}/>
				</ButtonRow>
			</div>

			<h2>Buttons that open menus</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Dropdown with Icons" menuItems={dropdownWithIcons}/>
					<Button color="blue" variant="outlined" label="Dropdown with text" menuItems={dropdownWithText}/>
					<Button color="blue" variant="outlined" label="Dropdown with colored icons" menuItems={dropdownWithColoredIcons}/>
					<Button color="blue" variant="icon" mIcon={MoreHorizIcon} menuItems={dropdownWithIcons}/>
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
						popover={{ element: <p>Helper Text</p>, action: "onClick" }}/>
				</ButtonRow>
			</div>

			<h2>Buttons that triggers Popover on hover</h2>
			<div>
				<ButtonRow>
					<Button
						color="blue"
						variant="outlined"
						popover={{ element: <p>Popover Content</p>, action: "onHover" }}
						label="With Popover"
					/>
					<Button
						color="blue"
						variant="icon"
						mIcon={HelpIcon}
						popover={{ element: <p>Helper Text</p>, action: "onHover" }}
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
						onClick={function(e) { e.preventDefault(); alert("Click handler") }}
					/>
				</ButtonRow>
			</div>
		</div>
	)
}

export default Buttons;
