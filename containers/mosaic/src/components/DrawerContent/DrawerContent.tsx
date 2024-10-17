import React, { useMemo } from "react";

import type { ButtonProps } from "../Button";
import type { DrawerContentProps } from "./DrawerTypes";

import { useMosaicTranslation } from "@root/i18n";
import DrawerBottom from "./DrawerBottom";
import PageHeader from "../PageHeader";
import { StyledDrawerContent } from "./DrawerContent.styled";

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
		<StyledDrawerContent>
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
		</StyledDrawerContent>
	);
}

export default DrawerContent;
