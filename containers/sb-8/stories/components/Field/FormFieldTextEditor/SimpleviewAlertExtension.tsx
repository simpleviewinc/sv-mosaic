import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { SimpleviewAlertNodeView } from "./SimpleviewAlertNodeView";

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
      simpleviewAlert: {
        /**
         * Set a Simpleview alert node
         */
        setSimpleviewAlert: () => ReturnType,
        /**
         * Toggle a Simpleview alert node
         */
        toggleSimpleviewAlert: () => ReturnType,
        /**
         * Unset a Simpleview alert node
         */
        unsetSimpleviewAlert: () => ReturnType,
      }
    }
  }

export const SimpleViewAlert = Node.create({
  name: "simpleviewAlert",

  content: "block+",

  group: "block",

  defining: true,

  parseHTML() {
    return [
        {
            tag: `div[data-type=${this.name}]`,
        }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { "data-type": this.name }), 0];
  },

  addCommands() {
    return {
      setSimpleviewAlert: () => ({ commands }) => {
        return commands.wrapIn(this.name)
      },
      toggleSimpleviewAlert: () => ({ commands }) => {
        return commands.toggleWrap(this.name)
      },
      unsetSimpleviewAlert: () => ({ commands }) => {
        return commands.lift(this.name)
      },
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(SimpleviewAlertNodeView)
  },
})
