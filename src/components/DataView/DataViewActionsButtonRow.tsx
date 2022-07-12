import * as React from "react";
import { memo, useMemo } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ButtonRow from "../ButtonRow";
import Button from "../Button";
import { DataViewAction, DataViewAdditionalAction } from "./DataViewTypes";
import { MosaicObject } from "../../types";
import { filterAction } from "./utils/bulkActionsUtils";
export interface DataViewActionsButtonRowProps {
	primaryActions: DataViewAction[]
	additionalActions: DataViewAdditionalAction[]
	originalRowData: MosaicObject
}

function DataViewActionsButtonRow(props: DataViewActionsButtonRowProps) {
	const primaryActions = useMemo(() => {
		if (props.primaryActions === undefined) { return []; }

		return props.primaryActions.filter(action => {
			return filterAction(action, { row: props.originalRowData });
		}).map((action) => {
			const {
				name,
				show,
				onClick,
				...buttonArgs
			} = action;
			
			const newOnClick = () => {
				onClick({ data : props.originalRowData });
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
	}, [props.primaryActions, props.originalRowData]);
	
	const additionalActions = useMemo(() => {
		if (props.additionalActions === undefined) { return []; }
		
		const additionalActions = props.additionalActions.filter(action => {
			return filterAction(action, {row: props.originalRowData});
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
				tooltip="More actions"
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
								data : props.originalRowData
							});
						}
					}
				})}
			/>
		]
	}, [props.additionalActions, props.originalRowData]);
	
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