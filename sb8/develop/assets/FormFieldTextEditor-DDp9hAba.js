import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as n}from"./index-BwDDMXeo.js";import{M as r}from"./index-Do8LCZBF.js";import{s}from"./FormFieldTextEditor.stories-C8d9ycq7.js";import"./index-D0AnReJb.js";import"./iframe-PSae6y2k.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index-BUl2NqO_.js";import"./styled-components.browser.esm-D9jdcGim.js";import"./sizes-xhpoGYFi.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-CwhNcCW5.js";import"./Button-B-HROxGS.js";import"./identifier-P2c7yk_w.js";import"./generateUtilityClasses-Cqx37_87.js";import"./ButtonBase-B88uyuTX.js";import"./useIsFocusVisible-DX7TaDmt.js";import"./index-Cp34SjbI.js";import"./Popper-C2xxNeyp.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-VJaTxDNw.js";import"./useThemeWithoutDefault-BBWH5Z3d.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-eQe_EJj5.js";import"./createSvgIcon-1nOp1Fw5.js";import"./createSvgIcon-yORtlijU.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DqP6CXHW.js";import"./DisplayText-DfbYD38Q.js";import"./ButtonRow-ZsYtcJma.js";import"./toNumber-BAVDMXIx.js";import"./useMosaicTranslation-YU7EdNRi.js";import"./DataViewFilterDropdownButtons-BXJT_S1t.js";import"./index-DczNNMM0.js";import"./ExpandMore-p_Fviusb.js";import"./Chip-CPY2CdPS.js";import"./CheckboxList-BiSNtdOb.js";import"./Checkbox-CcPIMNpv.js";import"./StyledOptionFormControl-DrwUDyOs.js";import"./formControlState-DKpu4qdP.js";import"./Text-Cy3-d4Dq.js";import"./DataViewPrimaryFilter.styled-WHVNyTxG.js";import"./PickerPanel-C2hSjTfb.js";import"./PageHeader-Maf0ecTd.js";import"./FormFieldText.styled-CreleCMn.js";import"./Spinner-C3xVyrtB.js";import"./MoreVert-CCwGH32Y.js";import"./formats-CMvQHWsT.js";import"./Snackbar-q2Sdad91.js";import"./Close-a0rXqC-u.js";import"./ClickAwayListener-Dv_hDxFo.js";import"./ChipList-CxVqxH3S.js";import"./RadioButton-B3r_znDd.js";import"./Toggle-D8WoBZhC.js";import"./Dialog-CQAKZUUh.js";import"./ThemeProvider-DOMyClwG.js";import"./SideNav-D5yCMd23.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-njFAddlw.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./styled-BWOE7yIf.js";import"./createSvgIcon-CFLdSkGK.js";import"./Grid-BbIy_5I8.js";import"./useThemeWithoutDefault-B0y5BOgo.js";import"./Typography-DFZHALTz.js";import"./TridentIcon-DHMPKys9.js";function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:s,name:"Docs - Tiptap"}),`
`,t.jsx(e.h2,{id:"text-editor---tiptap",children:"Text Editor - Tiptap"}),`
`,t.jsxs(e.p,{children:["The integration of this field into the form system is not complete. It is being included alongside the existing Jodit editor to ensure correct alignment between the two fields before replacing it completely. To use it, import the ",t.jsx(e.code,{children:"FormFieldTextEditorTipTapFieldType"})," and pass that as the field type:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { FormFieldTextEditorTipTapFieldType } from "#mosaic/components";

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
`})})]})}function Rt(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Rt as default};
