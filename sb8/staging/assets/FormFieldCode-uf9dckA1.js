import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as t}from"./index-CrRX5TgX.js";import{M as s}from"./index-Dx5T63TV.js";import{s as d}from"./FormFieldCode.stories-C6OJUvan.js";import{H as i}from"./Header-E78X8BjW.js";import"./index-lnx8lKqn.js";import"./iframe-8WV2L6hH.js";import"./index-DJZ3_iYS.js";import"./index-BySu-MVC.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BiBMp58k.js";import"./ExpandMore-BWMeOleT.js";import"./identifier-DL_MWCt5.js";import"./createSvgIcon-DtmGrA-N.js";import"./generateUtilityClasses-BXdgOgaD.js";import"./useIsFocusVisible-CUUNsth7.js";import"./MosaicContext-Bd_KQqXt.js";import"./ButtonBase-CvKKHeWu.js";import"./FormFieldText.styled-C8FVpgqR.js";import"./styled-components.browser.esm-DqsT1pAc.js";import"./sizes-BcVUBVYw.js";import"./formControlState-DQjLAsCB.js";import"./useTooltip-DxGcUIuP.js";import"./useThemeWithoutDefault-DtYdwAl6.js";import"./Button-CNe7umd6.js";import"./index-BXfeNjdK.js";import"./Popover-BteNYKgc.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-BzZp6KFF.js";import"./containerQuery-BGTno4Nd.js";import"./ChevronLeft-vDd10AKU.js";import"./Typography-BDSgj_cw.js";import"./DisplayText-DNcU0R6O.js";import"./ButtonRow-BvtHToaG.js";import"./DataViewFilterDropdownButtons-rxxLPn9R.js";import"./StyledPopperPaper-DUCM88TM.js";import"./TooltipIcon-CIvFjYBP.js";import"./index-WeqoMoTB.js";import"./Chip-CbNdHOhT.js";import"./DataViewPrimaryFilter.styled-CBPEvKLp.js";import"./Badge-QaR-AhQl.js";import"./Text-6QT-9GAX.js";import"./PickerPanel-BfvGlJ8s.js";import"./PageHeader-nP7hDafL.js";import"./Spinner-9l6dePBI.js";import"./CheckboxList-6gebeIaX.js";import"./Checkbox-Bd_VDYHl.js";import"./SwitchBase-gKBphwxl.js";import"./StyledOptionFormControl-IcAt2LqD.js";import"./MoreVert-Dnd0CSMf.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CKhuYVYb.js";import"./Snackbar-C_CrhD95.js";import"./Close-R1hfxO-H.js";import"./ChipList-_8tC_zVn.js";import"./RadioButton-G3onKhzu.js";import"./Toggle-DL53UmwG.js";import"./Dialog-64i6eqDA.js";import"./ThemeProvider-D5DIG-lM.js";import"./SideNav-DjxcEScw.js";import"./CardHeading-CmuJXUee.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-DTJAru-v.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(o.h1,{id:"formfieldcode",children:"FormFieldCode"}),`
`,e.jsxs(o.p,{children:[e.jsx("strong",{children:"Field Type:"})," ",e.jsx(o.code,{children:"code"})]}),`
`,e.jsx(o.p,{children:"A form field component that provides a Monaco code editor for entering and editing code. Supports syntax highlighting, themes, and advanced Monaco editor features."}),`
`,e.jsx(o.p,{children:"This component wraps the Monaco editor with form field functionality, allowing it to be used within forms with validation, error handling, and standard field behavior."}),`
`,e.jsx(o.h2,{id:"input-settings",children:"Input Settings"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx",rel:"nofollow",children:"GitHub Link to Types"})}),`
`,e.jsx(i,{title:"theme"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:'"light" | "dark" | Monaco.editor.IStandaloneThemeData'})}),`
`,e.jsx(o.p,{children:'Visual theme for the Monaco editor. Can be "light", "dark", or a custom theme object. Determines the color scheme and styling of the code editor.'}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Default:"})," ",e.jsx(o.code,{children:'"light"'})]}),`
`,e.jsx(i,{title:"language"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:"string"})}),`
`,e.jsx(o.p,{children:'Programming language for syntax highlighting and IntelliSense support. Supports any language identifier recognized by Monaco editor (e.g., "javascript", "typescript", "html", "css", "json").'}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Examples:"})," ",e.jsx(o.code,{children:'"javascript"'})," | ",e.jsx(o.code,{children:'"typescript"'})," | ",e.jsx(o.code,{children:'"html"'})," | ",e.jsx(o.code,{children:'"css"'})," | ",e.jsx(o.code,{children:'"json"'})," | ",e.jsx(o.code,{children:'"markdown"'})]}),`
`,e.jsx(i,{title:"onMount"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:"(editor: Monaco.editor.IStandaloneCodeEditor, monaco: typeof Monaco) => void"})}),`
`,e.jsx(o.p,{children:"Callback function executed when the Monaco editor is mounted and ready. Provides access to the editor instance and Monaco API for advanced configuration."}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Parameters:"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"editor"})," - The Monaco editor instance"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"monaco"})," - The Monaco editor API"]}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Example:"})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-typescript",children:`onMount: (editor, monaco) => {
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
    console.log('Save shortcut pressed');
  });
}
`})}),`
`,e.jsx(i,{title:"monacoOptions"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:"Monaco.editor.IStandaloneEditorConstructionOptions"})}),`
`,e.jsx(o.p,{children:"Advanced Monaco editor configuration options. Allows fine-tuning of editor behavior, appearance, and features."}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Example:"})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-typescript",children:`monacoOptions: {
  fontSize: 16,
  lineNumbers: "on",
  wordWrap: "on",
  minimap: { enabled: false },
  scrollBeyondLastLine: false
}
`})}),`
`,e.jsx(i,{title:"autogrow"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:"boolean"})}),`
`,e.jsx(o.p,{children:"Enables automatic height adjustment based on content. When true, the editor will grow and shrink dynamically."}),`
`,e.jsx(i,{title:"minHeight"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:"number"})}),`
`,e.jsx(o.p,{children:"Minimum height in pixels for the autogrow editor. The editor will never shrink below this height."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Default:"})," ",e.jsx(o.code,{children:"100"})]}),`
`,e.jsx(i,{title:"maxHeight"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:"number"})}),`
`,e.jsx(o.p,{children:"Maximum height in pixels for the autogrow editor. The editor will never grow beyond this height and will show scrollbars if needed."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Default:"})," ",e.jsx(o.code,{children:"500"})]}),`
`,e.jsx(i,{title:"height"}),`
`,e.jsx(o.p,{children:e.jsx(o.code,{children:"number"})}),`
`,e.jsx(o.p,{children:"Fixed height in pixels for the editor. When autogrow is disabled, the editor will maintain this exact height."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Default:"})," ",e.jsx(o.code,{children:"300"})]}),`
`,e.jsx(o.h2,{id:"references",children:"References"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx#L45",rel:"nofollow",children:"CodeFieldInputSettings"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx#L113",rel:"nofollow",children:"MonacoCodeEditorProps"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx#L160",rel:"nofollow",children:"CodeFieldData"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://microsoft.github.io/monaco-editor/",rel:"nofollow",children:"Monaco Editor Documentation"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Field/FieldTypes.tsx",rel:"nofollow",children:"FieldDef Interface"})}),`
`]})]})}function be(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{be as default};
