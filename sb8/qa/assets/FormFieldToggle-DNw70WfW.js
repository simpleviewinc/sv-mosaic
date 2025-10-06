import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-BwDDMXeo.js";import{M as n}from"./index-ErwLhiuT.js";import{s}from"./FormFieldToggle.stories-CTNQXQXE.js";import"./index-D0AnReJb.js";import"./iframe-Dgo-5i4d.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index-B3jGg_If.js";import"./ExpandMore-Ca3pe8z0.js";import"./identifier-DOqdnZ6L.js";import"./sizes-DkIXWPpc.js";import"./createSvgIcon-DDyBApXB.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./ButtonBase-O4ZQd6U4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./MosaicContext-Y61KIvFP.js";import"./FormFieldText.styled-DQ22Tenv.js";import"./formControlState-BI4toe_X.js";import"./Popper-CeYJ7yNz.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./Button-Dlaq5vsb.js";import"./index-CYsLg4TE.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-D8cEbksV.js";import"./containerQuery-CYj0-5X2.js";import"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-DsoxFHT_.js";import"./DataViewFilterDropdownButtons-bgrEEUrv.js";import"./StyledPopperPaper-BODJ-ail.js";import"./index-Dmgma1UG.js";import"./Chip-16cSQUDZ.js";import"./DataViewPrimaryFilter.styled-Ej2pGgIE.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-BJ1qYTpx.js";import"./PageHeader-DTKSoW5K.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-DFjk1mlV.js";import"./Checkbox-Cg_T_WRa.js";import"./StyledOptionFormControl-Br1jmfxi.js";import"./MoreVert-BAJenQd7.js";import"./stable-BFc8HSVh.js";import"./throws-DLZ75Q5e.js";import"./formats-CMvQHWsT.js";import"./Snackbar-YB8AgySY.js";import"./Close-DizofMnI.js";import"./ClickAwayListener-Cp7Ry44a.js";import"./ChipList-Dk1_tgce.js";import"./RadioButton-DplP-WlB.js";import"./Toggle-BnqnqUHF.js";import"./Dialog-CJUzIf8Q.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-tVV9ac9c.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function Ft(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Ft as default};
