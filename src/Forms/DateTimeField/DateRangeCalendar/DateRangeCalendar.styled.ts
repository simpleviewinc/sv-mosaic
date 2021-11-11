import styled from 'styled-components';

// Utils
import theme from '@root/theme';

export const DateRangeCalendarWrapper = styled.div`
  display: flex;
`;

export const StyledSpan = styled.span`
  font-size: 14px;
  color: ${theme.colors.gray600};
  margin: 0 20px 0 20px;
  
  ${pr => !pr.disabled ? `
      position: relative;
      top: 13px;
    ` : "" 
}
`;
