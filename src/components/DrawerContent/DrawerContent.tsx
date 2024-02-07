import React, { useMemo } from "react";
import styled from "styled-components";

import { DrawerTopBarProps } from "./DrawerTopBar";
import DrawerBottom, { DrawerBottomProps } from "./DrawerBottom";
import PageHeader from "../PageHeader";
import { ButtonProps } from "../Button";
import { useMosaicTranslation } from "@root/i18n";

const StyledDiv = styled.div`
	width: 600px;
`;

type DrawerContentProps = DrawerTopBarProps & DrawerBottomProps;

function DrawerContent(props: DrawerContentProps) {

	const { t } = useMosaicTranslation();

	const drawerButtons = useMemo(() => {
		let buttons: ButtonProps[] = [];

		if (props.onCancel)
			buttons = [
				...buttons,
				{
					label: t("mosaic:common.cancel"),
					color: "gray",
					variant: "outlined",
					onClick: props.onCancel,
				},
			];
		if (props.onSave)
			buttons = [
				...buttons,
				{
					label: t("mosaic:common.save"),
					color: "yellow",
					variant: "contained",
					onClick: props.onSave,
				},
			];
		if (props.onApply)
			buttons = [
				...buttons,
				{
					label: t("mosaic:common.apply"),
					color: "yellow",
					variant: "contained",
					onClick: props.onApply,
				},
			];

		return buttons;

	}, [props.onSave, props.onApply, props.onCancel]);

	return (
		<StyledDiv>
			<PageHeader
				title={t(`mosaic:${props.title}`)}
				buttons={drawerButtons}
				onBack={props.onBack}
				backLabel={props.backLabel}
			/>
			<DrawerBottom
				background={props.background}
			>
				{props.children}
			</DrawerBottom>
		</StyledDiv>
	);
}

export default DrawerContent;
