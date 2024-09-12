import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import{M as n}from"./index-Ca5BFgrT.js";import{s}from"./FormFieldRadio.stories-CR9M2PmZ.js";import"./index-BP8_t0zE.js";import"./iframe-DPZ10EKH.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./storyUtils-BoiXCagy.js";import"./formUtils-C1HgQFML.js";import"./FormFieldText.styled-B_lPWMo9.js";import"./theme-Cyujm90X.js";import"./Button-Cm1Qf39l.js";import"./generateUtilityClasses-CplxKB4o.js";import"./ButtonBase-Btj-nnLi.js";import"./useIsFocusVisible-De2ftVE9.js";import"./Popper-CA50KEz-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-vMmOGwbU.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-DBogRtpm.js";import"./CheckboxList-nF3GDUWX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-CJgaGoMX.js";import"./FormControlLabel-2HxiQW27.js";import"./getThemeProps-CBTZRUO9.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CN3zPhHZ.js";import"./ButtonRow-Dfei1Wea.js";import"./Spinner-fkz2uue8.js";import"./Chip-By8My2oo.js";import"./Typography-BXo9fTd2.js";import"./SubtitleText-BK7UxBzP.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BChaCK1f.js";import"./StyledFormControl.styled-CNZVAVRt.js";import"./Toggle-SryGtWz_.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CMT4OGgY.js";import"./TitleWrapper-BnUyvD-V.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-SU3bZ5Lh.js";import"./MoreVert-CHB9Iy9y.js";import"./ChevronRight-Bc3jAIO-.js";import"./PageHeader-B-ax13VL.js";import"./MenuSelect-CGpLowyH.js";import"./formats-CDjt32hU.js";import"./Dialog-bxyBhLRk.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-BrsNz3mT.js";import"./Snackbar-Ba6pD4j8.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";import"./Blank-D-yfChNi.js";import"./getOptions-C4BmREwQ.js";import"./advancedSelectionUtils-Dc6CTSWK.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(r.h1,{id:"radio",children:"Radio"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"A group of radio buttons allows users to select a single item from a list of possible options."}),`
`,t.jsx(r.li,{children:"All possible options are exposed up front for comparison."}),`
`,t.jsx(r.li,{children:"Users can only make a single selection from the list of possible options."}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/story/formfields-formfieldradio--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"string"})," - Value of the selected option."]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.table,{children:[t.jsx(r.thead,{children:t.jsxs(r.tr,{children:[t.jsx(r.th,{children:"Name"}),t.jsx(r.th,{children:"Type"}),t.jsx(r.th,{children:"Description"})]})}),t.jsxs(r.tbody,{children:[t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"options"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"MosaicLabelValue[]"})}),t.jsx(r.td,{children:"required - Predefined set of mutually exclusive options."})]}),t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"getOptions"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"() => Promise<MosaicLabelValue[]>"})}),t.jsx(r.td,{children:"required - Function to get a set of options. This prop only applies when getting options from a DB."})]})]})]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`//Option recommended when getting options locally.\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "radio",\r
				inputSettings: {\r
					options: [\r
						{\r
							label: "Label 1",\r
							value: "label_1",\r
						},\r
						{\r
							label: "Label 2",\r
							value: "label_2",\r
						},\r
						{\r
							label: "Label 3",\r
							value: "label_3",\r
						},\r
					],\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);\r
\r
//Option recommended when getting options from a database.\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "radio",\r
				inputSettings: {\r
					getOptions: myGetOptionsFn,\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function Lt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Lt as default};
