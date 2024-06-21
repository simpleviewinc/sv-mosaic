import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as o}from"./index-CDs2tPxN.js";import{D as x}from"./Drawers-DIJkul8s.js";import{u as f,F as b}from"./formUtils-8tzQoWfa.js";import{P as D}from"./PageHeader-DaN-rjBH.js";import"./theme-tUuL1bpb.js";import"./ChevronRight-BWG-u8Bq.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./Button-jXQJtfPH.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const l=o.createContext({});function v({config:r,callbacks:n}){const a=o.useContext(l),s=f(),{state:m,methods:{setFieldValue:t}}=s,i=[{label:"Cancel",onClick:a.removeDrawer,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>n.save(m.data),color:"yellow",variant:"contained",show:!!n.save},{label:"Open new form",onClick:()=>a.addDrawer({config:{type:"form",title:"Sub-Form",fields:[{name:"wut",label:"Wut",type:"text"},{name:"is",label:"Is",type:"text"},{name:"this",label:"This",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:u=>{t({name:"from_parent",value:JSON.stringify(u)}),a.removeDrawer()}}}),color:"teal",variant:"outlined",tooltip:"Clicking opens form in a new drawer"}];return e.jsxs("div",{children:[e.jsx(b,{title:r.title,fields:r.fields,buttons:i,onBack:a.removeDrawer,...s}),e.jsxs("p",{children:["Data:",JSON.stringify(m.data)]})]})}function y(){const r=o.useContext(l);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Grid",onBack:r.removeDrawer}),e.jsx("p",{children:"Grid"})]})}const C={form:v,grid:y};function F({config:r,callbacks:n}){const a=C[r.type];return e.jsx(a,{config:r,callbacks:n})}const ke={title:"Components/Drawers"},p=()=>{const[r,n]=o.useState({content:{},drawers:[]}),a=o.useCallback(t=>{n(i=>({...i,drawers:[...i.drawers,t]}))},[]),s=o.useCallback(()=>{n(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),m=o.useMemo(()=>({addDrawer:a,removeDrawer:s}),[a,s]);return e.jsx(l.Provider,{value:m,children:e.jsxs("div",{className:"App",children:[e.jsx("h1",{children:"Drawer Demo"}),e.jsxs("p",{children:["From Form:",JSON.stringify(r.content)]}),e.jsx("button",{onClick:()=>a({config:{type:"form",title:"New Form",fields:[{name:"foo",label:"Foo",type:"text"},{name:"bar",label:"Bar",type:"text"},{name:"baz",label:"Baz",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:t=>{n(i=>({...i,content:t})),s()}}}),children:"Add Form"}),e.jsx(x,{drawers:r.drawers,children:t=>e.jsx(F,{config:t.config,callbacks:t.callbacks??{}})})]})})};var c,d,w;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState<AppState>({
    content: {},
    drawers: []
  });
  const addDrawer = useCallback((drawerDef: DrawerDef) => {
    setState(state => ({
      ...state,
      drawers: [...state.drawers, drawerDef]
    }));
  }, []);
  const removeDrawer = useCallback(() => {
    setState(state => ({
      ...state,
      drawers: [...state.drawers.slice(0, -1)]
    }));
  }, []);
  const appContext = useMemo(() => ({
    addDrawer,
    removeDrawer
  }), [addDrawer, removeDrawer]);
  return <AppContext.Provider value={appContext}>
            <div className="App">
                <h1>Drawer Demo</h1>
                <p>
                    From Form:
                    {JSON.stringify(state.content)}
                </p>
                <button onClick={() => addDrawer({
        config: {
          type: "form",
          title: "New Form",
          fields: [{
            name: "foo",
            label: "Foo",
            type: "text"
          }, {
            name: "bar",
            label: "Bar",
            type: "text"
          }, {
            name: "baz",
            label: "Baz",
            type: "text"
          }, {
            name: "from_parent",
            label: "From Parent",
            type: "text"
          }]
        },
        callbacks: {
          save: data => {
            setState(state => ({
              ...state,
              content: data
            }));
            removeDrawer();
          }
        }
      })}>
                    Add Form
                </button>
                <Drawers drawers={state.drawers}>
                    {drawerDef => {
          return <Page config={drawerDef.config} callbacks={drawerDef.callbacks ?? {}} />;
        }}
                </Drawers>
            </div>
        </AppContext.Provider>;
}`,...(w=(d=p.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};const he=["Playground"];export{p as Playground,he as __namedExportsOrder,ke as default};
