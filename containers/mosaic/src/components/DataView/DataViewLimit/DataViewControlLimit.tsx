import * as React from "react";
import { memo, useMemo, useCallback } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { DataViewControlLimitProps } from "./DataViewControlLimitTypes";
import type { MenuProps } from "@root/components/Menu/MenuTypes";

import testIds from "@root/utils/testIds";
import Button from "@root/components/Button";

const attrs = { "data-testid": testIds.DATA_VIEW_LIMIT_CONTROL };

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
		<Button
			intent="secondary"
			label={String(props.limit)}
			variant="text"
			iconPosition="right"
			mIcon={ExpandMoreIcon}
			menuItems={options}
			menuOnChange={onChange}
			menuValue={props.limit.toString()}
			attrs={attrs}
		/>
	);
}

export default memo(DataViewLimit);
