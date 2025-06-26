import styled from "styled-components";
import PickerPanel, { PickerPanelActive } from "../PickerPanel";
import theme from "@root/theme";
import { Text } from "../Typography";

export const StyledPickerPanel = styled(PickerPanel)`
	width: 530px;
	height: 344px;
`;

export const StyledComparisonHeader = styled(Text).attrs({ tag: "h3", size: "lg" })`
	margin-bottom: ${theme.spacing(2)};
`;

export const StyledComparisonHelp = styled.div`
	padding: 10px;
`;

export const StyledPanelPickerActive = styled(PickerPanelActive)`
	max-width: 220px;
`;

export const ComparisonDropdown = styled.div`
	margin-bottom: ${theme.spacing(3)};
`;

export const SelectedOptionsSubtitle = styled(Text).attrs({ size: "lg", weight: "medium", tag: "h3" })`
	margin-bottom: ${theme.spacing(3)};
`;
