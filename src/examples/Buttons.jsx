import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from '@material-ui/icons/Add';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import theme from "../utils/theme.js";
import Button from "../components/Button.jsx";
import ButtonRow from "../components/ButtonRow.jsx";
import Menu from "../components/Menu.jsx";

function Buttons() {
	const [anchorEl, setAnchorEl] = useState(null);
	
	function clickHandler() {
		alert("yes");
	}
	
	const openDropdown = function(event) {
		console.log("EVENT", event);
		setAnchorEl(event.currentTarget);
	}
	
	function closeDropdown() {
		setAnchorEl(null);
	}
	
	const dropdownWithIcons = [
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
	
	const dropdownWithColoredIcons = [
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
	
	const dropdownWithText = [
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
					<Button color="red" variant="contained" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="contained" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="gray" variant="contained" label="Cancel" onClick={clickHandler}></Button>
					<Button color="gray" variant="contained" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Outlined</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="outlined" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="gray" variant="outlined" label="Cancel" onClick={clickHandler}></Button>
					<Button color="gray" variant="outlined" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Text</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="text" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="text" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="gray" variant="text" label="Cancel" onClick={clickHandler}></Button>
					<Button color="gray" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Icon Buttons - Blue - Material</h2>
			<div>
				<Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
			</div>
			
			<h2>Icon Buttons - Red - Material</h2>
			<div>
				<Button color="red" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
			</div>
			
			<h2>Icon Buttons - Black - Material</h2>
			<div>
				<Button color="black" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
			</div>
			
			<h2>Buttons that open menus</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Dropdown with Icons" menuItems={dropdownWithIcons}/>
					<Button color="blue" variant="outlined" label="Dropdown with text" menuItems={dropdownWithText}/>
					<Button color="blue" variant="outlined" label="Dropdown with colored icons" menuItems={dropdownWithColoredIcons}/>
				</ButtonRow>
			</div>
			
			<div style={{ height: "200px" }}></div>
		</div>
	)
}

export default Buttons;