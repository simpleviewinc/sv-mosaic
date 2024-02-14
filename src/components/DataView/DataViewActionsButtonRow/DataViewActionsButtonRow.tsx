import * as React from "react";
import { memo, useMemo } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "../../Button";
import { DataViewActionsButtonRowProps } from "./DataViewActionsButtonRowTypes";
import { useWrappedToggle } from "@root/utils/toggle";
import { StyledButtonRow } from "./DataViewActionsButtonRow.styled";

function DataViewActionsButtonRow(props: DataViewActionsButtonRowProps) {
	const showParams = useMemo(() => ({ row: props.originalRowData }), [props.originalRowData]);

	const primaryActions = useMemo(() => props.primaryActions || [], [props.primaryActions]);
	const shownPrimaryActions = useWrappedToggle(primaryActions, showParams, "show");

	const additionalActions = useMemo(() => props.additionalActions || [], [props.additionalActions]);
	const shownadditionalActions = useWrappedToggle(additionalActions, showParams, "show");

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
			};

			const disabled = [buttonArgs.disabled, props.disabled, props.actionsHidden].some(disabled => disabled);

			return (
				<Button
					{ ...buttonArgs }
					disabled={disabled}
					key={`primary_${name}`}
					attrs={{ "data-mosaic-id" : `action_primary_${name}` }}
					onClick={newOnClick}
				/>
			);
		});
	}, [
		shownPrimaryActions,
		props.originalRowData,
		props.disabled,
		props.actionsHidden,
	]);

	const additionalActionsButton = useMemo(() => {
		if (!shownadditionalActions.length) {
			return [];
		}

		const disabled = [props.disabled, props.actionsHidden].some(disabled => disabled);

		return [
			<Button
				key="additional"
				color="black"
				variant="icon"
				mIcon={props.activeDisplay && MoreVertIcon}
				attrs={{ "data-mosaic-id" : "additional_actions_dropdown" }}
				tooltip="More actions"
				disabled={disabled}
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
								data : props.originalRowData,
							});
						},
					};
				})}
			/>,
		];
	}, [
		shownadditionalActions,
		props.originalRowData,
		props.disabled,
		props.actionsHidden,
	]);

	// concat the buttons into a single row so that we have a single child allowing caching of the ButtonRow
	const buttons = useMemo(() => {
		return [
			...primaryActionButtons,
			...additionalActionsButton,
		];
	}, [primaryActionButtons, additionalActionsButton]);

	if (buttons.length === 0) {
		return null;
	}

	return (
		<StyledButtonRow $hidden={props.actionsHidden}>
			{buttons}
		</StyledButtonRow>
	);
}

export default memo(DataViewActionsButtonRow);
