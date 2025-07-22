import styled from "styled-components";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import theme from "@root/theme";

export const TooltipIcon = styled(InfoOutlinedIcon)`
  && {
	fill: ${theme.color.gray[500]};
	width: 18px;
	height: 18px;
  }
`;
