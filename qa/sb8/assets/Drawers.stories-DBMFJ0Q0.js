import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{D as x}from"./Drawers-Dz-SJSq_.js";import{u as f,F as b}from"./formUtils-CayaUY58.js";import{P as D}from"./PageHeader-Dv9SgNkb.js";import"./theme-CtvfJOCv.js";import"./ChevronRight-3hnMDb9i.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useThemeProps-Ds-LJhvX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./FormFieldText.styled-DKoDye3Y.js";import"./Button-CDqJWCGq.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./DataViewFilterMultiselectDropdownContent-Dhd-ubYC.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-i3PhXCTq.js";import"./Spinner-D_slr9_p.js";import"./Chip-wSpTF7XV.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-osRV5K3v.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BeNizQJS.js";import"./TitleWrapper-DJn4aB1e.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./MenuSelect-CGQLQZS-.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dtcy1NrH.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-LbExvKVl.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";const l=o.createContext({});function v({config:r,callbacks:n}){const a=o.useContext(l),s=f(),{state:m,methods:{setFieldValue:t}}=s,i=[{label:"Cancel",onClick:a.removeDrawer,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>n.save(m.data),color:"yellow",variant:"contained",show:!!n.save},{label:"Open new form",onClick:()=>a.addDrawer({config:{type:"form",title:"Sub-Form",fields:[{name:"wut",label:"Wut",type:"text"},{name:"is",label:"Is",type:"text"},{name:"this",label:"This",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:u=>{t({name:"from_parent",value:JSON.stringify(u)}),a.removeDrawer()}}}),color:"teal",variant:"outlined",tooltip:"Clicking opens form in a new drawer"}];return e.jsxs("div",{children:[e.jsx(b,{title:r.title,fields:r.fields,buttons:i,onBack:a.removeDrawer,...s}),e.jsxs("p",{children:["Data:",JSON.stringify(m.data)]})]})}function y(){const r=o.useContext(l);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Grid",onBack:r.removeDrawer}),e.jsx("p",{children:"Grid"})]})}const C={form:v,grid:y};function F({config:r,callbacks:n}){const a=C[r.type];return e.jsx(a,{config:r,callbacks:n})}const ke={title:"Components/Drawers"},p=()=>{const[r,n]=o.useState({content:{},drawers:[]}),a=o.useCallback(t=>{n(i=>({...i,drawers:[...i.drawers,t]}))},[]),s=o.useCallback(()=>{n(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),m=o.useMemo(()=>({addDrawer:a,removeDrawer:s}),[a,s]);return e.jsx(l.Provider,{value:m,children:e.jsxs("div",{className:"App",children:[e.jsx("h1",{children:"Drawer Demo"}),e.jsxs("p",{children:["From Form:",JSON.stringify(r.content)]}),e.jsx("button",{onClick:()=>a({config:{type:"form",title:"New Form",fields:[{name:"foo",label:"Foo",type:"text"},{name:"bar",label:"Bar",type:"text"},{name:"baz",label:"Baz",type:"text"},{name:"from_parent",label:"From Parent",type:"text"}]},callbacks:{save:t=>{n(i=>({...i,content:t})),s()}}}),children:"Add Form"}),e.jsx(x,{drawers:r.drawers,children:t=>e.jsx(F,{config:t.config,callbacks:t.callbacks??{}})})]})})};var c,d,w;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
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
