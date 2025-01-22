import{j as t}from"./jsx-runtime-DKBipoO1.js";import{useMDXComponents as o}from"./index-DIpYW6hh.js";import{M as a,C as i}from"./index-b_IcY7Xr.js";import{s,P as p}from"./Drawers.stories-CwJcqHT7.js";import"./index-P8U4y8pz.js";import"./iframe-k0_n0HJp.js";import"./index-DEBaATwO.js";import"./index-CFV30bQv.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Drawers-CshoXEIe.js";import"./theme-BWODkkBA.js";import"./testIds-DZf96GK8.js";import"./ChevronRight-CLpIxDpq.js";import"./generateUtilityClasses-1sHYEbWh.js";import"./createSvgIcon-DFewkeLR.js";import"./createSvgIcon-RC5eQ6Qp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-wVqIivVs.js";import"./useId-BCEQtGZU.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-DD4Xjs9b.js";import"./Popper-Cd5SEDCW.js";import"./useTheme-C71PTKbl.js";import"./Form-B7eOweAp.js";import"./SideNav-xke3DMVF.js";import"./containerQuery-DJgF-qoV.js";import"./useToggle-L-Qovzra.js";import"./ColorSelected-CjDfVzXw.js";import"./index-Codu9OSz.js";import"./debounce-Z6vH9m7G.js";import"./DataViewPrimaryFilter.styled-Er7etcVt.js";import"./Chip-BumaKDUo.js";import"./ButtonBase-BdV3oO8q.js";import"./useMosaicTranslation-DYaYF2Hb.js";import"./FormFieldText.styled-Ds1XZvsQ.js";import"./Button-BBMCWwxG.js";import"./formControlState-ESfXU8N_.js";import"./ButtonRow-BY0Hsyx3.js";import"./Spinner-C3Q2NvqZ.js";import"./Typography-CaRYQLjB.js";import"./SubtitleText-7Wc_VQnd.js";import"./CheckboxList-DWbGDBtu.js";import"./Checkbox-Ss222WpW.js";import"./FormControlLabel-Cz3gWlyw.js";import"./getThemeProps-Dw2gS1Bo.js";import"./TitleWrapper-DHX6T7Lf.js";import"./TitleText-DwGMspTF.js";import"./MoreVert-DYAEDIA7.js";import"./PageHeader-6-4PqPeJ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-JvG0jxKp.js";import"./StyledFormControl.styled-CutdFJBO.js";import"./Toggle-B1w3j-dj.js";import"./formats-sBod7wm8.js";import"./Dialog-COZnJfGx.js";import"./useMediaQuery-CFxK-hux.js";import"./Snackbar-fMG10-ub.js";import"./Close-Z8pEHv17.js";import"./ClickAwayListener-6W73t1nN.js";import"./TooltipIcon-Dfxq7uJG.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
