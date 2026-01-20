import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-CrRX5TgX.js";import{M as a,C as i}from"./index-Dx5T63TV.js";import{s,P as p}from"./Drawers.stories-DC8VpcDk.js";import"./index-lnx8lKqn.js";import"./iframe-8WV2L6hH.js";import"./index-DJZ3_iYS.js";import"./index-BySu-MVC.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./Drawers-P3tMJupb.js";import"./styled-components.browser.esm-DqsT1pAc.js";import"./testIds-B6Pox1zA.js";import"./scrollbarStyles-CKhuYVYb.js";import"./identifier-DL_MWCt5.js";import"./createSvgIcon-DtmGrA-N.js";import"./generateUtilityClasses-BXdgOgaD.js";import"./useIsFocusVisible-CUUNsth7.js";import"./index-BXfeNjdK.js";import"./Popover-BteNYKgc.js";import"./useTooltip-DxGcUIuP.js";import"./useThemeWithoutDefault-DtYdwAl6.js";import"./sizes-BcVUBVYw.js";import"./ButtonBase-CvKKHeWu.js";import"./index-BiBMp58k.js";import"./ExpandMore-BWMeOleT.js";import"./MosaicContext-Bd_KQqXt.js";import"./FormFieldText.styled-C8FVpgqR.js";import"./formControlState-DQjLAsCB.js";import"./Button-CNe7umd6.js";import"./TitleWrapper-BzZp6KFF.js";import"./containerQuery-BGTno4Nd.js";import"./ChevronLeft-vDd10AKU.js";import"./Typography-BDSgj_cw.js";import"./DisplayText-DNcU0R6O.js";import"./ButtonRow-BvtHToaG.js";import"./DataViewFilterDropdownButtons-rxxLPn9R.js";import"./StyledPopperPaper-DUCM88TM.js";import"./TooltipIcon-CIvFjYBP.js";import"./index-WeqoMoTB.js";import"./Chip-CbNdHOhT.js";import"./DataViewPrimaryFilter.styled-CBPEvKLp.js";import"./Badge-QaR-AhQl.js";import"./Text-6QT-9GAX.js";import"./PickerPanel-BfvGlJ8s.js";import"./PageHeader-nP7hDafL.js";import"./Spinner-9l6dePBI.js";import"./CheckboxList-6gebeIaX.js";import"./Checkbox-Bd_VDYHl.js";import"./SwitchBase-gKBphwxl.js";import"./StyledOptionFormControl-IcAt2LqD.js";import"./MoreVert-Dnd0CSMf.js";import"./stable-BFc8HSVh.js";import"./Snackbar-C_CrhD95.js";import"./Close-R1hfxO-H.js";import"./ChipList-_8tC_zVn.js";import"./RadioButton-G3onKhzu.js";import"./Toggle-DL53UmwG.js";import"./Dialog-64i6eqDA.js";import"./ThemeProvider-D5DIG-lM.js";import"./SideNav-DjxcEScw.js";import"./CardHeading-CmuJXUee.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
`,t.jsx(i,{of:p})]})}function xt(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{xt as default};
