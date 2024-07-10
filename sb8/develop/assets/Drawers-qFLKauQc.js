import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as a,C as i}from"./index-BgZ6N_z9.js";import{s,P as p}from"./Drawers.stories-BoioGDev.js";import"./index-BP8_t0zE.js";import"./iframe-CvCqyLC5.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./Drawers-v4GZTVOy.js";import"./theme-BFHUhhnW.js";import"./ChevronRight-B_Gprqw3.js";import"./useThemeProps-CC0A0wW3.js";import"./Popper-DptWoz9V.js";import"./assertThisInitialized-CO-dlV3K.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-BFtO5Q3M.js";import"./createSvgIcon-D-pnGctT.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./formUtils-BDmDTW9-.js";import"./DataViewFilterDropdown-B4X4i9iN.js";import"./useFormControl-h1XKtQPT.js";import"./Button-BH4-03LC.js";import"./ButtonBase-R8jPeFSW.js";import"./emotion-react.browser.esm-F1m11hi1.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./_baseMap-CD-F1Lik.js";import"./debounce-DCEw8XId.js";import"./isSymbol-C7K7xDG1.js";import"./CheckboxList-BW3qbPww.js";import"./Checkbox-Dcjyc20p.js";import"./FormControlLabel-xKzxkw-X.js";import"./reactTools-D2O6dTsh.js";import"./DataViewPrimaryFilter.styled-CqJQyTfl.js";import"./ButtonRow-CG1gNQ0k.js";import"./Spinner-qhh6Qxwa.js";import"./Chip-CC244fBs.js";import"./Typography-D0sDo15u.js";import"./SubtitleText-B5uTxLpF.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CRToYo89.js";import"./StyledFormControl.styled-6O-ETzJ6.js";import"./Toggle-B_NBlHrs.js";import"./testIds-B75WQI-K.js";import"./index-DS2IKydr.js";import"./TitleWrapper-N6k_cHLp.js";import"./containerQuery-v_lW7Ytt.js";import"./TitleText-BTs7Gt0E.js";import"./MoreVert-D7-p9KfM.js";import"./PageHeader-mb5NuRbn.js";import"./MenuSelect-DV8M_NkV.js";import"./useMediaQuery-DL62vn1N.js";import"./formats-CDjt32hU.js";import"./Dialog-H5GqHGP3.js";import"./SideNav-wnS0nnEp.js";import"./Snackbar-C3sy6vop.js";import"./Close-DTUN_E5S.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:s}),`
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
