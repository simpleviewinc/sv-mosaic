import * as React from "react";
import { memo, useMemo } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import type { DataViewActionsButtonRowProps } from "./DataViewActionsButtonRowTypes";

import { useWrappedToggle } from "@root/utils/toggle";
import Button from "../../Button";
import { StyledButtonRow } from "./DataViewActionsButtonRow.styled";
import { EMPTY_ARRAY } from "@root/constants/stable";

function DataViewActionsButtonRow({
	activeDisplay,
	originalRowData,
	actionsHidden,
	additionalActions = EMPTY_ARRAY,
	disabled,
	primaryActions = EMPTY_ARRAY,
}: DataViewActionsButtonRowProps) {
	const showParams = useMemo(() => ({ row: originalRowData }), [originalRowData]);

	const shownPrimaryActions = useWrappedToggle(primaryActions, showParams, "show");
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
				onClick({ data : originalRowData });
			};

			const calculatedDisabled = [buttonArgs.disabled, disabled, actionsHidden].some(disabled => disabled);

			return (
				<Button
					{...buttonArgs}
					disabled={calculatedDisabled}
					key={`primary_${name}`}
					attrs={{ "data-mosaic-id" : `action_primary_${name}` }}
					onClick={newOnClick}
				/>
			);
		});
	}, [shownPrimaryActions, disabled, actionsHidden, originalRowData]);

	const additionalActionsButton = useMemo(() => {
		if (!shownadditionalActions.length) {
			return [];
		}

		const calculatedDisabled = [disabled, actionsHidden].some(disabled => disabled);

		return [
			<Button
				key="additional"
				intent="secondary"
				variant="text"
				mIcon={activeDisplay && MoreVertIcon}
				attrs={{ "data-mosaic-id" : "additional_actions_dropdown" }}
				tooltip="More actions"
				disabled={calculatedDisabled}
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
								data : originalRowData,
							});
						},
					};
				})}
			/>,
		];
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		shownadditionalActions,
		originalRowData,
		disabled,
		actionsHidden,
	]);

	// concat the buttons into a single row so that we have a single child allowing caching of the ButtonRow
	const buttons = useMemo(() => {
		return [
			...primaryActionButtons,
			...additionalActionsButton,
		];
	}, [primaryActionButtons, additionalActionsButton]);

	return (
		<StyledButtonRow $hidden={actionsHidden}>
			{buttons}
		</StyledButtonRow>
	);
}

export default memo(DataViewActionsButtonRow);
