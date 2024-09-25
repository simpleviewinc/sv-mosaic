import * as React from "react";
import { memo, useMemo, useCallback } from "react";
import theme from "@root/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { DataViewControlLimitProps } from "./DataViewControlLimitTypes";
import type { MenuProps } from "@root/components/Menu/MenuTypes";

import { StyledButton } from "./DataViewControlLimit.styled";

function DataViewLimit(props: DataViewControlLimitProps) {
	const onChange = useCallback<MenuProps["onChange"]>((value) => {
		props.onLimitChange({ limit : Number(value) });
	}, [props.onLimitChange]);

	const options = useMemo(function() {
		return props.options.map(val => {
			return {
				label : val.toString(),
				value : val.toString(),
			};
		});
	}, [props.options]);

	return (
		<StyledButton
			color="black"
			label={props.limit.toString()}
			variant="text"
			size="small"
			iconPosition="right"
			mIcon={ExpandMoreIcon}
			mIconColor={theme.newColors.almostBlack["100"]}
			menuItems={options}
			menuOnChange={onChange}
			menuValue={props.limit.toString()}
		/>
	);
}

export default memo(DataViewLimit);
