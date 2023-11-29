import * as React from "react";
import { memo, useMemo } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ButtonRow from "../../ButtonRow";
import Button from "../../Button";
import { DataViewActionsButtonRowProps } from "./DataViewActionsButtonRowTypes";
import { useWrappedShow } from "@root/utils/show";

function DataViewActionsButtonRow(props: DataViewActionsButtonRowProps) {
	const showParams = useMemo(() => ({row: props.originalRowData}), [props.originalRowData]);

	const primaryActions = useMemo(() => props.primaryActions || [], [props.primaryActions]);
	const shownPrimaryActions = useWrappedShow(primaryActions, showParams);

	const additionalActions = useMemo(() => props.additionalActions || [], [props.additionalActions]);
	const shownadditionalActions = useWrappedShow(additionalActions, showParams);

	const primaryActionButtons = useMemo(() => {
		return shownPrimaryActions.map((action) => {
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
	}, [shownPrimaryActions, props.originalRowData, props.disabled]);

	const additionalActionsButton = useMemo(() => {
		if (!shownadditionalActions.length) {
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
				menuItems={shownadditionalActions.map(action => {
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
	}, [shownadditionalActions, props.originalRowData, props.disabled]);

	// concat the buttons into a single row so that we have a single child allowing caching of the ButtonRow
	const buttons = useMemo(() => {
		return [
			...primaryActionButtons,
			...additionalActionsButton
		];
	}, [primaryActionButtons, additionalActionsButton]);

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
