import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-ikABDTSQ.js";import{M as a,C as i}from"./index-CPcaDsjj.js";import{s,P as p}from"./Drawers.stories-DStSoOe6.js";import"./index-CDlOlYQx.js";import"./iframe-utr8fMw4.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./Drawers-DcridpFy.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./sizes-BeWafy6f.js";import"./testIds-B6Pox1zA.js";import"./scrollbarStyles-DAQJW3QI.js";import"./createSvgIcon-CpiYeT0y.js";import"./identifier-D-VlK421.js";import"./createSimplePaletteValueFilter-CQDqkEyb.js";import"./index-fPYtWVub.js";import"./Popover-BARbcQa_.js";import"./useSlot-BF1fWNxP.js";import"./useTooltip-CvILwQ8N.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./ButtonBase-BTOUCkJL.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-CLN1Uqsu.js";import"./MosaicContext-Ckn3SYVO.js";import"./TitleWrapper-D9Xlm0gk.js";import"./Button-DiGzPWWk.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-DnZWjXCP.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-ef-3r2ji.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-Cf2fXVyQ.js";import"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import"./DataViewFilterDropdownButtons-DxJf3FQF.js";import"./FormFieldText.styled-CRryNLjj.js";import"./formControlState-VojGIu4f.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DJjmFJak.js";import"./ExpandMore-C3mveD_C.js";import"./Chip-BzCeYly-.js";import"./DataViewPrimaryFilter.styled-64dlO4D8.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DAZkKGvP.js";import"./PageHeader-CVwaxNeh.js";import"./Spinner-Dd-oad_B.js";import"./CheckboxList-BlEbFa5n.js";import"./Checkbox-65JO9dLp.js";import"./SwitchBase-Cr0Iw5cH.js";import"./StyledOptionFormControl-DVa9h7YW.js";import"./MoreVert-BuMRkz_g.js";import"./stable-BFc8HSVh.js";import"./Snackbar-Bo2ZVk08.js";import"./Close-Dcayhvfb.js";import"./ChipList-DMumVwBB.js";import"./RadioButton-CsJnPFmg.js";import"./Toggle-DXGG91mo.js";import"./Dialog-DXGYH3lr.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-0jIe1PLd.js";import"./CardHeading-c7RPWGjr.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
`,t.jsx(i,{of:p})]})}function yt(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{yt as default};
