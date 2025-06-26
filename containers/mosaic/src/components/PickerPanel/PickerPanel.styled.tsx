import theme from "@root/theme";
import styled from "styled-components";
import { Text } from "../Typography";
import { Column, Row } from "../common";
import Button from "../Button";
import { StyledTextField } from "../Field/FormFieldText/FormFieldText.styled";
import Spinner from "../Spinner";

export const StyledPickerPanel = styled(Column)<{ $fullHeight?: boolean }>`
	${({ $fullHeight }) => $fullHeight && `
		height: 100%;
	`}
`;

export const PickerPanelPrimary = styled(Row)`
	flex-grow: 1;
	min-height: 0;
`;

export const LeftPanelTop = styled.div`
	padding: ${theme.spacing(5, 5, 0)};
`;

export const LeftPanel = styled(Column)`
	flex: 1;
`;

export const OptionsWrapper = styled.div`
	padding: ${theme.spacing(5)};
	flex: 1;
	overflow: auto;
`;

export const PickerPanelSubtitle = styled(Text).attrs({ size: "xl", weight: "medium", tag: "h3" })`
	margin-bottom: ${theme.spacing(3)};
`;

export const KeywordSearchInput = styled(StyledTextField)`
	width: 100%;
`;

export const LoadMoreButton = styled(Button).attrs({ fullWidth: true })`
	margin-top: ${theme.spacing(3)};
`;

export const PickerPanelActive = styled.div`
	background-color: ${theme.color.gray[25]};
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0));
	background-size: 10px 100%;
	background-repeat: no-repeat;
	background-position: left top;
	border-left: 1px solid ${theme.color.gray[300]};
	padding: ${theme.spacing(5, 6)};
	width: 50%;
	max-width: 380px;
	flex: none;
	overflow: auto;
`;

export const StyledSpinner = styled(Spinner)`
	margin: ${theme.spacing(3, 0)};
`;
