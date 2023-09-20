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
import Button from "../Button";
import TitleWrapper from "@root/forms/TopComponent/Utils/TitleWrapper";
import evaluateShow from "@root/utils/show/evaluateShow";
import ButtonRow from "../ButtonRow/ButtonRow";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {
	const {
		title,
		onBack,
		backLabel,
		favorite,
		img,
		mainActions,
		additionalActions,
		descriptionItems,
	} = props;

	/**
	 * Throws an error if developer send more than three elements in mainActions.
	*/
	if (mainActions && mainActions.length > 3) throw new Error("mainActions prop must receive 3 elements or less.");

	/**
	 * Throws an error if developer send more than three elements in textLinks.
	*/
	if (descriptionItems && descriptionItems.length > 6) throw new Error("descriptionElements prop must receive 6 elements or less.");

	const filteredMainActions = useMemo(() => (
		mainActions && mainActions.filter(button => evaluateShow(button.show))
	), [mainActions]);

	const filteredAdditionalActions = useMemo(() => (
		additionalActions && additionalActions.filter(button => evaluateShow(button.show))
	), [additionalActions]);

	return (
		<StyledSummaryPageTopComponent>
			{
				img &&
					<Image
						className="img-rounded"
						src={img}
					/>
			}
			<Container>
				<Row>
					<ContainerTitle>
						<TitleWrapper title={title} onBack={onBack} backLabel={backLabel} />
						{
							favorite &&
								<>
									<Button
										className={`${favorite?.checked ? "checked" : "unchecked"}`}
										color={`${favorite?.checked ? "yellow" : "gray"}`}
										variant="icon"
										mIcon={favorite?.checked ? StarRateRounded : StarBorder}
										onClick={() => favorite.onClick(favorite?.checked ? false : true)}
									/>
								</>
						}
					</ContainerTitle>
					<ButtonRow separator gap="small" wrap>
						{
							filteredMainActions &&
							filteredMainActions.map((mainAction, i) => (
								<Button
									key={i}
									attrs={{smallText: true}}
									color={mainAction.color}
									variant={mainAction.variant}
									size="small"
									label={mainAction.label}
									mIcon={mainAction.mIcon}
									onClick={mainAction.onClick}
									muiAttrs={{
										"data-testid": "btn-main-action"
									}}
								/>
							))
						}
						{
							filteredAdditionalActions && (filteredAdditionalActions.length > 0) &&
							<Button
								color="black"
								variant="icon"
								label="Edit"
								mIcon={MoreVert}
								menuItems={filteredAdditionalActions}
								muiAttrs={{
									"data-testid": "btn-additional-action"
								}}
							/>
						}
					</ButtonRow>
				</Row>
				<Row>
					{descriptionItems && (
						<ButtonRow separator gap="small" wrap>
							{
								descriptionItems.map((item, i) => (
									<Item key={i} data-testid="description-item">
										{item}
									</Item>
								))
							}
						</ButtonRow>
					)}
				</Row>
			</Container>
		</StyledSummaryPageTopComponent>
	);
};

export default memo(SumaryPageTopComponent);
