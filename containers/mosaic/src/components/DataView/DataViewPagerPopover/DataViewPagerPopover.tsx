import * as React from "react";
import { useState, useContext, memo } from "react";
import styled from "styled-components";
import { default as Button, ButtonPopoverContext } from "../../Button";
import theme from "../../../theme";
import type { DataViewPagerPopoverProps } from "./DataViewPagerPopoverTypes";

const PopoverDiv = styled.div`
	font-size: 14px;
	display: inline-flex;
	align-items: center;

	& > input {
		width: 40px;
		margin: 0px 8px;
	}

	&.invalid > input {
		outline: ${theme.newColors.darkRed["100"]} auto 1px;
	}

	& > .goButton {
		margin-left: 8px;
	}
`;

function DataViewPagerPopover(props: DataViewPagerPopoverProps) {
	const buttonPopoverContext = useContext(ButtonPopoverContext);

	const [state, setState] = useState({
		currentPage : props.currentPage,
		invalid : false,
	});

	const onChange = function(e) {
		const val = Number(e.currentTarget.value);

		const invalid = !Number.isInteger(val) || val <= 0 || val > props.totalPages;

		setState({
			...state,
			invalid,
			currentPage : e.currentTarget.value,
		});
	};

	const onSubmit = () => {
		if (state.invalid === true) {
			return;
		}

		buttonPopoverContext.onClose();
		props.onSkipChange({ skip : (state.currentPage - 1) * props.limit });
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			return onSubmit();
		}
	};

	return (
		<PopoverDiv
			className={`
				${state.invalid ? "invalid" : ""}
			`}
		>
			<span>Page</span>
			<input
				type="text"
				onKeyDown={onKeyDown}
				onChange={onChange}
				autoFocus
			/>
			<span>
				of
				{" "}
				{props.totalPages}
			</span>
			<Button
				className="goButton"
				color="blue"
				variant="contained"
				size="small"
				onClick={onSubmit}
				label="Go"
			/>
		</PopoverDiv>
	);
}

export default memo(DataViewPagerPopover);
