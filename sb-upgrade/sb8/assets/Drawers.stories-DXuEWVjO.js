import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as o}from"./index-CDs2tPxN.js";import{D as x}from"./Drawers-DI88Xnnf.js";import{u as b,F as D}from"./formUtils-CJK8oCl3.js";import{P as C}from"./PageHeader-CF61fenh.js";import"./theme-tUuL1bpb.js";import"./ChevronRight-BWG-u8Bq.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./Button-B_QyrzNG.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const l=o.createContext({});function f({config:t,callbacks:a}){const n=o.useContext(l),s=b(),{state:p,methods:{setFieldValue:r}}=s,i=[{label:"Cancel",onClick:n.removeDrawer,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>a.save(p.data),color:"yellow",variant:"contained",show:!!a.save},{label:"Open new form",onClick:()=>n.addDrawer({config:{type:"form",title:"Sub-Form",fields:[{name:"wut",label:"Wut",type:"text"},{name:"is",label:"Is",type:"text"},{name:"this",label:"This",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:g=>{r({name:"from_parent",value:JSON.stringify(g)}),n.removeDrawer()}}}),color:"teal",variant:"outlined",tooltip:"Clicking opens form in a new drawer"}];return e.jsxs("div",{children:[e.jsx(D,{title:t.title,fields:t.fields,buttons:i,onBack:n.removeDrawer,...s}),e.jsxs("p",{children:["Data:",JSON.stringify(p.data)]})]})}f.__docgenInfo={description:"",methods:[],displayName:"FormExample",props:{config:{required:!0,tsType:{name:"FormConfig"},description:""},callbacks:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"signature",type:"function",raw:"(...args: any) => any",signature:{arguments:[{type:{name:"any"},name:"args",rest:!0}],return:{name:"any"}}}],raw:"Record<string, AnyFunc>"},description:""}}};function w(){const t=o.useContext(l);return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Grid",onBack:t.removeDrawer}),e.jsx("p",{children:"Grid"})]})}w.__docgenInfo={description:"",methods:[],displayName:"Grid"};const v={form:f,grid:w};function y({config:t,callbacks:a}){const n=v[t.type];return e.jsx(n,{config:t,callbacks:a})}y.__docgenInfo={description:"",methods:[],displayName:"Page",props:{config:{required:!0,tsType:{name:"union",raw:"FormConfig | GridConfig",elements:[{name:"FormConfig"},{name:"GridConfig"}]},description:""},callbacks:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"signature",type:"function",raw:"(...args: any) => any",signature:{arguments:[{type:{name:"any"},name:"args",rest:!0}],return:{name:"any"}}}],raw:"Record<string, AnyFunc>"},description:""}}};const ve={title:"Components/Drawers"},m=()=>{const[t,a]=o.useState({content:{},drawers:[]}),n=o.useCallback(r=>{a(i=>({...i,drawers:[...i.drawers,r]}))},[]),s=o.useCallback(()=>{a(r=>({...r,drawers:[...r.drawers.slice(0,-1)]}))},[]),p=o.useMemo(()=>({addDrawer:n,removeDrawer:s}),[n,s]);return e.jsx(l.Provider,{value:p,children:e.jsxs("div",{className:"App",children:[e.jsx("h1",{children:"Drawer Demo"}),e.jsxs("p",{children:["From Form:",JSON.stringify(t.content)]}),e.jsx("button",{onClick:()=>n({config:{type:"form",title:"New Form",fields:[{name:"foo",label:"Foo",type:"text"},{name:"bar",label:"Bar",type:"text"},{name:"baz",label:"Baz",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:r=>{a(i=>({...i,content:r})),s()}}}),children:"Add Form"}),e.jsx(x,{drawers:t.drawers,children:r=>e.jsx(y,{config:r.config,callbacks:r.callbacks??{}})})]})})};m.__docgenInfo={description:"",methods:[],displayName:"Playground"};var c,d,u;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(u=(d=m.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Fe=["Playground"];export{m as Playground,Fe as __namedExportsOrder,ve as default};
