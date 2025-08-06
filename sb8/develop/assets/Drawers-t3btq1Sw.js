import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as a,C as i}from"./index-rQXuHiXv.js";import{s,P as p}from"./Drawers.stories-aJ5Vv8-7.js";import"./index-D0AnReJb.js";import"./iframe-DqPE_PUQ.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./Drawers-B2HL_ePF.js";import"./styled-components.browser.esm-C5LJ_neh.js";import"./sizes-_ON_TzAH.js";import"./testIds-DLbO0bd9.js";import"./toNumber-CqnDHfZM.js";import"./identifier-Bktyv6O_.js";import"./createSvgIcon-D5aI0OD-.js";import"./createSvgIcon-C735tyhT.js";import"./generateUtilityClasses-D4jmUuEZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./index-R4Jqw3Tw.js";import"./Popper-D9JYON0d.js";import"./useTheme-DTBsETmh.js";import"./useThemeWithoutDefault-CsQox1c5.js";import"./index-XS4bmHCM.js";import"./ExpandMore-Dl7LJMh2.js";import"./useMosaicTranslation-di9nduwf.js";import"./TitleWrapper-BbWupsUF.js";import"./Button-BOlAo_yO.js";import"./ButtonBase-CyOgbtoj.js";import"./Popover-DMfUH9d_.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-Byjr_VO4.js";import"./Typography-DBsSg8HG.js";import"./DisplayText-Ip6DAA4t.js";import"./ButtonRow-Dil46hZf.js";import"./DataViewFilterDropdownButtons-Bd_5anyu.js";import"./StyledPopperPaper-BxcX73gl.js";import"./index-DYyO2Iln.js";import"./Chip-D4exI_Oq.js";import"./DataViewPrimaryFilter.styled-ChQqXjcm.js";import"./Badge.styled-qjrvmt6O.js";import"./Text-ChOjGkiI.js";import"./PickerPanel-tAAYph5M.js";import"./PageHeader-t6Ly6_Ob.js";import"./FormFieldText.styled-DouhbL_d.js";import"./formControlState-BI4toe_X.js";import"./Spinner-m5_IcvNq.js";import"./CheckboxList-B7SbK3Ha.js";import"./Checkbox-SBjhRN_S.js";import"./StyledOptionFormControl-Cwl0Q2GB.js";import"./MoreVert-DKRvdU6X.js";import"./formats-CMvQHWsT.js";import"./Snackbar-at35UkfL.js";import"./Close-DkzKxLx5.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-zisjpXtz.js";import"./RadioButton-DJt--7LN.js";import"./Toggle-BsX429Os.js";import"./Dialog-BQccgbOq.js";import"./ThemeProvider-DAuzgAUw.js";import"./SideNav-BYUaKA9k.js";function n(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
