import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as n}from"./index-3-_tf5dF.js";import{M as r}from"./index-CCWoexlY.js";import{s}from"./FormFieldTextEditor.stories-BXTbwOpv.js";import"./index-BP8_t0zE.js";import"./iframe-DErWsLhP.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./Form-BV8sUP0b.js";import"./theme-DRtZtbPc.js";import"./SideNav-biYpQHtM.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./FormFieldText.styled-hkDOkrrs.js";import"./Button-Do5OxnZO.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./ButtonBase-BZmvw3BH.js";import"./useIsFocusVisible-De2ftVE9.js";import"./Popper-CPbWUqAP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-5hcycNQy.js";import"./testIds-D6Gx1A0F.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CcHL1II5.js";import"./createSvgIcon-CPgMIgId.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-DnvaddO_.js";import"./CheckboxList-BmT12QDz.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BN-KUs9r.js";import"./FormControlLabel-n1qioM9o.js";import"./getThemeProps-Cs15h2IA.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./Chip-Btt3uSwF.js";import"./ButtonRow-B3IWj8ab.js";import"./Spinner-DgupAfKo.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-CvnKr_oj.js";import"./ColorSelected-gVxq6Y0Z.js";import"./TitleWrapper-D2l-_w9e.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-yhdXyTld.js";import"./formats-sBod7wm8.js";import"./Dialog-DXK7hw4q.js";import"./useMediaQuery-CguehUMS.js";import"./Snackbar-J6gNQC5v.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";import"./TooltipIcon-CO3K7ssQ.js";import"./renderButtons-BmHfsf_z.js";import"./styled-components.browser.esm-8MQ3dTkk.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./styled-hJgfyZIG.js";import"./createSvgIcon-DE5yaevU.js";import"./Grid-Ce_RILgk.js";import"./Typography-aSbaE-Qi.js";import"./TridentIcon-D3eXl2Te.js";function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:s,name:"Docs - Tiptap"}),`
`,t.jsx(e.h2,{id:"text-editor---tiptap",children:"Text Editor - Tiptap"}),`
`,t.jsxs(e.p,{children:["The integration of this field into the form system is not complete. It is being included alongside the existing Jodit editor to ensure correct alignment between the two fields before replacing it completely. To use it, import the ",t.jsx(e.code,{children:"FormFieldTextEditorTipTapFieldType"})," and pass that as the field type:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { FormFieldTextEditorTipTapFieldType } from "@simpleview/sv-mosaic/components";

const fields: FieldDef = [
	{
		name: "My Text Editor",
		type: FormFieldTextEditorTipTapFieldType,
		// ...
	}
]

`})}),`
`,t.jsxs(e.p,{children:["This field implements the ",t.jsx(e.a,{href:"#generic-field-props-fielddef",children:t.jsx(e.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The text editor is a text area with added capabilities for use in various publishers, allowing the users to format their input in a text area."}),`
`,t.jsxs(e.li,{children:["This is an implementation using the ",t.jsx(e.a,{href:"https://www.npmjs.com/package/@tiptap/react",rel:"nofollow",children:"Tiptap"})," package."]}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"/story/formfields-formfieldtexteditor--playground",children:t.jsx(e.strong,{children:"Playground"})})}),`
`,t.jsxs(e.li,{children:["Data: ",t.jsx(e.code,{children:"string"})," - HTML-based value of the input typed."]}),`
`,t.jsx(e.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Name"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"controls"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"ControlsConfig"})}),t.jsxs(e.td,{children:["optional - Defines the control configuration. See ",t.jsx(e.a,{href:"#controls",children:"controls"})," below for more information."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"extensions"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"Extensions"})}),t.jsxs(e.td,{children:["optional - The extensions to be loaded by the underlying Tiptap library. This property will override default extensions defined by Mosaic. Those default extensions are listed ",t.jsx(e.a,{href:"https://github.com/simpleview/sv-mosaic/tree/develop/containers/mosaic/src/components/Field/FormFieldTextEditor/Extensions/defaultExtensions.ts",rel:"nofollow",children:"here"}),". See the Tiptap ",t.jsx(e.a,{href:"https://tiptap.dev/docs/editor/extensions/custom-extensions",rel:"nofollow",children:"documentation"})," for more information on creating extensions."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"onImage"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"(params: TextEditorOnLinkParams) => void"})}),t.jsxs(e.td,{children:["A function to be invoked when the image control is clicked. It will recieve a single parameter which is an object containing ",t.jsx(e.code,{children:"updateImage"}),", ",t.jsx(e.code,{children:"alt"})," and ",t.jsx(e.code,{children:"src"}),". ",t.jsx(e.code,{children:"updateImage"})," should be subsequently called to add/update the image. ",t.jsx(e.code,{children:"alt"})," and ",t.jsx(e.code,{children:"src"})," will correspond to the current image if applicable."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"onLink"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"(params: TextEditorOnLinkParams) => void"})}),t.jsxs(e.td,{children:["A function to be invoked when the link control is clicked. It will recieve a single parameter which is an object containing ",t.jsx(e.code,{children:"updateLink"}),", ",t.jsx(e.code,{children:"href"})," and ",t.jsx(e.code,{children:"newTab"}),". ",t.jsx(e.code,{children:"updateLink"})," should be subsequently called to add/update the link. ",t.jsx(e.code,{children:"href"})," and ",t.jsx(e.code,{children:"newTab"})," will correspond to the current image if applicable."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"maxCharacters"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"number"})}),t.jsx(e.td,{children:"optional - Defines the limit of characters that are allow to type in the input element."})]})]})]}),`
`,t.jsx(e.h3,{id:"controls",children:"Controls"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"controls"})," input settings accepts a number of ways to define the controls that appear in the text editor's toolbar. The property is an array of groups, each group is an array of controls. Each item of the group can optionally be a third nested array which will produce a menu button which, when clicked, will reveal the controls listed within. By default, the controls configuration is as follows:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`const defaultControls: ControlsConfig = [
	// Control group containing a single control
	["headings"],
	// Control group containing 2 controls and a menu which contains 5 more controls.
	["bold", "italic", ["underline", "strike", "superscript", "subscript", "clear"]],
	["bulletList", "orderedList"],
	["alignLeft", "alignCenter", ["alignRight", "alignJustify"]],
	["link", ["image", "codeBlock", "blockquote"]],
	["undo", "redo"],
];
`})}),`
`,t.jsxs(e.p,{children:["The control identifiers shown in the example above map to a control definition object, but you can also pass that definition object instead of the identifying string for more granular control. This example uses the ",t.jsx(e.code,{children:"controlUndo"})," and ",t.jsx(e.code,{children:"controlRedo"})," object available from Mosaic with a slight modification:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { controlUndo, controlRedo } from "@sv-mosaic/mosaic/components/Field/FormFieldTextEditor";

const controls: ControlsConfig = [
	// Other controls...
	[
		{
			...controlUndo,
			label: "Roll it back",
		},
		{
			...controlRedo,
			label: "Restore it",
		}
	],
];
`})}),`
`,t.jsx(e.p,{children:"But you could also define the entire control object to implement your own functionality:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { controlUndo, controlRedo } from "@simpleview/mosaic/components/Field/FormFieldTextEditor";

const controls: ControlsConfig = [
	// Other controls...
	[
		{
			name: "selectAll",
			label: "Select All",
			cmd: ({ editor }) => editor.chain().selectAll().run(),
			Icon: SelectAllIcon,
			shortcut: {
				mac: "Cmd+A",
				pc: "Ctrl+A",
			},
		}
	],
];
`})})]})}function Et(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Et as default};
