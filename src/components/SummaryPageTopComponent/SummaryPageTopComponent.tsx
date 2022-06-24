import * as React from "react";
import { ReactElement, useState } from "react";
import { SummaryPageTopComponentTypes } from ".";
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

import StarBorder from "@mui/icons-material/StarBorderRounded";
import Image from "../internal/Image";
import Button from "../Button";
import MoreVert from "@mui/icons-material/MoreVert";
import FilterSingleSelect from "../FilterSingleSelect";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {

	if (props.mainActions?.length > 3) throw new Error("mainActions should be maximun three buttons")

	if (props.textLinks?.length > 3) throw new Error("textLinks should be maximun three buttons")

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
									<Item key={i}>
										<Button 
											attrs={{smallText: true}} 
											color="black" 
											variant="text" 
											size="small"
											label={mainAction.label} 
											mIcon={mainAction.mIcon} 
											onClick={mainAction.onClick}
										></Button>
									</Item>
								))
						}
						{
							props.aditionalActions &&
								<Item>
									<Button
										color="black" 
										variant="icon" 
										label="Edit" 
										mIcon={MoreVert} 
										menuItems={props.aditionalActions}
									></Button>
								</Item>
						}
					</ContainerItems>
				</Row>
				<Row>
					<ContainerItems>
						{
							props.contextTexts && 
								props.contextTexts.map((contextText, i) => (
									<Item key={i}>
										<ContextText>{contextText}</ContextText>
									</Item>
								))
						}
						{
							props.textLinks &&
								props.textLinks.map((textLink, i) => (
									<Item key={i}>
										<Button
											attrs={{linkButton: true}} 
											color="black" 
											variant="text" 
											label={textLink.label} 
											mIcon={textLink.mIcon} 
											onClick={textLink.onClick}
											href={textLink.href}
										>
										</Button>
									</Item>
								))
						}
					</ContainerItems>
					{
						props.filterSingleSelect &&
							<ContainerFilterSingleSelect>
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