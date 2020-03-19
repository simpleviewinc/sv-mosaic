import React, { memo, useMemo } from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { pick } from "lodash";

import ButtonRow from "../ButtonRow";
import Button from "../Button";

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

function GridActionsButtonRow(props) {
	const primaryActions = useMemo(() => {
		if (props.primaryActions === undefined) { return []; }
		
		return props.primaryActions.filter(action => {
			return filterAction(action, props.row);
		}).map((action, i) => {
			const onClick = () => {
				action.onClick({ data : props.row });
			}
			
			const buttonArgs = pick(action, ["label", "color", "variant", "mIcon"]);
			
			return (
				<Button
					key={`primary_${i}`}
					attrs={{ "data-mosaic-id" : `action_primary_${action.name}` }}
					{ ...buttonArgs }
					onClick={onClick}
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
					const menuArgs = pick(action, ["label"]);
					
					return {
						...menuArgs,
						attrs : { "data-mosaic-id" : `action_additional_${action.name}` },
						onClick : () => {
							action.onClick({
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

export default memo(GridActionsButtonRow);