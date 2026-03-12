import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-ikABDTSQ.js";import{M as r}from"./index-Bl4jeCu5.js";import{s}from"./FormFieldTextEditor.stories-DqtXogf4.js";import"./index-CDlOlYQx.js";import"./iframe-G-K5kHBy.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-DUrLt3d7.js";import"./MosaicContext-Ckn3SYVO.js";import"./ButtonBase-BTOUCkJL.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-CQDqkEyb.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-D9Xlm0gk.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-DiGzPWWk.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-DnZWjXCP.js";import"./index-fPYtWVub.js";import"./Popover-BARbcQa_.js";import"./useTooltip-CvILwQ8N.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-ef-3r2ji.js";import"./createSvgIcon-CpiYeT0y.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-Cf2fXVyQ.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import"./DataViewFilterDropdownButtons-DxJf3FQF.js";import"./FormFieldText.styled-CRryNLjj.js";import"./formControlState-VojGIu4f.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-BYJCM7n4.js";import"./ExpandMore-C3mveD_C.js";import"./Chip-BzCeYly-.js";import"./DataViewPrimaryFilter.styled-64dlO4D8.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DE1h0Woy.js";import"./PageHeader-CVwaxNeh.js";import"./Spinner-Dd-oad_B.js";import"./CheckboxList-BKNIRyAz.js";import"./Checkbox-65JO9dLp.js";import"./SwitchBase-Cr0Iw5cH.js";import"./StyledOptionFormControl-DVa9h7YW.js";import"./FormGroup-DKw7Nhjc.js";import"./MoreVert-BuMRkz_g.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DAQJW3QI.js";import"./Snackbar-Bo2ZVk08.js";import"./Close-Dcayhvfb.js";import"./ChipList-DMumVwBB.js";import"./RadioGroup-bYFNZFp8.js";import"./Toggle-DXGG91mo.js";import"./Dialog-DXGYH3lr.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-0jIe1PLd.js";import"./CardHeading-c7RPWGjr.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-Cbu7rhRc.js";import"./emotion-unitless.esm-x5IvBceT.js";import"./createSvgIcon-BczN9R-D.js";import"./Typography-BLRcpb5B.js";import"./useThemeWithoutDefault-BnsPvbh0.js";import"./useEnhancedEffect-dsZqRuV5.js";function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:s,name:"Docs - Tiptap"}),`
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
`})})]})}function Lt(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Lt as default};
