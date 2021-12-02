import styled from 'styled-components';
import theme from '@root/theme';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export const EditorWrapper = styled.div`
  .rdw-editor-toolbar {
    margin-bottom: 8px;
  }

  .rdw-editor-main {
    border: ${theme.borders.simplyGray};
    background-color: ${theme.colors.gray100};
  }
`;
