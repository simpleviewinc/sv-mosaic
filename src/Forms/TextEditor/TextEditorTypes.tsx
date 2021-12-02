export interface TextEditorProps {
  /**
   * Disables the text editor
   */
  disabled?: boolean;
  /** 
   * The reason why the editorState argument is type any is because 
   * react-draft does not expose its interfaces. The signature for 
   * the onChange function was found here:
   * https://github.com/jpuri/react-draft-wysiwyg/issues/420
   */
  onChange: (editorState: any) => void;
  value: any;
}
