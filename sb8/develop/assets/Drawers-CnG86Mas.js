import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as a,C as i}from"./index-BcuoibOX.js";import{s,P as p}from"./Drawers.stories-BSchsvhW.js";import"./index-BP8_t0zE.js";import"./iframe-D55INVkb.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./Drawers-cd3jEjDd.js";import"./theme-Cyujm90X.js";import"./ChevronRight-Bc3jAIO-.js";import"./generateUtilityClasses-CplxKB4o.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CA50KEz-.js";import"./useTheme-vMmOGwbU.js";import"./formUtils-1Rp1-n8j.js";import"./FormFieldText.styled-B_lPWMo9.js";import"./Button-Cm1Qf39l.js";import"./ButtonBase-Btj-nnLi.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./index-8Dqtjiso.js";import"./CheckboxList-GaM67kZx.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-CJgaGoMX.js";import"./FormControlLabel-2HxiQW27.js";import"./getThemeProps-CBTZRUO9.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CN3zPhHZ.js";import"./ButtonRow-Dfei1Wea.js";import"./Spinner-fkz2uue8.js";import"./Chip-By8My2oo.js";import"./Typography-BXo9fTd2.js";import"./SubtitleText-BK7UxBzP.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BChaCK1f.js";import"./StyledFormControl.styled-CNZVAVRt.js";import"./Toggle-SryGtWz_.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-B29oKSfy.js";import"./TitleWrapper-BnUyvD-V.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-SU3bZ5Lh.js";import"./MoreVert-CHB9Iy9y.js";import"./PageHeader-B-ax13VL.js";import"./MenuSelect-CGpLowyH.js";import"./formats-CDjt32hU.js";import"./Dialog-bxyBhLRk.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-BrsNz3mT.js";import"./TooltipIcon-rw86KHji.js";import"./Snackbar-Ba6pD4j8.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/src/components/Drawers/DrawersTypes.ts",rel:"nofollow",children:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/src/components/Drawers/DrawersTypes.ts"})}),`
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
