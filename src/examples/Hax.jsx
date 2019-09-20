import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import theme from "../utils/theme.js";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		textTransform: "uppercase",
		fontSize: "14px"
	},
	blueButton : {
		margin: theme.spacing(1),
		textTransform: "uppercase",
		fontSize: "14px"
	},
	icon : {
		fontSize: "24px"
	},
	faIcon : {
		margin: "4px",
		fontSize: "15px"
	},
	haxButton : {
		margin: theme.spacing(1),
		textTransform: "uppercase",
		fontSize: "14px",
		color: theme.palette.getContrastText("#ffffff"),
		backgroundColor: "#ffffff"
	}
}));

function Hax() {
	const classes = useStyles();
	
	return (
		<div>
			<div>
				<h1>Material UI Buttons</h1>
				<Button variant="contained" className={classes.button}>
					<DeleteIcon></DeleteIcon>
					Delete
				</Button>
				<Button variant="contained" color="primary" className={classes.button}>
					Delete
					<DeleteIcon className={classes.icon}></DeleteIcon>
				</Button>
				<Button variant="outlined" className={classes.button}>
					Default
				</Button>
				<Button variant="contained" className={classes.haxButton}>
					Default
				</Button>
			</div>
			<div>
				<h1>Font awesome buttons</h1>
				<Button variant="outlined" className={classes.button}>
					<FontAwesomeIcon icon={faPlus} color={theme.colors.blue} className={classes.faIcon}></FontAwesomeIcon>
					Create New
				</Button>
			</div>
		</div>
	)
}

export default Hax;