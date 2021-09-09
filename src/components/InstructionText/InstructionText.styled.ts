import styled from 'styled-components'
import theme from '@root/theme';

export const InstructionTextWrapper = styled.div`
  width: 400px;
  margin-left: ${pr => pr.position === 'right' ? 'auto' : 0};
`;

export const StyledInstructionText = styled.p`
  font-size: 14px;
  color: ${theme.colors.assistiveText};
  margin-top: 0px;
  margin-bottom: 0px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
