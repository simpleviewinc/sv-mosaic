import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as a,C as i}from"./index-CkXu9rkX.js";import{s,P as p}from"./Drawers.stories-Ct3miUG5.js";import"./index-D0AnReJb.js";import"./iframe-DGct4XX1.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./Drawers-DqNB1Lio.js";import"./styled-components.browser.esm-C5LJ_neh.js";import"./sizes-_ON_TzAH.js";import"./testIds-BKXNnpj0.js";import"./toNumber-DqzDMBhJ.js";import"./identifier-Bktyv6O_.js";import"./createSvgIcon-D5aI0OD-.js";import"./createSvgIcon-C735tyhT.js";import"./generateUtilityClasses-D4jmUuEZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./index-R4Jqw3Tw.js";import"./Popper-B65p2oiP.js";import"./useTheme-DTBsETmh.js";import"./useThemeWithoutDefault-CsQox1c5.js";import"./index-CNkl0l2T.js";import"./TitleWrapper-BiC1Wb-5.js";import"./Button-D5Mq00Ds.js";import"./ButtonBase-CyOgbtoj.js";import"./Popover-B_lFWVkj.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-Byjr_VO4.js";import"./Typography-DBsSg8HG.js";import"./DisplayText-Ip6DAA4t.js";import"./ButtonRow-Daljk49C.js";import"./useMosaicTranslation-di9nduwf.js";import"./DataViewFilterDropdownButtons-B_FGX-fS.js";import"./index-D77a6n9L.js";import"./ExpandMore-Dl7LJMh2.js";import"./Chip-DNwtmRHZ.js";import"./CheckboxList-DDeK_q7o.js";import"./Checkbox-_0JQhlIl.js";import"./StyledOptionFormControl-Cwl0Q2GB.js";import"./formControlState-BI4toe_X.js";import"./Text-ChOjGkiI.js";import"./DataViewPrimaryFilter.styled-BORqmM8y.js";import"./PickerPanel-DZf3nPrH.js";import"./PageHeader-DbhT7nzS.js";import"./FormFieldText.styled-CJUQilOD.js";import"./Spinner-m5_IcvNq.js";import"./MoreVert-DKRvdU6X.js";import"./formats-CMvQHWsT.js";import"./Snackbar-DaK7yvE3.js";import"./Close-DkzKxLx5.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-BAGapJVE.js";import"./RadioButton-DJt--7LN.js";import"./Toggle-DNhIGYb9.js";import"./Dialog-DofFNcAh.js";import"./ThemeProvider-DAuzgAUw.js";import"./SideNav-BYUaKA9k.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
