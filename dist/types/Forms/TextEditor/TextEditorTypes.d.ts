import { EditorState } from "react-draft-wysiwyg";
export interface TextEditorProps {
    /**
     * Disables the text editor.
     */
    disabled?: boolean;
    /**
     * Used to show visual error signals on the Text Editor.
     */
    error?: boolean;
    /**
     * The reason why the editorState argument is type any is because
     * react-draft does not expose its interfaces. The signature for
     * the onChange function was found here:
     * https://github.com/jpuri/react-draft-wysiwyg/issues/420
     */
    onChange: (editorState: EditorState) => void;
    /**
     * Text editor placeholder.
     */
    placeholder?: string;
    /**
     * Editor state
     */
    value: EditorState;
}
