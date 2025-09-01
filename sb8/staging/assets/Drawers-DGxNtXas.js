import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as a,C as i}from"./index-oBrL2ch1.js";import{s,P as p}from"./Drawers.stories-yGHmj9IE.js";import"./index-D0AnReJb.js";import"./iframe-DMAu-UDr.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./Drawers-BCNqHcY1.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./sizes-DkIXWPpc.js";import"./testIds-oQNwr1rf.js";import"./throws-DLZ75Q5e.js";import"./identifier-DOqdnZ6L.js";import"./createSvgIcon-DDyBApXB.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./ButtonBase-O4ZQd6U4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./index-CYsLg4TE.js";import"./Popper-CeYJ7yNz.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-yDZ0j7Wx.js";import"./ExpandMore-Ca3pe8z0.js";import"./MosaicContext-Y61KIvFP.js";import"./FormFieldText.styled-e8Bs0syX.js";import"./formControlState-BI4toe_X.js";import"./Button-CyFYeSR6.js";import"./useToggle-CTbnrs6g.js";import"./TitleWrapper-DK3mQSoI.js";import"./containerQuery-CYj0-5X2.js";import"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-B33uQ4OQ.js";import"./DataViewFilterDropdownButtons-B-4fHIWu.js";import"./StyledPopperPaper-BODJ-ail.js";import"./index-DW-iQxit.js";import"./Chip-CuRU8A0j.js";import"./DataViewPrimaryFilter.styled-EiL82tvk.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-BjpwXlnw.js";import"./PageHeader-t08h7SxQ.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-Dtr7xjiR.js";import"./Checkbox-Be3Yhveb.js";import"./StyledOptionFormControl-Br1jmfxi.js";import"./MoreVert-BAJenQd7.js";import"./formats-CMvQHWsT.js";import"./Snackbar-BY140rqK.js";import"./Close-DizofMnI.js";import"./ClickAwayListener-Cp7Ry44a.js";import"./ChipList-DjriK11X.js";import"./stable-BFc8HSVh.js";import"./RadioButton-DplP-WlB.js";import"./Toggle-BL_WBRmO.js";import"./Dialog-zScg2qCO.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-CFjdJbjv.js";function n(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
`,t.jsx(i,{of:p})]})}function Ft(r={}){const{wrapper:e}={...o(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(n,{...r})}):n(r)}export{Ft as default};
