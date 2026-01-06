import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as t}from"./index-rC_Sa5AQ.js";import{M as s}from"./index-BhAspods.js";import{s as d}from"./FormFieldCode.stories-B_s_iXOm.js";import{H as i}from"./Header-B0FinxkC.js";import"./index-BcWw8SPZ.js";import"./iframe-CeJuD3GR.js";import"../sb-preview/runtime.js";import"./index-CcJIGMye.js";import"./index-lsJDjLAm.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-u0MeWzco.js";import"./_baseForOwn-izJd5_f8.js";import"./index-COuoH38x.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index-DmNM1quz.js";import"./ExpandMore-DZ5qJANw.js";import"./identifier-vCS-QwDM.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-CFpEEiA8.js";import"./generateUtilityClasses-DxEc1O3f.js";import"./styled-components.browser.esm-iTa7G-AD.js";import"./useIsFocusVisible-BiDRLN3G.js";import"./MosaicContext-CR3sZt-k.js";import"./ButtonBase-C5IHe1v7.js";import"./FormFieldText.styled-ClVDR1L1.js";import"./formControlState-DBjLczXb.js";import"./useTooltip-Ca_MnstU.js";import"./useThemeWithoutDefault-DcDKfq8w.js";import"./Button-Ux1FJEQf.js";import"./index-BFOXBPPy.js";import"./Popover-BsgnjFRv.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-C-T-4XdU.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-deJoC413.js";import"./Typography-B-r-8hBf.js";import"./DisplayText-iy3WLqbC.js";import"./ButtonRow-BGTnrp5G.js";import"./DataViewFilterDropdownButtons-DOEmfG0b.js";import"./StyledPopperPaper-CxUbRyvr.js";import"./TooltipIcon-IdakTMWj.js";import"./index-DUEwBlnx.js";import"./Chip-CtO-XFaP.js";import"./DataViewPrimaryFilter.styled-CmyjWjxc.js";import"./Badge-BN0BUUeW.js";import"./Text-C3Iu2YK-.js";import"./PickerPanel-CWMNNA3e.js";import"./PageHeader-CPZg_1sR.js";import"./Spinner-D5EjUoUF.js";import"./CheckboxList-CrF4bjy0.js";import"./Checkbox-CratNqxV.js";import"./SwitchBase-CO7VNkpO.js";import"./StyledOptionFormControl-Bv1fp9pz.js";import"./MoreVert-rBkgd4TI.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DNVBgAUm.js";import"./Snackbar-ComNH1Eo.js";import"./Close-1U0VQJju.js";import"./ChipList-T_9FOMMC.js";import"./RadioButton-D50tCzor.js";import"./Toggle-wemzBvjs.js";import"./Dialog-nLsrSr--.js";import"./ThemeProvider-ke4tQo0r.js";import"./SideNav-DpcKnBv8.js";import"./CardHeading-DgwLSOU_.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm--MXELgCX.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
`]})]})}function Se(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Se as default};
