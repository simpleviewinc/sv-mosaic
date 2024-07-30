import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as r}from"./index-D7r7IB1o.js";import{s as l}from"./FormFieldNumberTable.stories-BfOueQEo.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./storyUtils-ByV2Bsyv.js";import"./formUtils-CdvCEz-F.js";import"./FormFieldText.styled-Drb9OlPH.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-D7cE6JL_.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-B8g-LEVf.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";function o(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(e.h1,{id:"number-table",children:"Number Table"}),`
`,t.jsxs(e.p,{children:["This field implements the ",t.jsx(e.a,{href:"#generic-field-props-fielddef",children:t.jsx(e.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"/?path=/story/formfields-formfieldnumbertable--playground",children:t.jsx(e.strong,{children:"Playground"})})}),`
`,t.jsxs(e.li,{children:["Data: ",t.jsx(e.code,{children:"object"})," - Object that has the row name as key and nested another object with the column name as key and the value corresponds to text field value.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"rowName: string"})," - ",t.jsx(e.code,{children:"object"})," - Row name is used as key identifier.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"columnName: string"})," - ",t.jsx(e.code,{children:"string"})," - Value of each text field cell."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(e.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(e.p,{children:[`| Name | Type | Default | Description |
| ---- | ---- | --------| ----------- |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"columns"})})," | ",t.jsx(e.code,{children:"{ name: string; title: string }[]"}),` | | Columns definition. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"columnTotalLabel"})})," | ",t.jsx(e.code,{children:"string"}),` | "Total" | optional - Default: "Total". Label shown on the column that displays the totals. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"displaySumColumn"})})," | ",t.jsx(e.code,{children:"boolean"})," | ",t.jsx(e.code,{children:"true"}),` | optional - Shows or hides the total sums of each column. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"displaySumRow"})})," | ",t.jsx(e.code,{children:"boolean"})," | ",t.jsx(e.code,{children:"true"}),` | optional - Shows or hides the total sums of each row. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"numberFormatOptions"})})," | ",t.jsx(e.code,{children:"Intl.NumberFormatOptions"}),` | | optional - Configuration options for the formatter, see more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"rows"})})," | ",t.jsx(e.code,{children:"{ name: string; title: string, subtitle?: string }[]"}),` | | Rows definition. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"rowTotalLabel"})})," | ",t.jsx(e.code,{children:"string"}),` | "Total" | optional - Label shown on the total row. |
| `,t.jsx(e.strong,{children:t.jsx(e.code,{children:"topLeftLabel"})})," | ",t.jsx(e.code,{children:"string"})," | |  optional - Label placed on the top left table corner i.e the first column. |"]}),`
`,t.jsx(e.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`const fields: FieldDef[] = useMemo(
	(): FieldDef[] =>
		[
			//...other fields
			{
				//...all generic field props
				type: "numberTable",
				defaultValue: {
					"2023_02_10": {
						single: "12",
						double: "13",
						queen: "14",
						king: "15",
						suite: "16",
						any: "17",
					},
					"2023_02_11": {
						single: "18",
						double: "19",
						queen: "20",
						king: "21",
						suite: "22",
						any: "23",
					},
					"2023_02_12": {
						single: "12",
						double: "13",
						queen: "14",
						king: "15",
						suite: "16",
						any: "20",
					},
					"2023_02_13": {
						single: "1",
						double: "1",
						queen: "1",
						king: "1",
						suite: "1",
						any: "1",
					},
				},
				inputSettings: {
					rowTotalLabel: "TOTAL",
					columnTotalLabel: "No. Rooms",
					topLeftLabel: "Day",
					rows: [
						{ name: "2023_02_10", title: "Shoulder Before" },
						{ name: "2023_02_11", title: "Day 1", subtitle: "February 11" },
						{ name: "2023_02_12", title: "Day 2" },
						{ name: "2023_02_13", title: "Day 3" },
					],
					columns: [
						{ name: "single", title: "Single" },
						{ name: "double", title: "Double" },
						{ name: "queen", title: "Queen" },
						{ name: "king", title: "King" },
						{ name: "suite", title: "Suite" },
						{ name: "any", title: "Any" },
					]
				},
			},
			//...other fields
		],
	[]
);
`})})]})}function wt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{wt as default};
