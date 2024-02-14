import * as React from "react";
import { memo, useMemo, useCallback } from "react";
import { DataViewControlLimitProps } from "./DataViewControlLimitTypes";
import theme from "@root/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { default as MenuSelect, MenuSelectProps } from "../../MenuSelect";
import { StyledButton } from "./DataViewControlLimit.styled";

function DataViewLimit(props: DataViewControlLimitProps) {
	const onChange = useCallback<MenuSelectProps["onChange"]>(function(val) {
		props.onLimitChange({ limit : Number(val) });
	}, [props.onLimitChange]);

	const options = useMemo(function() {
		return props.options.map(val => {
			return {
				label : val.toString(),
				value : val.toString(),
			};
		});
	}, [props.options]);

	const menuContent = (
		<MenuSelect
			options={options}
			onChange={onChange}
			value={props.limit.toString()}
		/>
	);

	return (
		<StyledButton
			color="black"
			label={props.limit.toString()}
			variant="text"
			size="small"
			iconPosition="right"
			mIcon={ExpandMoreIcon}
			mIconColor={theme.newColors.almostBlack["100"]}
			menuContent={menuContent}
		/>
	);
}

export default memo(DataViewLimit);
