import * as React from "react";
import { ReactElement, useState } from "react";
import { SummaryPageTopComponentTypes } from ".";
import MoreVert from "@mui/icons-material/MoreVert";
import { 
	StyledSummaryPageTopComponent,
	Container,
	Row,
	Title,
	ContainerItems,
	Item,
	ContextText,
	ContainerTitle,
	CheckedStar,
	UncheckedStar,
} from "./SummaryPageTopComponent.styled";

// Components
import Image from "../internal/Image";
import Button from "../Button";
import FilterSingleSelect from "../FilterSingleSelect";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {
	const {
		title,
		favorite,
		img,
		mainActions,
		additionalActions,
		descriptionTexts,
		textLinks,
		filter,
	} = props;

	/**
	 * Throws an error if developer send more than three elements in mainActions.
	*/
	if (mainActions?.length > 3) throw new Error("mainActions prop must receive 3 elements or less.");

	/**
	 * Throws an error if developer send more than three elements in textLinks.
	*/
	if (textLinks?.length > 3) throw new Error("textLinks prop must receive 3 elements or less.");

	const [state, setState] = useState({
		value : filter.defaultValue ? filter.defaultValue : undefined
	});

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = () => undefined;

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
						<Title>
							{title}
						</Title>
						{
							favorite && 
								<>
									{
										favorite?.checked ?
											<CheckedStar className="favorite-icon" onClick={() => favorite.onClick(false)}/>
											:
											<UncheckedStar className="favorite-icon" onClick={() => favorite.onClick(true)} />
									}
								</>
						}
					</ContainerTitle>
					<ContainerItems>
						{
							mainActions?.map((mainAction, i) => (
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
							additionalActions &&
							<Item data-testid="btn-aditional-action">
								<Button
									color="black" 
									variant="icon" 
									label="Edit" 
									mIcon={MoreVert} 
									menuItems={additionalActions}
								/>
							</Item>
						}
					</ContainerItems>
				</Row>
				<Row>
					<ContainerItems>
						{
							descriptionTexts?.map((contextText, i) => (
								<Item key={i} data-testid="context-text">
									<ContextText>{contextText}</ContextText>
								</Item>
							))
						}
						{
							textLinks?.map((textLink, i) => (
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
						filter &&
						<div data-testid="btn-filterSingleSelect">
							<FilterSingleSelect
								label={filter.label}
								type="primary"
								data={state}
								args={{...filter.args, color: "teal"}}
								onRemove={onRemove}
								onChange={onChange}
							/>
						</div>
					}
				</Row>
			</Container>
		</StyledSummaryPageTopComponent>
	);
};

export default SumaryPageTopComponent;