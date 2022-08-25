import * as React from "react";
import { ReactElement, useState, memo, useMemo } from "react";
import { SummaryPageTopComponentTypes } from ".";
import MoreVert from "@mui/icons-material/MoreVert";
import { 
	StyledSummaryPageTopComponent,
	Container,
	Row,
	Title,
	ContainerItems,
	Item,
	ContainerTitle,
	CheckedStar,
	UncheckedStar,
} from "./SummaryPageTopComponent.styled";

// Components
import Image from "../internal/Image";
import Button from "../Button";
import DataViewFilterSingleSelect from "../DataViewFilterSingleSelect";
import { filterAction } from "../DataView/utils/bulkActionsUtils";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {
	const {
		title,
		favorite,
		img,
		mainActions,
		additionalActions,
		descriptionItems,
		filter,
	} = props;

	/**
	 * Throws an error if developer send more than three elements in mainActions.
	*/
	if (mainActions && mainActions.length > 3) throw new Error("mainActions prop must receive 3 elements or less.");

	/**
	 * Throws an error if developer send more than three elements in textLinks.
	*/
	if (descriptionItems && descriptionItems.length > 6) throw new Error("descriptionElements prop must receive 6 elements or less.");

	const [state, setState] = useState({
		value : filter.defaultValue ? filter.defaultValue : undefined
	});

	const filteredMainActions = useMemo(() => (
		mainActions && mainActions.filter(button => filterAction(button))
	), [mainActions]);

	const filteredAdditionalActions = useMemo(() => (
		additionalActions && additionalActions.filter(button => filterAction(button))
	), [additionalActions]);

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
							filteredMainActions &&
							filteredMainActions.map((mainAction, i) => (
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
							filteredAdditionalActions &&
							<Item data-testid="btn-additional-action">
								<Button
									color="black" 
									variant="icon" 
									label="Edit" 
									mIcon={MoreVert} 
									menuItems={filteredAdditionalActions}
								/>
							</Item>
						}
					</ContainerItems>
				</Row>
				<Row>
					<ContainerItems>
						{
							descriptionItems &&
							descriptionItems?.map((item, i) => (
								<Item key={i} data-testid="description-item">
									{item}
								</Item>
							))
						}
					</ContainerItems>
					{
						filter &&
						<div data-testid="filter">
							<DataViewFilterSingleSelect
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

export default memo(SumaryPageTopComponent);