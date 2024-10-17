import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import type { DrawerTopBarProps } from "./DrawerTypes";

import { TitleText } from "../Typography";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import { useMosaicTranslation } from "@root/i18n";
import { StyledDrawerTopBar } from "./DrawerContent.styled";

function DrawerTopBar(props: DrawerTopBarProps) {
	const { t } = useMosaicTranslation();

	return (
		<StyledDrawerTopBar>
			<div className="left">
				<Button
					mIcon={CloseIcon}
					variant="icon"
					color="black"
					onClick={props.onBack}
				/>
				<TitleText tag="h1">
					{props.title}
				</TitleText>
			</div>
			<div className="right">
				<ButtonRow>
					{
						props.onCancel &&
							<Button label={t("mosaic:common.cancel")} color="black" variant="text" onClick={props.onCancel} />
					}
					{
						props.onSave &&
							<Button label={t("mosaic:common.save")} color="blue" variant="contained" onClick={props.onSave} />
					}
					{
						props.onApply &&
							<Button label={t("mosaic:common.apply")} color="blue" variant="contained" onClick={props.onApply} />
					}
				</ButtonRow>
			</div>
		</StyledDrawerTopBar>
	);
}

export default DrawerTopBar;
