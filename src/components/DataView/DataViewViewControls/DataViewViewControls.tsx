import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ButtonRow from "../../ButtonRow";
import Button from "../../Button";

import { useMosaicTranslation } from "@root/i18n";
import { DataViewViewControlsProps } from "./DataViewViewControlsTypes";

const ViewSpan = styled.span`
	display: inline-flex;
	align-items: center;

	& > .icon {
		margin-right: 3px;
	}

	& > p {
		margin: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		max-width: 200px;
	}
`;

const TitleButton = styled(Button)`
	max-width: 300px;
	margin-right: 2px;

	p {
		font-weight: 510;
		text-transform: none;
	}
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DataViewViewControls(props: DataViewViewControlsProps) {
	const [state, setState] = useState({
		viewOpen : false,
		saveOpen : false,
	});

	const { t } = useMosaicTranslation();

	const toggleViewDrawer = function() {
		setState({
			...state,
			viewOpen : !state.viewOpen,
		});
	};

	const toggleSaveDrawer = function() {
		setState({
			...state,
			saveOpen : !state.saveOpen,
		});
	};

	const ViewLabel = (
		<ViewSpan>
			<p>
				{/* {props.savedView.label} */}
			</p>
		</ViewSpan>
	);

	const saveMenuItems = [
		{
			label : t("mosaic:DataView.save_as_new_view"),
			onClick : function() {
				toggleSaveDrawer();
			},
		},
		// {
		// 	label : t("mosaic:DataView.overwrite_current_view"),
		// 	disabled : props.savedView.type === "default" || (props.savedView.type === "shared" && !props.savedViewAllowSharedViewSave),
		// 	onClick : async function() {
		// 		await props.savedViewCallbacks.onSave({
		// 			...props.savedView,
		// 			state : props.savedViewState,
		// 		});
		// 	},
		// },
	];

	return (
		<div>
			<div className="right">
				<ButtonRow>
					<TitleButton
						mIcon={ExpandMoreIcon}
						iconPosition="right"
						label={ViewLabel}
						variant="contained"
						size="small"
						color="gray"
						onClick={toggleViewDrawer}
					/>
					<Button
						mIcon={ExpandMoreIcon}
						iconPosition="right"
						label={t("mosaic:DataView.save_view")}
						variant="text"
						size="small"
						color="teal"
						menuItems={saveMenuItems}
					/>
				</ButtonRow>
			</div>
		</div>
	);
}

export default DataViewViewControls;
