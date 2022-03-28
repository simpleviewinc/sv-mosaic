import * as React from "react";
import { memo, useMemo } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ButtonRow from "../ButtonRow";
import Button from "../Button";
import { DataViewAction, DataViewAdditionalAction } from "./DataViewTypes";
import { MosaicObject } from "../../types";

function filterAction(action, row) {
	if (action.show === undefined) {
		return true;
	} else if (typeof action.show === "boolean") {
		return action.show;
	} else if (typeof action.show === "function") {
		return action.show({ row : row });
	} else {
		throw new Error(`Action ${action.name}.show must be boolean or a function`);
	}
}

interface Props {
	primaryActions: DataViewAction[]
	additionalActions: DataViewAdditionalAction[]
	row: MosaicObject
}

function DataViewActionsButtonRow(props: Props) {
	const primaryActions = useMemo(() => {
		if (props.primaryActions === undefined) { return []; }
		
		return props.primaryActions.filter(action => {
			return filterAction(action, props.row);
		}).map((action, i) => {
			const {
				name,
				show,
				onClick,
				...buttonArgs
			} = action;
			
			const newOnClick = () => {
				onClick({ data : props.row });
			}
			
			return (
				<Button
					{ ...buttonArgs }
					key={`primary_${name}`}
					attrs={{ "data-mosaic-id" : `action_primary_${name}` }}
					onClick={newOnClick}
				/>
			)
		});
	}, [props.primaryActions, props.row]);
	
	const additionalActions = useMemo(() => {
		if (props.additionalActions === undefined) { return []; }
		
		const additionalActions = props.additionalActions.filter(action => {
			return filterAction(action, props.row);
		});
		
		// if no valid actions hide the dots
		if (additionalActions.length === 0) {
			return [];
		}
		
		return [
			<Button
				key="additional"
				color="blue"
				variant="icon"
				mIcon={MoreHorizIcon}
				attrs={{ "data-mosaic-id" : "additional_actions_dropdown" }}
				menuItems={additionalActions.map(action => {
					const {
						name,
						show,
						onClick,
						...menuArgs
					} = action;
					
					return {
						...menuArgs,
						attrs : { "data-mosaic-id" : `action_additional_${name}` },
						onClick : () => {
							onClick({
								data : props.row
							});
						}
					}
				})}
			/>
		]
	}, [props.additionalActions, props.row]);
	
	// concat the buttons into a single row so that we have a single child allowing caching of the ButtonRow
	const buttons = useMemo(() => {
		return [
			...primaryActions,
			...additionalActions
		];
	}, [primaryActions, additionalActions]);
	
	if (buttons.length === 0) {
		return null;
	}
	
	return (
		<ButtonRow>
			{buttons}
		</ButtonRow>
	)
}

export default memo(DataViewActionsButtonRow);