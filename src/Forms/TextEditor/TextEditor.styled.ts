import styled from 'styled-components';
import theme from '@root/theme';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const EditorWrapper = styled.div`
  .rdw-editor-toolbar {
    margin-bottom: 8px;
    border: ${(pr) => (pr.error ? theme.borders.error : '')};
  }

  .rdw-editor-main {
    background-color: ${theme.colors.gray100};
    padding: 16px;
    border: ${(pr) => {
		if (pr.hasFocus) return `1px solid ${theme.colors.almostBlack}`;
		else if (pr.error) return theme.borders.error;
		return theme.borders.simplyGray;
	}};
  }

  .rdw-option-active {
    background-color: ${theme.colors.gray200};
    box-shadow: none;
  }
`;
