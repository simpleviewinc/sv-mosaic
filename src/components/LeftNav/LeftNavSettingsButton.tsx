import * as React from "react";
import { useState, Fragment, useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import SettingsIcon from '@material-ui/icons/Settings';

import theme from "../../theme";
import MenuBase from "../MenuBase";
import MenuSelect from "../MenuSelect";
import { LeftNavContext } from "./LeftNavTypes";

const StyledButton = styled(Button)`
	&.settingsButton {
		color: ${theme.colors.gray400};
		padding: 3px;
		border-radius: 15px;
		border: 1px solid ${theme.colors.gray400};
		min-width: auto;
	}

	&.settingsButton:hover {
		color: white;
		border-color: white;
	}

	& svg {
		font-size: 20px;
	}
`;

export default function LeftNavSettingsButton(props) {
	const [state, setState] = useState({
		anchorEl : null
	});

	const leftNavContext = useContext(LeftNavContext);

	const onClick = function(e) {
		setState({
			...state,
			anchorEl : e.currentTarget
		})
	}

	const onClose = function() {
		setState({
			...state,
			anchorEl : null
		})
	}

	const options = [
		{
			label : "Full",
			value : "full"
		},
		{
			label : "Icons Only",
			value : "icons_only"
		},
		{
			label : "Hidden (Via menu button)",
			value : "hidden"
		}
	];

	return (
		<Fragment>
			<StyledButton className="settingsButton" onClick={onClick}>
				<SettingsIcon/>
			</StyledButton>
			<MenuBase anchorEl={state.anchorEl} open={Boolean(state.anchorEl)} onClose={onClose}>
				<MenuSelect options={options} value={leftNavContext.variant} onChange={leftNavContext.onVariantChange}/>
			</MenuBase>
		</Fragment>
	)
}