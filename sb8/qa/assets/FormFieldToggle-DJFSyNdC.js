import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-ikABDTSQ.js";import{M as n}from"./index-CPcaDsjj.js";import{s}from"./FormFieldToggle.stories-DTpKIcfq.js";import"./index-CDlOlYQx.js";import"./iframe-utr8fMw4.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-CLN1Uqsu.js";import"./MosaicContext-Ckn3SYVO.js";import"./ButtonBase-BTOUCkJL.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-CQDqkEyb.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-D9Xlm0gk.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-DiGzPWWk.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-DnZWjXCP.js";import"./index-fPYtWVub.js";import"./Popover-BARbcQa_.js";import"./useTooltip-CvILwQ8N.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-ef-3r2ji.js";import"./createSvgIcon-CpiYeT0y.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-Cf2fXVyQ.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import"./DataViewFilterDropdownButtons-DxJf3FQF.js";import"./FormFieldText.styled-CRryNLjj.js";import"./formControlState-VojGIu4f.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DJjmFJak.js";import"./ExpandMore-C3mveD_C.js";import"./Chip-BzCeYly-.js";import"./DataViewPrimaryFilter.styled-64dlO4D8.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DAZkKGvP.js";import"./PageHeader-CVwaxNeh.js";import"./Spinner-Dd-oad_B.js";import"./CheckboxList-BlEbFa5n.js";import"./Checkbox-65JO9dLp.js";import"./SwitchBase-Cr0Iw5cH.js";import"./StyledOptionFormControl-DVa9h7YW.js";import"./MoreVert-BuMRkz_g.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DAQJW3QI.js";import"./Snackbar-Bo2ZVk08.js";import"./Close-Dcayhvfb.js";import"./ChipList-DMumVwBB.js";import"./RadioButton-CsJnPFmg.js";import"./Toggle-DXGG91mo.js";import"./Dialog-DXGYH3lr.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-0jIe1PLd.js";import"./CardHeading-c7RPWGjr.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function e(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function Dt(i={}){const{wrapper:r}={...o(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(e,{...i})}):e(i)}export{Dt as default};
