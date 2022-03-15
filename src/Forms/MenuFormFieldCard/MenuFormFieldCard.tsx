import * as React from "react";
import { memo, useState, ReactElement } from "react";
import { MenuFormFieldCardProps } from "./MenuFormFieldCardTypes";

// Components
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@root/components/Button";

// Styles
import { StyledMenu } from "./MenuFormFieldCard.styled";

const MenuFormFieldCard = (props: MenuFormFieldCardProps): ReactElement => {
	const { className, disabled, options } = props;

	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleMoreIconClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenuHandler = () => {
		setAnchorEl(null);
	};

	return (
		<div className={className}>
			<Button
				data-testid="icon-button-test"
				color="gray"
				variant="icon"
				mIcon={MoreVertIcon}
				onClick={handleMoreIconClick}
				disabled={disabled}
			></Button>
			<StyledMenu
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				keepMounted
				open={open}
				onClose={closeMenuHandler}
			>
				{options?.map((option) => (
					<MenuItem key={`label-${option.label}`} onClick={option.action}>
						{option.label}
					</MenuItem>
				))}
			</StyledMenu>
		</div>
	);
};

export default memo(MenuFormFieldCard);
