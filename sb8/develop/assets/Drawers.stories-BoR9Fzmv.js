import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{D as x}from"./Drawers-DaPM_889.js";import{u as f,F as b}from"./formUtils-BLgh7j1U.js";import{P as D}from"./PageHeader-Ck68ugi1.js";import"./theme-CtvfJOCv.js";import"./ChevronRight-JG1qL3pJ.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useThemeProps-Ds-LJhvX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./FormFieldText.styled-ThfS-v4H.js";import"./Button-DMdypOK9.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./DataViewFilterMultiselectDropdownContent-BHz2sU_E.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-Bf0hMbCe.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CHRnBGKw.js";import"./TitleWrapper-iXKWJO9P.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./MenuSelect-B7Q44GLs.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-DGV3Cnhk.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-DH51ksEg.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const l=o.createContext({});function v({config:r,callbacks:n}){const a=o.useContext(l),s=f(),{state:m,methods:{setFieldValue:t}}=s,i=[{label:"Cancel",onClick:a.removeDrawer,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>n.save(m.data),color:"yellow",variant:"contained",show:!!n.save},{label:"Open new form",onClick:()=>a.addDrawer({config:{type:"form",title:"Sub-Form",fields:[{name:"wut",label:"Wut",type:"text"},{name:"is",label:"Is",type:"text"},{name:"this",label:"This",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:u=>{t({name:"from_parent",value:JSON.stringify(u)}),a.removeDrawer()}}}),color:"teal",variant:"outlined",tooltip:"Clicking opens form in a new drawer"}];return e.jsxs("div",{children:[e.jsx(b,{title:r.title,fields:r.fields,buttons:i,onBack:a.removeDrawer,...s}),e.jsxs("p",{children:["Data:",JSON.stringify(m.data)]})]})}function y(){const r=o.useContext(l);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Grid",onBack:r.removeDrawer}),e.jsx("p",{children:"Grid"})]})}const C={form:v,grid:y};function F({config:r,callbacks:n}){const a=C[r.type];return e.jsx(a,{config:r,callbacks:n})}const ke={title:"Components/Drawers"},p=()=>{const[r,n]=o.useState({content:{},drawers:[]}),a=o.useCallback(t=>{n(i=>({...i,drawers:[...i.drawers,t]}))},[]),s=o.useCallback(()=>{n(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),m=o.useMemo(()=>({addDrawer:a,removeDrawer:s}),[a,s]);return e.jsx(l.Provider,{value:m,children:e.jsxs("div",{className:"App",children:[e.jsx("h1",{children:"Drawer Demo"}),e.jsxs("p",{children:["From Form:",JSON.stringify(r.content)]}),e.jsx("button",{onClick:()=>a({config:{type:"form",title:"New Form",fields:[{name:"foo",label:"Foo",type:"text"},{name:"bar",label:"Bar",type:"text"},{name:"baz",label:"Baz",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:t=>{n(i=>({...i,content:t})),s()}}}),children:"Add Form"}),e.jsx(x,{drawers:r.drawers,children:t=>e.jsx(F,{config:t.config,callbacks:t.callbacks??{}})})]})})};var c,d,w;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
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
