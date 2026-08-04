import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-D24LeHLf.js";import{M as s}from"./index-XNJaMejj.js";import{s as d}from"./FormFieldCode.stories-CDiTCloE.js";import{H as i}from"./Header-B9FYF1_W.js";import"./index-wekxHvEx.js";import"./iframe-j2nx4NvQ.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./index-DHKTy8Oe.js";import"./MosaicContext-DJPbhtc9.js";import"./ButtonBase-CEIt18Mr.js";import"./identifier-Bq1wI7MV.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BVevyrl8.js";import"./useSlot-VZdH5auH.js";import"./TitleWrapper-G0h8wZmh.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./Button-CdzdKupF.js";import"./useId-69YouNVI.js";import"./CircularProgress-PxS61-je.js";import"./index-Zzm_Wx6F.js";import"./useTooltip-B7zXsQMX.js";import"./Popover-DT_DvNHq.js";import"./mergeSlotProps-BJLz0-OO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DQPkTHY5.js";import"./createSvgIcon-h9rIBQiG.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-D77Uk9vr.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-BmgFD-Us.js";import"./ExpandMore-BE6LXXJH.js";import"./Help-BcORB-TR.js";import"./Chip-BCe941lM.js";import"./Clear-u1SsJyJR.js";import"./FormFieldText.styled-yvYOpJcX.js";import"./formControlState-Qaq2QphE.js";import"./GlobalStyles-Ylo9bxXj.js";import"./useControlled-Mt41fVm8.js";import"./DataViewFilterDropdownButtons-CG0hq6Hh.js";import"./StyledPopperPaper-C4GIz6jS.js";import"./TooltipIcon-CPXCaul4.js";import"./DataViewPrimaryFilter.styled-CoIgiDUg.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-DMqhm_jY.js";import"./Add-SmKzKNaz.js";import"./PageHeader-CXRi2Lzn.js";import"./Spinner-pOddc5Fg.js";import"./CheckboxList-CRirri0N.js";import"./Checkbox-DBSudIqU.js";import"./SwitchBase-DgSlJAjj.js";import"./StyledOptionFormControl-GdCwvfsB.js";import"./FormGroup-BzWjA99g.js";import"./MoreVert-DegxOP5X.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DkHhhliA.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-CRBs-4if.js";import"./Close-C8qa5nrL.js";import"./ChipList-CKVS403F.js";import"./RadioGroup-BJ9uTRhE.js";import"./Toggle-BgAmXpG1.js";import"./Dialog-Da9Q9p0y.js";import"./ThemeProvider-Be_gFf1k.js";import"./Link-BKwfuJVQ.js";import"./CardHeading-Cfv9ll9K.js";import"./OpenInNew-GvVN9mBj.js";import"./Delete-VhiuMRtt.js";import"./Settings-pl1mUW38.js";import"./CloudDownload-DVh_jn78.js";import"./InsertDriveFile-DIzz3aBU.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(o.h1,{id:"formfieldcode",children:"FormFieldCode"}),`
`,e.jsxs(o.p,{children:[e.jsx("strong",{children:"Field Type:"})," ",e.jsx(o.code,{children:"code"})]}),`
`,e.jsx(o.p,{children:"A form field component that provides a Monaco code editor for entering and editing code. Supports syntax highlighting, themes, and advanced Monaco editor features."}),`
`,e.jsx(o.p,{children:"This component wraps the Monaco editor with form field functionality, allowing it to be used within forms with validation, error handling, and standard field behavior."}),`
`,e.jsx(o.h2,{id:"input-settings",children:"Input Settings"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/packages/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx",rel:"nofollow",children:"GitHub Link to Types"})}),`
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
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/packages/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx#L45",rel:"nofollow",children:"CodeFieldInputSettings"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/packages/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx#L113",rel:"nofollow",children:"MonacoCodeEditorProps"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/packages/mosaic/src/components/Field/FormFieldCode/FormFieldCodeTypes.tsx#L160",rel:"nofollow",children:"CodeFieldData"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://microsoft.github.io/monaco-editor/",rel:"nofollow",children:"Monaco Editor Documentation"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/packages/mosaic/src/components/Field/FieldTypes.tsx",rel:"nofollow",children:"FieldDef Interface"})}),`
`]})]})}function Pe(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Pe as default};
