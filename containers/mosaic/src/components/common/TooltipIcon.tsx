import styled from "styled-components";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import theme from "@root/theme";

export const TooltipIcon = styled(InfoOutlinedIcon)`
  && {
	fill: ${theme.newColors.realTeal["100"]};
	font-size: 16px;
	width: 24px;
	height: 24px;
  }
`;
