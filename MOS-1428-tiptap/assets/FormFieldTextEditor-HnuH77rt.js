import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as n}from"./index-D7r7IB1o.js";import{s}from"./FormFieldTextEditor.stories-g13V27Bw.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-CdvCEz-F.js";import"./FormFieldText.styled-Drb9OlPH.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-D7cE6JL_.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-B8g-LEVf.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";import"./storyUtils-ByV2Bsyv.js";function r(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(e.h2,{id:"text-editor",children:"Text Editor"}),`
`,t.jsxs(e.p,{children:["This field implements the ",t.jsx(e.a,{href:"#generic-field-props-fielddef",children:t.jsx(e.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The text editor is a text area with added capabilities for use in various publishers, allowing the users to format their input in a text area."}),`
`,t.jsxs(e.li,{children:["This implementation is based on the ",t.jsx(e.a,{href:"https://www.npmjs.com/package/jodit",rel:"nofollow",children:"Jodit WYSIWYG Editor"})," package."]}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"/?path=/story/formfields-formfieldtexteditor--playground",children:t.jsx(e.strong,{children:"Playground"})})}),`
`,t.jsxs(e.li,{children:["Data: ",t.jsx(e.code,{children:"string"})," - Value of the input typed."]}),`
`,t.jsx(e.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(e.p,{children:[`| Name | Type | Description |
| ---- | ---- | ----------- |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"direction"})})," | ",t.jsx(e.code,{children:'"rtl" | "ltr" | ""'}),` | optional - Defines the starting point at which the typed words will be displayed, "lrt" starts from the left moving to the right and "rlt" vice versa. Default is "rlt". |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"language"})})," | ",t.jsx(e.code,{children:"string"}),` | optional - Defines the language in which the assistive elements of the text editor will be displayed. For example the placeholder and the character and word counter. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"maxCharacters"})})," | ",t.jsx(e.code,{children:"number"}),` | optional - Defines the limit of characters that are allow to type in the input element. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"spellcheck"})})," | ",t.jsx(e.code,{children:"boolean"})," | optional - If it's enabled the text editor will mark misspellings. |"]}),`
`,t.jsx(e.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`const fields: FieldDef[] = useMemo(
	() =>
		[
			//...other fields
			{
				//...all generic field props
				type: "textEditor",
				inputSettings: {
					spellcheck: true,
					direction: "rlt",
					language: "en",
					maxCharacters: 20,
				},
			},
			//...other fields
		],
	[]
);
`})})]})}function Dt(i={}){const{wrapper:e}={...o(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(r,{...i})}):r(i)}export{Dt as default};