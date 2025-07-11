import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as a,C as i}from"./index-COU5Pb8J.js";import{s,P as p}from"./Drawers.stories-LBIviMRL.js";import"./index-D0AnReJb.js";import"./iframe-BUx95od4.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./Drawers-B_zhpXQw.js";import"./styled-components.browser.esm-EkLDtEIi.js";import"./sizes-o2d97SRj.js";import"./testIds-BKutUmNQ.js";import"./toNumber-CI4rbyKs.js";import"./identifier-cQ2cb48K.js";import"./createSvgIcon-ZSxe0E8n.js";import"./createSvgIcon-BqayHko4.js";import"./generateUtilityClasses-B-SuhQrp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./index-CUzMHGlt.js";import"./Popper-C-qQSfSD.js";import"./useTheme-EO1q8T9A.js";import"./useThemeWithoutDefault-D4M89WpM.js";import"./index-k1Pd4Kly.js";import"./TitleWrapper-C8W2yeY-.js";import"./Button-CIsIgYW9.js";import"./ButtonBase-D9-8PPWk.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-umnB1liH.js";import"./Typography-Csn3cM8V.js";import"./DisplayText-DsKn3JO_.js";import"./ButtonRow-bA1_CZ2a.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdownButtons-BoxlsZi1.js";import"./index-C8Iw7yj0.js";import"./ExpandMore-7WC6Jukx.js";import"./Chip-6PxD25oI.js";import"./PickerPanel-PEccAPwF.js";import"./PageHeader-PjPXuI9q.js";import"./Text-4ZxjQQL-.js";import"./FormFieldText.styled-Cyn0xN8Z.js";import"./formControlState-CbpNtXrp.js";import"./Spinner-CI5raFHi.js";import"./CheckboxList-DCB3WPmf.js";import"./Checkbox-CPU_Yyhi.js";import"./FormControlLabel-9JumqQgw.js";import"./DataViewPrimaryFilter.styled-5W5JcB5Q.js";import"./MoreVert-CRDnLPP8.js";import"./formats-CMvQHWsT.js";import"./Snackbar-D4MO-uDR.js";import"./Close-bfO5ceNT.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./ChipList-BGF-Et87.js";import"./RadioButton-CWZM88eJ.js";import"./StyledFormControl.styled-50iZRKTb.js";import"./Toggle-DxNmnByB.js";import"./Dialog-CV_57Jxn.js";import"./ThemeProvider-DHi8PP6S.js";import"./SideNav-CKFQrzl9.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
`,t.jsx(e.h1,{id:"drawers",children:"Drawers"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"Drawers"})," component is wrapper that generates several ",t.jsx(e.a,{href:"https://mui.com/material-ui/react-drawer/#main-content",rel:"nofollow",children:"Material-UI Drawers"})," but with SimpleView brand colors."]}),`
`,t.jsx(e.p,{children:`The component does not provide a mechanism for navigating between drawers, it only helps stacking one on top of another.
All the navgitation mechanism should be defined on the parent app creating the Drawers component.`}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"While animating, the UI is locked to prevent race conditions with opening/closing new drawers."}),`
`,t.jsx(e.li,{children:"Can open infinite amount of stacked drawers."}),`
`,t.jsx(e.li,{children:"When a drawer is opened, the opener passes callbacks to it to execute when save() is clicked."}),`
`,t.jsx(e.li,{children:"Animations custom built via keyframes rather than using material-ui drawer defaults to handle stacking cleanly."}),`
`,t.jsx(e.li,{children:"App passes to Drawers a JSON Def for each drawer and passes a render prop. This separates the concerns of animating and displaying the drawer (Mosaic) from rendering the content of the drawer (App)."}),`
`]}),`
`,t.jsx(e.h2,{id:"props",children:"Props"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Drawers/DrawersTypes.ts",rel:"nofollow",children:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Drawers/DrawersTypes.ts"})}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`const App = (props) => {
	const [state, setState] = useState<AppState>({
		content: {},
		drawers: [],
	});

	const addDrawer = useCallback((drawerDef: DrawerDef) => {
		setState((state) => ({
			...state,
			drawers: [...state.drawers, drawerDef],
		}));
	}, []);

	const removeDrawer = useCallback(() => {
		setState((state) => ({
			...state,
			drawers: [...state.drawers.slice(0, -1)],
		}));
	}, []);

	const appContext = useMemo(
		() => ({
			addDrawer,
			removeDrawer,
		}),
		[addDrawer, removeDrawer]
	);

	return (
		<AppContext.Provider value={appContext}>
			<div className="App">
				<h1>Drawer Demo</h1>
				<p>From Form: {JSON.stringify(state.content)}</p>
				<button
					onClick={() =>
						addDrawer({
							config: {
								type: "form",
								title: "New Form",
								fields: [
									{
										name: "foo",
										label: "Foo",
										type: "text",
									},
									{
										name: "bar",
										label: "Bar",
										type: "text",
									},
									{
										name: "baz",
										label: "Baz",
										type: "text",
									},
									{
										name: "from_parent",
										label: "From Parent",
										type: "text",
									},
								],
							},
							callbacks: {
								save: (data) => {
									setState((state) => ({
										...state,
										content: data,
									}));

									removeDrawer();
								},
							},
						})
					}
				>
					Add Form
				</button>

				<Drawers drawers={state.drawers}>
					{(drawerDef) => {
						return (
							<Page
								config={drawerDef.config}
								callbacks={drawerDef.callbacks ?? {}}
							/>
						);
					}}
				</Drawers>
			</div>
		</AppContext.Provider>
	);
}
`})}),`
`,t.jsx(i,{of:p})]})}function Mt(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{Mt as default};
