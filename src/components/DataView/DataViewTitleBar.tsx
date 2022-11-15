import React, { useMemo } from "react";
import styled from "styled-components";
import theme from "@root/theme";
// import jsvalidator from "jsvalidator";

import ButtonRow from "../ButtonRow";
import DataViewViewControls from "./DataViewViewControls";
import { H1 } from "../Typography";

const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > *:last-child {
		display: flex;
		margin-right: 0px;
	}

	& > .left > h1 {
		color: ${theme.newColors.almostBlack["100"]};
		font-family: ${theme.museoFont};
		font-size: 28px;
		font-weight: 250;
		margin-bottom: 0px;
		margin-right: 16px;
	}
`;

interface DataViewTitleBarProps {
	buttons?: any;
	title?: any;
	savedViewEnabled?: any;
	savedView?: any;
	savedViewState?: any;
	savedViewCallbacks?: any;
	savedViewAllowSharedViewSave?: any;
}
// interface DataViewTitleBarProps {
// 	buttons: any;
// 	title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal;
// 	savedViewEnabled: any;
// 	savedView: {
// 		label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal;
// 		type: string;
// 	};
// 	savedViewState: any;
// 	savedViewCallbacks: {
// 		onSave: (arg0: any) => any;
// 		onRemove: any;
// 		onChange: any;
// 		onGetOptions: any;
// 	};
// 	savedViewAllowSharedViewSave: any;
// }

//TODO PROPS
function DataViewTitleBar(props: DataViewTitleBarProps) {
	// jsvalidator.validate(props, {
	// 	type : "object",
	// 	schema : [
	// 		{ name : "title", type : "string" },
	// 		{ name : "buttons", type : "array" },
	// 		{ name : "savedViewEnabled", type : "boolean" },
	// 		{ name : "savedView", type : "object" },
	// 		{ name : "savedViewState", type : "object" },
	// 		{ name : "savedViewCallbacks", type : "object" },
	// 		{ name : "savedViewAllowSharedViewSave", type: "boolean" },
	// 	],
	// 	allowExtraKeys : false,
	// 	throwOnInvalid : true
	// });

	const buttons = useMemo(() => {
		if (props.buttons === undefined) {
			return;
		}

		return props.buttons.map((button) => {
			const { name, ...buttonArgs } = button;
			buttonArgs.attrs = { "data-mosaic-id": `button_${name}` };
			return buttonArgs;
		});
	}, [props.buttons]);

	return (
		<StyledWrapper>
			<div className="left">
				{props.title && <H1>{props.title}</H1>}
				{props.savedViewEnabled && (
					<DataViewViewControls
						savedView={props.savedView}
						savedViewState={props.savedViewState}
						savedViewCallbacks={props.savedViewCallbacks}
						savedViewAllowSharedViewSave={props.savedViewAllowSharedViewSave}
					/>
				)}
			</div>
			{props.buttons && <ButtonRow buttons={buttons} />}
		</StyledWrapper>
	);
}

export default DataViewTitleBar;
