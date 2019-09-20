import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faPlus, faChevronLeft, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import AddIcon from '@material-ui/icons/Add';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import styled from "styled-components";

import theme from "../utils/theme.js";

const ButtonWrapper = styled.span`
	& > button {
		font-family: ${theme.fontFamily};
		text-transform: none;
		font-size: 14px;
	}
	
	& > button.normalButton .icon {
		margin-right: 4px;
	}
	
	& > button.iconButton {
		padding: 4px;
		font-size: 15px;
	}
`

const types = {
	blue_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: ${theme.colors.blue};
			color: ${theme.colors.blue};
		}
		
		& > button:hover {
			background: ${theme.colors.blue}13;
		}
	`,
	red_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: ${theme.colors.red};
			color: ${theme.colors.red};
		}
		
		& > button:hover {
			background: ${theme.colors.red}13;
		}
	`,
	gray_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: #ddd;
			color: black;
		}
		
		& > button:hover {
			background: #eee;
		}
	`,
	blue_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.blue};
			color: white;
		}
		& > button:hover {
			background: ${theme.colors.blueHover};
		}
	`,
	red_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.red};
			color: white;
		}
		& > button:hover {
			background: #900f0f;
		}
	`,
	gray_contained : styled(ButtonWrapper)`
		& > button {
			background: #ddd;
			color: black;
		}
		& > button:hover {
			background: #ccc;
		}
	`,
	blue_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.blue};
		}
		
		& > button:hover {
			background-color: ${theme.colors.blue}13;
		}
	`,
	red_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.red};
		}
		
		& > button:hover {
			background-color: ${theme.colors.red}13;
		}
	`,
	gray_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.gray};
		}
	`,
	blue_icon : styled(ButtonWrapper)`
		& .icon {
			color: ${theme.colors.blue}
		}
	`,
	black_icon : styled(ButtonWrapper)`
		& .icon {
			color: black;
		}
	`,
	red_icon : styled(ButtonWrapper)`
		& .icon {
			color: ${theme.colors.red};
		}
	`
}


function SvButton(props) {
	const MyButton = types[`${props.color}_${props.variant}`];
	
	const MaterialIcon = props.mIcon;
	
	return (
		<MyButton>
			{ props.variant !== "icon" &&
				<Button variant={props.variant} className="normalButton">
					{ props.faIcon && <FontAwesomeIcon icon={props.faIcon} className="icon faIcon"></FontAwesomeIcon> }
					{props.label}
				</Button>
			}
			{ props.variant === "icon" &&
				<IconButton className="iconButton">
					{ props.faIcon && <FontAwesomeIcon icon={props.faIcon} className="icon faIcon"></FontAwesomeIcon> }
					{ props.mIcon && <MaterialIcon className="icon" className="materialIcon"/> }
				</IconButton>
			}
		</MyButton>
	)
}

const ButtonRow = styled.span`
	& > * {
		margin-right: 5px;
	}
	
	& > *:last-child {
		margin-right: 0px;
	}
`

function SvButtonRow(props) {
	return (
		<ButtonRow>
			{props.children}
		</ButtonRow>
	)
}

function Buttons() {
	return (
		<div>
			<h1>Buttons!</h1>
			
			<h2>Contained</h2>
			<div>
				<SvButtonRow>
					<SvButton color="blue" variant="contained" label="Save"></SvButton>
					<SvButton color="blue" variant="contained" label="Save" faIcon={faPlus}></SvButton>
					<SvButton color="red" variant="contained" label="Delete"></SvButton>
					<SvButton color="red" variant="contained" label="Delete" faIcon={faTrashAlt}></SvButton>
					<SvButton color="gray" variant="contained" label="Cancel"></SvButton>
					<SvButton color="gray" variant="contained" label="Cancel" faIcon={faChevronLeft}></SvButton>
				</SvButtonRow>
			</div>
			
			<h2>Outlined</h2>
			<div>
				<SvButtonRow>
					<SvButton color="blue" variant="outlined" label="Save"></SvButton>
					<SvButton color="blue" variant="outlined" label="Save" faIcon={faPlus}></SvButton>
					<SvButton color="red" variant="outlined" label="Delete"></SvButton>
					<SvButton color="red" variant="outlined" label="Delete" faIcon={faTrashAlt}></SvButton>
					<SvButton color="gray" variant="outlined" label="Cancel"></SvButton>
					<SvButton color="gray" variant="outlined" label="Cancel" faIcon={faChevronLeft}></SvButton>
				</SvButtonRow>
			</div>
			
			<h2>Text</h2>
			<div>
				<SvButtonRow>
					<SvButton color="blue" variant="text" label="Save"></SvButton>
					<SvButton color="blue" variant="text" label="Save" faIcon={faPlus}></SvButton>
					<SvButton color="red" variant="text" label="Delete"></SvButton>
					<SvButton color="red" variant="text" label="Delete" faIcon={faTrashAlt}></SvButton>
					<SvButton color="gray" variant="text" label="Cancel"></SvButton>
					<SvButton color="gray" variant="text" label="Cancel" faIcon={faChevronLeft}></SvButton>
				</SvButtonRow>
			</div>
			
			<h2>Icon Buttons - Blue - Font Awesome</h2>
			<div>
				<SvButton color="blue" variant="icon" faIcon={faPlus}></SvButton>
				<SvButton color="blue" variant="icon" faIcon={faEdit}></SvButton>
				<SvButton color="blue" variant="icon" faIcon={faDownload}></SvButton>
				<SvButton color="blue" variant="icon" faIcon={faEllipsisH}></SvButton>
			</div>
			
			<h2>Icon Buttons - Blue - Material</h2>
			<div>
				<SvButton color="blue" variant="icon" mIcon={AddIcon}></SvButton>
				<SvButton color="blue" variant="icon" mIcon={CreateIcon}></SvButton>
				<SvButton color="blue" variant="icon" mIcon={CloudDownloadIcon}></SvButton>
				<SvButton color="blue" variant="icon" mIcon={MoreHorizIcon}></SvButton>
			</div>
			
			<h2>Icon Buttons - Black - Font Awesome</h2>
			<div>
				<SvButton color="black" variant="icon" faIcon={faPlus}></SvButton>
				<SvButton color="black" variant="icon" faIcon={faEdit}></SvButton>
				<SvButton color="black" variant="icon" faIcon={faDownload}></SvButton>
				<SvButton color="black" variant="icon" faIcon={faEllipsisH}></SvButton>
			</div>
			
			<h2>Icon Buttons - Red - Font Awesome</h2>
			<div>
				<SvButton color="red" variant="icon" faIcon={faPlus}></SvButton>
				<SvButton color="red" variant="icon" faIcon={faEdit}></SvButton>
				<SvButton color="red" variant="icon" faIcon={faDownload}></SvButton>
				<SvButton color="red" variant="icon" faIcon={faEllipsisH}></SvButton>
			</div>
		</div>
	)
}

export default Buttons;