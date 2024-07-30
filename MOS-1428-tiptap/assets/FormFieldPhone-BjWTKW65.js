import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as n}from"./index-D7r7IB1o.js";import{s as p}from"./FormFieldPhone.stories-ge6HCXZZ.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-CdvCEz-F.js";import"./FormFieldText.styled-Drb9OlPH.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-D7cE6JL_.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-B8g-LEVf.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";import"./storyUtils-ByV2Bsyv.js";function e(r){const o={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
`,t.jsx(o.h1,{id:"phone-selection-dropdown",children:"Phone Selection Dropdown"}),`
`,t.jsxs(o.p,{children:["This field implements the ",t.jsx(o.a,{href:"#generic-field-props-fielddef",children:t.jsx(o.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:[t.jsx(o.code,{children:"FormFieldPhone"})," component is built over ",t.jsx(o.a,{href:"https://www.npmjs.com/package/react-phone-input-2",rel:"nofollow",children:"React-Phone-Input-2"})," but with SimpleView brand colors. The phone selection dropdown is useful when you want to allow users to enter the information of phone numbers, is conformed with the selection of the country in the dropdown that contains the country flag, and automatically the prefix and number or characters placeholder are showed."]}),`
`,t.jsx(o.li,{children:t.jsx(o.a,{href:"/?path=/docs/formfields-formfieldphone--playground",children:t.jsx(o.strong,{children:"Playground"})})}),`
`,t.jsxs(o.li,{children:["Data: ",t.jsx(o.code,{children:"string"})," - String of the selected options"]}),`
`,t.jsx(o.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(o.p,{children:[`| Name | Type | Description |\r
| ---- | ---- | ----------- |\r
| `,t.jsx(o.strong,{children:t.jsx(o.code,{children:"autoFormat"})})," | ",t.jsx(o.code,{children:"boolean"}),` | Optional - Phone formatting according to the country selected. |\r
| `,t.jsx(o.strong,{children:t.jsx(o.code,{children:"country"})})," | ",t.jsx(o.code,{children:"string"}),` | Optional - Initial country. It must be a country code (e.g., us, mx, etc.). |\r
| `,t.jsx(o.strong,{children:t.jsx(o.code,{children:"value"})})," | ",t.jsx(o.code,{children:"string"})," | Optional - Input state value. |"]}),`
`,t.jsx(o.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-ts",children:`const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "phone",\r
				inputSettings: {\r
					autoFormat: false,\r
					country: "mx",\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function bt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{bt as default};
