import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

import { TitleText } from "../Typography";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import { useMosaicTranslation } from "@root/i18n";
import { TitleWrapperProps } from "@root/components/Title";

const StyledWrapper = styled.div`
	& {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
	}

	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > h1 {
		display: inline;
		padding: 0px 50px 0px 20px;
		margin: 0;
		position: relative;
		top: -2px;
	}
`;

export interface DrawerTopBarProps {
	title: string | JSX.Element;
	onBack: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	backLabel?: TitleWrapperProps["backLabel"];
	onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onSave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onApply?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function DrawerTopBar(props: DrawerTopBarProps) {
	const { t } = useMosaicTranslation();

	return (
		<StyledWrapper>
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
							<Button label={t("mosaic:common.cancel")} color="black" variant="text" onClick={props.onCancel}/>
					}
					{
						props.onSave &&
							<Button label={t("mosaic:common.save")} color="blue" variant="contained" onClick={props.onSave}/>
					}
					{
						props.onApply &&
							<Button label={t("mosaic:common.apply")} color="blue" variant="contained" onClick={props.onApply}/>
					}
				</ButtonRow>
			</div>
		</StyledWrapper>
	);
}

export default DrawerTopBar;
