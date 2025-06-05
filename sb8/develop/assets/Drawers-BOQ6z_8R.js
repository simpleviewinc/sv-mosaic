import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as a,C as i}from"./index-BrA4WBwa.js";import{s,P as p}from"./Drawers.stories-DZXczlWL.js";import"./index-D0AnReJb.js";import"./iframe-CxkyZTOH.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./Drawers-CuiQUxnf.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./ChevronRight-C-yhpJTc.js";import"./DefaultPropsProvider-BwNoCFE_.js";import"./createSvgIcon-Bdc0w2F6.js";import"./createSvgIcon-CmcFkBiI.js";import"./generateUtilityClasses-42_at76R.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./index-CtiN8CS7.js";import"./Popper-BpP7Dmyd.js";import"./useTheme-Dt0_M2VT.js";import"./useThemeWithoutDefault-ML7LN7QY.js";import"./index-Ck7Dwj54.js";import"./TitleWrapper-ePYozolN.js";import"./Button-mgz2aTYm.js";import"./ButtonBase-EThHB291.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./Typography-DKFSDQw0.js";import"./DisplayText-CNJUHUbG.js";import"./ButtonRow-gAFOvWL6.js";import"./index-mtgrroPn.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-B6PsGsAS.js";import"./Chip-BiF3n3mk.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CpwAbK4m.js";import"./formControlState-DKt-4xzo.js";import"./Spinner-BIub0DbD.js";import"./Text-9y4gMspU.js";import"./CheckboxList-BXiGiY-c.js";import"./Checkbox-CABnih5k.js";import"./FormControlLabel-FaPuCwUU.js";import"./MoreVert-BxoNaVuW.js";import"./PageHeader-u9qr2_b1.js";import"./formats-CMvQHWsT.js";import"./RadioButton-peGC_BMl.js";import"./StyledFormControl.styled-CW3JaFWW.js";import"./Toggle-IqG9sXDk.js";import"./Dialog-BFp4KNLR.js";import"./ThemeProvider-CyphNCQQ.js";import"./ChipList-D5NUhJyC.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-DXnnQTTm.js";import"./Close-CGtmtFuS.js";import"./ClickAwayListener-Dkkr5f_-.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
`,t.jsx(i,{of:p})]})}function Ct(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ct as default};
