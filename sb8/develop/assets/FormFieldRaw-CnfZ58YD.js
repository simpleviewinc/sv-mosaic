import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-ikABDTSQ.js";import{M as n}from"./index-DOMYcYOq.js";import{s as p}from"./FormFieldRaw.stories-CwyDf7qe.js";import"./index-CDlOlYQx.js";import"./iframe-DNXRYBuz.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-Cbu7rhRc.js";import"./emotion-unitless.esm-x5IvBceT.js";import"./index-DyICFbCr.js";import"./MosaicContext-OO7tZJdO.js";import"./ButtonBase-CSsk5_gr.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BR9nxWVt.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-DJ3oxuZn.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-J6Kw363Y.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-aPK7NacD.js";import"./index-fPYtWVub.js";import"./useTooltip-Hifh6sld.js";import"./Popover-CfJhcp6M.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-BrbIZV1W.js";import"./createSvgIcon-BOHM49HM.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-y0O1VC79.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-CblYxRKp.js";import"./TooltipIcon-if6WdNgf.js";import"./DataViewFilterDropdownButtons-CBDNlFNO.js";import"./FormFieldText.styled-D7KmSwYO.js";import"./formControlState-CJTic6Sf.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DylK-kVm.js";import"./ExpandMore-D30LWCsE.js";import"./Chip-BvxPiOpy.js";import"./DataViewPrimaryFilter.styled-BC5S4hgN.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DnLdQwbM.js";import"./PageHeader-DIWebNsC.js";import"./Spinner-By1vTLAu.js";import"./CheckboxList-D9FFWuZY.js";import"./Checkbox-DXOuBkLC.js";import"./SwitchBase-BlAgGKJx.js";import"./StyledOptionFormControl-BaE74fbD.js";import"./FormGroup-DqpNDYHy.js";import"./MoreVert-BYQ12PEe.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-BkXc3b2-.js";import"./Snackbar-kq0Zn7SC.js";import"./Close-BouFTol8.js";import"./ChipList-BnPd1b7I.js";import"./RadioGroup-LpJpC3lq.js";import"./Toggle-Cchzb_ud.js";import"./Dialog-CB9M2CMQ.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-BGXzeqiu.js";import"./CardHeading-COwA42ZW.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
`,t.jsx(r.h1,{id:"raw",children:"Raw"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.p,{children:["This type of field will render the corresponding ",t.jsx(r.code,{children:"value"})," as-is. It can be used to render anything that is a valid ",t.jsx(r.code,{children:"ReactNode"})," while maintaining the normal field display behaviour, like the label and field hint. It has no ",t.jsx(r.code,{children:"inputSettings"}),"."]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`\r
function RawValue() {\r
	return (\r
		<RawValueWrapper>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
		</RawValueWrapper>\r
	)\r
}\r
\r
async function getFormValues() {\r
	return {\r
		raw: <RawValue />\r
	}\r
}\r
\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "raw",\r
			},\r
			//...other fields\r
		],\r
	[]\r
);\r

`})})]})}function bt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{bt as default};
