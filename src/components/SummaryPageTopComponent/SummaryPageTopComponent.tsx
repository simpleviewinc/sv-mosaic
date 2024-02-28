import * as React from "react";
import { ReactElement, memo, useMemo } from "react";
import { SummaryPageTopComponentTypes } from ".";
import MoreVert from "@mui/icons-material/MoreVert";
import {
	StyledSummaryPageTopComponent,
	Container,
	Row,
	Item,
	ContainerTitle,
} from "./SummaryPageTopComponent.styled";

import StarRateRounded from "@mui/icons-material/StarRateRounded";
import StarBorder from "@mui/icons-material/StarBorderRounded";

// Components
import Image from "@root/components/Image";
import Button, { ButtonProps } from "@root/components/Button";
import TitleWrapper from "@root/components/Title";
import ButtonRow from "../ButtonRow/ButtonRow";
import { useToggle } from "@root/utils/toggle";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {
	const {
		title,
		onBack,
		backLabel,
		favorite,
		img,
		descriptionItems,
	} = props;

	const mainActions = useMemo(() => props.mainActions || [], [props.mainActions]);
	const additionalActions = useMemo(() => props.additionalActions || [], [props.additionalActions]);

	const shownAdditionalActions = useToggle(additionalActions, "show");

	const additionActionsButton: ButtonProps | null = useMemo(() => shownAdditionalActions.length > 0 ? {
		color: "black",
		variant: "icon",
		label: "Edit",
		mIcon: MoreVert,
		menuItems: shownAdditionalActions,
		muiAttrs: {
			"data-testid": "btn-additional-action",
		},
	} : null, [shownAdditionalActions]);

	const buttons: ButtonProps[] = useMemo(() => [
		...mainActions.map<ButtonProps>(mainAction => ({
			...mainAction,
			attrs: { $smallText: true },
			size: "small",
			muiAttrs: {
				"data-testid": "btn-main-action",
			},
		})),
		...(additionActionsButton ? [
			additionActionsButton,
		] : []),
	], [mainActions, additionActionsButton]);

	return (
		<StyledSummaryPageTopComponent>
			{img && (
				<Image
					className="img-rounded"
					src={img}
				/>
			)}
			<Container>
				<Row>
					<ContainerTitle>
						<TitleWrapper title={title} onBack={onBack} backLabel={backLabel} />
						{favorite && (
							<>
								<Button
									className={`${favorite?.checked ? "checked" : "unchecked"}`}
									color={`${favorite?.checked ? "yellow" : "gray"}`}
									variant="icon"
									mIcon={favorite?.checked ? StarRateRounded : StarBorder}
									onClick={() => favorite.onClick(favorite?.checked ? false : true)}
								/>
							</>
						)}
					</ContainerTitle>
					<ButtonRow separator wrap buttons={buttons} />
				</Row>
				<Row>
					{descriptionItems && (
						<ButtonRow separator wrap>
							{descriptionItems.map((item, i) => (
								<Item key={i} data-testid="description-item">
									{item}
								</Item>
							))}
						</ButtonRow>
					)}
				</Row>
			</Container>
		</StyledSummaryPageTopComponent>
	);
};

export default memo(SumaryPageTopComponent);
