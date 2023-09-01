import * as React from "react";
import { memo, useMemo } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ButtonRow from "../../ButtonRow";
import Button from "../../Button";
import { DataViewActionsButtonRowProps } from "./DataViewActionsButtonRowTypes";
import evaluateShow from "@root/utils/show/evaluateShow";

function DataViewActionsButtonRow(props: DataViewActionsButtonRowProps) {
	const primaryActions = useMemo(() => {
		if (props.primaryActions === undefined) { return []; }

		return props.primaryActions.filter(action => {
			return evaluateShow(action.show, { row: props.originalRowData });
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
					disabled={buttonArgs.disabled === undefined ? props.disabled : buttonArgs.disabled}
					key={`primary_${name}`}
					attrs={{ "data-mosaic-id" : `action_primary_${name}` }}
					onClick={newOnClick}
				/>
			)
		});
	}, [props.primaryActions, props.originalRowData, props.disabled]);

	const additionalActions = useMemo(() => {
		if (props.additionalActions === undefined) { return []; }

		const additionalActions = props.additionalActions.filter(action => {
			return evaluateShow(action.show, {row: props.originalRowData});
		});

		// if no valid actions hide the dots
		if (additionalActions.length === 0) {
			return [];
		}

		return [
			<Button
				key="additional"
				color="black"
				variant="icon"
				mIcon={props.activeDisplay && MoreVertIcon}
				attrs={{ "data-mosaic-id" : "additional_actions_dropdown" }}
				tooltip="More actions"
				disabled={props.disabled}
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
	}, [props.additionalActions, props.originalRowData, props.disabled]);

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
		<ButtonRow gap="small">
			{buttons}
		</ButtonRow>
	)
}

export default memo(DataViewActionsButtonRow);
