import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-ikABDTSQ.js";import{M as n}from"./index-C9a0Jk_9.js";import{s}from"./FormFieldToggle.stories-DuKrQQtj.js";import"./index-CDlOlYQx.js";import"./iframe-D5bs3z5S.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-CEvXTbTM.js";import"./MosaicContext-OO7tZJdO.js";import"./ButtonBase-CSsk5_gr.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BR9nxWVt.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-DJ3oxuZn.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-J6Kw363Y.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-aPK7NacD.js";import"./index-fPYtWVub.js";import"./useTooltip-Hifh6sld.js";import"./Popover-CfJhcp6M.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-BrbIZV1W.js";import"./createSvgIcon-BOHM49HM.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-y0O1VC79.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-CblYxRKp.js";import"./TooltipIcon-if6WdNgf.js";import"./DataViewFilterDropdownButtons-CBDNlFNO.js";import"./FormFieldText.styled-D7KmSwYO.js";import"./formControlState-CJTic6Sf.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DylK-kVm.js";import"./ExpandMore-D30LWCsE.js";import"./Chip-BvxPiOpy.js";import"./DataViewPrimaryFilter.styled-BC5S4hgN.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DnLdQwbM.js";import"./PageHeader-DIWebNsC.js";import"./Spinner-By1vTLAu.js";import"./CheckboxList-D9FFWuZY.js";import"./Checkbox-DXOuBkLC.js";import"./SwitchBase-BlAgGKJx.js";import"./StyledOptionFormControl-BaE74fbD.js";import"./FormGroup-DqpNDYHy.js";import"./MoreVert-BYQ12PEe.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-BkXc3b2-.js";import"./Snackbar-kq0Zn7SC.js";import"./Close-BouFTol8.js";import"./ChipList-BnPd1b7I.js";import"./RadioGroup-LpJpC3lq.js";import"./Toggle-Cchzb_ud.js";import"./Dialog-CB9M2CMQ.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-BGXzeqiu.js";import"./CardHeading-COwA42ZW.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(r.h1,{id:"toggle-switch",children:"Toggle Switch"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"Toggle Switch allow users to switch between two possible states. They are commonly used to turn a specific setting on or off"}),`
`,t.jsx(r.li,{children:"Toggles should be used to turn on or off a preference, notification, or feature"}),`
`,t.jsx(r.li,{children:"Should be used when an instant response is required/desired"}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/story/formfields-formfieldtoggle--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"boolean"})," - Defines whether the switch is checked or not."]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.table,{children:[t.jsx(r.thead,{children:t.jsxs(r.tr,{children:[t.jsx(r.th,{children:"Name"}),t.jsx(r.th,{children:"Type"}),t.jsx(r.th,{children:"Description"})]})}),t.jsx(r.tbody,{children:t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"toggleLabel"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"string"})}),t.jsx(r.td,{children:"optional - This label is placed at the right of the switch."})]})})]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`const fields: FieldDef[] = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props\r
				type: "toggle",\r
				inputSettings: {\r
					toggleLabel: "Toggle label"\r
				},\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function Tt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Tt as default};
