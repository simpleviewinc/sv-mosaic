import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

import DrawerContent from "@root/components/DrawerContent";
import { useMosaicTranslation } from "@root/i18n";
import { DataViewViewSaveDrawerContentProps } from "./DataViewViewSaveDrawerContentTypes";
import { SavedViewDef } from "../DataViewTypes";

const StyledForm = styled.form`
	& .font16 {
		font-size: 16px;
	}
`;

const InputLabelProps = {
	className: "font16",
};

const inputProps = {
	className: "font16",
};

const classes = {
	label : "font16",
};

function DataViewViewSaveDrawerContent(props: DataViewViewSaveDrawerContentProps) {
	const [state, setState] = useState({
		...props.data,
		type: (props.allowSharedViewSave === true) ? props.data.type as SavedViewDef["type"] : "mine",
	});

	const { t } = useMosaicTranslation();

	const onSave = async function() {
		await props.onSave({
			...state,
		});
		props.onClose();
	};

	const onSubmit = function(event) {
		event.preventDefault();
		onSave();
	};

	const handleChange = name => event => {
		setState({
			...state,
			[name] : event.target.value,
		});
	};

	const handleSwitch = () => event => {
		setState({
			...state,
			type : event.target.checked ? "shared" : "mine",
		});
	};

	return (
		<DrawerContent
			title={t("mosaic:DataView.save_view")}
			onSave={onSave}
			onBack={props.onClose}
			backLabel={t("mosaic:DataView.cancel_save_view")}
			onCancel={props.onClose}
			background="gray"
		>
			<StyledForm onSubmit={onSubmit} autoComplete="off">
				<FormGroup row>
					<TextField
						autoFocus={true}
						id="label"
						label={t("mosaic:common.label")}
						value={state.label}
						onChange={handleChange("label")}
						fullWidth
						required
						variant="filled"
						InputLabelProps={InputLabelProps}
						inputProps={inputProps}
					/>
				</FormGroup>
				{
					props.allowSharedViewSave &&
					<FormGroup row>
						<FormControl margin="normal">
							<FormControlLabel
								classes={classes}
								control={
									<Switch
										checked={state.type === "shared"}
										onChange={handleSwitch()}
										value="what"
										color="primary"
									/>
								}
								label={t("mosaic:DataView.show_for_all_users")}
							/>
						</FormControl>
					</FormGroup>
				}
			</StyledForm>
		</DrawerContent>
	);
}

export default DataViewViewSaveDrawerContent;
