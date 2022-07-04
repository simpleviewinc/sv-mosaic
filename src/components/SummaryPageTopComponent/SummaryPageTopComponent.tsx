import * as React from "react";
import { ReactElement } from "react";
import { SummaryPageTopComponentTypes } from ".";
import StarBorder from "@mui/icons-material/StarBorderRounded";
import MoreVert from "@mui/icons-material/MoreVert";
import { 
	SumaryPageTopComponentStyle,
	Container,
	Row,
	Title,
	ContainerItems,
	Item,
	ContextText,
	ContainerTitle,
	ContainerFilterSingleSelect,
	StarRateRoundedSimplyGold
} from "./SummaryPageTopComponent.styled";

// Components
import Image from "../internal/Image";
import Button from "../Button";
import FilterSingleSelect from "../FilterSingleSelect";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {

	/**
	 * Throws an error if developer send more than three elements in props.mainActions.
	*/
	if (props.mainActions?.length > 3) throw new Error("mainActions should be maximun three buttons")

	/**
	 * Throws an error if developer send more than three elements in props.textLinks.
	*/
	if (props.textLinks?.length > 3) throw new Error("textLinks should be maximun three links")

	return (
		<SumaryPageTopComponentStyle>
			{
				props.imageSrc &&
					<Image
						className="img_rounded"
						src={props.imageSrc}
					/>
			}
			<Container>
				<Row className="row-title">
					<ContainerTitle>
						<Title>
							{props.title}
						</Title>
						{
							props.favorite ? <StarRateRoundedSimplyGold onClick={() => alert("Star clicked")}/>
							: <StarBorder onClick={() => alert("Star clicked")} />
						}
					</ContainerTitle>
					<ContainerItems>
						{
							props.mainActions &&
							props.mainActions.map((mainAction, i) => (
								<Item data-testid="btn-main-action" key={i}>
									<Button
										attrs={{smallText: true}} 
										color={mainAction.color} 
										variant={mainAction.variant} 
										size="small"
										label={mainAction.label} 
										mIcon={mainAction.mIcon} 
										onClick={mainAction.onClick}
									/>
								</Item>
							))
						}
						{
							props.aditionalActions &&
							<Item data-testid="btn-aditional-action">
								<Button
									color="black" 
									variant="icon" 
									label="Edit" 
									mIcon={MoreVert} 
									menuItems={props.aditionalActions}
								/>
							</Item>
						}
					</ContainerItems>
				</Row>
				<Row>
					<ContainerItems>
						{
							props.contextTexts && 
							props.contextTexts.map((contextText, i) => (
								<Item key={i} data-testid="context-text">
									<ContextText>{contextText}</ContextText>
								</Item>
							))
						}
						{
							props.textLinks &&
							props.textLinks.map((textLink, i) => (
								<Item key={i} data-testid="btn-text-link">
									<Button
										attrs={{linkButton: true}} 
										color="black" 
										variant="text" 
										label={textLink.label} 
										mIcon={textLink.mIcon} 
										onClick={textLink.onClick}
										href={textLink.href}
										{...textLink}
									/>
								</Item>
							))
						}
					</ContainerItems>
					{
						props.filterSingleSelect &&
						<ContainerFilterSingleSelect data-testid="btn-filterSingleSelect">
							<FilterSingleSelect
								label="Testing"
								type="primary"
								data={props.filterSingleSelect.data}
								args={props.filterSingleSelect.args}
								onRemove={props.filterSingleSelect.onRemove}
								onChange={props.filterSingleSelect.onChange}
							/>
						</ContainerFilterSingleSelect>
					}
				</Row>
			</Container>
		</SumaryPageTopComponentStyle>
	);
};

export default SumaryPageTopComponent;