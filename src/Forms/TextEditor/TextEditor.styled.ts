import styled from 'styled-components';
import theme from '@root/theme';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const EditorWrapper = styled.div`
  width: 620px;

  .rdw-editor-toolbar {
    margin-bottom: 8px;
    border: ${(pr) => (pr.error ? theme.borders.error : '')};
  }

  .rdw-editor-main {
    background-color: ${theme.colors.gray100};
    border-radius: 0px 0px 4px 4px;
    box-shadow: ${pr => pr.hasFocus ? '0px 0px 5px #1A1A1A29' : ''};
    max-height: 200px;
    overflow-y: auto;
    padding: 16px;
    border: ${(pr) => {
		if (pr.hasFocus) return `1px solid ${theme.colors.almostBlack}`;
		else if (pr.error) return theme.borders.error;
		return theme.borders.simplyGray;
	}};

    .public-DraftStyleDefault-block {
      margin: 0;
    }
  }

  .rdw-option-active {
    background-color: ${theme.colors.gray200};
    box-shadow: none;
  }
`;
